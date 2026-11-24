import nodemailer, { type Transporter } from "nodemailer";
import { SITE } from "@/constant/siteData";

export interface OutgoingMail {
  subject: string;
  html: string;
  text: string;
  /** Used when the form collected the visitor's email, so "Reply" goes to them. */
  replyTo?: string;
}

/** Why a send failed, in words that are safe to put in a log (never includes secrets). */
export type MailFailureKind = "config" | "auth" | "connection" | "rejected" | "unknown";

export class MailError extends Error {
  constructor(
    message: string,
    readonly kind: MailFailureKind,
    readonly code?: string,
    readonly responseCode?: number
  ) {
    super(message);
    this.name = "MailError";
  }
}

export interface MailReceipt {
  messageId: string;
  /** Number of recipients the SMTP server accepted. */
  accepted: number;
}

interface MailConfig {
  host: string;
  port: number;
  user: string;
  pass: string;
  from: string;
  to: string;
}

/** Reads the SMTP settings from the environment (see .env.example) and throws a plain message naming
    whatever is missing, so a misconfigured server is easy to diagnose in the logs.
    The lead inbox and the "From" address default to the company address, never to the SMTP login
    (with services like Brevo the login is a system address, not a real mailbox). */
function readConfig(): MailConfig {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, LEAD_TO_EMAIL } = process.env;

  const missing = (["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"] as const).filter(
    (key) => !process.env[key]?.trim()
  );
  if (missing.length > 0) throw new MailError(`Missing email settings: ${missing.join(", ")}`, "config");

  const port = Number(SMTP_PORT);
  if (!Number.isInteger(port) || port <= 0) {
    throw new MailError("SMTP_PORT must be a number such as 587", "config");
  }

  return {
    host: SMTP_HOST!.trim(),
    port,
    user: SMTP_USER!.trim(),
    pass: SMTP_PASS!.trim(),
    from: SMTP_FROM?.trim() || `"Global Colors Website" <${SITE.email}>`,
    to: LEAD_TO_EMAIL?.trim() || SITE.email,
  };
}

let cached: { transporter: Transporter; config: MailConfig } | null = null;

function getTransport() {
  if (cached) return cached;
  const config = readConfig();
  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465, // 465 is SSL from the start; 587 and 2525 upgrade with STARTTLS
    requireTLS: config.port !== 465, // never fall back to sending the login in plain text
    auth: { user: config.user, pass: config.pass },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
  });
  cached = { transporter, config };
  return cached;
}

/** Turns whatever Nodemailer threw into a MailError that says what kind of problem it was. */
function classify(error: unknown): MailError {
  if (error instanceof MailError) return error;
  const e = error as { code?: string; responseCode?: number; response?: string; message?: string };
  const code = e.code;
  const responseCode = e.responseCode;
  // Only the first line of the server's reply: it never contains the login or the key.
  const reply = (e.response ?? e.message ?? "unknown error").toString().split(/\r?\n/)[0].slice(0, 160);

  let kind: MailFailureKind = "unknown";
  if (code === "EAUTH" || responseCode === 535 || responseCode === 534) kind = "auth";
  else if (code === "EENVELOPE" || (responseCode !== undefined && responseCode >= 550 && responseCode < 560))
    kind = "rejected";
  else if (code && ["ECONNECTION", "ETIMEDOUT", "ESOCKET", "ECONNREFUSED", "ECONNRESET", "EDNS", "ETLS"].includes(code))
    kind = "connection";
  return new MailError(reply, kind, code, responseCode);
}

/** Sends one email to the lead inbox. Resolves only when the SMTP server has accepted the message for
    the lead inbox; otherwise throws a MailError. (Accepted by the server is not the same as landed in
    the inbox: check the provider's logs for final delivery.) */
export async function sendMail({ subject, html, text, replyTo }: OutgoingMail): Promise<MailReceipt> {
  const { transporter, config } = getTransport();

  let info;
  try {
    info = await transporter.sendMail({
      from: config.from,
      to: config.to,
      subject,
      html,
      text,
      ...(replyTo ? { replyTo } : {}),
    });
  } catch (error) {
    throw classify(error);
  }

  const accepted = (info.accepted ?? []).map(String);
  const rejected = (info.rejected ?? []).map(String);
  if (rejected.length > 0 || accepted.length === 0) {
    throw new MailError("The mail server did not accept the lead inbox as a recipient", "rejected");
  }
  return { messageId: String(info.messageId ?? ""), accepted: accepted.length };
}

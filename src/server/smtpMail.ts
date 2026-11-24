import nodemailer, { type Transporter } from "nodemailer";
import { SITE } from "@/constant/siteData";
import { readEnv } from "./env";
import { MailError, type MailFailureKind, type MailReceipt, type OutgoingMail } from "./mailTypes";

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
    (with many mail services the login is a system address, not a real mailbox). */
function readConfig(): MailConfig {
  const SMTP_HOST = readEnv("SMTP_HOST");
  const SMTP_PORT = readEnv("SMTP_PORT");
  const SMTP_USER = readEnv("SMTP_USER");
  const SMTP_PASS = readEnv("SMTP_PASS");
  const SMTP_FROM = readEnv("SMTP_FROM");
  const LEAD_TO_EMAIL = readEnv("LEAD_TO_EMAIL");

  const missing = (
    [
      ["SMTP_HOST", SMTP_HOST],
      ["SMTP_PORT", SMTP_PORT],
      ["SMTP_USER", SMTP_USER],
      ["SMTP_PASS", SMTP_PASS],
    ] as const
  )
    .filter(([, value]) => !value)
    .map(([name]) => name);
  if (missing.length > 0) throw new MailError(`Missing email settings: ${missing.join(", ")}`, "config");

  const port = Number(SMTP_PORT);
  if (!Number.isInteger(port) || port <= 0) {
    throw new MailError("SMTP_PORT must be a number such as 587", "config");
  }

  return {
    host: SMTP_HOST!,
    port,
    user: SMTP_USER!,
    pass: SMTP_PASS!,
    from: SMTP_FROM || `"Global Colors Website" <${SITE.email}>`,
    to: LEAD_TO_EMAIL || SITE.email,
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
  if (code === "EAUTH" || responseCode === 535 || responseCode === 534 || responseCode === 525) kind = "auth";
  else if (code === "EENVELOPE" || (responseCode !== undefined && responseCode >= 550 && responseCode < 560))
    kind = "rejected";
  else if (code && ["ECONNECTION", "ETIMEDOUT", "ESOCKET", "ECONNREFUSED", "ECONNRESET", "EDNS", "ETLS"].includes(code))
    kind = "connection";
  return new MailError(reply, kind, code, responseCode);
}

/** Sends one email to the lead inbox over SMTP. Resolves only when the server has accepted the message
    for the lead inbox; otherwise throws a MailError. (Accepted by the server is not the same as landed
    in the inbox: check the provider's logs for final delivery.) */
export async function sendWithSmtp({ subject, html, text, replyTo }: OutgoingMail): Promise<MailReceipt> {
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

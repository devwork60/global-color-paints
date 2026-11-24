import { SITE } from "@/constant/siteData";
import { MailError, type MailFailureKind, type MailReceipt, type OutgoingMail } from "./mailTypes";

const DEFAULT_URL = "https://api.resend.com/emails";
/** Resend's shared test sender. It can only deliver to the address the Resend account was created with. */
const TEST_SENDER = '"Global Colors Website" <onboarding@resend.dev>';

/** True when a Resend API key is set, which switches the site from SMTP to sending over HTTPS. */
export const resendConfigured = () => Boolean(process.env.RESEND_API_KEY?.trim());

const kindForStatus = (status: number, name?: string): MailFailureKind => {
  if (status === 401) return "auth";
  if (status === 403) return name === "validation_error" ? "rejected" : "auth";
  if (status === 400 || status === 422) return "rejected";
  if (status >= 500) return "connection";
  return "unknown";
};

/** Sends one email through the Resend HTTP API (port 443, so no mail-server ports and no IP allow-list
    are involved). Resolves only when Resend has accepted the message; otherwise throws a MailError. */
export async function sendWithResend({ subject, html, text, replyTo }: OutgoingMail): Promise<MailReceipt> {
  const key = process.env.RESEND_API_KEY!.trim();
  const from = process.env.RESEND_FROM?.trim() || TEST_SENDER;
  const to = process.env.LEAD_TO_EMAIL?.trim() || SITE.email;
  const url = process.env.RESEND_API_URL?.trim() || DEFAULT_URL;

  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], subject, html, text, ...(replyTo ? { reply_to: replyTo } : {}) }),
      signal: AbortSignal.timeout(15_000),
      cache: "no-store",
    });
  } catch (error) {
    const e = error as { name?: string; cause?: { code?: string } };
    throw new MailError(
      e.name === "TimeoutError" ? "The email service did not answer in time" : "Could not reach the email service",
      "connection",
      e.cause?.code ?? e.name
    );
  }

  let body: { id?: string; name?: string; message?: string } = {};
  try {
    body = await response.json();
  } catch {
    /* an empty or non-JSON reply is handled below */
  }

  if (!response.ok) {
    const reason = `${body.name ?? "error"}: ${body.message ?? "no details"}`.slice(0, 200);
    throw new MailError(reason, kindForStatus(response.status, body.name), body.name, response.status);
  }
  if (!body.id) throw new MailError("The email service did not confirm the message", "rejected");
  return { messageId: body.id, accepted: 1 };
}

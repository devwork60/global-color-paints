import { resendConfigured, sendWithResend } from "./resendMail";
import { sendWithSmtp } from "./smtpMail";
import type { MailReceipt, OutgoingMail } from "./mailTypes";

export { MailError } from "./mailTypes";
export type { MailFailureKind, MailReceipt, OutgoingMail } from "./mailTypes";

/** Sends one lead email to the sales inbox. If RESEND_API_KEY is set it goes over HTTPS through Resend;
    otherwise it goes through the SMTP account in SMTP_HOST / SMTP_USER / SMTP_PASS. Either way it resolves
    only once the provider has accepted the message, and throws a MailError if it did not. */
export function sendMail(mail: OutgoingMail): Promise<MailReceipt> {
  return resendConfigured() ? sendWithResend(mail) : sendWithSmtp(mail);
}

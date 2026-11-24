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
  /** Number of recipients the mail service accepted. */
  accepted: number;
}

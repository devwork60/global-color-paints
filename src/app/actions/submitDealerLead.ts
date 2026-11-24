"use server";

import { headers } from "next/headers";
import { DEALER_FORM } from "@/constant/landingPage/dealerData";
import { buildDealerLeadEmail } from "@/server/dealerLeadEmail";
import { MailError, sendMail } from "@/server/mail";
import { allowRequest, leadFingerprint, markSent, wasRecentlySent } from "@/server/rateLimit";
import { validateDealerLead, type DealerLeadErrors } from "@/utils/dealerLeadSchema";

export type DealerLeadResult =
  | { ok: true }
  | { ok: false; fieldErrors?: DealerLeadErrors; message?: string };

/** Receives the "Become a Dealer" form, checks it again on the server (a Server Action can be called
    directly, so the browser's checks are never enough), and emails the lead to the sales inbox.
    It only reports success once the SMTP server has accepted the email. */
export async function submitDealerLead(input: unknown): Promise<DealerLeadResult> {
  if (typeof input !== "object" || input === null) {
    return { ok: false, message: DEALER_FORM.sendFailed };
  }
  const raw = input as Record<string, unknown>;

  // Hidden "website" field: people never see it, bots fill it in. Pretend it worked and send nothing.
  if (typeof raw.website === "string" && raw.website.trim() !== "") return { ok: true };

  const checked = validateDealerLead(raw);
  if (!checked.ok) return { ok: false, fieldErrors: checked.fieldErrors };

  const requestHeaders = await headers();
  const ip =
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    requestHeaders.get("x-real-ip") ||
    "unknown";
  if (!allowRequest(`dealer-lead:${ip}`)) return { ok: false, message: DEALER_FORM.tooMany };

  // A short reference ties the log lines of one submission together without writing the visitor's details to the log.
  const ref = globalThis.crypto.randomUUID().slice(0, 8);

  // The same lead sent twice within a minute (double click, retry) is emailed once.
  const { name, phone, city, type } = checked.data;
  const fingerprint = leadFingerprint(name, phone, city, type);
  if (wasRecentlySent(fingerprint)) {
    console.info(`[dealer-lead] ref=${ref} duplicate within 60s, not sent again`);
    return { ok: true };
  }

  const referer = requestHeaders.get("referer");
  let source: string | undefined;
  try {
    source = referer ? new URL(referer).host : undefined;
  } catch {
    source = undefined;
  }

  try {
    const email = buildDealerLeadEmail({ lead: checked.data, receivedAt: new Date(), source });
    const receipt = await sendMail(email);
    markSent(fingerprint);
    console.info(`[dealer-lead] ref=${ref} sent, accepted by the mail provider messageId=${receipt.messageId}`);
    return { ok: true };
  } catch (error) {
    // The visitor sees a calm message and the phone number; the log says exactly what went wrong.
    if (error instanceof MailError) {
      console.error(
        `[dealer-lead] ref=${ref} NOT sent kind=${error.kind}` +
          `${error.code ? ` code=${error.code}` : ""}` +
          `${error.responseCode ? ` smtp=${error.responseCode}` : ""} reason="${error.message}"`
      );
    } else {
      console.error(`[dealer-lead] ref=${ref} NOT sent kind=unknown reason="${error instanceof Error ? error.message : "unknown"}"`);
    }
    return { ok: false, message: DEALER_FORM.sendFailed };
  }
}

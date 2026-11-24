import { SITE } from "@/constant/siteData";
import type { DealerLead } from "@/utils/dealerLeadSchema";

/** Brand colours, repeated here as plain hex because email clients ignore CSS variables. */
const C = {
  charcoal: "#262322",
  hs: "#b5432a",
  wa: "#1f8f4e",
  paper: "#fbfaf7",
  white: "#ffffff",
  line: "#e6e1d8",
  grey: "#6b645c",
  gold: "#e0a526",
};
const RAINBOW = ["#E5352B", "#F28C28", "#F7D038", "#6CBF4B", "#1FA7E0", "#1B5FC1"];
const FONT = "-apple-system,'Segoe UI',Helvetica,Arial,sans-serif";

export interface DealerLeadEmailInput {
  lead: DealerLead;
  receivedAt: Date;
  /** The page the form was sent from, when the browser reported it. */
  source?: string;
}

export interface BuiltEmail {
  subject: string;
  html: string;
  text: string;
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

/** Strips anything that could break a header line (the subject goes into an email header). */
const oneLine = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

/** Turns a Pakistani number as typed (0300 1234567, +92 300 1234567, 0092…) into digits with the country code. */
export const toInternationalDigits = (phone: string): string => {
  const digits = phone.replace(/[^\d+]/g, "");
  if (digits.startsWith("+92")) return digits.slice(1);
  if (digits.startsWith("0092")) return digits.slice(2);
  if (digits.startsWith("92") && digits.length >= 11) return digits;
  if (digits.startsWith("0")) return `92${digits.slice(1)}`;
  return `92${digits}`;
};

const formatReceived = (date: Date) =>
  `${new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Asia/Karachi",
  }).format(date)} (PKT)`;

const row = (label: string, value: string, last = false) => `
              <tr>
                <td style="padding:14px 0;${last ? "" : `border-bottom:1px solid ${C.line};`}font-family:${FONT};font-size:13px;color:${C.grey};width:130px;vertical-align:top;">${label}</td>
                <td style="padding:14px 0;${last ? "" : `border-bottom:1px solid ${C.line};`}font-family:${FONT};font-size:16px;font-weight:600;color:${C.charcoal};vertical-align:top;">${value}</td>
              </tr>`;

const button = (href: string, label: string, color: string) =>
  `<a href="${href}" style="display:inline-block;background:${color};color:${C.white};font-family:${FONT};font-size:15px;font-weight:700;text-decoration:none;padding:14px 26px;border-radius:999px;">${label}</a>`;

/** Builds the lead email sent to the sales team: a branded HTML version and a plain-text fallback. */
export function buildDealerLeadEmail({ lead, receivedAt, source }: DealerLeadEmailInput): BuiltEmail {
  const name = escapeHtml(lead.name);
  const phone = escapeHtml(lead.phone);
  const city = escapeHtml(lead.city);
  const type = escapeHtml(lead.type);
  const received = escapeHtml(formatReceived(receivedAt));
  const digits = toInternationalDigits(lead.phone);
  const telHref = `tel:+${digits}`;
  const waHref = `https://wa.me/${digits}?text=${encodeURIComponent(
    `Hello ${lead.name}, this is Global Colors Company. Thank you for your dealer enquiry.`
  )}`;

  const subject = `New Website Lead - ${oneLine(lead.name)}`;
  const preheader = `${lead.name} from ${lead.city} wants to become a ${lead.type.toLowerCase()}. Call ${lead.phone}.`;

  const stripe = RAINBOW.map(
    (colour) => `<td style="height:6px;line-height:6px;font-size:0;background:${colour};">&nbsp;</td>`
  ).join("");

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="light">
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:0;background:${C.paper};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.paper};">
    <tr>
      <td align="center" style="padding:28px 12px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:${C.white};border:1px solid ${C.line};border-radius:20px;overflow:hidden;">
          <tr><td>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>${stripe}</tr></table>
          </td></tr>
          <tr>
            <td style="background:${C.charcoal};padding:26px 32px;">
              <div style="font-family:${FONT};font-size:20px;font-weight:700;color:${C.white};letter-spacing:-0.01em;">${escapeHtml(SITE.name)}</div>
              <div style="font-family:${FONT};font-size:12px;color:#cfc8bd;margin-top:4px;">Website lead &middot; Become a Dealer</div>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 32px 8px;">
              <div style="font-family:${FONT};font-size:13px;font-weight:700;color:${C.hs};text-transform:uppercase;letter-spacing:0.08em;">New dealer enquiry</div>
              <div style="font-family:${FONT};font-size:28px;line-height:1.2;font-weight:700;color:${C.charcoal};margin-top:8px;letter-spacing:-0.02em;">${name}</div>
              <div style="font-family:${FONT};font-size:15px;line-height:1.5;color:${C.grey};margin-top:6px;">is interested in becoming a ${type.toLowerCase()} in ${city}.</div>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 32px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${row("Business name", name)}${row(
                "Phone",
                `<a href="${telHref}" style="color:${C.hs};text-decoration:none;">${phone}</a>`
              )}${row("City", city)}${row("Business type", type)}${row("Received", `<span style="font-weight:500;">${received}</span>`, true)}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 8px;">
              <table role="presentation" cellpadding="0" cellspacing="0"><tr>
                <td style="padding-right:12px;">${button(telHref, "Call now", C.hs)}</td>
                <td>${button(waHref, "WhatsApp", C.wa)}</td>
              </tr></table>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 32px;">
              <div style="font-family:${FONT};font-size:14px;line-height:1.6;color:${C.grey};background:${C.paper};border-left:4px solid ${C.gold};border-radius:8px;padding:14px 16px;">
                The visitor was told <strong style="color:${C.charcoal};">our team will call them on this number</strong>. Please follow up as soon as you can.
              </div>
            </td>
          </tr>
          <tr>
            <td style="background:${C.paper};border-top:1px solid ${C.line};padding:18px 32px;font-family:${FONT};font-size:12px;line-height:1.6;color:${C.grey};">
              Sent automatically from the Become a Dealer form${source ? ` on ${escapeHtml(source)}` : ""}.<br>
              ${escapeHtml(SITE.name)} &middot; ${escapeHtml(SITE.phone)} &middot; ${escapeHtml(SITE.email)}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = [
    `NEW DEALER ENQUIRY`,
    ``,
    `Business name : ${lead.name}`,
    `Phone         : ${lead.phone}`,
    `City          : ${lead.city}`,
    `Business type : ${lead.type}`,
    `Received      : ${formatReceived(receivedAt)}`,
    ``,
    `Call     : +${digits}`,
    `WhatsApp : https://wa.me/${digits}`,
    ``,
    `The visitor was told our team will call them on this number.`,
    ``,
    `-- Sent automatically from the Become a Dealer form${source ? ` on ${source}` : ""}.`,
  ].join("\n");

  return { subject, html, text };
}

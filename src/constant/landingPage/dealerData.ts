export const DEALER_INTRO = {
  eyebrow: "For dealers and distributors",
  title: "Stock all five brands in your shop.",
  lead: "Join our dealer network. Send a short enquiry and our team will call you back.",
};

export const DEALER_STEPS = [
  { number: "01", title: "Send your enquiry", note: "Takes under a minute" },
  { number: "02", title: "We call you", note: "Our sales team gets in touch" },
  { number: "03", title: "Start stocking", note: "Five brands, all three pack sizes" },
];

export const DEALER_FORM = {
  title: "Become a Dealer",
  hint: "Fields marked * are required.",
  submit: "Send Enquiry",
  whatsappLabel: "Message us on WhatsApp",
  /** Pre-filled first message when the WhatsApp chat opens. */
  whatsappMessage: "Hello Global Colors, I would like to become a dealer.",
  successTitle: "Enquiry received",
  successText: "Thank you. Our team will call you on the number you gave us.",
  again: "Send another",
  businessTypes: ["Dealer", "Distributor", "Retailer", "Contractor", "Project", "Corporate"] as const,
  /** Shown under the form if the email could not be sent, or when sending too often. */
  sendFailed: "We could not send your enquiry just now. Please call us on 0327-5001444 or try again in a minute.",
  tooMany: "You have sent a few enquiries already. Please wait a few minutes, or call us on 0327-5001444.",
};

export const DEALER_ERRORS = {
  name: "Enter your business name.",
  phone: "Enter a Pakistani number, like 0300 1234567.",
  city: "Enter your city.",
  nameTooLong: "Business name is too long (120 characters at most).",
  cityTooLong: "City name is too long (80 characters at most).",
  type: "Choose a business type.",
};

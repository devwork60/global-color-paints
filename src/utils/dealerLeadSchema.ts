import { z } from "zod";
import { DEALER_ERRORS, DEALER_FORM } from "@/constant/landingPage/dealerData";

export type DealerLeadField = "name" | "phone" | "city" | "type";
export type DealerLeadErrors = Partial<Record<DealerLeadField, string>>;

/** Accepts mobiles (03xx xxxxxxx, +92 3xx…) and landlines with an area code, ignoring spaces and dashes. */
export const isPakistaniPhone = (value: string) => {
  const phone = value.replace(/[\s-]/g, "");
  return /^(\+92|0092|0)?3\d{9}$/.test(phone) || /^(\+92|0)\d{9,10}$/.test(phone);
};

/** The one description of a dealer lead. The browser form and the server action both use it,
    so a lead can never be sent that the form itself would have refused. */
export const dealerLeadSchema = z.object({
  name: z
    .string({ error: DEALER_ERRORS.name })
    .trim()
    .min(1, DEALER_ERRORS.name)
    .max(120, DEALER_ERRORS.nameTooLong),
  phone: z
    .string({ error: DEALER_ERRORS.phone })
    .trim()
    .refine(isPakistaniPhone, DEALER_ERRORS.phone),
  city: z
    .string({ error: DEALER_ERRORS.city })
    .trim()
    .min(1, DEALER_ERRORS.city)
    .max(80, DEALER_ERRORS.cityTooLong),
  type: z.enum(DEALER_FORM.businessTypes, { error: DEALER_ERRORS.type }),
});

export type DealerLead = z.infer<typeof dealerLeadSchema>;

export type DealerLeadValidation =
  | { ok: true; data: DealerLead }
  | { ok: false; fieldErrors: DealerLeadErrors };

/** Validates raw form values and returns the first message for each field that failed. */
export const validateDealerLead = (values: unknown): DealerLeadValidation => {
  const result = dealerLeadSchema.safeParse(values);
  if (result.success) return { ok: true, data: result.data };

  const fieldErrors: DealerLeadErrors = {};
  for (const issue of result.error.issues) {
    const field = issue.path[0] as DealerLeadField | undefined;
    if (field && !fieldErrors[field]) fieldErrors[field] = issue.message;
  }
  return { ok: false, fieldErrors };
};

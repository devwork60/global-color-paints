import { DEALER_ERRORS } from "@/constant/landingPage/dealerData";

export type DealerField = "name" | "phone" | "city";
export type DealerErrors = Partial<Record<DealerField, string>>;

/** Accepts mobiles (03xx xxxxxxx, +92 3xx…) and landlines with an area code, ignoring spaces and dashes. */
export const isPakistaniPhone = (value: string) => {
  const phone = value.replace(/[\s-]/g, "");
  return /^(\+92|0092|0)?3\d{9}$/.test(phone) || /^(\+92|0)\d{9,10}$/.test(phone);
};

export const validateDealer = (values: Record<DealerField, string>): DealerErrors => {
  const errors: DealerErrors = {};
  if (!values.name.trim()) errors.name = DEALER_ERRORS.name;
  if (!isPakistaniPhone(values.phone)) errors.phone = DEALER_ERRORS.phone;
  if (!values.city.trim()) errors.city = DEALER_ERRORS.city;
  return errors;
};

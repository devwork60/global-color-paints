"use client";

import { useState, type FormEvent } from "react";
import { MessageCircleMore, Send } from "lucide-react";
import { DEALER_FORM } from "@/constant/landingPage/dealerData";
import { validateDealer, type DealerErrors, type DealerField } from "@/utils/dealerValidation";
import Button from "@/components/button/Button";
import InputField from "@/components/inputField/InputField";
import SelectField from "@/components/inputField/SelectField";
import CardHeading from "@/components/typography/CardHeading";
import DealerSuccess from "./DealerSuccess";

const TYPE_OPTIONS = DEALER_FORM.businessTypes.map((t) => ({ label: t, value: t }));
const ORDER: DealerField[] = ["name", "phone", "city"];

/** Dealer enquiry form. Validates on the client only (no backend yet) and then shows a confirmation. */
const DealerForm = () => {
  const [errors, setErrors] = useState<DealerErrors>({});
  const [sent, setSent] = useState(false);

  const clear = (field: DealerField) =>
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next = validateDealer({
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      city: String(data.get("city") ?? ""),
    });
    setErrors(next);
    const first = ORDER.find((f) => next[f]);
    if (first) {
      (form.elements.namedItem(first) as HTMLInputElement | null)?.focus();
      return;
    }
    setSent(true);
  };

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="flex flex-col gap-3.5 self-start rounded-3xl bg-white p-[clamp(22px,3vw,32px)] text-charcoal"
    >
      {sent ? (
        <DealerSuccess
          onReset={() => {
            setErrors({});
            setSent(false);
          }}
        />
      ) : (
        <>
          <CardHeading size="form">{DEALER_FORM.title}</CardHeading>
          <p className="-mt-1.5 font-body text-[14.5px] text-stone-grey">{DEALER_FORM.hint}</p>
          <div className="mt-[18px] grid gap-3.5">
            <InputField
              label="Business name"
              name="name"
              required
              autoComplete="organization"
              placeholder="Al-Noor Paint House"
              error={errors.name}
              onChange={() => clear("name")}
            />
            <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
              <InputField
                label="Phone"
                name="phone"
                type="tel"
                inputMode="tel"
                required
                autoComplete="tel"
                placeholder="0300 1234567"
                error={errors.phone}
                onChange={() => clear("phone")}
              />
              <InputField
                label="City"
                name="city"
                required
                autoComplete="address-level2"
                placeholder="Lahore"
                error={errors.city}
                onChange={() => clear("city")}
              />
            </div>
            <SelectField label="Business type" name="type" options={TYPE_OPTIONS} />
            <Button type="submit" icon={<Send aria-hidden="true" />} className="mt-1 w-full justify-center">
              {DEALER_FORM.submit}
            </Button>
            <span className="flex items-center gap-2.5 font-body text-[13px] text-stone-grey before:h-px before:flex-1 before:bg-line before:content-[''] after:h-px after:flex-1 after:bg-line after:content-['']">
              or
            </span>
            <a
              href={DEALER_FORM.whatsappHref}
              className="flex items-center justify-center gap-2 font-body text-[15px] font-bold text-wa no-underline [&>svg]:size-[18px]"
            >
              <MessageCircleMore aria-hidden="true" />
              {DEALER_FORM.whatsappLabel}
            </a>
          </div>
        </>
      )}
    </form>
  );
};

export default DealerForm;

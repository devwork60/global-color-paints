"use client";

import { useState, useTransition, type FormEvent } from "react";
import { LoaderCircle, MessageCircleMore, Send } from "lucide-react";
import { submitDealerLead } from "@/app/actions/submitDealerLead";
import { DEALER_FORM } from "@/constant/landingPage/dealerData";
import { whatsappUrl } from "@/constant/siteData";
import {
  validateDealerLead,
  type DealerLeadErrors,
  type DealerLeadField,
} from "@/utils/dealerLeadSchema";
import Button from "@/components/button/Button";
import InputField from "@/components/inputField/InputField";
import SelectField from "@/components/inputField/SelectField";
import CardHeading from "@/components/typography/CardHeading";
import DealerSuccess from "./DealerSuccess";

const TYPE_OPTIONS = DEALER_FORM.businessTypes.map((t) => ({ label: t, value: t }));
const ORDER: DealerLeadField[] = ["name", "phone", "city", "type"];

/** Dealer enquiry form. Checks the fields with Zod in the browser, then sends them to a Server Action,
    which checks them again and emails the lead to the sales team. */
const DealerForm = () => {
  const [errors, setErrors] = useState<DealerLeadErrors>({});
  const [formError, setFormError] = useState("");
  const [sent, setSent] = useState(false);
  const [pending, startTransition] = useTransition();

  const clear = (field: DealerLeadField) =>
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));

  const showErrors = (form: HTMLFormElement, next: DealerLeadErrors) => {
    setErrors(next);
    const first = ORDER.find((f) => next[f]);
    if (first) (form.elements.namedItem(first) as HTMLElement | null)?.focus();
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pending) return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setFormError("");

    const checked = validateDealerLead(data);
    if (!checked.ok) {
      showErrors(form, checked.fieldErrors);
      return;
    }
    setErrors({});

    startTransition(async () => {
      try {
        const result = await submitDealerLead(data);
        if (result.ok) {
          setSent(true);
        } else if (result.fieldErrors) {
          showErrors(form, result.fieldErrors);
        } else {
          setFormError(result.message ?? DEALER_FORM.sendFailed);
        }
      } catch {
        setFormError(DEALER_FORM.sendFailed);
      }
    });
  };

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      aria-busy={pending}
      className="flex flex-col gap-3.5 self-start rounded-3xl bg-white p-[clamp(22px,3vw,32px)] text-charcoal"
    >
      {sent ? (
        <DealerSuccess
          onReset={() => {
            setErrors({});
            setFormError("");
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
            <SelectField
              label="Business type"
              name="type"
              options={TYPE_OPTIONS}
              error={errors.type}
              onChange={() => clear("type")}
            />

            {/* Bot trap: invisible to people and skipped by keyboard and screen readers. Bots fill it in. */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label>
                Website
                <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
              </label>
            </div>

            {formError && (
              <p
                role="alert"
                className="rounded-xl border border-hs/30 bg-hs-tint px-3.5 py-3 font-body text-sm leading-[1.5] text-hs"
              >
                {formError}
              </p>
            )}

            <Button
              type="submit"
              disabled={pending}
              icon={
                pending ? (
                  <LoaderCircle aria-hidden="true" className="animate-spin" />
                ) : (
                  <Send aria-hidden="true" />
                )
              }
              className="mt-1 w-full justify-center disabled:cursor-wait disabled:opacity-70"
            >
              {pending ? "Sending…" : DEALER_FORM.submit}
            </Button>
            <span className="flex items-center gap-2.5 font-body text-[13px] text-stone-grey before:h-px before:flex-1 before:bg-line before:content-[''] after:h-px after:flex-1 after:bg-line after:content-['']">
              or
            </span>
            <a
              href={whatsappUrl(DEALER_FORM.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
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

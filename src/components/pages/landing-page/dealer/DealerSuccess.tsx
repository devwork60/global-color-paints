import { Check } from "lucide-react";
import { DEALER_FORM } from "@/constant/landingPage/dealerData";
import Button from "@/components/button/Button";
import CardHeading from "@/components/typography/CardHeading";

/** Shown in place of the form after a valid submit. */
const DealerSuccess = ({ onReset }: { onReset: () => void }) => (
  <div role="status" className="grid justify-items-center gap-3 px-2 py-[30px] text-center">
    <span className="grid size-16 place-items-center rounded-full bg-bw-tint text-bw">
      <Check aria-hidden="true" className="size-[30px]" />
    </span>
    <CardHeading size="form">{DEALER_FORM.successTitle}</CardHeading>
    <p className="max-w-[30ch] font-body text-[15px] text-stone-grey">{DEALER_FORM.successText}</p>
    <Button variant="ghost" onClick={onReset}>
      {DEALER_FORM.again}
    </Button>
  </div>
);

export default DealerSuccess;

import clsx from "clsx";
import Eyebrow from "@/components/typography/Eyebrow";
import MainHeading from "@/components/typography/MainHeading";
import Paragraph from "@/components/typography/Paragraph";

interface SectionHeadProps {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "brand" | "gold" | "light";
  /** Slightly smaller gap below the head, and a narrower description column. */
  compact?: boolean;
  className?: string;
}

/** Eyebrow + h2 on the left, short description on the right. */
const SectionHead: React.FC<SectionHeadProps> = ({
  eyebrow,
  title,
  description,
  tone,
  compact = false,
  className,
}) => (
  <div
    className={clsx(
      "flex flex-wrap items-end justify-between gap-x-10 gap-y-5",
      compact ? "mb-[clamp(32px,4vw,52px)]" : "mb-[clamp(36px,4.5vw,60px)]",
      className
    )}
  >
    <div>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <MainHeading className="mt-4 max-w-[15ch]">{title}</MainHeading>
    </div>
    {description && (
      <Paragraph className={compact ? "max-w-[34ch]" : "max-w-[40ch]"}>
        {description}
      </Paragraph>
    )}
  </div>
);

export default SectionHead;

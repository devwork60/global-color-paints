import Link from "next/link";
import clsx from "clsx";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

export type ButtonVariant =
  | "dark"
  | "ghost"
  | "light"
  | "line-light"
  | "glass"
  | "gold";
export type ButtonSize = "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
}

type AnchorProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };
type NativeProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  };

export type ButtonProps = AnchorProps | NativeProps;

const variants: Record<ButtonVariant, string> = {
  dark: "border-transparent bg-charcoal text-white hover:bg-ink-2",
  ghost:
    "border-charcoal bg-transparent text-charcoal hover:bg-charcoal hover:text-white",
  light: "border-transparent bg-white text-charcoal",
  "line-light":
    "border-white/45 bg-transparent text-white hover:bg-white hover:text-charcoal",
  /** Frosted outline button for use over photos. */
  glass:
    "border-white/85 bg-white/[.06] text-white backdrop-blur-[6px] hover:bg-white hover:text-charcoal",
  gold: "border-transparent bg-bw-2 text-charcoal",
};

const sizes: Record<ButtonSize, string> = {
  md: "min-h-[50px] px-6 text-[15.5px]",
  lg: "min-h-14 px-[30px] text-base",
};

const isExternal = (href: string) => /^(https?:|tel:|mailto:)/.test(href);

/** The one shared button. Renders a link when `href` is set, else a <button>. */
const Button = (props: ButtonProps) => {
  const { variant = "dark", size = "md", icon, className, children } = props;
  const classes = clsx(
    "group inline-flex cursor-pointer items-center gap-2.5 rounded-full border-[1.5px] font-body leading-none font-semibold whitespace-nowrap no-underline",
    "transition duration-200 hover:-translate-y-0.5",
    variants[variant],
    sizes[size],
    className
  );
  const content = (
    <>
      {children}
      {icon && (
        <span className="inline-flex [&>svg]:size-[18px] [&>svg]:transition-transform [&>svg]:duration-300 group-hover:[&>svg]:translate-x-[3px]">
          {icon}
        </span>
      )}
    </>
  );

  if (props.href !== undefined) {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const { href, variant: _v, size: _s, icon: _i, className: _c, children: _ch, ...rest } = props;
    /* eslint-enable @typescript-eslint/no-unused-vars */
    return isExternal(href) ? (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    ) : (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const { variant: _v, size: _s, icon: _i, className: _c, children: _ch, type = "button", ...rest } = props;
  /* eslint-enable @typescript-eslint/no-unused-vars */
  return (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  );
};

export default Button;

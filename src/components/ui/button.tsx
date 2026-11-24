import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

/* One filled button, one quiet button. Ghost/outline stay as aliases so
   existing call sites keep working without a second visual language. */
const base = "btn";

const variants: Record<Variant, string> = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  ghost: "btn--secondary",
  outline: "btn--secondary",
};

const sizes: Record<Size, string> = {
  sm: "btn--sm",
  md: "btn--md",
  lg: "btn--lg",
};

type ButtonOwnProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: ReactNode;
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function buttonClasses(
  { variant = "primary", size = "md", className = "" }: ButtonOwnProps,
  extra = "",
) {
  return `${base} ${variants[variant]} ${sizes[size]} ${className} ${extra}`.trim();
}

export function Button({
  variant,
  size,
  className,
  children,
  ...props
}: CommonProps & ComponentProps<"button">) {
  return (
    <button className={buttonClasses({ variant, size, className })} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
  ...props
}: CommonProps & ComponentProps<typeof Link> & { href: string }) {
  return (
    <Link className={buttonClasses({ variant, size, className })} href={href} {...props}>
      {children}
    </Link>
  );
}

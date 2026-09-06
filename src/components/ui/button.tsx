import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-teal-600 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-teal-600 text-white shadow-[0_4px_0_#0f766e] hover:bg-teal-500 hover:shadow-[0_6px_0_#0f766e] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_2px_0_#0f766e]",
  secondary:
    "bg-foreground text-background hover:opacity-85",
  ghost: "text-foreground hover:bg-foreground/5",
  outline:
    "border border-foreground/15 text-foreground hover:border-teal-600 hover:text-teal-700 dark:hover:text-teal-400",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
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
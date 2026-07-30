import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2";

const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-zinc-950 text-white hover:bg-black",
  ghost: "border border-zinc-300 bg-white text-zinc-950 hover:bg-zinc-100",
};

type ButtonProps = {
  variant?: keyof typeof variants;
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
} & Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "href"> &
  Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "href">;

export function Button({
  variant = "primary",
  href,
  target,
  rel,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${baseStyles} ${variants[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}

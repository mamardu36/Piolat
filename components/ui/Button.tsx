import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "inverse";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-5 text-[0.9375rem] font-semibold transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60";
const variants: Record<Variant, string> = {
  primary: "bg-blue text-white hover:bg-blue-dark",
  secondary: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-white",
  inverse: "bg-white text-ink hover:bg-sky",
};

export const buttonClass = (variant: Variant = "primary", className?: string) =>
  cn(base, variants[variant], className);

type LinkProps = { href: string; variant?: Variant; className?: string; children: React.ReactNode };

export function ButtonLink({ href, variant = "primary", className, children }: LinkProps) {
  const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  if (external) {
    return (
      <a href={href} className={buttonClass(variant, className)} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={buttonClass(variant, className)}>
      {children}
    </Link>
  );
}

import { forwardRef } from "react";

type Variant = "primary" | "onDark" | "outline";

interface PillButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: Variant;
  as?: "a" | "button";
}

const base =
  "group inline-flex items-center gap-2 rounded-full pl-6 sm:pl-8 pr-2 py-2 font-body text-[15px] sm:text-base font-light tracking-wide transition-all duration-500 hover:pl-8 sm:hover:pl-10 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-grano focus-visible:ring-offset-2 focus-visible:ring-offset-pergamena";

const variants: Record<Variant, string> = {
  primary:
    "bg-bordeaux text-pergamena shadow-[0_10px_30px_-10px_oklch(0.28_0.09_25/0.5)] hover:bg-[oklch(0.32_0.1_25)]",
  onDark:
    "bg-pergamena text-bordeaux shadow-[0_10px_30px_-10px_oklch(0.15_0.05_25/0.6)] hover:bg-[oklch(0.96_0.03_82)]",
  outline:
    "bg-transparent text-pergamena ring-1 ring-pergamena/50 hover:ring-grano hover:text-grano",
};

const circle = (variant: Variant) =>
  variant === "primary"
    ? "bg-pergamena text-bordeaux"
    : variant === "onDark"
      ? "bg-bordeaux text-pergamena"
      : "bg-pergamena/20 text-pergamena group-hover:bg-grano group-hover:text-bordeaux";

export const PillButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  PillButtonProps
>(function PillButton(
  { children, variant = "primary", href, className = "", as, ...rest },
  ref,
) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const inner = (
    <>
      <span className="py-2.5 sm:py-3">{children}</span>
      <span
        className={`flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full transition-transform duration-500 group-hover:translate-x-1 ${circle(variant)}`}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </span>
    </>
  );

  if (href || as === "a") {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={cls}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {inner}
      </a>
    );
  }
  return (
    <button ref={ref as React.Ref<HTMLButtonElement>} className={cls} {...rest}>
      {inner}
    </button>
  );
});

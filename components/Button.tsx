import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[transform,background-color,color] duration-150 ease-out select-none active:scale-[0.97] [&_svg]:size-[1.15em]";
const variants = {
  default: "bg-rose text-white hover:bg-rose-dark",
  tonal: "bg-rose-soft text-rose-dark hover:bg-[#f9dbe3]",
  white: "bg-white text-ink hover:bg-rose-soft",
  ghost: "text-ink hover:bg-surface-2",
};
const sizes = { md: "h-11 px-5 text-[0.9375rem]", lg: "h-14 px-8 text-[1.0625rem]" };

export function Button({ href, variant = "default", size = "lg", className = "", children }: {
  href: string; variant?: keyof typeof variants; size?: keyof typeof sizes; className?: string; children: ReactNode;
}) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  return /^https?:|^tel:/.test(href)
    ? <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>{children}</a>
    : <Link href={href} className={cls}>{children}</Link>;
}

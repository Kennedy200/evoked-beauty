"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { site } from "@/lib/site";

const links = [
  { href: "#services", label: "Services" },
  { href: "#approach", label: "How we work" },
  { href: "#studio", label: "The studio" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-200 ${scrolled ? "shadow-[0_1px_0_0_var(--line)]" : ""}`}>
      <div className="page flex h-[var(--nav-height)] items-center justify-between gap-6">
        <Link href="/" aria-label="Evoked Beauty, home" className="flex min-h-11 min-w-0 items-center transition-transform duration-150 active:scale-[0.97]">
          <Logo />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="rounded-full px-4 py-2 text-[0.9375rem] font-medium transition-colors duration-200 hover:bg-surface-2">{l.label}</a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-1">
          <Button href={site.instagram} variant="ghost" size="md" className="hidden xl:inline-flex"><Phone />{site.handle}</Button>
          <Button href={site.instagram} size="md" className="hidden lg:inline-flex">Book now</Button>
          <button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full hover:bg-surface-2 lg:hidden">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}
            className="page grid gap-1 border-t border-line bg-white pb-6 pt-3 lg:hidden" aria-label="Mobile">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-[1.75rem] font-medium tracking-[-0.03em]">{l.label}</a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

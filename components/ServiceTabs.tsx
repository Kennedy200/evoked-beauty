"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "@/lib/site";
import { Photo } from "./Photo";
import { Button } from "./Button";
import { site } from "@/lib/site";

export function ServiceTabs() {
  const [i, setI] = useState(0);
  const s = services[i];
  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Choose a service">
        {services.map((x, n) => (
          <button key={x.id} type="button" aria-pressed={n === i} onClick={() => setI(n)}
            className={`relative min-h-11 cursor-pointer rounded-full px-5 py-2 text-[0.9375rem] font-medium transition-[transform,color,background-color] duration-150 ease-out active:scale-[0.97] ${n === i ? "bg-rose text-white" : "bg-surface-2 hover:bg-rose-soft"}`}>
            {x.label}
          </button>
        ))}
      </div>
      <div className="mt-8 grid items-center gap-[clamp(1.5rem,4vw,4rem)] md:grid-cols-12">
        <div className="card relative aspect-[4/3] bg-surface-2 md:order-2 md:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div key={s.id} className="absolute inset-0" initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <Photo k={s.image} alt={s.title} sizes="(min-width: 768px) 58vw, 100vw" />
            </motion.div>
          </AnimatePresence>
        </div>
        <div aria-live="polite" className="md:col-span-5">
          <p className="font-medium text-rose-dark">{s.kicker}</p>
          <h3 className="text-h2 mt-2">{s.title}</h3>
          <p className="text-lead mt-4">{s.body}</p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Button href={site.instagram}>Book via DM</Button>
            <a href="#contact" className="inline-flex min-h-11 items-center font-medium text-rose-dark underline underline-offset-4">Get in touch</a>
          </div>
        </div>
      </div>
    </div>
  );
}

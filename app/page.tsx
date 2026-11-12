import { Phone } from "lucide-react";
import { Photo } from "@/components/Photo";
import { Button } from "@/components/Button";
import { ServiceTabs } from "@/components/ServiceTabs";
import { site } from "@/lib/site";

const approach = [
  ["Mapped to you.", "Every set starts with your eye shape, your lifestyle and the look you actually want.", "lg:col-start-1"],
  ["Gentle and careful.", "Qualified, insured and patient. Lash health always comes before the look.", "lg:col-start-3"],
  ["Made to last.", "Aftercare you can follow and infills that keep your set looking fresh.", "lg:col-start-5"],
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="page pt-[calc(var(--nav-height)+clamp(2rem,5vw,4.5rem))] pb-[clamp(2.5rem,5vw,4rem)]">
        <h1 className="rise text-[min(10.4vw,10rem)] leading-[1.02] font-medium tracking-[-0.045em]">
          Every lash
          <br />
          <span
            aria-hidden
            className="shutter relative mr-[0.18em] inline-block h-[0.74em] w-[1.5em] overflow-hidden rounded-full bg-surface-2 align-[-0.04em]"
          >
            <Photo k="hero" sizes="(min-width: 1024px) 15vw, 30vw" priority />
          </span>
          starts soft.
        </h1>
        <div className="mt-[clamp(1.5rem,3vw,2.5rem)] flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
          <p className="rise text-lead max-w-[44ch] [--rise-delay:80ms]">
            Lashes, brows and beauty in {site.city}. Qualified, insured, and unhurried, so you leave
            looking like the best version of yourself.
          </p>
          <div className="rise flex flex-wrap gap-3 [--rise-delay:120ms]">
            <Button href={site.instagram}>Book a set</Button>
            <Button href="#services" variant="tonal"><Phone />See services</Button>
          </div>
        </div>
      </section>

      <div
        style={{ clipPath: "inset(0% 4% 0% 4% round 32px)" }}
        className="relative h-[62svh] overflow-hidden md:h-[86svh]"
      >
        <div className="absolute inset-0">
          <Photo k="banner" alt="Close-up of a finished lash set" priority />
        </div>
      </div>

      {/* Services */}
      <section id="services" className="page pt-[var(--section)]">
        <h2 className="text-h2 max-w-[18ch]">What are you booking in for?</h2>
        <div className="mt-8"><ServiceTabs /></div>
      </section>

      {/* Approach */}
      <section id="approach" className="page pt-[var(--section)]">
        <h2 className="sr-only">How we work</h2>
        <ul className="grid gap-[clamp(2.5rem,4vw,3.5rem)] lg:grid-cols-12">
          {approach.map(([t, p, c]) => (
            <li key={t} className={`lg:col-span-8 ${c}`}>
              <div className="reveal">
                <h3 className="text-hero">{t}</h3>
                <p className="text-lead mt-3 max-w-[36ch] text-ink-soft">{p}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="reveal mt-10 lg:ml-[calc(4/12*100%)]">
          <Button href="#services" variant="tonal">Browse services</Button>
        </div>
      </section>

      {/* Bento */}
      <section id="studio" className="page pt-[var(--section)]">
        <div className="grid gap-4 md:grid-cols-12">
          <div className="reveal md:col-span-7">
            <div className="card reveal-zoom relative aspect-[4/3] h-full w-full md:aspect-auto md:min-h-[34rem]">
              <div className="reveal-zoom__picture absolute inset-0">
                <Photo k="studio" alt="The Evoked Beauty studio" sizes="(min-width: 768px) 58vw, 100vw" />
              </div>
            </div>
          </div>
          <div className="grid gap-4 md:col-span-5">
            <div className="reveal card flex flex-col justify-between gap-12 bg-rose p-[clamp(1.5rem,3vw,2.5rem)] text-white">
              <h2 className="text-h2">Every set is made for the person wearing it</h2>
              <p>No copy and paste. Your lashes and brows are designed around your face, your style and your routine.</p>
            </div>
            <div className="reveal card flex flex-col justify-between gap-12 bg-surface-2 p-[clamp(1.5rem,3vw,2.5rem)]">
              <h2 className="text-h3">New client special</h2>
              <p>
                First time here? Send a message and ask about the current new client offer.{" "}
                <a className="font-medium underline underline-offset-4" href={site.instagram} target="_blank" rel="noreferrer">DM us</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two column */}
      <section className="page grid items-center gap-[clamp(2rem,5vw,5rem)] pt-[var(--section)] md:grid-cols-2">
        <div className="reveal md:order-2">
          <div className="card reveal-zoom relative aspect-[5/4]">
            <div className="reveal-zoom__picture absolute inset-0">
              <Photo k="tech" alt="Your lash technician at work" sizes="(min-width: 768px) 50vw, 100vw" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-h2">Qualified. Insured. Here for the long run.</h2>
          <div className="reveal">
            <p className="text-lead mt-5 max-w-[34ch]">
              Proper training and full insurance, so you can relax in the chair and enjoy the process.
            </p>
            <Button href={site.instagram} variant="tonal" className="mt-7">See our work</Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page pt-[var(--section)]">
        <div className="reveal card relative isolate grid min-h-[30rem] items-end overflow-hidden bg-rose-dark p-[clamp(1.5rem,5vw,4.5rem)] text-white md:min-h-[36rem]">
          <div className="absolute inset-0 -z-10"><Photo k="cta" /></div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
          <div className="grid items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <h2 className="text-hero">Wolverhampton&rsquo;s lash &amp; brow studio</h2>
              <p className="text-lead mt-4 max-w-[38ch]">
                Slots go quickly. Send a message and we will find a time that suits you.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-self-end">
              <Button href={site.instagram} variant="white">DM to book</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

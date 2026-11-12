import { Logo } from "./Logo";
import { site } from "@/lib/site";

const explore = [
  ["#services", "Services"],
  ["#approach", "How we work"],
  ["#studio", "The studio"],
  ["#contact", "Contact"],
];

export function Footer() {
  return (
    <footer className="mt-[var(--section)] bg-rose pb-16 text-white lg:pb-0">
      <div className="page py-[clamp(3rem,6vw,5rem)]">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr]">
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <Logo light />
            <p className="mt-3 max-w-[30ch]">
              Qualified and insured lash and brow technician in {site.city}. Book by DM.
            </p>
          </div>
          <nav aria-label="Footer">
            <h2 className="text-[1.0625rem] font-medium tracking-normal">Explore</h2>
            <ul className="mt-3 grid gap-1.5">
              {explore.map(([h, l]) => (
                <li key={h}>
                  <a className="underline-offset-4 hover:underline" href={h}>{l}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="min-w-0">
            <h2 className="text-[1.0625rem] font-medium tracking-normal">Studio</h2>
            <address className="mt-3 not-italic">
              {site.address.map((a) => (
                <span key={a} className="block">{a}</span>
              ))}
            </address>
          </div>
          <div className="min-w-0">
            <h2 className="text-[1.0625rem] font-medium tracking-normal">Get in touch</h2>
            <div className="mt-3 grid gap-1.5">
              <a href={site.instagram} className="underline-offset-4 hover:underline">DM {site.handle}</a>
              <a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline [overflow-wrap:anywhere]">{site.email}</a>
            </div>
            <ul className="mt-4 flex gap-2">
              <li>
                <a
                  href={site.instagram}
                  aria-label="Instagram"
                  className="inline-flex size-11 items-center justify-center rounded-full bg-rose-dark transition-[transform,background-color,color] duration-150 ease-out hover:bg-white hover:text-rose-dark active:scale-[0.97]"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" /></svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a
          id="contact"
          className="group mt-[clamp(3rem,8vw,7rem)] flex items-baseline justify-between gap-6 text-[min(11vw,9.5rem)] leading-[0.95] font-medium tracking-[-0.045em]"
          href={site.instagram}
          target="_blank"
          rel="noreferrer"
        >
          <span className="text-balance underline-offset-[0.08em] group-hover:underline">Book your set</span>
          <span aria-hidden className="hidden transition-transform duration-300 ease-out group-hover:translate-x-3 lg:inline">→</span>
        </a>
        <div className="text-small mt-8 flex flex-wrap justify-between gap-x-8 gap-y-2">
          <p>© 2026 Evoked Beauty</p>
          <p>Stock photos from Pexels, not of Evoked Beauty clients.</p>
        </div>
      </div>
    </footer>
  );
}

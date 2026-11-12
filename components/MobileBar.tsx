import { Button } from "./Button";
import { site } from "@/lib/site";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 bg-white p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-1px_0_0_var(--line)] lg:hidden">
      <Button href={site.instagram} size="md">DM to book</Button>
      <Button href="#services" variant="tonal" size="md">Services</Button>
    </div>
  );
}

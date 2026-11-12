import Image from "next/image";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex min-w-0 items-center gap-2.5">
      <Image src="/logo.jpg" alt="" width={40} height={40} className="size-10 rounded-full" />
      <span className="block min-w-0 truncate text-[1.375rem] font-medium tracking-[-0.03em]">
        Evoked<span className={`font-normal ${light ? "text-white/80" : "text-ink-soft"}`}> Beauty</span>
      </span>
    </span>
  );
}

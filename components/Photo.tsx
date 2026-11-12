import Image from "next/image";
import { getImage } from "@/lib/images";

export function Photo({ k, alt = "", className = "", sizes = "100vw", priority }: {
  k: string; alt?: string; className?: string; sizes?: string; priority?: boolean;
}) {
  const img = getImage(k);
  if (!img) return <div aria-hidden className={`blush absolute inset-0 ${className}`} />;
  return <Image src={`/images/${img.file}`} alt={alt} fill sizes={sizes} priority={priority} style={{ objectPosition: img.pos }} className={`object-cover ${className}`} />;
}

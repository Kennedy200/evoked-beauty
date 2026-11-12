// Photos are free Pexels stock images (https://www.pexels.com/license/).
// Swap any file in /public/images for client photos; keep the filename or edit it here.
// `pos` controls the crop focus (CSS object-position).
type Img = { file: string; pos?: string };

export const images: Record<string, Img | null> = {
  hero: { file: "hero.jpg", pos: "50% 30%" },
  banner: { file: "banner.jpg", pos: "50% 45%" },
  lashes: { file: "lashes.jpg", pos: "50% 40%" },
  lift: { file: "lift.jpg", pos: "50% 50%" },
  brows: { file: "brows.jpg", pos: "50% 35%" },
  beauty: { file: "beauty.jpg", pos: "50% 45%" },
  studio: { file: "studio.jpg", pos: "50% 40%" },
  tech: { file: "tech.jpg", pos: "50% 40%" },
  cta: { file: "cta.jpg", pos: "50% 50%" },
};

export const getImage = (key: string) => images[key] ?? null;

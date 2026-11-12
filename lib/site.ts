export const site = {
  name: "Evoked Beauty",
  tagline: "Lashes, brows & beauty",
  city: "Wolverhampton",
  instagram: "https://www.instagram.com/evoked.beauty/",
  handle: "@evoked.beauty",
  // TODO: replace with the real details before launch
  phone: "+44 0000 000000",
  email: "hello@evokedbeauty.example",
  address: ["Wolverhampton", "West Midlands"],
};

export const services = [
  {
    id: "lashes",
    label: "Lash extensions",
    kicker: "Classic, hybrid & volume",
    title: "Lashes",
    body: "From a soft, natural lift to full, fluffy volume. Every set is mapped to your eye shape and applied one lash at a time.",
    image: "lashes",
  },
  {
    id: "lift",
    label: "Lash lift",
    kicker: "Your own lashes, curled",
    title: "Lash lift",
    body: "A lifted, curled look with no extensions at all. Low upkeep and wonderful with a little tint.",
    image: "lift",
  },
  {
    id: "brows",
    label: "Brows",
    kicker: "Shaped & defined",
    title: "Brows",
    body: "Shaping, tinting and lamination to frame your face, finished to suit you rather than the trend.",
    image: "brows",
  },
  {
    id: "beauty",
    label: "Beauty",
    kicker: "The finishing touches",
    title: "Beauty",
    body: "Small treatments that round off a great set. Ask in a DM what is currently on the menu.",
    image: "beauty",
  },
] as const;

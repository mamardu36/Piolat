export const site = {
  name: "Piolat Rotary",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.piolat.com",
  description:
    "Photogravure textile depuis 1936 : cylindres sérigraphiques, cylindres galvanos techniques, cadres plats et prestations d'infographie pour l'impression textile et décoration.",
  phone: "+33 4 74 59 11 59",
  phoneDisplay: "04 74 59 11 59",
  email: "service-client@piolat.fr",
  commercial: { name: "Yves Thimonier", email: "ythimonier@piolat.fr", phone: "06 14 36 98 41" },
  address: {
    street: "18 route des Ayes",
    postalCode: "38790",
    city: "Saint-Georges-d'Espéranche",
    region: "Isère",
    country: "FR",
  },
  hours: "Lundi–vendredi, 8h30–12h et 13h30–17h",
  siret: "971 508 478 00064",
  founded: 1936,
  // À CONFIRMER par Piolat : engagement de délai de réponse affiché sur le site
  responseTime: "sous 48 heures ouvrées",
  rotatives: ["Stork", "Zimmer", "Reggiani", "Buser"],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=18+route+des+Ayes+38790+Saint-Georges-d%27Esp%C3%A9ranche",
} as const;

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export const mainNav: NavItem[] = [
  { label: "La société", href: "/societe" },
  {
    label: "Savoir-faire",
    href: "/savoir-faire",
    children: [
      { label: "Infographie", href: "/savoir-faire/infographie" },
      { label: "Cylindres sérigraphiques", href: "/savoir-faire/cylindres-serigraphiques" },
      { label: "Cylindres galvanos techniques", href: "/savoir-faire/cylindres-galvanos" },
    ],
  },
  {
    label: "Gamme et tarifs",
    href: "/gamme",
    children: [
      { label: "Cylindres pré-perforés", href: "/gamme/cylindres-pre-perfores" },
      { label: "Cylindres galvano", href: "/gamme/cylindres-galvano" },
      { label: "Cadres plats et cadrettes", href: "/gamme/cadres-plats-cadrettes" },
      { label: "Prestation infographie", href: "/gamme/prestation-infographie" },
      { label: "Collage d'embouts", href: "/gamme/collage-embouts" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const legalNav = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Confidentialité", href: "/confidentialite" },
];

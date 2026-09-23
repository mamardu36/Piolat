/**
 * Gamme et tarifs indicatifs.
 * Source : catalogue piolat.com (sept. 2026). Les prix « de / à » dépendent des options
 * (mesh, couleurs, prestation infographique…). À valider par Piolat avant mise en ligne.
 */

export type PriceRange = { from: number; to: number } | null; // null = sur devis

export type Variant = {
  ref: string;           // référence affichée, ex. "Screen 640 × 1750"
  rapport: number;       // circonférence en mm
  longueur?: number;     // longueur en mm
  price: PriceRange;
};

export type Category = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  image?: { src: string; alt: string };
  steps: string[];
  notes: string[];
  variants: Variant[];
  groupByRapport?: boolean;
};

const regravure = (objet: string) =>
  `Pour une regravure d'${objet}, choisissez « Fichiers déjà facturés » en prestation infographique et indiquez si possible la référence gravure de la commande initiale.`;
const reajustement =
  "Les prestations infographiques peuvent être réajustées selon la quantité de travail nécessaire à l'interprétation graphique.";
const port = "Les frais de port peuvent être revus à la hausse selon les tarifs des transporteurs.";
const nickel = "Le surcoût nickel est refacturé selon les tarifs en vigueur.";

// Cylindres pré-perforés : [rapport, longueur, prix min, prix max]
const prePerfores: [number, number, number, number][] = [
  [640, 1000, 421, 4192], [640, 1410, 441, 3892], [640, 1750, 416, 4022], [640, 1980, 436, 4572],
  [640, 2080, 409, 3580], [640, 2650, 474, 4795], [640, 2950, 559, 3580], [640, 3050, 515, 3796],
  [640, 3500, 519, 3928],
  [668, 1410, 559, 3530], [668, 1750, 559, 3530], [668, 1980, 559, 3550], [668, 2080, 559, 3530],
  [668, 2650, 559, 3530], [668, 3050, 559, 3530], [668, 3500, 559, 3530],
  [801, 1750, 509, 3560], [801, 2080, 559, 3560], [801, 2650, 559, 3560], [801, 3050, 559, 3560],
  [801, 3500, 559, 3560],
  [820, 1750, 568, 3889], [820, 1980, 529, 3760], [820, 2650, 579, 3650], [820, 3050, 574, 3855],
  [820, 3500, 559, 3768],
  [914, 1000, 1179, 4335], [914, 1410, 579, 3585], [914, 1750, 529, 3723], [914, 1980, 529, 3655],
  [914, 2080, 559, 3565], [914, 2650, 509, 5065], [914, 3050, 529, 5885], [914, 3500, 559, 3565],
  [1018, 1750, 559, 3805], [1018, 1980, 559, 3710], [1018, 2080, 559, 3610], [1018, 2650, 559, 3610],
  [1018, 3050, 559, 3610],
];

export const categories: Category[] = [
  {
    slug: "cylindres-pre-perfores",
    title: "Cylindres pré-perforés",
    shortTitle: "Pré-perforés",
    summary:
      "Gravure de cylindres rotatifs sur écran pré-perforé, du rapport 640 au 1018 mm et jusqu'à 3,50 m de longueur.",
    image: { src: "/images/cylindre-screen.webp", alt: "Cylindres sérigraphiques pré-perforés gravés d'un motif floral bleu" },
    steps: [
      "Choisissez le rapport et la longueur du cylindre.",
      "Précisez le mesh, la couleur et les options de réalisation.",
      "Joignez votre fichier ou demandez une prestation infographique.",
    ],
    notes: [regravure("un cylindre"), reajustement, port, nickel],
    groupByRapport: true,
    variants: prePerfores.map(([rapport, longueur, from, to]) => ({
      ref: `Screen ${rapport} × ${longueur}`,
      rapport,
      longueur,
      price: { from, to },
    })),
  },
  {
    slug: "cylindres-galvano",
    title: "Cylindres galvano",
    shortTitle: "Galvano",
    summary:
      "Cylindres nickel réalisés par galvanoplastie, pour les impressions les plus exigeantes et les applications techniques.",
    image: { src: "/images/cylindre-galvano.webp", alt: "Cylindres galvano en nickel gravés" },
    steps: [
      "Choisissez le rapport du cylindre.",
      "Précisez la longueur, la couleur et les options de réalisation.",
      "Joignez votre fichier ou demandez une prestation infographique.",
    ],
    notes: [regravure("un cylindre"), reajustement, port, nickel],
    variants: [
      { ref: "Galvano 640", rapport: 640, price: { from: 809, to: 5695 } },
      { ref: "Galvano 820", rapport: 820, price: { from: 759, to: 3950 } },
      { ref: "Galvano 914", rapport: 914, price: null },
      { ref: "Galvano 1000", rapport: 1000, price: { from: 859, to: 4462 } },
      { ref: "Galvano 1018", rapport: 1018, price: { from: 709, to: 5610 } },
    ],
  },
  {
    slug: "cadres-plats-cadrettes",
    title: "Cadres plats et cadrettes",
    shortTitle: "Cadres plats",
    summary: "Gravure de cadres plats et de cadrettes pour l'impression à plat, les essais et les petites séries.",
    steps: [
      "Choisissez entre cadre plat et cadrette.",
      "Précisez les dimensions, la couleur et les options de réalisation.",
      "Joignez votre fichier ou demandez une prestation infographique.",
    ],
    notes: [regravure("un cadre plat ou d'une cadrette"), reajustement, port],
    variants: [
      { ref: "Gravure cadre plat", rapport: 0, price: { from: 449, to: 3440 } },
      { ref: "Gravure cadrette", rapport: 0, price: { from: 249, to: 3370 } },
    ],
  },
  {
    slug: "prestation-infographie",
    title: "Prestation infographie",
    shortTitle: "Infographie",
    summary:
      "Interprétation graphique seule, sans gravure : retouche, séparation des couleurs, mise au rapport et préparation des fichiers.",
    steps: [
      "Indiquez la difficulté de l'interprétation graphique demandée.",
      "Précisez les couleurs et les références utiles.",
      "Joignez votre fichier source.",
    ],
    notes: [reajustement],
    variants: [{ ref: "Interprétation graphique", rapport: 0, price: { from: 35, to: 3000 } }],
  },
  {
    slug: "collage-embouts",
    title: "Collage d'embouts",
    shortTitle: "Collage d'embouts",
    summary: "Pose et collage des embouts sur vos cylindres, adaptés à votre parc de rotatives.",
    steps: ["Indiquez le type de cylindre et de rotative.", "Précisez le nombre de cylindres concernés."],
    notes: [port],
    variants: [{ ref: "Collage d'embouts", rapport: 0, price: null }],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

export const minPrice = (c: Category) => {
  const prices = c.variants.flatMap((v) => (v.price ? [v.price.from] : []));
  return prices.length ? Math.min(...prices) : null;
};

export const rapports = (c: Category) => [...new Set(c.variants.map((v) => v.rapport))].sort((a, b) => a - b);

const eur = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
export const formatPrice = (n: number) => eur.format(n);

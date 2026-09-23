export type Expertise = {
  slug: string;
  title: string;
  metaDescription: string;
  lead: string;
  body: string[];
  facts?: { label: string; value: string }[];
  image?: { src: string; alt: string; width: number; height: number };
  relatedCategory?: string;
};

export const expertises: Expertise[] = [
  {
    slug: "infographie",
    title: "Infographie textile",
    metaDescription:
      "Retouche, interprétation de dessins et séparation des couleurs pour l'impression textile et décoration au cadre rotatif.",
    lead: "Nos graphistes dessinateurs préparent vos motifs pour qu'ils s'impriment exactement comme vous les avez imaginés.",
    body: [
      "Spécialisé dans l'infographie, Piolat Rotary apporte la réactivité nécessaire au marché de la retouche d'image pour le textile et la décoration.",
      "L'équipe dessine, retouche ou crée des motifs et des images, puis les adapte à la demande précise du client et aux cadres rotatifs d'impression : décomposition de l'original, mise au rapport, séparation des couleurs et fichiers de gravure séparés.",
    ],
    facts: [
      { label: "Interprétation", value: "Analyse du dessin, idées, mise en page" },
      { label: "Couleurs", value: "Séparation rapide, gammes et mapping" },
      { label: "Épreuves", value: "Papier, jet d'encre et mapping" },
    ],
    image: { src: "/images/illustration-motif.webp", alt: "Illustration de mode : robe imprimée d'un motif floral bleu et violet", width: 228, height: 784 },
    relatedCategory: "prestation-infographie",
  },
  {
    slug: "cylindres-serigraphiques",
    title: "Cylindres sérigraphiques d'impression",
    metaDescription:
      "Gravure de cylindres sérigraphiques pour l'impression textile et décoration, rapports 640 à 1018 mm, compatibles Stork, Zimmer, Reggiani et Buser.",
    lead: "Des cylindres gravés de haute qualité pour l'impression textile et la décoration, adaptés à toutes les rotatives du marché.",
    body: [
      "Piolat Rotary est équipé des installations de gravure parmi les plus performantes du marché, dont le système Lex Multi-Beam, l'un des plus techniquement pointus.",
      "Nous gravons des cylindres pour toutes les rotatives d'impression (Stork, Zimmer, Reggiani, Buser…), ainsi que pour le flockage, l'enduction et les déposes spécifiques.",
    ],
    facts: [
      { label: "Rapports standard", value: "640, 820, 914 et 1018 mm" },
      { label: "Longueurs", value: "De 0,40 m à 3,50 m" },
      { label: "Rotatives", value: "Stork, Zimmer, Reggiani, Buser…" },
    ],
    image: { src: "/images/machine-lex-multibeam.webp", alt: "Machine de gravure laser Lex Multi-Beam avec un cylindre en cours de gravure", width: 629, height: 185 },
    relatedCategory: "cylindres-pre-perfores",
  },
  {
    slug: "cylindres-galvanos",
    title: "Cylindres galvanos techniques",
    metaDescription:
      "Fabrication de cylindres et sleeves en nickel par galvanoplastie, de 0,4 à 3,5 m, pour l'enduction, la filtration et les non-tissés.",
    lead: "Des cylindres et sleeves en nickel sur mesure, pour les applications industrielles les plus exigeantes.",
    body: [
      "Nos installations de galvanisation permettent de répondre aux demandes les plus exigeantes avec un produit final de grande qualité.",
      "Adaptés aux machines d'enduction, de filtration à l'eau, à l'air ou aux flammes, ou aux applications spécifiques des non-tissés, nos cylindres et sleeves sont réalisés en circonférences classiques ou sur mesure.",
      "Nous pouvons vous accompagner dans la construction de votre cahier des charges.",
    ],
    facts: [
      { label: "Matière", value: "Nickel, par galvanoplastie" },
      { label: "Longueurs", value: "De 0,40 m à 3,50 m" },
      { label: "Circonférences", value: "Standard ou sur mesure" },
    ],
    image: { src: "/images/cylindre-galvano.webp", alt: "Cylindres galvano en nickel", width: 304, height: 374 },
    relatedCategory: "cylindres-galvano",
  },
];

export const getExpertise = (slug: string) => expertises.find((e) => e.slug === slug);

/** Méthode de travail en 5 étapes (séquence réelle). */
export const process = [
  { title: "Interprétation", tasks: ["Studio design", "Analyse des besoins", "Recherche d'idées"] },
  { title: "Identification des couleurs", tasks: ["Décomposition de l'original", "Placement et mise en page", "Séparation des couleurs", "Fichiers de gravure séparés"] },
  { title: "Orientation couleurs", tasks: ["Mapping", "Tendances", "Gammes de couleurs"] },
  { title: "Épreuves", tasks: ["Épreuves papier", "Épreuves jet d'encre", "Épreuves mapping"] },
  { title: "Adaptation", tasks: ["Cahiers de présentation", "Prototypes", "Patrons"] },
];

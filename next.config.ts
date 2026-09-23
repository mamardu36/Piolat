import type { NextConfig } from "next";

// Redirections 301 depuis les URLs de l'ancien site Magento (préserve le référencement)
const legacy: [string, string][] = [
  ["/piolat-rotary.html", "/societe"],
  ["/piolat-rotary/presentation-societe.html", "/societe"],
  ["/piolat-rotary/infographie.html", "/savoir-faire/infographie"],
  ["/piolat-rotary/cylindres-serigraphiques.html", "/savoir-faire/cylindres-serigraphiques"],
  ["/piolat-rotary/cylindres-galvanos.html", "/savoir-faire/cylindres-galvanos"],
  ["/passer-commande.html", "/gamme"],
  ["/passer-commande/gravure.html", "/gamme"],
  ["/passer-commande/prestation-infographie.html", "/gamme/prestation-infographie"],
  ["/passer-commande/gravure/pre-perfores.html", "/gamme/cylindres-pre-perfores"],
  ["/passer-commande/gravure/pre-perfores/:path*", "/gamme/cylindres-pre-perfores"],
  ["/passer-commande/gravure/galvano.html", "/gamme/cylindres-galvano"],
  ["/passer-commande/gravure/galvano/:path*", "/gamme/cylindres-galvano"],
  ["/passer-commande/gravure/cadres-plats-cadrettes.html", "/gamme/cadres-plats-cadrettes"],
  ["/passer-commande/gravure/cadres-plats-cadrettes/:path*", "/gamme/cadres-plats-cadrettes"],
  ["/passer-commande/prestation-collage-embouts.html", "/gamme/collage-embouts"],
  ["/contacts.html", "/contact"],
  ["/contacts", "/contact"],
  ["/contacts/plan-d-acces.html", "/contact#plan-acces"],
  ["/mentions-legales.html", "/mentions-legales"],
  ["/customer/:path*", "/contact"],
  ["/checkout/:path*", "/contact"],
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  experimental: { serverActions: { bodySizeLimit: "9mb" } },
  async redirects() {
    return legacy.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;

import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { JsonLd } from "@/components/ui/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

const archivo = localFont({
  src: "./fonts/archivo-latin.woff2",
  variable: "--font-archivo",
  weight: "100 900",
  display: "swap",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Piolat Rotary — Photogravure textile depuis 1936", template: "%s | Piolat Rotary" },
  description: site.description,
  openGraph: { type: "website", locale: "fr_FR", siteName: site.name },
  // Version de démonstration : non indexée par les moteurs de recherche
  robots: process.env.DEMO_MODE === "1" ? { index: false, follow: false } : undefined,
};

export const viewport: Viewport = { themeColor: "#1c2127" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={archivo.variable}>
      <body className="flex min-h-dvh flex-col">
        <a href="#contenu" className="sr-only z-[100] rounded-sm bg-blue px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          Aller au contenu
        </a>
        <Header />
        <main id="contenu" className="flex-1">{children}</main>
        <Footer />
        <MobileCtaBar />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: site.name,
            url: site.url,
            telephone: site.phone,
            email: site.email,
            foundingDate: String(site.founded),
            image: new URL("/opengraph-image.jpg", site.url).toString(),
            address: {
              "@type": "PostalAddress",
              streetAddress: site.address.street,
              postalCode: site.address.postalCode,
              addressLocality: site.address.city,
              addressRegion: site.address.region,
              addressCountry: site.address.country,
            },
            openingHours: ["Mo-Fr 08:30-12:00", "Mo-Fr 13:30-17:00"],
          }}
        />
      </body>
    </html>
  );
}

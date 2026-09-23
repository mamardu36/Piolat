import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactCta } from "@/sections/ContactCta";
import { Figures } from "@/sections/home/Figures";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "La société",
  description:
    "Fondée en 1936 par Georges Piolat, Piolat Rotary est le dernier photograveur textile français sur le marché de l'impression au cadre rotatif.",
  alternates: { canonical: "/societe" },
};

const timeline = [
  { year: "1936", text: "Georges Piolat fonde l'entreprise dans la région lyonnaise, spécialisée dans la gravure au cadre plat pour l'impression de la soie." },
  { year: "Cadre rotatif", text: "L'activité suit l'évolution des technologies et des marchés, jusqu'à la gravure de cylindres rotatifs et galvanos." },
  { year: "Aujourd'hui", text: "Installée à Saint-Georges-d'Espéranche, Piolat Rotary sert les principaux acteurs français et européens du textile et de la décoration." },
];

export default function SocietePage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "La société", href: "/societe" }]}
        title="Une entreprise familiale au service de l'impression depuis 1936"
        lead="Dernier photograveur textile français sur le marché de l'impression au cadre rotatif, Piolat met son savoir-faire au service de tous les acteurs du textile et de la décoration."
      />

      <Figures />

      <section aria-labelledby="histoire" className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="histoire" className="text-h2 font-bold">Notre histoire</h2>
            <ol className="mt-10 space-y-8 border-l-2 border-line pl-6">
              {timeline.map((t) => (
                <li key={t.year} className="relative">
                  <span aria-hidden className="absolute -left-[1.95rem] top-1.5 size-3 rounded-full bg-blue ring-4 ring-white" />
                  <h3 className="font-display text-xl font-bold">{t.year}</h3>
                  <p className="mt-2 text-steel">{t.text}</p>
                </li>
              ))}
            </ol>
          </div>
          <figure className="lg:col-span-6 lg:col-start-7">
            <BeforeAfter
              before={{ src: "/images/usine-historique.webp", alt: "L'usine Piolat historique, photographie d'archive", label: "1936" }}
              after={{ src: "/images/site-actuel-drone.webp", alt: "Vue aérienne du site actuel", label: "Aujourd'hui" }}
            />
            <figcaption className="mt-3 text-sm text-steel">
              Le fondateur Georges Piolat a été honoré par le Musée de Mulhouse, qui a dédié son patronyme à une salle d&apos;exposition.
            </figcaption>
          </figure>
        </Container>
      </section>

      <section aria-labelledby="metier" className="border-y border-line bg-mist py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="relative aspect-[2/1] overflow-hidden rounded-md lg:col-span-6">
            <Image src="/images/usine-historique-2.webp" alt="Bâtiments historiques de l'entreprise, photographie d'archive" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <h2 id="metier" className="text-h2 font-bold">Notre métier aujourd&apos;hui</h2>
            <p className="mt-5 text-steel">
              Nous intervenons auprès de l&apos;habillement, de la lingerie, du linge de maison, des tissus
              d&apos;ameublement et des revêtements muraux et de sols. Notre force : l&apos;interprétation des
              dessins, l&apos;équilibrage des motifs et un patrimoine graphique de près de 90 ans.
            </p>
            <p className="mt-4 text-steel">
              Nos sociétés sœurs complètent l&apos;offre avec l&apos;impression de papier peint : reproduction de
              papiers peints anciens, revêtements sur mesure et petites séries.
            </p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="identite" className="py-20 sm:py-24">
        <Container>
          <h2 id="identite" className="text-h2 font-bold">Identité</h2>
          <dl className="mt-8 grid gap-6 border-t border-line pt-6 sm:grid-cols-3">
            <div><dt className="text-sm text-steel">Siège social</dt><dd className="mt-1">{site.address.street}, {site.address.postalCode} {site.address.city}</dd></div>
            <div><dt className="text-sm text-steel">SIRET</dt><dd className="mt-1 tabular-nums">{site.siret}</dd></div>
            <div><dt className="text-sm text-steel">Activité</dt><dd className="mt-1">Fabrication de cylindres pour l&apos;impression et prestations d&apos;infographie</dd></div>
          </dl>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}

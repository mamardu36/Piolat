import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Mentions légales", alternates: { canonical: "/mentions-legales" }, robots: { index: true, follow: true } };

export default function MentionsPage() {
  return (
    <>
      <PageHeader crumbs={[{ label: "Mentions légales", href: "/mentions-legales" }]} title="Mentions légales" />
      <Container className="py-16">
        <div className="max-w-prose space-y-10 leading-relaxed text-steel [&_h2]:mb-3 [&_h2]:text-h3 [&_h2]:font-bold [&_h2]:text-ink">
          <section>
            <h2>Éditeur du site</h2>
            <p>Piolat Rotary, {site.address.street}, {site.address.postalCode} {site.address.city}.<br />
              SIRET : {site.siret}. Téléphone : {site.phoneDisplay}. Email : {site.email}.<br />
              {/* À compléter : forme juridique, capital, RCS, n° TVA, directeur de la publication */}
              Forme juridique, capital social, RCS et numéro de TVA : à compléter.<br />
              Directeur de la publication : à compléter.</p>
          </section>
          <section>
            <h2>Hébergement</h2>
            <p>À compléter : nom, adresse et téléphone de l&apos;hébergeur.</p>
          </section>
          <section>
            <h2>Propriété intellectuelle</h2>
            <p>L&apos;ensemble des contenus de ce site (textes, photographies, logo) est la propriété de Piolat Rotary. Toute reproduction sans autorisation écrite est interdite.</p>
          </section>
          <section>
            <h2>Tarifs</h2>
            <p>Les prix affichés sur le site sont indicatifs et ne constituent pas une offre contractuelle. Seul le devis émis par Piolat Rotary fait foi.</p>
          </section>
        </div>
      </Container>
    </>
  );
}

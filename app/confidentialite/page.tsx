import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Politique de confidentialité", alternates: { canonical: "/confidentialite" } };

export default function ConfidentialitePage() {
  return (
    <>
      <PageHeader crumbs={[{ label: "Confidentialité", href: "/confidentialite" }]} title="Politique de confidentialité" />
      <Container className="py-16">
        <div className="max-w-prose space-y-10 leading-relaxed text-steel [&_h2]:mb-3 [&_h2]:text-h3 [&_h2]:font-bold [&_h2]:text-ink">
          <section>
            <h2>Données collectées</h2>
            <p>Via le formulaire de contact : nom, société, email, téléphone, contenu de la demande et fichier joint. Via la newsletter : adresse email.</p>
          </section>
          <section>
            <h2>Finalités</h2>
            <p>Répondre à vos demandes et établir des devis ; vous adresser nos actualités si vous vous y êtes inscrit.</p>
          </section>
          <section>
            <h2>Durée de conservation</h2>
            <p>À compléter selon la politique interne (par exemple 3 ans après le dernier contact).</p>
          </section>
          <section>
            <h2>Cookies</h2>
            <p>Ce site n&apos;utilise pas de cookie de mesure d&apos;audience ni de cookie publicitaire.</p>
          </section>
          <section>
            <h2>Vos droits</h2>
            <p>Vous pouvez accéder à vos données, les rectifier, les supprimer ou vous désinscrire de la newsletter en écrivant à {site.email}. Vous pouvez aussi saisir la CNIL.</p>
          </section>
        </div>
      </Container>
    </>
  );
}

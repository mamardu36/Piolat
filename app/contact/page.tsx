import type { Metadata } from "next";
import { Clock, Mail, MapPin, Navigation, Phone, User } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";
import { subjects } from "@/lib/contact";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact et devis",
  description: "Demandez un devis de gravure ou d'infographie, envoyez votre fichier, ou contactez l'équipe Piolat Rotary à Saint-Georges-d'Espéranche.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({ searchParams }: PageProps<"/contact">) {
  const sp = await searchParams;
  const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v)?.slice(0, 120);
  const sujet = one(sp.sujet);
  const defaultSubject = subjects.some((s) => s.value === sujet) ? sujet : undefined;
  const tel = `tel:${site.phone.replace(/\s/g, "")}`;

  return (
    <>
      <PageHeader
        crumbs={[{ label: "Contact", href: "/contact" }]}
        title="Contact et demande de devis"
        lead="Décrivez votre projet et joignez votre fichier : nous vous répondons avec un devis détaillé."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <h2 className="sr-only">Formulaire de contact</h2>
            <ContactForm defaultSubject={defaultSubject} defaultProduct={one(sp.produit)} />
          </div>

          <aside className="lg:col-span-4 lg:col-start-9" aria-labelledby="coordonnees">
            <h2 id="coordonnees" className="text-h3 font-bold">Coordonnées</h2>
            <ul className="mt-6 space-y-6">
              <li className="flex gap-3">
                <Phone aria-hidden className="mt-0.5 size-5 shrink-0 text-blue" />
                <div>
                  <p className="text-sm text-steel">Service administratif</p>
                  <a href={tel} className="font-semibold hover:text-blue hover:underline">{site.phoneDisplay}</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail aria-hidden className="mt-0.5 size-5 shrink-0 text-blue" />
                <div>
                  <p className="text-sm text-steel">Service client</p>
                  <a href={`mailto:${site.email}`} className="font-semibold break-all hover:text-blue hover:underline">{site.email}</a>
                </div>
              </li>
              <li className="flex gap-3">
                <User aria-hidden className="mt-0.5 size-5 shrink-0 text-blue" />
                <div>
                  <p className="text-sm text-steel">Contact commercial</p>
                  <p className="font-semibold">{site.commercial.name}</p>
                  <a href={`mailto:${site.commercial.email}`} className="block hover:text-blue hover:underline">{site.commercial.email}</a>
                  <a href={`tel:${site.commercial.phone.replace(/\s/g, "")}`} className="block hover:text-blue hover:underline">{site.commercial.phone}</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock aria-hidden className="mt-0.5 size-5 shrink-0 text-blue" />
                <div>
                  <p className="text-sm text-steel">Horaires</p>
                  <p>{site.hours}</p>
                </div>
              </li>
            </ul>

            <div id="plan-acces" className="mt-10 scroll-mt-32 rounded-md bg-mist p-6">
              <h2 className="flex items-center gap-2 text-h3 font-bold"><MapPin aria-hidden className="size-5 text-blue" /> Plan d&apos;accès</h2>
              <address className="mt-4 not-italic leading-relaxed">
                Piolat Rotary<br />
                {site.address.street}<br />
                {site.address.postalCode} {site.address.city}
              </address>
              <p className="mt-3 text-sm text-steel">Nord-Isère.</p>
              <ButtonLink href={site.mapsUrl} variant="secondary" className="mt-5 w-full">
                <Navigation aria-hidden className="size-4" /> Itinéraire Google Maps
              </ButtonLink>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}

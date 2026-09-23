import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/site";

const steps = [
  { title: "Envoyez votre fichier", text: "Motif, rapport, longueur et nombre de couleurs." },
  { title: "Recevez votre devis", text: `Un devis détaillé ${site.responseTime}.` },
  { title: "Nous gravons", text: "Interprétation, gravure et expédition de vos cylindres." },
];

export function ContactCta({ title = "Votre prochain cylindre commence par un fichier" }: { title?: string }) {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-blue text-white">
      <div aria-hidden className="bg-motif absolute inset-y-0 right-0 hidden w-1/3 opacity-15 lg:block" />
      <Container className="relative py-16 sm:py-24">
        <h2 id="cta-title" className="max-w-3xl text-h2 font-bold">{title}</h2>
        <ol className="mt-10 grid max-w-4xl gap-8 sm:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="border-t border-white/40 pt-5">
              <span className="font-display text-3xl font-extrabold text-white/60 [font-stretch:125%]" aria-hidden>{i + 1}</span>
              <h3 className="mt-2 font-bold">{s.title}</h3>
              <p className="mt-1 text-[0.9375rem] text-white/80">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 flex flex-wrap gap-3">
          <ButtonLink href="/contact?sujet=devis" variant="inverse" className="min-h-12 px-6 text-base">Demander mon devis</ButtonLink>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="inline-flex min-h-12 items-center gap-2 rounded-sm border border-white/50 px-6 font-semibold hover:bg-white/10">
            <Phone aria-hidden className="size-4" /> {site.phoneDisplay}
          </a>
        </div>
      </Container>
    </section>
  );
}

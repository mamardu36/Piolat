import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { BeforeAfter } from "@/components/ui/BeforeAfter";

export function Heritage() {
  return (
    <section aria-labelledby="histoire-title" className="border-y border-line bg-mist py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <BeforeAfter
            before={{ src: "/images/usine-historique.webp", alt: "L'usine Piolat historique dans la région lyonnaise, photographie d'archive", label: "1936" }}
            after={{ src: "/images/site-actuel-drone.webp", alt: "Vue aérienne du site actuel de Piolat Rotary, équipé de panneaux solaires", label: "Aujourd'hui" }}
          />
          <p className="mt-3 text-sm text-steel">Faites glisser pour comparer le site d&apos;origine et le site actuel.</p>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <h2 id="histoire-title" className="text-h2 font-bold">Une histoire française depuis 1936</h2>
          <p className="mt-5 text-lead text-steel">
            Georges Piolat fonde l&apos;entreprise dans la région lyonnaise pour graver au cadre plat les soieries.
            Près de 90 ans plus tard, nous sommes le dernier photograveur textile français sur le marché du cadre rotatif.
          </p>
          <p className="mt-4 text-steel">
            Le Musée de Mulhouse a dédié une salle d&apos;exposition au nom de notre fondateur.
          </p>
          <ButtonLink href="/societe" variant="secondary" className="mt-8">Découvrir notre histoire</ButtonLink>
        </div>
      </Container>
    </section>
  );
}

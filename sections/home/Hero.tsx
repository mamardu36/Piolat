import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Cylinder, PrintedBand } from "@/components/ui/Cylinder";
import { site } from "@/lib/site";

const proofs = [
  "Gravure sur Lex Multi-Beam",
  "Rapports de 640 à 1018 mm, jusqu'à 3,50 m",
  `Compatible ${site.rotatives.join(", ")}`,
];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-night text-white">
      <Container className="grid items-center gap-12 pb-14 pt-14 sm:pt-20 lg:grid-cols-12 lg:pb-16 lg:pt-20">
        <div className="lg:col-span-7">
          <p className="text-[0.9375rem] font-medium text-sky">Photogravure textile depuis 1936</p>
          <h1 id="hero-title" className="mt-4 text-display font-extrabold">
            Le dernier photograveur textile français
          </h1>
          <p className="mt-6 max-w-xl text-lead text-white/75">
            De l&apos;interprétation de votre dessin au cylindre prêt à imprimer, Piolat Rotary grave vos cadres
            rotatifs dans le Nord-Isère pour le textile et la décoration.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="/contact?sujet=devis" className="min-h-12 px-6 text-base">Obtenir un devis</ButtonLink>
            <ButtonLink href="/gamme" variant="inverse" className="min-h-12 bg-white/10 px-6 text-base text-white hover:bg-white/20">
              Consulter les tarifs
            </ButtonLink>
          </div>
          <ul className="mt-10 grid gap-3 text-[0.9375rem] text-white/80 sm:grid-cols-3 sm:gap-6">
            {proofs.map((p) => (
              <li key={p} className="flex gap-2">
                <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-sky" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:col-span-5 lg:block">
          <Cylinder />
        </div>
      </Container>
      <PrintedBand />
    </section>
  );
}

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

const rapports = [640, 820, 914, 1018];

export function Specs() {
  return (
    <section aria-labelledby="specs-title" className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <h2 id="specs-title" className="text-h2 font-bold">Des cylindres pour toutes les rotatives</h2>
          <p className="mt-5 max-w-prose text-lead text-steel">
            Gravure sur Lex Multi-Beam, l&apos;un des systèmes les plus précis du marché. Compatibles Stork, Zimmer,
            Reggiani et Buser, pour l&apos;impression, le flockage et l&apos;enduction.
          </p>
          <ButtonLink href="/gamme/cylindres-pre-perfores" variant="secondary" className="mt-8">Consulter les tarifs</ButtonLink>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-ink pt-6">
            <div className="col-span-2">
              <dt className="text-sm text-steel">Rapports standard, en millimètres</dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {rapports.map((r) => (
                  <span key={r} className="font-display rounded-sm bg-sky px-3 py-1.5 text-2xl font-bold tabular-nums text-blue-dark">{r}</span>
                ))}
                <span className="self-center pl-1 text-steel">et sur demande</span>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-steel">Longueurs</dt>
              <dd className="font-display mt-1 text-2xl font-bold">0,40 à 3,50 m</dd>
            </div>
            <div>
              <dt className="text-sm text-steel">Matières</dt>
              <dd className="font-display mt-1 text-2xl font-bold">Écran et nickel</dd>
            </div>
          </dl>
          <div className="relative mt-10 aspect-[629/185] overflow-hidden rounded-md bg-mist">
            <Image src="/images/machine-lex-multibeam.webp" alt="Machine de gravure Lex Multi-Beam avec un cylindre en cours de gravure" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { expertises } from "@/lib/expertise";

export function Expertises() {
  return (
    <section aria-labelledby="savoir-faire-title" className="border-t border-line bg-mist py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="savoir-faire-title"
          split
          title="Trois savoir-faire, un seul interlocuteur"
          intro="Nous préparons vos fichiers, gravons vos cylindres et fabriquons vos galvanos techniques. Tout est réalisé sur notre site de Saint-Georges-d'Espéranche."
        />
        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {expertises.map((e) => (
            <li key={e.slug}>
              <Link href={`/savoir-faire/${e.slug}`} className="group flex h-full flex-col overflow-hidden rounded-md bg-white ring-1 ring-line transition-shadow hover:shadow-[0_24px_48px_-24px_rgb(28_33_39/0.35)]">
                <div className="relative aspect-[16/10] overflow-hidden bg-white">
                  {e.image && (
                    <Image src={e.image.src} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-contain p-5 transition-transform duration-500 group-hover:scale-[1.03]" />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-h3 font-bold sm:text-2xl">{e.title}</h3>
                  <p className="mt-3 text-steel">{e.lead}</p>
                  {e.facts && (
                    <ul className="mt-5 space-y-2 text-[0.9375rem]">
                      {e.facts.map((f) => (
                        <li key={f.label} className="flex gap-2">
                          <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-blue" />
                          {f.value}
                        </li>
                      ))}
                    </ul>
                  )}
                  <span className="mt-auto flex items-center gap-1.5 pt-7 font-semibold text-blue">
                    Découvrir <span className="sr-only">{e.title}</span>
                    <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

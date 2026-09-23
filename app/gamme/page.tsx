import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactCta } from "@/sections/ContactCta";
import { categories, formatPrice, minPrice } from "@/lib/products";

export const metadata: Metadata = {
  title: "Gamme et tarifs",
  description: "Tarifs indicatifs des cylindres pré-perforés, cylindres galvano, cadres plats, cadrettes et prestations d'infographie.",
  alternates: { canonical: "/gamme" },
};

export default function GammePage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Gamme et tarifs", href: "/gamme" }]}
        title="Gamme et tarifs indicatifs"
        lead="Les prix varient selon le mesh, le nombre de couleurs et la prestation infographique. Consultez les fourchettes, puis demandez un devis précis."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <ul className="grid gap-5 md:grid-cols-2">
            {categories.map((c, i) => {
              const min = minPrice(c);
              return (
                <li key={c.slug} className={i === 0 ? "md:col-span-2" : undefined}>
                  <Link
                    href={`/gamme/${c.slug}`}
                    className="group flex h-full gap-6 rounded-md border border-line p-6 transition-colors hover:border-blue sm:p-8"
                  >
                    <div className="flex flex-1 flex-col">
                      <h2 className="text-h3 font-bold transition-colors group-hover:text-blue sm:text-2xl">{c.title}</h2>
                      <p className="mt-3 max-w-prose text-steel">{c.summary}</p>
                      <p className="mt-auto pt-6 text-[0.9375rem]">
                        {min ? <>À partir de <span className="font-bold tabular-nums">{formatPrice(min)}</span></> : <span className="text-steel">Tarif sur devis</span>}
                        <span className="block text-sm text-steel">{c.variants.length} référence{c.variants.length > 1 ? "s" : ""}</span>
                      </p>
                    </div>
                    {c.image && (
                      <div className="relative hidden w-28 shrink-0 sm:block">
                        <Image src={c.image.src} alt="" fill sizes="112px" className="object-contain" />
                      </div>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="mt-8 text-sm text-steel">Tarifs indicatifs, susceptibles d&apos;évoluer. Seul le devis fait foi.</p>
        </Container>
      </section>
      <ContactCta />
    </>
  );
}

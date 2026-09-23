import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FileText, Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { PriceRange } from "@/components/ui/PriceRange";
import { ContactCta } from "@/sections/ContactCta";
import { PriceFinder } from "@/components/forms/PriceFinder";
import { Faq } from "@/sections/Faq";
import { faq } from "@/lib/home";
import { categories, getCategory, rapports, type Variant } from "@/lib/products";

export const dynamicParams = false;
export const generateStaticParams = () => categories.map((c) => ({ slug: c.slug }));

export async function generateMetadata({ params }: PageProps<"/gamme/[slug]">): Promise<Metadata> {
  const c = getCategory((await params).slug);
  if (!c) return {};
  return { title: `${c.title} : tarifs`, description: c.summary, alternates: { canonical: `/gamme/${c.slug}` } };
}

const quoteHref = (product: string) => `/contact?sujet=devis&produit=${encodeURIComponent(product)}`;

function VariantTable({ caption, variants, showLength }: { caption: string; variants: Variant[]; showLength: boolean }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[20rem] border-collapse text-left">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="border-b border-ink text-sm text-steel">
            <th scope="col" className="py-3 pr-4 font-medium">{showLength ? "Longueur" : "Référence"}</th>
            <th scope="col" className="py-3 pr-4 font-medium">Prix indicatif</th>
            <th scope="col" className="py-3 text-right font-medium"><span className="sr-only">Action</span></th>
          </tr>
        </thead>
        <tbody>
          {variants.map((v) => (
            <tr key={v.ref} className="border-b border-line transition-colors hover:bg-mist">
              <th scope="row" className="py-4 pr-4 font-semibold tabular-nums">
                {showLength ? `${v.longueur!.toLocaleString("fr-FR")} mm` : v.ref}
              </th>
              <td className="py-4 pr-4"><PriceRange price={v.price} /></td>
              <td className="py-4 text-right">
                <Link href={quoteHref(v.ref)} className="inline-flex min-h-11 items-center gap-1.5 rounded-sm px-2 font-semibold text-blue hover:bg-sky sm:px-3">
                  <FileText aria-hidden className="size-4" />
                  <span className="sr-only sm:not-sr-only">Devis</span>
                  <span className="sr-only"> pour {v.ref}</span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function CategoryPage({ params }: PageProps<"/gamme/[slug]">) {
  const c = getCategory((await params).slug);
  if (!c) notFound();
  const groups = c.groupByRapport ? rapports(c) : [];

  return (
    <>
      <PageHeader
        crumbs={[{ label: "Gamme et tarifs", href: "/gamme" }, { label: c.title, href: `/gamme/${c.slug}` }]}
        title={c.title}
        lead={c.summary}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={quoteHref(c.title)}>Demander un devis</ButtonLink>
        </div>
      </PageHeader>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-8">
            <h2 className="text-h2 font-bold">Tarifs indicatifs</h2>
            <p className="mt-3 max-w-prose text-steel">
              Fourchettes selon les options choisies. Le prix final est confirmé sur devis.
            </p>

            {groups.length > 0 ? (
              <>
                <div className="mt-8">
                  <PriceFinder variants={c.variants} />
                </div>
                <h3 className="mt-14 text-h3 font-bold">Tous les formats</h3>
                <nav aria-label="Rapports disponibles" className="sticky top-18 z-10 -mx-5 mt-4 border-b border-line bg-white/95 px-5 py-3 sm:mx-0 sm:px-0 md:top-[6.75rem]">
                  <ul className="flex gap-2 overflow-x-auto">
                    {groups.map((r) => (
                      <li key={r}>
                        <a href={`#rapport-${r}`} className="font-display inline-flex min-h-10 items-center whitespace-nowrap rounded-sm border border-line px-3 font-semibold tabular-nums hover:border-blue hover:text-blue">
                          {r} mm
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="mt-6 space-y-14">
                  {groups.map((r) => {
                    const list = c.variants.filter((v) => v.rapport === r);
                    return (
                      <section key={r} id={`rapport-${r}`} aria-labelledby={`t-${r}`} className="scroll-mt-44">
                        <h4 id={`t-${r}`} className="text-h3 font-bold">
                          Rapport {r} mm <span className="font-normal text-steel">({list.length} longueurs)</span>
                        </h4>
                        <div className="mt-4">
                          <VariantTable caption={`${c.title}, rapport ${r} mm`} variants={list} showLength />
                        </div>
                      </section>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="mt-8">
                <VariantTable caption={c.title} variants={c.variants} showLength={false} />
              </div>
            )}
          </div>

          <aside className="min-w-0 space-y-10 lg:col-span-4" aria-label="Informations de commande">
            {c.image && (
              <div className="relative hidden aspect-[4/5] overflow-hidden rounded-md bg-mist lg:block">
                <Image src={c.image.src} alt={c.image.alt} fill sizes="30vw" className="object-contain p-6" />
              </div>
            )}
            <div>
              <h2 className="text-h3 font-bold">Pour obtenir votre devis</h2>
              <ol className="mt-4 space-y-3">
                {c.steps.map((s, i) => (
                  <li key={s} className="grid grid-cols-[1.75rem_1fr] gap-2 text-steel">
                    <span aria-hidden className="font-display font-bold text-blue">{i + 1}.</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-md bg-mist p-6">
              <h2 className="flex items-center gap-2 font-bold"><Info aria-hidden className="size-5 text-blue" /> Bon à savoir</h2>
              <ul className="mt-4 space-y-3 text-[0.9375rem] text-steel">
                {c.notes.map((n) => <li key={n}>{n}</li>)}
              </ul>
            </div>
          </aside>
        </Container>
      </section>

      <Faq items={faq.slice(0, 5)} />
      <ContactCta title="Besoin d'un rapport ou d'une longueur spécifique ?" />
    </>
  );
}

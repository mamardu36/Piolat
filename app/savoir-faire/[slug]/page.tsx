import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { ContactCta } from "@/sections/ContactCta";
import { Faq } from "@/sections/Faq";
import { faq } from "@/lib/home";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { expertises, getExpertise } from "@/lib/expertise";
import { getCategory } from "@/lib/products";

export const dynamicParams = false;
export const generateStaticParams = () => expertises.map((e) => ({ slug: e.slug }));

export async function generateMetadata({ params }: PageProps<"/savoir-faire/[slug]">): Promise<Metadata> {
  const e = getExpertise((await params).slug);
  if (!e) return {};
  return { title: e.title, description: e.metaDescription, alternates: { canonical: `/savoir-faire/${e.slug}` } };
}

export default async function ExpertisePage({ params }: PageProps<"/savoir-faire/[slug]">) {
  const e = getExpertise((await params).slug);
  if (!e) notFound();
  const related = e.relatedCategory ? getCategory(e.relatedCategory) : undefined;
  const tall = e.image && e.image.height > e.image.width;

  return (
    <>
      <PageHeader
        crumbs={[{ label: "Savoir-faire", href: "/savoir-faire" }, { label: e.title, href: `/savoir-faire/${e.slug}` }]}
        title={e.title}
        lead={e.lead}
      />

      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-5 text-lg leading-relaxed text-steel lg:col-span-6">
            {e.body.map((p) => <p key={p}>{p}</p>)}
            {related && (
              <div className="flex flex-wrap gap-3 pt-4">
                <ButtonLink href={`/gamme/${related.slug}`}>Voir les tarifs : {related.title.toLowerCase()}</ButtonLink>
                <ButtonLink href={`/contact?sujet=devis&produit=${encodeURIComponent(related.title)}`} variant="secondary">Demander un devis</ButtonLink>
              </div>
            )}
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            {e.image && (
              <div className={tall ? "relative mx-auto aspect-[228/500] max-w-56 overflow-hidden rounded-md bg-white" : "relative aspect-[4/3] overflow-hidden rounded-md bg-mist"}>
                <Image src={e.image.src} alt={e.image.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className={tall ? "object-cover object-top" : "object-contain"} />
              </div>
            )}
            {e.facts && (
              <dl className="mt-10 divide-y divide-line border-y border-line">
                {e.facts.map((f) => (
                  <div key={f.label} className="grid grid-cols-[9rem_1fr] gap-4 py-4">
                    <dt className="text-sm text-steel">{f.label}</dt>
                    <dd className="font-semibold">{f.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </Container>
      </section>

      <section aria-labelledby="autres" className="border-y border-line bg-mist py-16">
        <Container>
          <h2 id="autres" className="text-h3 font-bold">Nos autres savoir-faire</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {expertises.filter((x) => x.slug !== e.slug).map((x) => (
              <li key={x.slug}>
                <Link href={`/savoir-faire/${x.slug}`} className="group flex items-center justify-between gap-4 rounded-md bg-white p-6 ring-1 ring-line hover:ring-blue">
                  <span>
                    <span className="block text-lg font-bold group-hover:text-blue">{x.title}</span>
                    <span className="mt-1 block text-[0.9375rem] text-steel">{x.lead}</span>
                  </span>
                  <ArrowRight aria-hidden className="size-5 shrink-0 text-blue transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <Faq items={faq.slice(0, 4)} />
      <ContactCta />
    </>
  );
}

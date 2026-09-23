import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { categories, formatPrice, minPrice } from "@/lib/products";

export function PricingTeaser() {
  return (
    <section aria-labelledby="tarifs-title" className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <h2 id="tarifs-title" className="text-h2 font-bold">Des tarifs publiés, avant même le premier appel</h2>
          <p className="mt-5 text-lead text-steel">
            Estimez votre budget en quelques secondes. Le devis confirme ensuite le prix exact selon le mesh, les
            couleurs et la prestation infographique.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/gamme/cylindres-pre-perfores#estimer">Estimer le prix d&apos;un cylindre</ButtonLink>
            <ButtonLink href="/gamme" variant="secondary">Toute la gamme</ButtonLink>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <table className="w-full text-left">
            <caption className="sr-only">Prix de départ par catégorie</caption>
            <thead className="sr-only"><tr><th scope="col">Catégorie</th><th scope="col">Prix de départ</th></tr></thead>
            <tbody className="divide-y divide-line border-y border-ink">
              {categories.map((c) => {
                const min = minPrice(c);
                return (
                  <tr key={c.slug} className="group">
                    <th scope="row" className="py-5 pr-4 font-normal">
                      <Link href={`/gamme/${c.slug}`} className="text-h3 font-bold group-hover:text-blue">{c.title}</Link>
                    </th>
                    <td className="whitespace-nowrap py-5 text-right">
                      {min ? (
                        <><span className="block text-sm text-steel">à partir de</span><span className="font-display text-2xl font-bold tabular-nums">{formatPrice(min)}</span></>
                      ) : (
                        <span className="text-steel">Sur devis</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p className="mt-3 text-sm text-steel">Prix indicatifs, hors options et frais de port.</p>
        </div>
      </Container>
    </section>
  );
}

import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { faq } from "@/lib/home";

export function Faq({ items = faq }: { items?: typeof faq }) {
  return (
    <section aria-labelledby="faq-title" className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 id="faq-title" className="text-h2 font-bold">Questions fréquentes</h2>
          <p className="mt-4 text-lead text-steel">Vous ne trouvez pas votre réponse ? Appelez-nous au 04 74 59 11 59.</p>
        </div>
        <div className="divide-y divide-line border-y border-line lg:col-span-7 lg:col-start-6">
          {items.map((f) => (
            <details key={f.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-semibold hover:text-blue [&::-webkit-details-marker]:hidden">
                {f.q}
                <Plus aria-hidden className="size-5 shrink-0 text-blue transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <p className="max-w-prose pb-6 text-steel">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
    </section>
  );
}

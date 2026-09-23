import { Crosshair, Flag, RefreshCw, Ruler, Tag, Workflow } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { reasons } from "@/lib/home";

const icons = [Flag, Workflow, Crosshair, Tag, Ruler, RefreshCw];

export function Reasons() {
  return (
    <section aria-labelledby="pourquoi-title" className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-36">
            <h2 id="pourquoi-title" className="text-h2 font-bold">Pourquoi les imprimeurs nous confient leurs cylindres</h2>
            <p className="mt-5 text-lead text-steel">
              Près de 90 ans de patrimoine graphique, une équipe intégrée et un parc de gravure de pointe.
            </p>
          </div>
        </div>
        <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
          {reasons.map((r, i) => {
            const Icon = icons[i];
            return (
              <li key={r.title} className="border-t-2 border-ink pt-6">
                <Icon aria-hidden className="size-6 text-blue" strokeWidth={1.75} />
                <h3 className="mt-4 text-h3 font-bold">{r.title}</h3>
                <p className="mt-2 text-steel">{r.text}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

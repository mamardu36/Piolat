import { Container } from "@/components/ui/Container";
import { process } from "@/lib/expertise";

export function Process() {
  return (
    <section aria-labelledby="methode-title" className="bg-ink py-20 text-white sm:py-28">
      <Container>
        <h2 id="methode-title" className="max-w-2xl text-h2 font-bold">Notre méthode, en cinq étapes</h2>
        <p className="mt-4 max-w-prose text-lead text-white/70">
          Chaque projet suit le même parcours, de l&apos;analyse de votre dessin jusqu&apos;aux prototypes.
        </p>
        <ol className="mt-14 grid gap-px overflow-hidden rounded-md bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {process.map((step, i) => (
            <li key={step.title} className="bg-ink p-6 lg:p-7">
              <span aria-hidden className="font-display text-4xl font-extrabold text-blue-light [font-stretch:125%]">{i + 1}</span>
              <h3 className="mt-5 text-h3 font-bold">{step.title}</h3>
              <ul className="mt-3 space-y-1.5 text-[0.9375rem] text-white/70">
                {step.tasks.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

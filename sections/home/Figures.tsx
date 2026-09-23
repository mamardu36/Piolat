import { Container } from "@/components/ui/Container";
import { figures } from "@/lib/home";

export function Figures() {
  return (
    <section aria-label="Piolat Rotary en chiffres" className="border-b border-line">
      <Container>
        <dl className="grid grid-cols-2 divide-line lg:grid-cols-4 lg:divide-x">
          {figures.map((f, i) => (
            <div key={f.label} className={"flex flex-col py-8 sm:py-10 lg:px-8 " + (i === 0 ? "lg:pl-0" : "") + (i % 2 === 1 ? " pl-5 sm:pl-8" : " pr-5")}>
              <dt className="order-2 mt-2 text-[0.9375rem] text-steel">{f.label}</dt>
              <dd className="font-display order-1 text-4xl font-extrabold tabular-nums text-ink [font-stretch:120%] sm:text-5xl">{f.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

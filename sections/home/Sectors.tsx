import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sectors } from "@/lib/home";

export function Sectors() {
  return (
    <section aria-labelledby="secteurs-title" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="secteurs-title"
          split
          title="Au service de tout le textile et de la décoration"
          intro="Nous travaillons avec les principaux acteurs français et européens, de la mode aux applications industrielles."
        />
        <ul className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-md bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((s) => (
            <li key={s.title} className="bg-white p-6">
              <h3 className="font-bold">{s.title}</h3>
              <p className="mt-1 text-[0.9375rem] text-steel">{s.text}</p>
            </li>
          ))}
          <li className="bg-motif relative bg-sky">
            <Link href="/contact" className="absolute inset-0 flex items-end bg-blue/85 p-6 font-semibold text-white transition-colors hover:bg-blue">
              <span className="flex items-center gap-2">Votre secteur n&apos;y figure pas ? Parlons-en <ArrowRight aria-hidden className="size-4" /></span>
            </Link>
            <div className="invisible p-6" aria-hidden><p className="font-bold">.</p><p>.</p></div>
          </li>
        </ul>
      </Container>
    </section>
  );
}

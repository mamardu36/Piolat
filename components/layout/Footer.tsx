import Link from "next/link";
import { legalNav, mainNav, site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  const tel = `tel:${site.phone.replace(/\s/g, "")}`;
  return (
    <footer className="bg-ink pb-14 text-white/80 lg:pb-0">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.4fr]">
        <div>
          <p className="font-display text-xl font-bold text-white">Piolat Rotary</p>
          <address className="mt-4 not-italic leading-relaxed">
            {site.address.street}<br />
            {site.address.postalCode} {site.address.city}
          </address>
          <p className="mt-4">
            <a href={tel} className="font-semibold text-white hover:underline">{site.phoneDisplay}</a><br />
            <a href={`mailto:${site.email}`} className="hover:text-white hover:underline">{site.email}</a>
          </p>
          <p className="mt-4 text-sm text-white/60">{site.hours}</p>
        </div>

        {mainNav.filter((i) => i.children).map((item) => (
          <nav key={item.href} aria-label={item.label}>
            <p className="font-semibold text-white">
              <Link href={item.href} className="hover:underline">{item.label}</Link>
            </p>
            <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
              {item.children!.map((c) => (
                <li key={c.href}><Link href={c.href} className="hover:text-white hover:underline">{c.label}</Link></li>
              ))}
            </ul>
          </nav>
        ))}

        <NewsletterForm />
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Piolat Rotary. SIRET {site.siret}.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><Link href="/societe" className="hover:text-white hover:underline">La société</Link></li>
            <li><Link href="/contact" className="hover:text-white hover:underline">Contact</Link></li>
            {legalNav.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-white hover:underline">{l.label}</Link></li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}

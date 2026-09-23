import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="hidden bg-ink text-white/80 md:block">
        <Container className="flex h-9 items-center justify-end gap-6 text-[0.8125rem]">
          <span className="mr-auto">Fabrication française à Saint-Georges-d&apos;Espéranche (Isère)</span>
          <span className="hidden lg:inline">{site.hours}</span>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-center gap-1.5 font-medium text-white hover:underline">
            <Phone aria-hidden className="size-3.5" /> {site.phoneDisplay}
          </a>
        </Container>
      </div>
      <Container className="flex h-18 items-center justify-between gap-6">
        <Link href="/" className="shrink-0" aria-label="Piolat Rotary, retour à l'accueil">
          <Image src="/images/logo-piolat.webp" alt="Piolat" width={536} height={195} priority className="h-10 w-auto sm:h-11" />
        </Link>
        <DesktopNav />
        <div className="flex items-center gap-3">
          <div className="hidden sm:block"><ButtonLink href="/contact?sujet=devis">Demander un devis</ButtonLink></div>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}

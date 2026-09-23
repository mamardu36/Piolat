import Link from "next/link";
import { FileText, Phone } from "lucide-react";
import { site } from "@/lib/site";

/** Barre d'action fixe en bas d'écran, uniquement sur mobile et tablette. */
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-line bg-white pb-[env(safe-area-inset-bottom)] lg:hidden">
      <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex min-h-14 items-center justify-center gap-2 font-semibold">
        <Phone aria-hidden className="size-4 text-blue" /> Appeler
      </a>
      <Link href="/contact?sujet=devis" className="flex min-h-14 items-center justify-center gap-2 bg-blue font-semibold text-white">
        <FileText aria-hidden className="size-4" /> Demander un devis
      </Link>
    </div>
  );
}

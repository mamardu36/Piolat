"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { mainNav, site } from "@/lib/site";
import { buttonClass } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Ferme le menu à chaque changement de page
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && panelRef.current) {
        const f = panelRef.current.querySelectorAll<HTMLElement>("a, button");
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="menu-mobile"
        className="-mr-2 flex size-11 items-center justify-center rounded-sm hover:bg-mist"
      >
        <Menu aria-hidden className="size-6" />
        <span className="sr-only">Ouvrir le menu</span>
      </button>

      <div
        id="menu-mobile"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        hidden={!open}
        className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-white"
      >
        <div className="flex h-18 shrink-0 items-center justify-between border-b border-line px-5 sm:px-8">
          <span className="font-display text-lg font-bold">Menu</span>
          <button
            type="button"
            onClick={() => { setOpen(false); toggleRef.current?.focus(); }}
            className="-mr-2 flex size-11 items-center justify-center rounded-sm hover:bg-mist"
          >
            <X aria-hidden className="size-6" />
            <span className="sr-only">Fermer le menu</span>
          </button>
        </div>

        <nav aria-label="Navigation mobile" className="flex-1 px-5 py-4 sm:px-8">
          <ul className="divide-y divide-line">
            {mainNav.map((item) => (
              <li key={item.href} className="py-3">
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={cn("font-display block py-2 text-2xl font-bold", pathname === item.href && "text-blue")}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mb-1 mt-1 space-y-0.5 border-l-2 border-line pl-4">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          aria-current={pathname === c.href ? "page" : undefined}
                          className={cn("block py-2 text-base text-steel hover:text-ink", pathname === c.href && "font-semibold text-blue")}
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="sticky bottom-0 grid shrink-0 gap-3 border-t border-line bg-white px-5 py-4 sm:grid-cols-2 sm:px-8">
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className={buttonClass("secondary")}>
            <Phone aria-hidden className="size-4" /> {site.phoneDisplay}
          </a>
          <Link href="/contact?sujet=devis" className={buttonClass("primary")}>Demander un devis</Link>
        </div>
      </div>
    </div>
  );
}

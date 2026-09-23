"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Variant } from "@/lib/products";
import { buttonClass } from "@/components/ui/Button";
import { inputClass } from "./Field";

const eur = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

/** Estimation instantanée du prix d'un cylindre selon rapport et longueur. */
export function PriceFinder({ variants }: { variants: Variant[] }) {
  const rapports = useMemo(() => [...new Set(variants.map((v) => v.rapport))].sort((a, b) => a - b), [variants]);
  const [rapport, setRapport] = useState(rapports[0]);
  const lengths = variants.filter((v) => v.rapport === rapport).map((v) => v.longueur!);
  const [longueur, setLongueur] = useState(lengths[0]);
  const current = variants.find((v) => v.rapport === rapport && v.longueur === longueur) ?? variants.find((v) => v.rapport === rapport)!;

  return (
    <div id="estimer" className="scroll-mt-32 overflow-hidden rounded-md bg-night text-white">
      <div className="grid gap-6 p-6 sm:grid-cols-2 sm:p-8">
        <div>
          <label htmlFor="pf-rapport" className="mb-1.5 block text-[0.9375rem] font-semibold">Rapport</label>
          <select
            id="pf-rapport"
            value={rapport}
            onChange={(e) => {
              const r = Number(e.target.value);
              setRapport(r);
              setLongueur(variants.find((v) => v.rapport === r)!.longueur!);
            }}
            className={inputClass()}
          >
            {rapports.map((r) => <option key={r} value={r}>{r} mm</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="pf-longueur" className="mb-1.5 block text-[0.9375rem] font-semibold">Longueur</label>
          <select id="pf-longueur" value={current.longueur} onChange={(e) => setLongueur(Number(e.target.value))} className={inputClass()}>
            {lengths.map((l) => <option key={l} value={l}>{l.toLocaleString("fr-FR")} mm</option>)}
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-6 border-t border-white/15 bg-white/5 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8" aria-live="polite">
        <div>
          <p className="text-sm text-white/70">Prix indicatif, cylindre {current.rapport} × {current.longueur?.toLocaleString("fr-FR")} mm</p>
          {current.price ? (
            <p className="font-display mt-1 text-3xl font-extrabold tabular-nums sm:text-4xl">
              {eur.format(current.price.from)} <span className="text-xl font-semibold text-white/60">à</span> {eur.format(current.price.to)}
            </p>
          ) : (
            <p className="font-display mt-1 text-3xl font-extrabold">Sur devis</p>
          )}
          <p className="mt-1 text-sm text-white/60">Selon le mesh, les couleurs et la prestation infographique.</p>
        </div>
        <Link href={`/contact?sujet=devis&produit=${encodeURIComponent(current.ref)}`} className={buttonClass("inverse", "shrink-0")}>
          Demander un devis pour ce format
        </Link>
      </div>
    </div>
  );
}

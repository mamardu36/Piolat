/**
 * Élément signature : un cylindre d'impression rotative qui tourne et « imprime » le motif.
 * Purement CSS (aucun JS). L'animation est désactivée si l'utilisateur réduit les animations.
 */
export function Cylinder() {
  return (
    <div aria-hidden className="relative mx-auto flex h-[30rem] w-[19rem] items-center justify-center">
      {/* Cote du rapport : une répétition du motif */}
      <div className="absolute left-0 top-[4.5rem] flex h-40 items-center gap-2">
        <div className="relative h-full w-3 border-y-2 border-l-2 border-white/40" />
        <p className="w-16 text-xs leading-tight text-white/60">1 rapport<br /><span className="font-display text-sm font-bold text-white">640 mm</span></p>
      </div>

      <div className="relative ml-20 h-[26rem] w-44">
        {/* Corps du cylindre */}
        <div className="bg-motif cylinder-roll absolute inset-0 overflow-hidden rounded-b-[5.5rem_1.25rem] bg-sky">
          {/* Volume : ombre et reflet métallique */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(20_25_32/.75)_0%,rgb(20_25_32/.1)_22%,rgb(255_255_255/.45)_40%,rgb(255_255_255/0)_55%,rgb(20_25_32/.35)_80%,rgb(20_25_32/.8)_100%)]" />
        </div>
        {/* Embout supérieur */}
        <div className="absolute -top-5 left-0 h-10 w-44 rounded-[50%] border border-white/30 bg-[linear-gradient(90deg,#6b7480,#dfe4ea_45%,#9aa3ad_70%,#4d555f)]">
          <div className="absolute inset-x-6 inset-y-2 rounded-[50%] bg-night/80" />
        </div>
      </div>
    </div>
  );
}

/** Bande de « tissu imprimé » qui défile, sortie du cylindre. */
export function PrintedBand({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={"bg-motif cylinder-roll-x h-20 bg-sky sm:h-24 " + className}>
      <div className="h-full w-full bg-[linear-gradient(180deg,rgb(20_25_32/.35),transparent_35%,transparent_75%,rgb(20_25_32/.2))]" />
    </div>
  );
}

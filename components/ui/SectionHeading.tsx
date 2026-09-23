import { cn } from "@/lib/cn";

type Props = { id: string; title: string; intro?: string; tone?: "light" | "dark"; className?: string; split?: boolean };

/** Titre de section cohérent sur tout le site. `split` place l'intro à droite sur grand écran. */
export function SectionHeading({ id, title, intro, tone = "light", className, split }: Props) {
  const muted = tone === "dark" ? "text-white/70" : "text-steel";
  return (
    <div className={cn(split ? "grid gap-5 lg:grid-cols-12 lg:items-end" : "max-w-3xl", className)}>
      <h2 id={id} className={cn("text-h2 font-bold", split && "lg:col-span-6")}>{title}</h2>
      {intro && <p className={cn("max-w-prose text-lead", muted, split ? "lg:col-span-5 lg:col-start-8" : "mt-4")}>{intro}</p>}
    </div>
  );
}

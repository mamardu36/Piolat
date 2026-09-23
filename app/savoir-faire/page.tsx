import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Expertises } from "@/sections/home/Expertises";
import { Process } from "@/sections/home/Process";
import { ContactCta } from "@/sections/ContactCta";

export const metadata: Metadata = {
  title: "Savoir-faire",
  description: "Infographie textile, gravure de cylindres sérigraphiques et fabrication de cylindres galvanos techniques en nickel.",
  alternates: { canonical: "/savoir-faire" },
};

export default function SavoirFairePage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Savoir-faire", href: "/savoir-faire" }]}
        title="Nos savoir-faire"
        lead="Trois métiers complémentaires pour préparer, graver et fabriquer vos outils d'impression."
      />
      <Expertises />
      <Process />
      <ContactCta />
    </>
  );
}

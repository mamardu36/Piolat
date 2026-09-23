import type { Metadata } from "next";
import { Hero } from "@/sections/home/Hero";
import { Figures } from "@/sections/home/Figures";
import { Reasons } from "@/sections/home/Reasons";
import { Expertises } from "@/sections/home/Expertises";
import { PricingTeaser } from "@/sections/home/PricingTeaser";
import { Process } from "@/sections/home/Process";
import { Sectors } from "@/sections/home/Sectors";
import { Heritage } from "@/sections/home/Heritage";
import { Faq } from "@/sections/Faq";
import { ContactCta } from "@/sections/ContactCta";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Figures />
      <Reasons />
      <Expertises />
      <PricingTeaser />
      <Process />
      <Sectors />
      <Heritage />
      <Faq />
      <ContactCta />
    </>
  );
}

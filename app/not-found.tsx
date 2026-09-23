import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="py-24 sm:py-32">
      <p className="font-display text-7xl font-extrabold text-blue [font-stretch:125%]">404</p>
      <h1 className="mt-6 text-h1 font-bold">Cette page n&apos;existe pas ou a été déplacée</h1>
      <p className="mt-4 max-w-prose text-lead text-steel">
        Le site a été entièrement refait : les anciennes adresses ont peut-être changé. Repartez de l&apos;accueil ou consultez directement la gamme.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/">Retour à l&apos;accueil</ButtonLink>
        <ButtonLink href="/gamme" variant="secondary">Voir la gamme et les tarifs</ButtonLink>
        <ButtonLink href="/contact" variant="secondary">Nous contacter</ButtonLink>
      </div>
    </Container>
  );
}

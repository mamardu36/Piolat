import { formatPrice, type PriceRange as P } from "@/lib/products";

export function PriceRange({ price }: { price: P }) {
  if (!price) return <span className="text-steel">Sur devis</span>;
  return (
    <span className="tabular-nums sm:whitespace-nowrap">
      <span className="text-steel">de </span>
      <span className="font-semibold">{formatPrice(price.from)}</span>
      <span className="text-steel"> à </span>
      <span className="font-semibold">{formatPrice(price.to)}</span>
    </span>
  );
}

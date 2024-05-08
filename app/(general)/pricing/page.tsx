import type { Metadata } from "next";

export const metadata : Metadata = {
    title: 'Pricing Title',
    description: 'Pricing Description',
    keywords: ['About page', 'Charlie', 'Lubricantes']
}

function PricingPage() {
  return (
      <span className="text-5xl">PricingPage</span>
  );
}

export default PricingPage;

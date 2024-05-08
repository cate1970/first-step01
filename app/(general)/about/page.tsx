import type { Metadata } from "next";

export const metadata : Metadata = {
    title: 'SEO Title',
    description: 'SEO Description',
    keywords: ['About page', 'Charlie', 'Lubricantes']
}

function AboutPage() {
  return (
      <span className="text-5xl">AboutPage</span>
  );
}

export default AboutPage;

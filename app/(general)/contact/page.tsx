import type { Metadata } from "next";

export const metadata : Metadata = {
    title: 'Contact Title',
    description: 'Contact Description',
    keywords: ['About page', 'Charlie', 'Lubricantes']
}

function ContactPage() {
  return (
      <span className="text-5xl">ContactPage</span>
    
  );
}

export default ContactPage;

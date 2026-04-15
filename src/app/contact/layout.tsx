import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Plan een gratis gesprek",
  description:
    "Neem contact op met Loopless voor een vrijblijvend gesprek over AI-automatisering. Vul de intake in en ontvang binnen 24 uur een reactie.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Plan een gratis gesprek",
    description:
      "Neem contact op met Loopless voor een vrijblijvend gesprek over AI-automatisering voor jouw MKB-bedrijf.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

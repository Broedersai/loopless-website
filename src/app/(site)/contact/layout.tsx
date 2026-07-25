import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Plan een gratis gesprek",
  description:
    "Neem contact op met Loopless voor een vrijblijvend gesprek over het werk dat bij jullie blijft liggen. Reactie binnen 24 uur.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Plan een gratis gesprek",
    description:
      "Neem contact op met Loopless voor een vrijblijvend gesprek over het werk dat bij jullie blijft liggen.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Plan een gratis gesprek",
    description:
      "Neem contact op met Loopless voor een vrijblijvend gesprek over het werk dat bij jullie blijft liggen.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

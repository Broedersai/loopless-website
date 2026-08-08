import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://loopless.nl"),
  title: {
    default: "Loopless — AI-automatisering voor het MKB",
    template: "%s | Loopless",
  },
  description:
    "Loopless bouwt AI-systemen die het uitzoekwerk doen voor het MKB: leads uitzoeken, offertes klaarzetten, vragen beantwoorden uit eigen documentatie. Actief vanuit Tiel en Breda.",
  keywords:
    "AI automatisering, MKB automatisering, procesautomatisering, lead qualification, offerte automatisering, kennisbank AI, Loopless, Tiel, Breda, Nederland",
  authors: [{ name: "Wessel Broeders" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Loopless",
    title: "Loopless — AI-automatisering voor het MKB",
    description:
      "Loopless bouwt AI-systemen die het uitzoekwerk doen voor het MKB: leads uitzoeken, offertes klaarzetten, vragen beantwoorden uit eigen documentatie.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loopless — AI-automatisering voor het MKB",
    description:
      "Loopless bouwt AI-systemen die het uitzoekwerk doen voor het MKB: leads uitzoeken, offertes klaarzetten, vragen beantwoorden uit eigen documentatie.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Loopless",
  legalName: "Broeders Digital",
  url: "https://loopless.nl",
  logo: "https://loopless.nl/logo-icon-final.png",
  description:
    "AI-automatisering voor het MKB. Systemen die het uitzoekwerk doen: leads uitzoeken, offertes klaarzetten, vragen beantwoorden uit eigen documentatie.",
  founder: {
    "@type": "Person",
    name: "Wessel Broeders",
    jobTitle: "Oprichter",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tiel",
    addressRegion: "Gelderland",
    addressCountry: "NL",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "wessel@loopless.nl",
    contactType: "sales",
    availableLanguage: "Dutch",
  },
  sameAs: [
    "https://www.linkedin.com/in/wessel-broeders-250767221/",
  ],
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Loopless",
  url: "https://loopless.nl",
  image: "https://loopless.nl/logo-icon-final.png",
  description:
    "AI-automatisering voor Nederlandse MKB-bedrijven. Systemen die het uitzoekwerk doen: leads uitzoeken, offertes klaarzetten, vragen beantwoorden uit eigen documentatie.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tiel",
    addressRegion: "Gelderland",
    addressCountry: "NL",
  },
  areaServed: ["Nederland", "Tiel", "Breda", "Gelderland", "Noord-Brabant"],
  priceRange: "€€",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

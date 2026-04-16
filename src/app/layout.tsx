import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

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
    "Loopless automatiseert repetitieve processen voor het MKB met AI. Lead qualification, offerte-automatisering en kennisbanken op maat. Actief vanuit Tiel en Breda.",
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
      "Loopless automatiseert repetitieve processen voor het MKB met AI. Lead qualification, offerte-automatisering en kennisbanken op maat.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loopless — AI-automatisering voor het MKB",
    description:
      "Loopless automatiseert repetitieve processen voor het MKB met AI. Lead qualification, offerte-automatisering en kennisbanken op maat.",
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
    "AI-automatisering voor het MKB. Lead qualification, offerte-automatisering en interne kennisbanken op maat.",
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

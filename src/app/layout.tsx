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
  title: {
    default: "Loopless — Doorbreek de loop van handmatig werk.",
    template: "%s | Loopless",
  },
  description:
    "Loopless automatiseert repetitieve processen voor het MKB met AI. Geen overbodige stappen, alleen processen die werken.",
  keywords: "AI automatisering, MKB, procesoptimalisatie, Loopless",
  authors: [{ name: "Wessel Broeders" }],
  icons: {
    icon: "/logo-icon-final.png",
    apple: "/logo-icon-final.png",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Loopless",
    title: "Loopless — Minder handen. Betere resultaten.",
    description:
      "Loopless automatiseert repetitieve processen voor het MKB met AI. Geen overbodige stappen, alleen processen die werken.",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Loopless" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

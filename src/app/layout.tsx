import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Loopless — Minder handen. Betere resultaten.",
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
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { PageGlow } from "@/components/page-glow";
import { Configurator } from "./configurator";

// Stil live (besluit 2026-07-23): geen nav-link en noindex tot de
// frame-zettende contentposts gedraaid hebben (doorvoerplan stap 8).
export const metadata: Metadata = {
  title: "Configurator — welk werk kan een systeem bij jou overnemen?",
  description:
    "Beantwoord een paar vragen over waar de tijd blijft hangen en zie welk uitzoekwerk een systeem bij jouw bedrijf kan overnemen. AI-automatisering voor het MKB.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/configurator" },
};

export default function ConfiguratorPage() {
  return (
    <>
      <PageGlow />
      <section className="relative pb-24 pt-40">
        <Configurator />
      </section>
    </>
  );
}

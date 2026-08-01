import type { Metadata } from "next";
import { PageGlow } from "@/components/page-glow";
import { Configurator } from "./configurator";

// Zichtbaar sinds 2026-07-25 (besluit Wessel): nav-link erbij, noindex eraf,
// primaire route naast het contactformulier.
export const metadata: Metadata = {
  title: "Welk werk kan een systeem bij jou overnemen?",
  description:
    "Beantwoord een paar vragen over waar de tijd blijft hangen en zie welk uitzoekwerk een systeem bij jouw bedrijf kan overnemen. AI-automatisering voor het MKB.",
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

import Link from "next/link";
import { Target, FileText, BarChart3, Cog } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { SectionWithParticles } from "@/components/section-with-particles";
import { ShinyButton } from "@/components/ui/shiny-button";

const diensten = [
  {
    icon: <Target className="h-6 w-6 text-[#4F8EF7]" />,
    title: "Lead Qualification Automatisering",
    description:
      "Systemen die automatisch leads zoeken, screenen en klaarzetten voor je team. Je team logt 's ochtends in en heeft direct een lijst klaarstaan.",
    voorWie: "Recruiters, salesteams, B2B bedrijven",
    oplevert: [
      "Uren bespaard op handmatig zoekwerk",
      "Meer gekwalificeerde leads",
      "24/7 actief, ook buiten kantooruren",
    ],
  },
  {
    icon: <FileText className="h-6 w-6 text-[#4F8EF7]" />,
    title: "Offerte- en RFP-automatisering",
    description:
      "Automatisch concept-voorstellen genereren op basis van eerdere offertes en productinformatie. Van dagen werk naar uren.",
    voorWie: "Bedrijven met veel offertewerk",
    oplevert: [
      "Sneller reageren op aanvragen",
      "Consistentere voorstellen",
      "Meer tijd voor strategie",
    ],
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-[#4F8EF7]" />,
    title: "AI Marketing Rapportage",
    description:
      "Geautomatiseerde maandelijkse marketingrapporten. Data ophalen uit GA4, Meta Ads en Google Ads, analyseren via AI, branded PDF genereren.",
    voorWie: "Marketingbureaus, marketing managers",
    oplevert: [
      "Van 40 uur naar 2 uur per maand",
      "Altijd consistente rapporten",
      "Goedkeurstap behouden",
    ],
  },
  {
    icon: <Cog className="h-6 w-6 text-[#4F8EF7]" />,
    title: "Procesautomatisering op maat",
    description:
      "Voor elk repetitief, handmatig proces. We beginnen bij het probleem, niet bij de technologie.",
    voorWie: "Elk MKB-bedrijf met handmatige bottlenecks",
    oplevert: [
      "Maatwerk oplossing",
      "Schaalbaar en betrouwbaar",
      "Minder fouten, meer output",
    ],
  },
];

export default function DienstenPage() {
  return (
    <>
      {/* Hero */}
      <SectionWithParticles className="pb-20 pt-40" particleCount={350} speed={0.4} trailOpacity={0.06}>
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl">
            Wat we automatiseren
          </h1>
          <p className="mx-auto max-w-[600px] text-xl text-[#6B6B8A]">
            We beginnen bij jouw probleem — niet bij de technologie. Elk proces
            dat handmatig draait, kan slimmer.
          </p>
        </div>
      </SectionWithParticles>

      {/* Diensten */}
      <section className="py-24 md:py-32">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-6">
          {diensten.map((dienst) => (
            <div
              key={dienst.title}
              className="relative rounded-2xl border border-[#1E1E35] p-2"
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              <div className="relative rounded-xl border border-[#1E1E35] bg-[#13131F] p-8 md:p-12">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#4F8EF7]/10">
                    {dienst.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    {dienst.title}
                  </h2>
                </div>

                <p className="mb-8 max-w-[700px] text-lg text-[#E8E8F0]">
                  {dienst.description}
                </p>

                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#4F8EF7]">
                      Voor wie
                    </h4>
                    <p className="text-[#6B6B8A]">{dienst.voorWie}</p>
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#4F8EF7]">
                      Wat het oplevert
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {dienst.oplevert.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-[#6B6B8A]"
                        >
                          <span className="font-bold text-[#4F8EF7]">→</span>{" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <SectionWithParticles className="py-24 md:py-32" particleCount={300} speed={0.4} trailOpacity={0.06}>
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Weet je niet welke dienst past?
          </h2>
          <p className="mx-auto mb-8 max-w-[500px] text-lg text-[#6B6B8A]">
            Plan een gratis gesprek. We kijken samen waar de meeste winst zit in
            jouw processen.
          </p>
          <Link href="/contact">
            <ShinyButton>Plan een gratis gesprek</ShinyButton>
          </Link>
        </div>
      </SectionWithParticles>
    </>
  );
}

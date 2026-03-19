import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Van lead qualification tot procesautomatisering — ontdek hoe Loopless jouw team tijd bespaart met AI-oplossingen op maat.",
};
import { Target, FileText, BarChart3, Cog } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { SectionWithParticles } from "@/components/section-with-particles";
import { ShinyButton } from "@/components/ui/shiny-button";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/animate-in";

const diensten = [
  {
    icon: <Target className="h-6 w-6 text-[#4F8EF7]" />,
    title: "Lead Qualification Automatisering",
    description:
      "Elke ochtend een lijst met relevante leads klaar — zonder dat je team er iets voor hoeft te doen. Zoeken, screenen en klaarzetten gebeurt volledig automatisch.",
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
    title: "Slimme AI-assistenten voor je bedrijfsdata",
    description:
      "Een AI-assistent die je bedrijfsdocumenten, handleidingen en data kent. Stel een vraag en krijg direct het juiste antwoord — zonder zelf te zoeken.",
    voorWie: "Bedrijven met veel interne documenten, kennisbanken of klantdata",
    oplevert: [
      "Direct antwoord in plaats van lang zoeken",
      "Altijd actuele en betrouwbare informatie",
      "Minder afhankelijk van die ene collega die alles weet",
    ],
  },
  {
    icon: <Cog className="h-6 w-6 text-[#4F8EF7]" />,
    title: "Procesautomatisering op maat",
    description:
      "Voor elk repetitief, handmatig proces. We beginnen bij het probleem, niet bij de technologie.",
    voorWie: "Elk MKB-bedrijf met taken die te veel tijd kosten",
    oplevert: [
      "Oplossing die past bij jouw werkwijze",
      "Groeit mee met je bedrijf",
      "Minder fouten, meer output",
    ],
  },
];

export default function DienstenPage() {
  return (
    <SectionWithParticles className="pb-24 pt-40 md:pb-32" particleCount={500} speed={0.4} trailOpacity={0.07}>
      {/* Hero */}
      <AnimateIn className="mx-auto max-w-[1200px] px-6 text-center">
        <h1 className="mb-4 font-[family-name:var(--font-heading)] text-5xl font-bold text-white md:text-6xl">
          Wat we automatiseren
        </h1>
        <p className="mx-auto max-w-[600px] text-xl text-[#6B6B8A]">
          We beginnen bij jouw probleem — niet bij de technologie. Elk proces
          dat handmatig draait, kan slimmer.
        </p>
      </AnimateIn>

      {/* Diensten */}
      <StaggerContainer className="mx-auto mt-24 flex max-w-[1200px] flex-col gap-8 px-6 md:mt-32" staggerDelay={0.12}>
        {diensten.map((dienst) => (
          <StaggerItem key={dienst.title}>
            <div className="relative rounded-2xl border border-[#1E1E35] p-2">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              <div className="relative overflow-hidden rounded-xl border border-[#1E1E35] bg-[#0D0D1A]/80 backdrop-blur-sm p-8 md:p-12">
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#4F8EF7]/10 to-transparent" />
                <div className="relative mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#4F8EF7]/15 shadow-[0_0_20px_#4F8EF730]">
                    {dienst.icon}
                  </div>
                  <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white">
                    {dienst.title}
                  </h2>
                </div>

                <p className="mb-8 max-w-[700px] text-lg text-[#E8E8F0]">
                  {dienst.description}
                </p>

                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h4 className="mb-2 font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-[#4F8EF7]">
                      Voor wie
                    </h4>
                    <p className="text-[#6B6B8A]">{dienst.voorWie}</p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-[#4F8EF7]">
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
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* CTA */}
      <AnimateIn className="mx-auto mt-24 max-w-[1200px] px-6 text-center md:mt-32">
        <h2 className="mb-4 font-[family-name:var(--font-heading)] text-4xl font-bold text-white">
          Weet je niet welke dienst past?
        </h2>
        <p className="mx-auto mb-8 max-w-[500px] text-lg text-[#6B6B8A]">
          Plan een gratis gesprek. We kijken samen waar de meeste winst zit in
          jouw processen.
        </p>
        <Link href="/contact">
          <ShinyButton>Plan een gratis gesprek</ShinyButton>
        </Link>
      </AnimateIn>
    </SectionWithParticles>
  );
}

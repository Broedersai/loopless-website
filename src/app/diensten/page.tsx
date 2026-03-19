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
    title: "Lead qualification automatisering",
    subtitle: "Elke ochtend een lijst met gekwalificeerde leads — zonder dat je team er iets voor hoeft te doen.",
    paragraphs: [
      "Recruiters en salesteams verliezen dagelijks uren aan handmatig zoeken, checken en invoeren. Dat stopt.",
      "Het systeem zoekt, screent en kwalificeert leads op basis van jouw criteria. 24/7, op de achtergrond.",
    ],
    highlight: "Bewezen resultaat: vuljevacature.nl logt 's ochtends in en heeft direct een lijst klaarstaan. Geen handmatig zoekwerk meer.",
    voorWie: "Recruitmentbureaus, salesteams, B2B bedrijven",
  },
  {
    icon: <FileText className="h-6 w-6 text-[#4F8EF7]" />,
    title: "Offerte- en RFP-automatisering",
    subtitle: "Te traag met je voorstel is een gemiste deal.",
    paragraphs: [
      "Offertes opstellen kost tijd die je niet hebt. Steeds opnieuw dezelfde informatie opzoeken, kopiëren en consistent krijgen.",
      "Wij bouwen een systeem dat automatisch een concept genereert op basis van jouw eerdere offertes en productinformatie. Jij controleert en verstuurt.",
      "Van dagen werk naar enkele uren per voorstel.",
    ],
    voorWie: "Bedrijven die veel tijd kwijt zijn aan offertes en daardoor kansen mislopen",
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-[#4F8EF7]" />,
    title: "Interne kennisbank",
    subtitle: "Hoeveel tijd verliest je team met zoeken naar informatie die er al is?",
    paragraphs: [
      "Handleidingen, procedures, productinfo — het bestaat allemaal. Maar niemand weet waar het staat. Dus wordt er gebeld, gezocht en gewacht.",
      "Wij bouwen een AI-assistent die al je documenten kent. Medewerkers stellen een vraag en krijgen binnen seconden een antwoord met bronverwijzing.",
      "Geen zoeken meer. Geen collega lastigvallen. Gewoon: vraag stellen, antwoord krijgen.",
    ],
    voorWie: "Bedrijven met veel interne documenten, handleidingen of procedures",
  },
  {
    icon: <Cog className="h-6 w-6 text-[#4F8EF7]" />,
    title: "Procesautomatisering op maat",
    subtitle: "Heb je een proces dat veel tijd kost maar hier niet tussen staat?",
    paragraphs: [
      "Wij beginnen altijd bij het probleem, nooit bij de technologie. Eerst brengen we in kaart waar tijd verloren gaat. Dan pas bouwen we een oplossing die past bij hoe jij werkt.",
    ],
    voorWie: "Elk MKB-bedrijf met taken die te veel tijd kosten",
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
        <p className="mx-auto max-w-[700px] text-xl text-[#6B6B8A]">
          Je betaalt medewerkers om te denken, niet om te kopiëren en plakken. Wij halen het handmatige werk eruit.
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

                <p className="relative mb-6 max-w-[700px] text-lg font-medium text-[#E8E8F0]">
                  {dienst.subtitle}
                </p>

                <div className="relative mb-8 flex max-w-[700px] flex-col gap-4">
                  {dienst.paragraphs.map((p) => (
                    <p key={p} className="text-[#6B6B8A]">{p}</p>
                  ))}
                </div>

                {dienst.highlight && (
                  <div className="relative mb-8 rounded-lg border border-[#4F8EF7]/20 bg-[#4F8EF7]/5 px-6 py-4">
                    <p className="text-[#E8E8F0]">{dienst.highlight}</p>
                  </div>
                )}

                <div className="relative">
                  <h4 className="mb-2 font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-[#4F8EF7]">
                    Voor wie
                  </h4>
                  <p className="text-[#6B6B8A]">{dienst.voorWie}</p>
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

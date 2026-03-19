import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Over mij",
  description:
    "Maak kennis met Wessel Broeders — oprichter van Loopless. Bedrijfskunde-achtergrond, passie voor AI en procesautomatisering.",
};
import Image from "next/image";
import { SectionWithParticles } from "@/components/section-with-particles";
import { NoisePatternCard, NoisePatternCardBody } from "@/components/ui/card-with-noise-patter";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ShinyButton } from "@/components/ui/shiny-button";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/animate-in";

export default function OverPage() {
  return (
    <>
      {/* Hero */}
      <SectionWithParticles className="pb-20 pt-40" particleCount={350} speed={0.4} trailOpacity={0.06}>
        <AnimateIn className="mx-auto max-w-[1200px] px-6 text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-5xl font-bold text-white md:text-6xl">
            Wie zit er achter Loopless?
          </h1>
        </AnimateIn>
      </SectionWithParticles>

      {/* Over Wessel */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[800px] px-6">
          <AnimateIn>
            <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">
              <div className="relative h-[200px] w-[200px] flex-shrink-0 overflow-hidden rounded-full border-2 border-[#1E1E35]">
                <Image
                  src="/wessel.jpg"
                  alt="Wessel Broeders"
                  fill
                  className="object-cover object-top"
                  sizes="200px"
                />
              </div>

              <div>
                <h2 className="mb-4 font-[family-name:var(--font-heading)] text-3xl font-bold text-white">
                  Wessel Broeders
                </h2>
                <p className="mb-4 text-lg text-[#E8E8F0]">
                  Oprichter van Loopless en laatste jaar Bedrijfskunde student aan
                  Avans Breda. Ik help MKB-bedrijven om tijd terug te winnen door
                  processen slim te automatiseren.
                </p>
                <p className="mb-4 text-[#6B6B8A]">
                  Mijn aanpak is altijd hetzelfde: eerst begrijpen waar jouw team
                  tijd verliest, dan pas bouwen. Geen onnodige technologie, alleen
                  oplossingen die direct resultaat opleveren.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Waarom Loopless */}
      <section className="bg-[#13131F] py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimateIn className="mb-12 text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white">Waarom Loopless</h2>
          </AnimateIn>
          <AnimateIn className="mx-auto max-w-[700px]" delay={0.1}>
            <NoisePatternCard className="rounded-2xl border-[#1E1E35]">
              <NoisePatternCardBody className="p-8 md:p-10 text-center">
                <p className="text-lg leading-relaxed text-[#E8E8F0]">
                  Tijdens mijn studie en werkervaring zag ik steeds hetzelfde
                  patroon: teams die vastlopen in handmatig werk. Slimme mensen die
                  uren besteden aan taken die een systeem in minuten kan doen.
                  Loopless is ontstaan vanuit de overtuiging dat AI niet het doel is,
                  maar het middel — om mensen vrij te maken voor werk dat er écht toe
                  doet.
                </p>
              </NoisePatternCardBody>
            </NoisePatternCard>
          </AnimateIn>
        </div>
      </section>

      {/* Aanpak */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimateIn className="mb-16 text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white">Mijn aanpak</h2>
          </AnimateIn>
          <StaggerContainer className="grid gap-8 md:grid-cols-3">
            {[
              {
                num: "1",
                title: "Luisteren",
                desc: "Ik begin bij jouw dagelijkse werkelijkheid. Waar loop je vast? Wat kost de meeste tijd?",
              },
              {
                num: "2",
                title: "Ontwerpen",
                desc: "Samen bepalen we de beste aanpak. Geen overbodige technologie, alleen wat werkt.",
              },
              {
                num: "3",
                title: "Implementeren",
                desc: "Ik bouw de oplossing en zorg dat je team er direct mee kan werken.",
              },
            ].map((step) => (
              <StaggerItem key={step.num}>
                <div className="relative rounded-[1.25rem] border-[0.75px] border-[#1E1E35] p-2">
                  <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
                  <div className="relative flex h-full flex-col items-center gap-4 overflow-hidden rounded-xl border-[0.75px] border-[#1E1E35] bg-[#0D0D1A] p-8 text-center">
                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#4F8EF7]/10 to-transparent" />
                    <div className="relative mx-auto mb-1 flex h-14 w-14 items-center justify-center rounded-full bg-[#4F8EF7]/15 text-xl font-bold text-[#4F8EF7] shadow-[0_0_20px_#4F8EF730]">
                      {step.num}
                    </div>
                    <h3 className="relative mb-2 font-[family-name:var(--font-heading)] text-lg font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="relative text-[#6B6B8A]">{step.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <SectionWithParticles className="py-24 md:py-32" particleCount={300} speed={0.4} trailOpacity={0.06}>
        <AnimateIn className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="mb-4 font-[family-name:var(--font-heading)] text-4xl font-bold text-white">
            Benieuwd wat ik voor jou kan doen?
          </h2>
          <p className="mx-auto mb-8 max-w-[500px] text-lg text-[#6B6B8A]">
            Plan een gratis gesprek. Ik kijk graag mee naar waar jouw team
            vastloopt.
          </p>
          <Link href="/contact">
            <ShinyButton>Plan een gesprek</ShinyButton>
          </Link>
          <a
            href="https://www.linkedin.com/in/wessel-broeders-250767221/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#4F8EF7] transition-colors hover:text-[#3A75D8]"
          >
            Bekijk mijn LinkedIn →
          </a>
        </AnimateIn>
      </SectionWithParticles>
    </>
  );
}

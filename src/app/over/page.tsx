import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/animate-in";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Over mij",
  description:
    "Maak kennis met Wessel Broeders — oprichter van Loopless. Bedrijfskunde-achtergrond, passie voor AI en procesautomatisering.",
};

const werkStappen = [
  { num: "01", label: "Luisteren", text: "Ik begin bij jouw dagelijkse werkelijkheid. Waar loop je vast? Wat kost de meeste tijd?" },
  { num: "02", label: "Ontwerpen", text: "Samen bepalen we de beste aanpak. Geen overbodige technologie, alleen wat werkt." },
  { num: "03", label: "Implementeren", text: "Ik bouw de oplossing en zorg dat je team er direct mee kan werken." },
];

export default function OverPage() {
  return (
    <>
      {/* Intro */}
      <section className="pt-40 pb-24 md:pb-32">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="flex flex-col gap-12 md:flex-row md:items-start">
            <AnimateIn className="flex-shrink-0 self-center md:self-start">
              <div className="relative h-[280px] w-[280px] overflow-hidden rounded-2xl border border-[#2E2E4A] transition-all duration-500 hover:border-[#4F8EF7]/30 hover:shadow-[0_8px_30px_-12px_rgba(79,142,247,0.2)]">
                <Image
                  src="/wessel.jpg"
                  alt="Wessel Broeders"
                  fill
                  className="object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
                  sizes="280px"
                />
              </div>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#4F8EF7]">Oprichter</p>
                <h1 className="mb-6 font-[family-name:var(--font-heading)] text-4xl font-bold text-white md:text-5xl">
                  Wessel Broeders
                </h1>
                <p className="mb-4 text-lg leading-relaxed text-[#EDEDF4]">
                  Laatste jaar Bedrijfskunde student aan Avans Breda. Ik help
                  MKB-bedrijven om tijd terug te winnen door processen slim te
                  automatiseren.
                </p>
                <p className="text-[#8585A3] leading-relaxed">
                  Mijn aanpak is altijd hetzelfde: eerst begrijpen waar jouw team
                  tijd verliest, dan pas bouwen. Geen onnodige technologie, alleen
                  oplossingen die direct resultaat opleveren.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Waarom Loopless */}
      <section className="bg-[#1A1A2E] py-24 md:py-32">
        <div className="mx-auto max-w-[700px] px-6">
          <AnimateIn>
            <h2 className="mb-8 font-[family-name:var(--font-heading)] text-3xl font-bold text-white">Waarom Loopless</h2>
            <div className="border-l-2 border-[#E8A04E] pl-8">
              <p className="text-lg leading-relaxed text-[#EDEDF4]">
                Tijdens mijn studie en werkervaring zag ik steeds hetzelfde
                patroon: teams die vastlopen in handmatig werk. Slimme mensen die
                uren besteden aan taken die een systeem in minuten kan doen.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#8585A3]">
                Loopless is ontstaan vanuit de overtuiging dat AI niet het doel is,
                maar het middel — om mensen vrij te maken voor werk dat er echt toe
                doet.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Hoe ik werk */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1000px] px-6">
          <AnimateIn>
            <h2 className="mb-12 font-[family-name:var(--font-heading)] text-3xl font-bold text-white">Hoe ik werk</h2>
          </AnimateIn>
          <StaggerContainer className="grid gap-px overflow-hidden rounded-xl border border-[#2E2E4A] bg-[#2E2E4A] md:grid-cols-3" staggerDelay={0.12}>
            {werkStappen.map((item) => (
              <StaggerItem key={item.label}>
                <div className="group h-full bg-[#161625] p-8 transition-colors duration-300 hover:bg-[#1A1A2E]">
                  <h3 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-bold text-white transition-colors duration-300 group-hover:text-[#4F8EF7]">{item.label}</h3>
                  <p className="text-sm text-[#8585A3] leading-relaxed">{item.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#2E2E4A] py-24 md:py-32">
        <div className="mx-auto max-w-[700px] px-6">
          <AnimateIn>
            <h2 className="mb-4 font-[family-name:var(--font-heading)] text-3xl font-bold text-white">
              Benieuwd wat ik voor jou kan doen?
            </h2>
            <p className="mb-8 text-lg text-[#8585A3]">
              Plan een gratis gesprek. Ik kijk graag mee naar waar jouw team
              vastloopt.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-[#4F8EF7] px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#3A75D8] hover:shadow-[0_8px_30px_-8px_rgba(79,142,247,0.3)]"
              >
                Plan een gesprek
              </Link>
              <a
                href="https://www.linkedin.com/in/wessel-broeders-250767221/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium text-[#4F8EF7] transition-colors hover:text-[#3A75D8]"
              >
                Bekijk mijn LinkedIn
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}

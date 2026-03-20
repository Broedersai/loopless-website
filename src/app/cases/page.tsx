import type { Metadata } from "next";
import Link from "next/link";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/animate-in";

export const metadata: Metadata = {
  title: "Cases",
  description:
    "Bekijk hoe Loopless bedrijven helpt met AI-automatisering. Concrete resultaten en tijdsbesparing voor het MKB.",
};

export default function CasesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pb-12 pt-40">
        <div className="mx-auto max-w-[1000px] px-6">
          <AnimateIn>
            <h1 className="mb-4 font-[family-name:var(--font-heading)] text-4xl font-bold text-white md:text-5xl">
              Resultaten die spreken
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="max-w-[500px] text-lg text-[#8585A3]">
              Concrete resultaten van bedrijven die hun processen lieten
              automatiseren.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Case: vuljevacature.nl */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1000px] px-6">
          {/* Case header */}
          <AnimateIn>
            <div className="mb-12 flex items-center gap-4">
              <strong className="text-2xl text-white font-[family-name:var(--font-heading)]">vuljevacature.nl</strong>
              <span className="rounded-full border border-[#4F8EF7]/20 bg-[#4F8EF7]/10 px-4 py-1 text-xs font-medium text-[#4F8EF7]">
                Recruitment
              </span>
            </div>
          </AnimateIn>

          {/* Voor / Na grid */}
          <StaggerContainer className="grid gap-6 md:grid-cols-2" staggerDelay={0.15}>
            {/* Voor */}
            <StaggerItem>
              <div className="h-full rounded-xl border border-[#2E2E4A] bg-[#1E1E30] p-8 transition-all duration-300 hover:border-[#3E3E5A]">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#8585A3]">Ervoor</p>
                <p className="text-[#EDEDF4] leading-relaxed">
                  Uren per week kwijt aan handmatig leads zoeken en screenen. Het
                  team besteedde te veel tijd aan administratie in plaats van
                  klantcontact.
                </p>
              </div>
            </StaggerItem>

            {/* Na */}
            <StaggerItem>
              <div className="h-full rounded-xl border border-[#4F8EF7]/20 bg-[#1E1E30] p-8 transition-all duration-300 hover:border-[#4F8EF7]/40">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#4F8EF7]">Erna</p>
                <p className="text-[#EDEDF4] leading-relaxed">
                  Elke ochtend staat er een lijst met relevante kandidaten
                  klaar — volledig automatisch. Zoeken, screenen
                  en klaarzetten hoeft niemand meer zelf te doen.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Resultaten */}
          <AnimateIn delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-8">
              {[
                "Uren per week bespaard",
                "24/7 automatisch actief",
                "Team focust op klantcontact",
              ].map((stat) => (
                <div key={stat} className="flex items-center gap-2 text-[#EDEDF4]">
                  <span className="font-bold text-[#4F8EF7]">✓</span> {stat}
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* Quote */}
          <AnimateIn delay={0.2}>
            <blockquote className="mt-12 border-l-2 border-[#4F8EF7] pl-6">
              <p className="text-lg italic text-[#EDEDF4]">
                &ldquo;Van uren handmatig zoekwerk naar een lijst met
                gekwalificeerde leads elke ochtend.&rdquo;
              </p>
            </blockquote>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#2E2E4A] py-24 md:py-32">
        <div className="mx-auto max-w-[700px] px-6">
          <AnimateIn>
            <h2 className="mb-4 font-[family-name:var(--font-heading)] text-3xl font-bold text-white">
              Wil jij ook dit soort resultaten?
            </h2>
            <p className="mb-8 text-lg text-[#8585A3]">
              Plan een gratis gesprek en ontdek wat automatisering voor jouw
              bedrijf kan betekenen.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-[#4F8EF7] px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#3A75D8] hover:shadow-[0_8px_30px_-8px_rgba(79,142,247,0.3)]"
            >
              Plan een gratis gesprek
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}

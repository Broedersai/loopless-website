import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cases",
  description:
    "Bekijk hoe Loopless bedrijven helpt met AI-automatisering. Concrete resultaten en tijdsbesparing voor het MKB.",
};
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { SectionWithParticles } from "@/components/section-with-particles";
import { ShinyButton } from "@/components/ui/shiny-button";

export default function CasesPage() {
  return (
    <>
      {/* Hero */}
      <SectionWithParticles className="pb-20 pt-40" particleCount={350} speed={0.4} trailOpacity={0.06}>
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl">
            Resultaten die spreken
          </h1>
          <p className="mx-auto max-w-[600px] text-xl text-[#6B6B8A]">
            Concrete resultaten van bedrijven die hun processen lieten
            automatiseren door Loopless.
          </p>
        </div>
      </SectionWithParticles>

      {/* Case: vuljevacature.nl */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[800px] px-6">
          <div className="relative rounded-2xl border border-[#1E1E35] p-2">
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
                <strong className="text-xl text-white">vuljevacature.nl</strong>
                <span className="rounded-full border border-[#4F8EF7]/20 bg-[#4F8EF7]/10 px-4 py-1 text-xs font-medium text-[#4F8EF7]">
                  Recruitment
                </span>
              </div>

              <div className="mb-8">
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#4F8EF7]">
                  Het probleem
                </h4>
                <p className="text-[#E8E8F0]">
                  Uren per week kwijt aan handmatig leads zoeken en screenen. Het
                  team besteedde te veel tijd aan administratie in plaats van
                  klantcontact.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#4F8EF7]">
                  De oplossing
                </h4>
                <p className="text-[#E8E8F0]">
                  Elke ochtend staat er een lijst met relevante kandidaten
                  klaar voor het team — volledig automatisch. Zoeken, screenen
                  en klaarzetten hoeft niemand meer zelf te doen.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#4F8EF7]">
                  Het resultaat
                </h4>
                <div className="flex flex-col gap-2">
                  {[
                    "Uren per week bespaard",
                    "24/7 automatisch actief",
                    "Team focust op klantcontact",
                  ].map((stat) => (
                    <div
                      key={stat}
                      className="flex items-center gap-2 text-[#E8E8F0]"
                    >
                      <span className="font-bold text-[#4F8EF7]">✓</span>{" "}
                      {stat}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border-l-[3px] border-[#4F8EF7] bg-[#4F8EF7]/5 p-6">
                <p className="text-lg italic text-[#E8E8F0]">
                  &ldquo;Van uren handmatig zoekwerk naar een lijst met
                  gekwalificeerde leads elke ochtend.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <SectionWithParticles className="py-24 md:py-32" particleCount={300} speed={0.4} trailOpacity={0.06}>
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Wil jij ook dit soort resultaten?
          </h2>
          <p className="mx-auto mb-8 max-w-[500px] text-lg text-[#6B6B8A]">
            Plan een gratis gesprek en ontdek wat automatisering voor jouw
            bedrijf kan betekenen.
          </p>
          <Link href="/contact">
            <ShinyButton>Plan een gratis gesprek</ShinyButton>
          </Link>
        </div>
      </SectionWithParticles>
    </>
  );
}

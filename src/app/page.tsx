import Link from "next/link";
import Image from "next/image";
import { HeroSection } from "@/components/hero-section";
import { SectionWithParticles } from "@/components/section-with-particles";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/animate-in";
import { Target, FileText, BarChart3, Cog, ArrowRight } from "lucide-react";

const aanpakSteps = [
  { num: "01", title: "Analyseren", desc: "We analyseren waar jouw team vastloopt" },
  { num: "02", title: "Bouwen", desc: "We bouwen een oplossing op maat" },
  { num: "03", title: "Draaien", desc: "Jouw processen lopen automatisch, zonder dat iemand er iets voor hoeft te doen." },
];

const caseResults = ["Uren per week bespaard", "24/7 automatisch actief", "Team focust op klantcontact"];

export default function Home() {
  return (
    <>
      {/* Hero — particles hier, nergens anders tot CTA */}
      <HeroSection>
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
          <AnimateIn>
            <h2 className="mb-16 text-center font-[family-name:var(--font-heading)] text-4xl font-bold text-white">Herken je dit?</h2>
          </AnimateIn>
          <StaggerContainer className="grid gap-6 md:grid-cols-3" staggerDelay={0.12}>
            <StaggerItem>
              <ProblemCard
                number="01"
                title="Uren kwijt aan handmatig werk"
                description="Je team besteedt wekelijks uren aan taken die eigenlijk automatisch zouden moeten gaan."
              />
            </StaggerItem>
            <StaggerItem>
              <ProblemCard
                number="02"
                title="Medewerkers vastlopen in admin"
                description="In plaats van waardevolle taken, zitten medewerkers vast in eindeloze administratie."
              />
            </StaggerItem>
            <StaggerItem>
              <ProblemCard
                number="03"
                title="Processen waar fouten insluipen"
                description="Handmatige stappen zorgen voor inconsistenties en fouten die je liever vermijdt."
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </HeroSection>

      {/* Aanpak — clean timeline */}
      <section className="overflow-hidden py-24 md:py-32">
        <div className="mx-auto max-w-[900px] px-6">
          <AnimateIn className="mb-20 text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white">Onze aanpak</h2>
            <p className="mt-4 text-lg text-[#8585A3]">
              We beginnen bij jouw probleem — niet bij de technologie.
            </p>
          </AnimateIn>

          <div className="relative flex flex-col gap-16">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-[#2E2E4A] to-[#2E2E4A]/20" />
            {aanpakSteps.map((step, i) => (
              <AnimateIn key={step.num} delay={i * 0.15}>
                <div className="flex items-start gap-8">
                  <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#2E2E4A] bg-[#1E1E30] text-sm font-bold text-white transition-colors duration-300 hover:border-[#4F8EF7]/40 hover:text-[#4F8EF7]">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">{step.title}</h3>
                    <p className="mt-2 text-[#8585A3]">{step.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#2E2E4A] to-transparent" />
      </div>

      {/* Diensten Preview */}
      <section className="overflow-hidden bg-[#1A1A2E] py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimateIn className="mb-16 flex flex-col items-start md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white">Onze diensten</h2>
              <p className="mt-3 max-w-[400px] text-[#8585A3]">Elk proces dat handmatig draait, kan slimmer.</p>
            </div>
            <Link href="/diensten" className="group mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#4F8EF7] transition-colors hover:text-[#3A75D8] md:mt-0">
              Alle diensten bekijken
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </AnimateIn>
          <StaggerContainer className="grid grid-cols-1 gap-5 md:grid-cols-2" staggerDelay={0.1}>
            <StaggerItem>
              <ServiceCard icon={<Target className="h-5 w-5" />} title="Lead Qualification" description="Automatisch leads zoeken, screenen en klaarzetten voor je team." />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard icon={<FileText className="h-5 w-5" />} title="Offerte-automatisering" description="Concept-voorstellen genereren op basis van eerdere offertes en productinfo." />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard icon={<BarChart3 className="h-5 w-5" />} title="Interne kennisbank" description="Een AI-assistent die je bedrijfsdata kent en direct antwoord geeft." />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard icon={<Cog className="h-5 w-5" />} title="Procesautomatisering" description="Maatwerk automatisering voor elk repetitief, handmatig proces." />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Resultaat */}
      <section className="overflow-hidden py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-16">
            <AnimateIn className="md:w-2/5">
              <span className="mb-4 inline-block rounded-full border border-[#E8A04E]/20 bg-[#E8A04E]/10 px-4 py-1 text-xs font-medium text-[#E8A04E]">Case study</span>
              <h2 className="mb-4 font-[family-name:var(--font-heading)] text-4xl font-bold text-white">Bewezen resultaat</h2>
              <p className="text-[#8585A3]">
                Niet alleen mooie woorden — dit is wat we al hebben opgeleverd.
              </p>
            </AnimateIn>
            <AnimateIn className="md:w-3/5" delay={0.15}>
              <div className="flex flex-col gap-6 rounded-xl border border-[#2E2E4A] bg-[#1E1E30] p-8 transition-colors duration-300 hover:border-[#3E3E5A] md:p-10">
                <div className="flex items-center gap-4">
                  <a href="https://vuljevacature.nl" target="_blank" rel="noopener noreferrer" className="opacity-70 transition-opacity hover:opacity-100">
                    <Image
                      src="/clients/vuljevacature.png"
                      alt="vuljevacature.nl"
                      width={140}
                      height={35}
                      className="h-9 w-auto"
                    />
                  </a>
                  <span className="rounded-full border border-[#4F8EF7]/20 bg-[#4F8EF7]/10 px-3 py-0.5 text-xs font-medium text-[#4F8EF7]">Recruitment</span>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white">Van uren zoekwerk naar gekwalificeerde leads elke ochtend</h3>
                <p className="text-[#8585A3]">Elke ochtend een lijst met relevante kandidaten klaar — zonder dat het team er iets voor hoeft te doen.</p>
                <div className="flex flex-col gap-2">
                  {caseResults.map((s) => (
                    <div key={s} className="flex items-center gap-2 text-[#EDEDF4]">
                      <span className="font-bold text-[#E8A04E]">✓</span> {s}
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="group inline-flex items-center gap-1 text-sm font-medium text-[#4F8EF7] transition-all hover:gap-2">
                  Ook tijd besparen?
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* CTA — particles terug */}
      <SectionWithParticles className="py-24 md:py-32" particleCount={300} speed={0.4} trailOpacity={0.06}>
        <AnimateIn className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="mb-4 font-[family-name:var(--font-heading)] text-4xl font-bold text-white">Benieuwd waar de meeste winst zit in jouw processen?</h2>
          <p className="mx-auto mb-8 max-w-[500px] text-lg text-[#8585A3]">Ontdek hoe Loopless jouw processen kan automatiseren. Plan een gratis gesprek — geheel vrijblijvend.</p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-[#4F8EF7] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#3A75D8]"
          >
            Plan een gratis gesprek
          </Link>
        </AnimateIn>
      </SectionWithParticles>
    </>
  );
}

function ProblemCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="group h-full rounded-xl border border-[#2E2E4A] bg-[#1E1E30]/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#4F8EF7]/30 hover:bg-[#1E1E30]/80">
      <span className="mb-4 block font-[family-name:var(--font-heading)] text-xs font-bold tracking-widest text-[#4F8EF7]/50 transition-colors duration-300 group-hover:text-[#4F8EF7]/80">{number}</span>
      <h3 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-bold text-white">{title}</h3>
      <p className="text-[#8585A3]">{description}</p>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Link href="/diensten" className="group block h-full">
      <div className="relative h-full rounded-xl border border-[#2E2E4A] bg-[#1E1E30] p-7 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#4F8EF7]/30 group-hover:shadow-[0_8px_30px_-12px_rgba(79,142,247,0.15)]">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#2E2E4A] text-[#4F8EF7] transition-colors duration-300 group-hover:bg-[#4F8EF7]/15">{icon}</div>
        <h3 className="mb-2 font-[family-name:var(--font-heading)] text-lg font-bold text-white">{title}</h3>
        <p className="text-sm text-[#8585A3]">{description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#4F8EF7] transition-all group-hover:gap-2">
          Meer info
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

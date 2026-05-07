import Link from "next/link";
import Image from "next/image";
import { HeroSection } from "@/components/hero-section";
import { SectionWithParticles } from "@/components/section-with-particles";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/animate-in";
import { Target, FileText, BarChart3, Cog, ArrowRight } from "lucide-react";
import { getBlocksByPage, blockText } from "@/lib/supabase/content";

const aanpakSteps = [
  { num: "01", title: "Analyseren", desc: "We analyseren waar jouw team vastloopt", color: "#22D3EE" },
  { num: "02", title: "Bouwen", desc: "We bouwen een oplossing op maat", color: "#A78BFA" },
  { num: "03", title: "Draaien", desc: "Jouw processen lopen automatisch, zonder dat iemand er iets voor hoeft te doen.", color: "#34D399" },
];

const caseResults = ["Uren per week bespaard", "24/7 automatisch actief", "Team focust op klantcontact"];

export default async function Home() {
  const blocks = await getBlocksByPage("home");

  const heroTitle = blockText(blocks, "home_hero_title", "Doorbreek de loop\nvan handmatig werk.");
  const heroSubtitle = blockText(
    blocks,
    "home_hero_subtitle",
    "Minder herhaling. Meer resultaat. Loopless haalt de onnodige stappen uit je processen — zodat je team zich kan richten op werk dat er echt toe doet.",
  );
  const problemsHeading = blockText(blocks, "home_problems_heading", "Herken je dit?");
  const problem1Title = blockText(blocks, "home_problem_1_title", "Uren kwijt aan handmatig werk");
  const problem1Desc = blockText(blocks, "home_problem_1_desc", "Je team besteedt wekelijks uren aan taken die eigenlijk automatisch zouden moeten gaan.");
  const problem2Title = blockText(blocks, "home_problem_2_title", "Medewerkers vastlopen in admin");
  const problem2Desc = blockText(blocks, "home_problem_2_desc", "In plaats van waardevolle taken, zitten medewerkers vast in eindeloze administratie.");
  const problem3Title = blockText(blocks, "home_problem_3_title", "Processen waar fouten insluipen");
  const problem3Desc = blockText(blocks, "home_problem_3_desc", "Handmatige stappen zorgen voor inconsistenties en fouten die je liever vermijdt.");
  const caseIntro = blockText(blocks, "home_case_intro", "Niet alleen mooie woorden — dit is wat we al hebben opgeleverd.");
  const caseTitle = blockText(blocks, "home_case_title", "Van uren zoekwerk naar gekwalificeerde leads elke ochtend");
  const caseDesc = blockText(blocks, "home_case_desc", "Elke ochtend een lijst met relevante kandidaten klaar — zonder dat het team er iets voor hoeft te doen.");
  const ctaHeading = blockText(blocks, "home_cta_heading", "Benieuwd waar de meeste winst zit in jouw processen?");
  const ctaText = blockText(blocks, "home_cta_text", "Ontdek hoe Loopless jouw processen kan automatiseren. Plan een gratis gesprek — geheel vrijblijvend.");

  return (
    <>
      {/* Hero — particles hier, nergens anders tot CTA */}
      <HeroSection title={heroTitle} subtitle={heroSubtitle}>
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
          <AnimateIn>
            <h2 className="mb-16 text-center font-[family-name:var(--font-heading)] text-4xl font-bold text-white">{problemsHeading}</h2>
          </AnimateIn>
          <StaggerContainer className="grid gap-6 md:grid-cols-3" staggerDelay={0.12}>
            <StaggerItem>
              <ProblemCard number="01" title={problem1Title} description={problem1Desc} />
            </StaggerItem>
            <StaggerItem>
              <ProblemCard number="02" title={problem2Title} description={problem2Desc} />
            </StaggerItem>
            <StaggerItem>
              <ProblemCard number="03" title={problem3Title} description={problem3Desc} />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </HeroSection>

      {/* Aanpak */}
      <section className="overflow-hidden py-24 md:py-32">
        <div className="mx-auto max-w-[720px] px-6">
          <AnimateIn className="mb-14">
            <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white">Onze aanpak</h2>
            <p className="mt-3 text-[#8585A3]">
              We beginnen bij jouw probleem — niet bij de technologie.
            </p>
          </AnimateIn>

          <div className="relative flex flex-col gap-0">
            {/* Vertical line */}
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-[#2E2E4A]" />

            {aanpakSteps.map((step, i) => (
              <AnimateIn key={step.num} delay={i * 0.1}>
                <div className="relative flex items-start gap-6 py-6">
                  <div className="relative z-10 mt-1 flex h-[23px] w-[23px] shrink-0 items-center justify-center">
                    <div className="h-[7px] w-[7px] rounded-full bg-[#4F8EF7]" />
                  </div>
                  <div>
                    <span className="mb-1 block text-xs font-medium tracking-wider text-[#4F8EF7]/60">{step.num}</span>
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">{step.title}</h3>
                    <p className="mt-1 text-[#8585A3] leading-relaxed">{step.desc}</p>
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
              <ServiceCard icon={<Target className="h-5 w-5" />} title="Lead Qualification" description="Automatisch leads zoeken, screenen en klaarzetten voor je team." color="#22D3EE" />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard icon={<FileText className="h-5 w-5" />} title="Offerte-automatisering" description="Concept-voorstellen genereren op basis van eerdere offertes en productinfo." color="#A78BFA" />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard icon={<BarChart3 className="h-5 w-5" />} title="Interne kennisbank" description="Een AI-assistent die je bedrijfsdata kent en direct antwoord geeft." color="#E8A04E" />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard icon={<Cog className="h-5 w-5" />} title="Procesautomatisering" description="Maatwerk automatisering voor elk repetitief, handmatig proces." color="#34D399" />
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
              <p className="text-[#8585A3]">{caseIntro}</p>
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
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white">{caseTitle}</h3>
                <p className="text-[#8585A3]">{caseDesc}</p>
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
          <h2 className="mb-4 font-[family-name:var(--font-heading)] text-4xl font-bold text-white">{ctaHeading}</h2>
          <p className="mx-auto mb-8 max-w-[500px] text-lg text-[#8585A3]">{ctaText}</p>
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

function ServiceCard({ icon, title, description, color = "#4F8EF7" }: { icon: React.ReactNode; title: string; description: string; color?: string }) {
  return (
    <Link href="/diensten" className="group block h-full" style={{ "--service-color": color } as React.CSSProperties}>
      <div className="relative h-full rounded-xl border border-[#2E2E4A] bg-[#1E1E30] p-7 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[var(--service-color)]/30" style={{ boxShadow: undefined }}>
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#2E2E4A]" style={{ color }}>{icon}</div>
        <h3 className="mb-2 font-[family-name:var(--font-heading)] text-lg font-bold text-white">{title}</h3>
        <p className="text-sm text-[#8585A3]">{description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium transition-all group-hover:gap-2" style={{ color }}>
          Meer info
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

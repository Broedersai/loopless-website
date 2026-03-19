import Link from "next/link";
import Image from "next/image";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { HeroSection } from "@/components/hero-section";
import { SectionWithParticles } from "@/components/section-with-particles";
import { NoisePatternCard, NoisePatternCardBody } from "@/components/ui/card-with-noise-patter";
import { ShinyButton } from "@/components/ui/shiny-button";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/animate-in";
import { Clock, Frown, AlertTriangle, Target, FileText, BarChart3, Cog } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero with Flow Field Background + Probleem Sectie */}
      <HeroSection>
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
          <AnimateIn className="mb-16 text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white">Herken je dit?</h2>
          </AnimateIn>
          <StaggerContainer className="grid gap-6 md:grid-cols-3">
            <StaggerItem>
              <GlowCard icon={<Clock className="h-6 w-6 text-[#4F8EF7]" />} title="Uren kwijt aan handmatig werk" description="Je team besteedt wekelijks uren aan taken die eigenlijk automatisch zouden moeten gaan." />
            </StaggerItem>
            <StaggerItem>
              <GlowCard icon={<Frown className="h-6 w-6 text-[#4F8EF7]" />} title="Medewerkers vastlopen in admin" description="In plaats van waardevolle taken, zitten medewerkers vast in eindeloze administratie." />
            </StaggerItem>
            <StaggerItem>
              <GlowCard icon={<AlertTriangle className="h-6 w-6 text-[#4F8EF7]" />} title="Processen waar fouten insluipen" description="Handmatige stappen zorgen voor inconsistenties en fouten die je liever vermijdt." />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </HeroSection>

      {/* Oplossing Sectie */}
      <section className="bg-[#13131F] py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimateIn className="mb-16 text-center">
            <h2 className="mb-4 font-[family-name:var(--font-heading)] text-4xl font-bold text-white">Onze aanpak</h2>
            <p className="mx-auto max-w-[600px] text-lg text-[#6B6B8A]">
              We beginnen bij jouw probleem — niet bij de technologie. In drie stappen naar processen die 24/7 draaien zonder fouten.
            </p>
          </AnimateIn>
          <StaggerContainer className="grid gap-8 md:grid-cols-3">
            {[
              { num: "1", title: "Analyseren", desc: "We analyseren waar jouw team vastloopt" },
              { num: "2", title: "Bouwen", desc: "We bouwen een oplossing op maat" },
              { num: "3", title: "Draaien", desc: "Jouw processen lopen automatisch, zonder dat iemand er iets voor hoeft te doen." },
            ].map((step) => (
              <StaggerItem key={step.num} className="h-full">
                <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-[#1E1E35] p-2">
                  <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
                  <div className="relative flex h-full flex-col items-center gap-4 overflow-hidden rounded-xl border-[0.75px] border-[#1E1E35] bg-[#0D0D1A] p-8 text-center">
                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#4F8EF7]/10 to-transparent" />
                    <div className="relative mx-auto mb-1 flex h-14 w-14 items-center justify-center rounded-full bg-[#4F8EF7]/15 text-xl font-bold text-[#4F8EF7] shadow-[0_0_20px_#4F8EF730]">
                      {step.num}
                    </div>
                    <h3 className="relative font-[family-name:var(--font-heading)] text-lg font-bold text-white">{step.title}</h3>
                    <p className="relative text-[#6B6B8A]">{step.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Diensten Preview */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimateIn className="mb-16 text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white">Onze diensten</h2>
          </AnimateIn>
          <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            <StaggerItem><ServiceCard icon={<Target className="h-5 w-5" />} title="Lead Qualification" description="Automatisch leads zoeken, screenen en klaarzetten voor je team." /></StaggerItem>
            <StaggerItem><ServiceCard icon={<FileText className="h-5 w-5" />} title="Offerte-automatisering" description="Concept-voorstellen genereren op basis van eerdere offertes en productinfo." /></StaggerItem>
            <StaggerItem><ServiceCard icon={<BarChart3 className="h-5 w-5" />} title="Interne kennisbank" description="Een AI-assistent die je bedrijfsdata kent en direct antwoord geeft." /></StaggerItem>
            <StaggerItem><ServiceCard icon={<Cog className="h-5 w-5" />} title="Procesautomatisering" description="Maatwerk automatisering voor elk repetitief, handmatig proces." /></StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Resultaat */}
      <section className="bg-[#13131F] py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimateIn className="mb-16 text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white">Bewezen resultaat</h2>
          </AnimateIn>
          <AnimateIn className="mx-auto max-w-[700px]" delay={0.1}>
            <div className="relative rounded-[1.25rem] border-[0.75px] border-[#1E1E35] p-2">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
              <div className="relative flex flex-col items-center gap-6 rounded-xl border-[0.75px] border-[#1E1E35] bg-[#13131F] p-8 md:p-10">
                <a href="https://vuljevacature.nl" target="_blank" rel="noopener noreferrer" className="opacity-70 transition-opacity hover:opacity-100">
                  <Image
                    src="/clients/vuljevacature.png"
                    alt="vuljevacature.nl"
                    width={180}
                    height={45}
                    className="h-11 w-auto"
                  />
                </a>
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-[#4F8EF7]/20 bg-[#4F8EF7]/10 px-4 py-1 text-xs font-medium text-[#4F8EF7]">Recruitment</span>
                </div>
                <h3 className="text-center font-[family-name:var(--font-heading)] text-2xl font-bold text-white">Van uren zoekwerk naar gekwalificeerde leads elke ochtend</h3>
                <p className="text-center text-[#6B6B8A]">Elke ochtend een lijst met relevante kandidaten klaar — zonder dat het team er iets voor hoeft te doen.</p>
                <div className="flex flex-col gap-2">
                  {["Uren per week bespaard", "24/7 automatisch actief", "Team focust op klantcontact"].map((s) => (
                    <div key={s} className="flex items-center gap-2 text-[#E8E8F0]">
                      <span className="font-bold text-[#4F8EF7]">✓</span> {s}
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="inline-flex items-center gap-1 text-sm font-medium text-[#4F8EF7] transition-all hover:gap-2">Ook tijd besparen? →</Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <SectionWithParticles className="py-24 md:py-32" particleCount={300} speed={0.4} trailOpacity={0.06}>
        <AnimateIn className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="mb-4 font-[family-name:var(--font-heading)] text-4xl font-bold text-white">Benieuwd waar de meeste winst zit in jouw processen?</h2>
          <p className="mx-auto mb-8 max-w-[500px] text-lg text-[#6B6B8A]">Ontdek hoe Loopless jouw processen kan automatiseren. Plan een gratis gesprek — geheel vrijblijvend.</p>
          <Link href="/contact">
            <ShinyButton>Plan een gratis gesprek</ShinyButton>
          </Link>
        </AnimateIn>
      </SectionWithParticles>
    </>
  );
}

function GlowCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="relative rounded-[1.25rem] border-[0.75px] border-[#1E1E35] p-2">
      <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
      <div className="relative flex h-full flex-col gap-4 overflow-hidden rounded-xl border-[0.75px] border-[#1E1E35] bg-[#0D0D1A] p-8">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#4F8EF7]/10 to-transparent" />
        <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-[#4F8EF7]/15 shadow-[0_0_20px_#4F8EF730]">{icon}</div>
        <h3 className="relative font-[family-name:var(--font-heading)] text-xl font-bold text-white">{title}</h3>
        <p className="relative text-[#6B6B8A]">{description}</p>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <li className="list-none h-full">
      <Link href="/diensten" className="block h-full">
        <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-[#1E1E35] p-2">
          <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
          <div className="relative flex h-full flex-col gap-4 overflow-hidden rounded-xl border-[0.75px] border-[#1E1E35] bg-[#0D0D1A] p-8 transition-transform hover:-translate-y-1">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#4F8EF7]/10 to-transparent" />
            <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-[#4F8EF7]/15 text-[#4F8EF7] shadow-[0_0_20px_#4F8EF730]">{icon}</div>
            <h3 className="relative font-[family-name:var(--font-heading)] text-xl font-bold text-white">{title}</h3>
            <p className="relative text-[#6B6B8A]">{description}</p>
            <span className="relative mt-auto inline-flex items-center gap-1 text-sm font-medium text-[#4F8EF7]">Meer info →</span>
          </div>
        </div>
      </Link>
    </li>
  );
}

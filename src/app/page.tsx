import Link from "next/link";
import Image from "next/image";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { HeroSection } from "@/components/hero-section";
import { SectionWithParticles } from "@/components/section-with-particles";
import { NoisePatternCard, NoisePatternCardBody } from "@/components/ui/card-with-noise-patter";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Clock, Frown, AlertTriangle, Target, FileText, BarChart3, Cog } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero with Flow Field Background */}
      <HeroSection />

      {/* Probleem Sectie */}
      <SectionWithParticles className="py-24 md:py-32" particleCount={250} speed={0.3} trailOpacity={0.05}>
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#4F8EF7]">
              Herkenbaar?
            </span>
            <h2 className="text-4xl font-bold text-white">Herken je dit?</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <GlowCard icon={<Clock className="h-6 w-6 text-[#4F8EF7]" />} title="Uren kwijt aan handmatig werk" description="Je team besteedt wekelijks uren aan taken die eigenlijk automatisch zouden moeten gaan." />
            <GlowCard icon={<Frown className="h-6 w-6 text-[#4F8EF7]" />} title="Medewerkers vastlopen in admin" description="In plaats van waardevolle taken, zitten medewerkers vast in eindeloze administratie." />
            <GlowCard icon={<AlertTriangle className="h-6 w-6 text-[#4F8EF7]" />} title="Processen waar fouten insluipen" description="Handmatige stappen zorgen voor inconsistenties en fouten die je liever vermijdt." />
          </div>
        </div>
      </SectionWithParticles>

      {/* Oplossing Sectie */}
      <section className="bg-[#13131F] py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#4F8EF7]">
              Onze aanpak
            </span>
            <h2 className="mb-4 text-4xl font-bold text-white">Wat Loopless doet</h2>
            <p className="mx-auto max-w-[600px] text-lg text-[#6B6B8A]">
              We beginnen bij jouw probleem — niet bij de technologie. In drie stappen naar processen die 24/7 draaien zonder fouten.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { num: "1", title: "Analyseren", desc: "We analyseren waar jouw team vastloopt" },
              { num: "2", title: "Bouwen", desc: "We bouwen een oplossing op maat" },
              { num: "3", title: "Draaien", desc: "Jouw processen draaien 24/7 zonder fouten" },
            ].map((step) => (
              <div key={step.num} className="relative rounded-[1.25rem] border-[0.75px] border-[#1E1E35] p-2">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
                <div className="relative flex h-full flex-col items-center gap-4 rounded-xl border-[0.75px] border-[#1E1E35] bg-[#13131F] p-8 text-center">
                  <div className="mx-auto mb-1 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#4F8EF7] text-xl font-bold text-[#4F8EF7]">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  <p className="text-[#6B6B8A]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diensten Preview */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#4F8EF7]">
              Wat we doen
            </span>
            <h2 className="text-4xl font-bold text-white">Onze diensten</h2>
          </div>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            <ServiceCard icon={<Target className="h-5 w-5" />} title="Lead Qualification" description="Automatisch leads zoeken, screenen en klaarzetten voor je team." />
            <ServiceCard icon={<FileText className="h-5 w-5" />} title="Offerte-automatisering" description="Concept-voorstellen genereren op basis van eerdere offertes en productinfo." />
            <ServiceCard icon={<BarChart3 className="h-5 w-5" />} title="Slimme AI-assistenten" description="Een AI-assistent die je bedrijfsdata kent en direct antwoord geeft." />
            <ServiceCard icon={<Cog className="h-5 w-5" />} title="Procesautomatisering" description="Maatwerk automatisering voor elk repetitief, handmatig proces." />
          </ul>
        </div>
      </section>

      {/* Resultaat */}
      <section className="bg-[#13131F] py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#4F8EF7]">Bewezen</span>
            <h2 className="text-4xl font-bold text-white">Bewezen resultaat</h2>
          </div>
          <div className="mx-auto max-w-[700px]">
            <NoisePatternCard className="rounded-2xl border-[#1E1E35]">
              <NoisePatternCardBody className="p-8 md:p-10">
                <div className="mb-6 flex items-center gap-4">
                  <strong className="text-xl text-white">vuljevacature.nl</strong>
                  <span className="rounded-full border border-[#4F8EF7]/20 bg-[#4F8EF7]/10 px-4 py-1 text-xs font-medium text-[#4F8EF7]">Recruitment</span>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white">Van uren zoekwerk naar gekwalificeerde leads elke ochtend</h3>
                <p className="mb-6 text-[#6B6B8A]">Elke ochtend een lijst met relevante kandidaten klaar — zonder dat het team er iets voor hoeft te doen.</p>
                <div className="mb-6 flex flex-col gap-2">
                  {["Uren per week bespaard", "24/7 automatisch actief", "Team focust op klantcontact"].map((s) => (
                    <div key={s} className="flex items-center gap-2 text-[#E8E8F0]">
                      <span className="font-bold text-[#4F8EF7]">✓</span> {s}
                    </div>
                  ))}
                </div>
                <Link href="/cases" className="inline-flex items-center gap-1 text-sm font-medium text-[#4F8EF7] transition-all hover:gap-2">Bekijk de case →</Link>
              </NoisePatternCardBody>
            </NoisePatternCard>
          </div>
        </div>
      </section>

      {/* Klanten */}
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="mb-8 text-sm font-semibold uppercase tracking-widest text-[#6B6B8A]">
            Werkt samen met
          </p>
          <div className="flex items-center justify-center gap-12">
            <a href="https://vuljevacature.nl" target="_blank" rel="noopener noreferrer" className="opacity-60 transition-opacity hover:opacity-100">
              <Image
                src="/clients/vuljevacature.png"
                alt="vuljevacature.nl"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <SectionWithParticles className="py-24 md:py-32" particleCount={300} speed={0.4} trailOpacity={0.06}>
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">Klaar om tijd terug te winnen?</h2>
          <p className="mx-auto mb-8 max-w-[500px] text-lg text-[#6B6B8A]">Ontdek hoe Loopless jouw processen kan automatiseren. Plan een gratis gesprek — geheel vrijblijvend.</p>
          <Link href="/contact">
            <ShinyButton>Plan een gratis gesprek</ShinyButton>
          </Link>
        </div>
      </SectionWithParticles>
    </>
  );
}

function GlowCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="relative rounded-[1.25rem] border-[0.75px] border-[#1E1E35] p-2">
      <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
      <div className="relative flex h-full flex-col gap-4 rounded-xl border-[0.75px] border-[#1E1E35] bg-[#13131F] p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#4F8EF7]/10">{icon}</div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-[#6B6B8A]">{description}</p>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <li className="list-none">
      <Link href="/diensten" className="block">
        <div className="relative rounded-[1.25rem] border-[0.75px] border-[#1E1E35] p-2">
          <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
          <div className="relative flex h-full flex-col gap-4 rounded-xl border-[0.75px] border-[#1E1E35] bg-[#13131F] p-8 transition-transform hover:-translate-y-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#4F8EF7]/10 text-[#4F8EF7]">{icon}</div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-[#6B6B8A]">{description}</p>
            <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-[#4F8EF7]">Meer info →</span>
          </div>
        </div>
      </Link>
    </li>
  );
}

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

const caseResults = [
  "Elke ochtend staat de lijst klaar",
  "Het systeem draait door, ook als er niemand kijkt",
  "Het team bepaalt zelf wie er gebeld wordt",
];

export default async function Home() {
  const blocks = await getBlocksByPage("home");

  const heroTitle = blockText(blocks, "home_hero_title", "Laat je mensen doen\nwaarvoor je ze\nhebt aangenomen.");
  const heroSubtitle = blockText(
    blocks,
    "home_hero_subtitle",
    "Je inkoper wil inkopen. Je binnendienst wil klanten helpen. Loopless bouwt systemen die het uitzoekwerk op de achtergrond doen, zodat iedereen weer tijd heeft voor het werk dat er echt toe doet.",
  );
  const problemsHeading = blockText(blocks, "home_problems_heading", "Herken je dit?");
  const problem1Title = blockText(blocks, "home_problem_1_title", "Je beste mensen zijn uren kwijt aan uitzoeken");
  const problem1Desc = blockText(blocks, "home_problem_1_desc", "Mail doorspitten, Excel bijwerken, leveranciersdocs doorzoeken. Uren per week die niet naar hun vak gaan.");
  const problem2Title = blockText(blocks, "home_problem_2_title", "De kennis zit in het hoofd van één iemand");
  const problem2Desc = blockText(blocks, "home_problem_2_desc", "Is die collega er niet, dan staat het stil. Vragen blijven liggen tot diegene terug is.");
  const problem3Title = blockText(blocks, "home_problem_3_title", "Jij beantwoordt zelf nog elke lastige vraag");
  const problem3Desc = blockText(blocks, "home_problem_3_desc", "Terwijl je bedrijf jouw aandacht ergens anders nodig heeft. Ondernemen komt er niet meer van.");
  const caseIntro = blockText(blocks, "home_case_intro", "Niet alleen mooie woorden: dit is wat we al hebben opgeleverd.");
  const caseTitle = blockText(blocks, "home_case_title", "Van zoekwerk naar een lijst die 's ochtends klaarstaat");
  const caseDesc = blockText(blocks, "home_case_desc", "Elke ochtend staat de lijst klaar met wie de moeite waard is. Het team begint de dag met bellen in plaats van met zoeken, en bepaalt zelf wie er benaderd wordt.");
  const ctaHeading = blockText(blocks, "home_cta_heading", "Benieuwd welk werk bij jou eraf kan?");
  const ctaText = blockText(blocks, "home_cta_text", "Weet je waar het blijft hangen, plan dan een gesprek. Weet je het nog niet precies, loop dan de configurator langs.");
  const replaceHeading = blockText(blocks, "home_replace_heading", "Vervangt dit mijn mensen? Nee. Bewust niet.");
  const replaceIntro = blockText(blocks, "home_replace_intro", "Wij automatiseren het uitzoeken, niet het beslissen. Daar zijn drie redenen voor:");
  const replace1Title = blockText(blocks, "home_replace_1_title", "Je mensen zíjn je bedrijf");
  const replace1Desc = blockText(blocks, "home_replace_1_desc", "Hun kennis van klanten, leveranciers en uitzonderingen kan geen systeem vervangen. Die kennis wordt juist meer waard als het werk eromheen verdwijnt.");
  const replace2Title = blockText(blocks, "home_replace_2_title", "Ook een slim systeem maakt fouten");
  const replace2Desc = blockText(blocks, "home_replace_2_desc", "Daarom gaat er bij ons niets ongecontroleerd de deur uit. Jouw mensen controleren, het systeem bereidt voor.");
  const replace3Title = blockText(blocks, "home_replace_3_title", "Het werkt beter");
  const replace3Desc = blockText(blocks, "home_replace_3_desc", "Een team dat sneller wordt, werkt mee. Bij onze klanten beslist de inkoper nog steeds zelf. Ze doen alleen het werk eromheen niet meer.");
  const promiseHeading = blockText(blocks, "home_promise_heading", "Binnen 4 tot 6 weken draait er één proces dat je nu handmatig doet.");
  const promiseText = blockText(blocks, "home_promise_text", "Vaste prijs, duidelijke acceptatiecriteria vooraf. Werkt het niet zoals afgesproken, dan betaal je de laatste termijn niet.");

  return (
    <>
      {/* Hero — particles hier, nergens anders tot CTA. Merkslogan als kicker boven de kop. */}
      <HeroSection title={heroTitle} subtitle={heroSubtitle} kicker="Doorbreek de loop van handmatig werk.">
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

      {/* Wat is AI-automatisering voor het MKB */}
      <section className="overflow-hidden bg-[#1A1A2E] py-24 md:py-32">
        <div className="mx-auto max-w-[760px] px-6">
          <AnimateIn>
            <h2 className="mb-8 font-[family-name:var(--font-heading)] text-3xl font-bold text-white md:text-4xl">
              Wat is AI-automatisering voor het MKB?
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="space-y-5 text-[#EDEDF4] leading-relaxed">
              <p>
                Automatisering betekent bij ons niet dat een systeem je mensen vervangt. Het betekent dat het werk waarvoor je niemand hebt aangenomen alvast gedaan is. Een lead die gescreend klaarstaat. Een besteladvies met één knop. Een antwoord dat alleen nog gecontroleerd hoeft te worden.
              </p>
              <p className="text-[#8585A3]">
                Jouw mensen doen wat een systeem niet kan: beslissen, uitzonderingen zien, de klant kennen. En het bedrijf merkt het: er wordt meer werk verzet met hetzelfde team, omdat iedereen weer zijn vak doet.
              </p>
              <p className="text-[#8585A3]">
                Wat we bouwen hangt af van waar bij jou tijd verloren gaat. Geen one-size-fits-all-tool, wel een systeem dat past op jouw schaal en jouw manier van werken.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <Link
              href="/diensten"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#4F8EF7] transition-colors hover:text-[#3A75D8]"
            >
              Bekijk wat we automatiseren
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* Aanpak */}
      <section className="overflow-hidden py-24 md:py-32">
        <div className="mx-auto max-w-[720px] px-6">
          <AnimateIn className="mb-14">
            <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white">Onze aanpak</h2>
            <p className="mt-3 text-[#8585A3]">
              We beginnen bij jouw probleem, niet bij de technologie.
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
              <ServiceCard icon={<Target className="h-5 w-5" />} title="Leads uitzoeken" description="Elke ochtend staat de gescreende lijst klaar. Jouw mensen voeren de gesprekken." color="#22D3EE" />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard icon={<FileText className="h-5 w-5" />} title="Offertes klaarzetten" description="Het concept staat klaar uit je eigen gegevens. Jij zet de kennis en de prijs erin en verstuurt." color="#A78BFA" />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard icon={<BarChart3 className="h-5 w-5" />} title="Vragen beantwoorden uit eigen documentatie" description="Alle kennis uit hoofden en documenten, opvraagbaar voor iedereen. De expert wordt niet meer voor alles gestoord." color="#E8A04E" />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard icon={<Cog className="h-5 w-5" />} title="Maatwerk voor jouw uitzoekwerk" description="Bij elk bedrijf zit het werk ergens anders. We beginnen bij de persoon die verzuipt, niet bij de tool." color="#34D399" />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Vervangt dit mijn mensen? — het onderscheidende blok (positionering 2026-07-22) */}
      <section className="overflow-hidden py-24 md:py-32">
        <div className="mx-auto max-w-[760px] px-6">
          <AnimateIn>
            <h2 className="mb-4 font-[family-name:var(--font-heading)] text-3xl font-bold text-white md:text-4xl">{replaceHeading}</h2>
            <p className="mb-12 text-[#8585A3]">{replaceIntro}</p>
          </AnimateIn>
          <StaggerContainer className="flex flex-col gap-8" staggerDelay={0.1}>
            {[
              { num: "01", title: replace1Title, desc: replace1Desc },
              { num: "02", title: replace2Title, desc: replace2Desc },
              { num: "03", title: replace3Title, desc: replace3Desc },
            ].map((r) => (
              <StaggerItem key={r.num}>
                <div className="flex items-start gap-6">
                  <span className="mt-1 shrink-0 font-[family-name:var(--font-heading)] text-xs font-bold tracking-widest text-[#4F8EF7]/60">{r.num}</span>
                  <div>
                    <h3 className="mb-2 font-[family-name:var(--font-heading)] text-lg font-bold text-white">{r.title}</h3>
                    <p className="text-[#8585A3] leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#2E2E4A] to-transparent" />
      </div>

      {/* Resultaat */}
      <section className="overflow-hidden py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-16">
            <AnimateIn className="md:w-2/5">
              <span className="mb-4 inline-block rounded-full border border-[#E8A04E]/20 bg-[#E8A04E]/10 px-4 py-1 text-xs font-medium text-[#E8A04E]">Case study</span>
              <h2 className="mb-4 font-[family-name:var(--font-heading)] text-4xl font-bold text-white">Hoe dat uitpakt</h2>
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
                <Link href="/cases" className="group inline-flex items-center gap-1 text-sm font-medium text-[#4F8EF7] transition-all hover:gap-2">
                  Bekijk de cases
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Belofte-strook — 4-6 weken, vaste prijs, laatste termijn vervalt (besloten 2026-07-22) */}
      <section className="overflow-hidden bg-[#1A1A2E] py-16 md:py-20">
        <div className="mx-auto max-w-[760px] px-6">
          <AnimateIn>
            <div className="rounded-xl border border-[#4F8EF7]/25 bg-[#1E1E30] p-8 text-center md:p-10">
              <h2 className="mb-3 font-[family-name:var(--font-heading)] text-2xl font-bold text-white">{promiseHeading}</h2>
              <p className="text-[#8585A3]">{promiseText}</p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA — particles terug */}
      <SectionWithParticles className="py-24 md:py-32" particleCount={300} speed={0.4} trailOpacity={0.06}>
        <AnimateIn className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="mb-4 font-[family-name:var(--font-heading)] text-4xl font-bold text-white">{ctaHeading}</h2>
          <p className="mx-auto mb-8 max-w-[520px] text-lg text-[#8585A3]">{ctaText}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-[#4F8EF7] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#3A75D8]"
            >
              Plan een gratis gesprek
            </Link>
            <Link
              href="/configurator"
              className="inline-block rounded-full border border-[#2E2E4A] px-8 py-4 font-semibold text-[#EDEDF4] transition-all duration-300 hover:border-[#4F8EF7]/40 hover:text-white"
            >
              Naar de configurator
            </Link>
          </div>
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

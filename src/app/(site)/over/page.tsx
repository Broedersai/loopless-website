import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AnimateIn } from "@/components/ui/animate-in";
import { PageGlow, SectionDivider } from "@/components/page-glow";
import { ArrowRight } from "lucide-react";
import { getBlocksByPage, blockText, blockImage } from "@/lib/supabase/content";

export const metadata: Metadata = {
  title: "Over Loopless — Wessel Broeders, oprichter",
  description:
    "Maak kennis met Wessel Broeders — oprichter van Loopless. Bedrijfskunde-achtergrond gecombineerd met AI-expertise. Procesautomatisering voor het MKB vanuit Tiel en Breda.",
  alternates: { canonical: "/over" },
  openGraph: {
    title: "Over Loopless — Wessel Broeders, oprichter",
    description:
      "Maak kennis met Wessel Broeders — oprichter van Loopless. Bedrijfskunde-achtergrond gecombineerd met AI-expertise.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Over Loopless — Wessel Broeders, oprichter",
    description:
      "Maak kennis met Wessel Broeders — oprichter van Loopless. Bedrijfskunde-achtergrond gecombineerd met AI-expertise.",
  },
};

export default async function OverPage() {
  const blocks = await getBlocksByPage("over");

  const kicker = blockText(blocks, "over_intro_kicker", "Oprichter Loopless");
  const introP1 = blockText(blocks, "over_intro_p1", "De meeste automatiseringsbureaus komen met een oplossing voordat ze je bedrijf snappen. Ik begin met begrijpen hoe jij werkt, en bouw daarna pas.");
  const introP2 = blockText(blocks, "over_intro_p2", "Dat is het verschil tussen een bedrijfskundige die ook kan bouwen, en een developer die ook adviseert.");
  const photoUrl = blockImage(blocks, "over_photo", "/wessel.jpg");
  const waaromP1 = blockText(blocks, "over_waarom_p1", "Tijdens mijn studie Bedrijfskunde aan Avans Breda leerde ik processen analyseren, knelpunten blootleggen en oplossingen ontwerpen vanuit de bedrijfsrealiteit. Naast mijn studie leerde ik automatiseren met AI — niet als hobby, maar als gereedschap om processen slimmer in te richten.");
  const waaromP2 = blockText(blocks, "over_waarom_p2", "Die combinatie is zeldzaam. En voor jou als MKB'er precies wat je nodig hebt: iemand die begrijpt hoe jouw bedrijf werkt, én die de oplossing zelf kan bouwen.");
  const praktijkP1 = blockText(blocks, "over_praktijk_p1", "Sommige bedrijven komen met een concreet idee: \"we willen dit proces automatiseren.\" Anderen weten dat er tijd verloren gaat, maar weten nog niet precies waar. Beide zijn een goed startpunt.");
  const praktijkP2 = blockText(blocks, "over_praktijk_p2", "Ik kijk samen met je naar wat je wil bereiken, en bouw een oplossing die daar direct op aansluit.");
  const resultaatText = blockText(blocks, "over_resultaat_text", "Voor vuljevacature.nl automatiseerde ik de volledige lead qualification. Het team logt 's ochtends in en heeft direct een lijst met gekwalificeerde leads klaarstaan. Uren per week bespaard, structureel.");
  const ctaHeading = blockText(blocks, "over_cta_heading", "Benieuwd wat er mogelijk is voor jouw bedrijf?");
  const ctaText = blockText(blocks, "over_cta_text", "Plan een gratis gesprek — ik denk graag mee.");

  return (
    <>
      <PageGlow />
      {/* Intro */}
      <section className="relative pt-40 pb-24 md:pb-32">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="flex flex-col gap-12 md:flex-row md:items-start">
            <AnimateIn className="flex-shrink-0 self-center md:self-start">
              <div className="relative h-[280px] w-[280px] overflow-hidden rounded-2xl border border-[#2E2E4A] transition-all duration-500 hover:border-[#4F8EF7]/30 hover:shadow-[0_8px_30px_-12px_rgba(79,142,247,0.2)]">
                <Image
                  src={photoUrl}
                  alt="Wessel Broeders"
                  fill
                  className="object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
                  sizes="280px"
                />
              </div>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#4F8EF7]">{kicker}</p>
                <h1 className="mb-6 font-[family-name:var(--font-heading)] text-4xl font-bold text-white md:text-5xl">
                  Wessel Broeders
                </h1>
                <p className="mb-4 text-lg leading-relaxed text-[#EDEDF4]">{introP1}</p>
                <p className="text-[#8585A3] leading-relaxed">{introP2}</p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Waarom dat werkt */}
      <section className="bg-[#1A1A2E] py-24 md:py-32">
        <div className="mx-auto max-w-[700px] px-6">
          <AnimateIn>
            <h2 className="mb-8 font-[family-name:var(--font-heading)] text-3xl font-bold text-white">Waarom dat werkt</h2>
            <div className="space-y-4 text-[#EDEDF4] leading-relaxed">
              <p>{waaromP1}</p>
              <p className="text-[#8585A3]">{waaromP2}</p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Hoe dat er in de praktijk uitziet */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[700px] px-6">
          <AnimateIn>
            <h2 className="mb-8 font-[family-name:var(--font-heading)] text-3xl font-bold text-white">Hoe dat er in de praktijk uitziet</h2>
            <div className="space-y-4 text-[#EDEDF4] leading-relaxed">
              <p>{praktijkP1}</p>
              <p className="text-[#8585A3]">{praktijkP2}</p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Bewezen resultaat */}
      <section className="bg-[#1A1A2E] py-24 md:py-32">
        <div className="mx-auto max-w-[700px] px-6">
          <AnimateIn>
            <h2 className="mb-8 font-[family-name:var(--font-heading)] text-3xl font-bold text-white">Bewezen resultaat</h2>
            <div className="rounded-xl border border-[#2E2E4A] bg-[#161625] p-8">
              <div className="mb-4 flex items-center gap-4">
                <a href="https://vuljevacature.nl" target="_blank" rel="noopener noreferrer" className="opacity-70 transition-opacity hover:opacity-100">
                  <Image
                    src="/clients/vuljevacature.png"
                    alt="vuljevacature.nl"
                    width={120}
                    height={30}
                    className="h-7 w-auto"
                  />
                </a>
                <span className="rounded-full border border-[#4F8EF7]/20 bg-[#4F8EF7]/10 px-3 py-0.5 text-xs font-medium text-[#4F8EF7]">Recruitment</span>
              </div>
              <p className="text-[#EDEDF4] leading-relaxed">{resultaatText}</p>
            </div>
          </AnimateIn>
        </div>
      </section>

      <SectionDivider />

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[700px] px-6">
          <AnimateIn>
            <h2 className="mb-4 font-[family-name:var(--font-heading)] text-3xl font-bold text-white">{ctaHeading}</h2>
            <p className="mb-8 text-lg text-[#8585A3]">{ctaText}</p>
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

"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionWithParticles } from "@/components/section-with-particles";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ShinyButton } from "@/components/ui/shiny-button";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/animate-in";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Waarom zou ik mijn bedrijfsprocessen automatiseren?",
    answer:
      "Handmatig werk kost tijd die je maar \u00e9\u00e9n keer kunt uitgeven. Elke uur die een medewerker besteedt aan kopi\u00ebren, zoeken of invoeren, is een uur dat niet naar klanten, groei of vakmanschap gaat. Automatisering haalt die stappen eruit zodat je team zich kan richten op werk dat er echt toe doet.",
  },
  {
    question: "Wat kost procesautomatisering voor een klein bedrijf?",
    answer:
      "Dat hangt af van hoe groot het project is. We kijken samen wat er nodig is en wat dat kost \u2014 pas daarna maak ik een voorstel. Hoe kleiner het project, hoe lager de kosten. Je betaalt nooit voor meer dan wat je nodig hebt.",
  },
  {
    question:
      "Is AI-automatisering ook geschikt voor een MKB-bedrijf zonder IT-afdeling?",
    answer:
      "Ja. Ik regel alle technische zaken van opzetten tot inrichten. Jij hoeft alleen aan te geven waar je vastloopt. Je hebt geen IT-kennis nodig om te beginnen.",
  },
  {
    question: "Hoe lang duurt het om een automatisering te laten werken?",
    answer:
      "Binnen twee weken bouw ik de oplossing, daarna volgt een testfase van twee weken. Binnen een maand heb je een werkend systeem.",
  },
  {
    question: "Welke processen kan ik automatiseren in mijn bedrijf?",
    answer:
      "Elk proces waarbij medewerkers dezelfde stappen herhalen. Denk aan leads zoeken en screenen, offertes opstellen, informatie opzoeken in documenten, rapporten samenstellen of data overzetten tussen systemen. Als het handmatig en repetitief is, is het een kandidaat.",
  },
  {
    question:
      "Hoe weet ik of automatisering geschikt is voor mijn situatie?",
    answer:
      "Dat bepalen we samen in een gratis gesprek. Ik breng in kaart waar de meeste tijd verloren gaat en of automatisering daar de juiste oplossing voor is. Soms is een betere werkafspraak effectiever. Dat zeg ik dan ook gewoon.",
  },
  {
    question: "Wat heb ik nodig om te beginnen met procesautomatisering?",
    answer:
      "Alleen een gesprek. Geen technische kennis, geen voorbereiding. Ik stel de vragen en breng in kaart waar de winst zit.",
  },
  {
    question: "Wat als het systeem niet werkt zoals verwacht?",
    answer:
      "Ik hanteer no cure no pay. Als het systeem niet doet wat we hebben afgesproken, betaal je niet.",
  },
  {
    question: "Wie beheert het systeem na de oplevering?",
    answer:
      "Het systeem draait op jullie eigen netwerk. Wil je geen omkijken naar de technische kant? Dan log ik op afstand in om alles werkend te houden via een onderhoudsabonnement.",
  },
  {
    question: "Is mijn data veilig als ik werk met AI-automatisering?",
    answer:
      "Ja. Het systeem draait op jullie eigen netwerk, dus jullie data blijft bij jullie. Ik heb alleen toegang als jullie dat toestaan voor onderhoud.",
  },
  {
    question:
      "Wat is het verschil tussen procesautomatisering en gewone software kopen?",
    answer:
      "Software koop je en past je bedrijf erop aan. Automatisering bouw ik op maat zodat het past bij hoe jullie al werken. We beginnen altijd bij het probleem, niet bij de technologie.",
  },
];

function FaqItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative rounded-2xl border border-[#1E1E35] p-2">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={3}
      />
      <div className="relative overflow-hidden rounded-xl border border-[#1E1E35] bg-[#0D0D1A]/80 backdrop-blur-sm">
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#4F8EF7]/5 to-transparent" />
        <button
          onClick={() => setOpen(!open)}
          className="relative flex w-full items-center gap-5 p-6 text-left md:p-8"
        >
          <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4F8EF7]/10 font-[family-name:var(--font-heading)] text-sm font-bold text-[#4F8EF7] shadow-[0_0_15px_#4F8EF720]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="flex-1 font-[family-name:var(--font-heading)] text-lg font-semibold text-white">
            {question}
          </h3>
          <div
            className={cn(
              "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#1E1E35] transition-all duration-300",
              open
                ? "border-[#4F8EF7]/30 bg-[#4F8EF7]/10"
                : "bg-transparent"
            )}
          >
            <ChevronDown
              className={cn(
                "h-4 w-4 text-[#4F8EF7] transition-transform duration-300",
                open && "rotate-180"
              )}
            />
          </div>
        </button>
        <div
          className={cn(
            "grid transition-all duration-300 ease-in-out",
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="overflow-hidden">
            <div className="border-t border-[#1E1E35] mx-6 md:mx-8" />
            <p className="px-6 py-6 pl-[calc(1.5rem+2.5rem+1.25rem)] text-[#6B6B8A] leading-relaxed md:px-8 md:pl-[calc(2rem+2.5rem+1.25rem)]">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FaqPage() {
  return (
    <SectionWithParticles
      className="pb-24 pt-40 md:pb-32"
      particleCount={400}
      speed={0.4}
      trailOpacity={0.06}
    >
      {/* Hero */}
      <AnimateIn className="mx-auto max-w-[1200px] px-6 text-center">
        <h1 className="mb-4 font-[family-name:var(--font-heading)] text-5xl font-bold text-white md:text-6xl">
          Veelgestelde vragen
        </h1>
        <p className="mx-auto max-w-[600px] text-xl text-[#6B6B8A]">
          Alles wat je wilt weten over procesautomatisering en hoe Loopless
          werkt.
        </p>
      </AnimateIn>

      {/* FAQ Items */}
      <StaggerContainer
        className="mx-auto mt-16 flex max-w-[900px] flex-col gap-4 px-6 md:mt-24"
        staggerDelay={0.06}
      >
        {faqs.map((faq, i) => (
          <StaggerItem key={faq.question}>
            <FaqItem question={faq.question} answer={faq.answer} index={i} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* CTA */}
      <AnimateIn className="mx-auto mt-24 max-w-[1200px] px-6 text-center md:mt-32">
        <h2 className="mb-4 font-[family-name:var(--font-heading)] text-4xl font-bold text-white">
          Vraag niet beantwoord?
        </h2>
        <p className="mx-auto mb-8 max-w-[500px] text-lg text-[#6B6B8A]">
          Plan een gratis gesprek. Ik denk graag met je mee.
        </p>
        <Link href="/contact">
          <ShinyButton>Plan een gratis gesprek</ShinyButton>
        </Link>
      </AnimateIn>
    </SectionWithParticles>
  );
}

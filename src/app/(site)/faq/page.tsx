"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/ui/animate-in";
import { PageGlow } from "@/components/page-glow";

const faqCategories = [
  {
    label: "Over automatisering",
    items: [
      {
        question: "Wat is AI-automatisering voor het MKB?",
        answer:
          "AI-automatisering voor het MKB betekent dat slimme systemen repetitieve handmatige taken overnemen — leads zoeken, offertes opstellen, informatie opzoeken — zonder dat je een IT-afdeling nodig hebt. Het past op de schaal en het budget van een MKB-bedrijf, in tegenstelling tot zware enterprise-oplossingen. Je team krijgt uren per week terug om aan klantcontact en groei te besteden.",
      },
      {
        question: "Waarom zou ik mijn bedrijfsprocessen automatiseren?",
        answer:
          "Handmatig werk kost tijd die je maar één keer kunt uitgeven. Elke uur die een medewerker besteedt aan kopiëren, zoeken of invoeren, is een uur dat niet naar klanten, groei of vakmanschap gaat. Automatisering haalt die stappen eruit zodat je team zich kan richten op werk dat er echt toe doet.",
      },
      {
        question: "Welke processen kan ik automatiseren in mijn bedrijf?",
        answer:
          "Elk proces waarbij medewerkers dezelfde stappen herhalen. Denk aan leads zoeken en screenen, offertes opstellen, informatie opzoeken in documenten, rapporten samenstellen of data overzetten tussen systemen. Als het handmatig en repetitief is, is het een kandidaat.",
      },
      {
        question:
          "Wat is het verschil tussen procesautomatisering en gewone software kopen?",
        answer:
          "Software koop je en past je bedrijf erop aan. Automatisering bouw ik op maat zodat het past bij hoe jullie al werken. We beginnen altijd bij het probleem, niet bij de technologie.",
      },
    ],
  },
  {
    label: "Over de samenwerking",
    items: [
      {
        question: "Wat kost procesautomatisering voor een klein bedrijf?",
        answer:
          "Dat hangt af van hoe groot het project is. We kijken samen wat er nodig is en wat dat kost — pas daarna maak ik een voorstel. Hoe kleiner het project, hoe lager de kosten. Je betaalt nooit voor meer dan wat je nodig hebt.",
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
    ],
  },
  {
    label: "Na oplevering",
    items: [
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
    ],
  },
];

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#2E2E4A] last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-white">
          {question}
        </h3>
        <div
          className={cn(
            "flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300",
            open ? "bg-[#4F8EF7]/10" : "bg-transparent"
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
          <p className="pb-6 text-[#8585A3] leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <PageGlow />
      {/* Hero */}
      <section className="relative pb-8 pt-40">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimateIn>
            <h1 className="mb-4 font-[family-name:var(--font-heading)] text-5xl font-bold text-white md:text-6xl">
              Veelgestelde vragen
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="max-w-[500px] text-xl text-[#8585A3]">
              Alles wat je wilt weten over procesautomatisering en hoe Loopless
              werkt.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ per categorie — two-column layout on desktop */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          {faqCategories.map((cat, i) => (
            <AnimateIn key={cat.label} delay={i * 0.1}>
              <div className={`grid gap-8 md:grid-cols-12 ${i > 0 ? "mt-20" : ""}`}>
                {/* Category label — left column */}
                <div className="md:col-span-3">
                  <h2 className="sticky top-32 text-xs font-semibold uppercase tracking-widest text-[#4F8EF7]">
                    {cat.label}
                  </h2>
                </div>
                {/* Questions — right column */}
                <div className="md:col-span-8">
                  <div className="rounded-xl border border-[#2E2E4A] bg-[#1E1E30] px-6 transition-colors duration-300 hover:border-[#3E3E5A]">
                    {cat.items.map((faq) => (
                      <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
                    ))}
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimateIn>
            <div className="flex flex-col gap-6 rounded-2xl border border-[#2E2E4A] bg-[#1A1A2E] p-8 transition-colors duration-300 hover:border-[#3E3E5A] md:flex-row md:items-center md:justify-between md:p-12">
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white">
                  Vraag niet beantwoord?
                </h2>
                <p className="mt-2 text-[#8585A3]">
                  Ik denk graag met je mee in een kort gesprek.
                </p>
              </div>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#4F8EF7] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#3A75D8] hover:shadow-[0_8px_30px_-8px_rgba(79,142,247,0.3)]"
              >
                Plan een gesprek
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}

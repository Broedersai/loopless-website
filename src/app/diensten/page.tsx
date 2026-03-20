import type { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/ui/animate-in";
import { Target, FileText, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Van lead qualification tot procesautomatisering — ontdek hoe Loopless jouw team tijd bespaart met AI-oplossingen op maat.",
};

const diensten = [
  {
    id: "lead-qualification",
    icon: <Target className="h-6 w-6 text-[#4F8EF7]" />,
    title: "Lead qualification",
    navLabel: "Lead qualification",
    subtitle: "Elke ochtend een lijst met gekwalificeerde leads — zonder dat je team er iets voor hoeft te doen.",
    paragraphs: [
      "Recruiters en salesteams verliezen dagelijks uren aan handmatig zoeken, checken en invoeren. Dat stopt.",
      "Het systeem zoekt, screent en kwalificeert leads op basis van jouw criteria. 24/7, op de achtergrond.",
    ],
    highlight: "Bewezen resultaat: vuljevacature.nl logt 's ochtends in en heeft direct een lijst klaarstaan. Geen handmatig zoekwerk meer.",
    voorWie: "Recruitmentbureaus, salesteams, B2B bedrijven",
    accentColor: "#4F8EF7",
  },
  {
    id: "offerte-automatisering",
    icon: <FileText className="h-6 w-6 text-[#4F8EF7]" />,
    title: "Offerte- en RFP-automatisering",
    navLabel: "Offertes",
    subtitle: "Te traag met je voorstel is een gemiste deal.",
    paragraphs: [
      "Offertes opstellen kost tijd die je niet hebt. Steeds opnieuw dezelfde informatie opzoeken, kopiëren en consistent krijgen.",
      "Wij bouwen een systeem dat automatisch een concept genereert op basis van jouw eerdere offertes en productinformatie. Jij controleert en verstuurt.",
      "Van dagen werk naar enkele uren per voorstel.",
    ],
    voorWie: "Bedrijven die veel tijd kwijt zijn aan offertes en daardoor kansen mislopen",
    accentColor: "#4F8EF7",
  },
  {
    id: "kennisbank",
    icon: <BarChart3 className="h-6 w-6 text-[#E8A04E]" />,
    title: "Interne kennisbank",
    navLabel: "Kennisbank",
    subtitle: "Hoeveel tijd verliest je team met zoeken naar informatie die er al is?",
    paragraphs: [
      "Handleidingen, procedures, productinfo — het bestaat allemaal. Maar niemand weet waar het staat. Dus wordt er gebeld, gezocht en gewacht.",
      "Wij bouwen een AI-assistent die al je documenten kent. Medewerkers stellen een vraag en krijgen binnen seconden een antwoord met bronverwijzing.",
      "Geen zoeken meer. Geen collega lastigvallen. Gewoon: vraag stellen, antwoord krijgen.",
    ],
    voorWie: "Bedrijven met veel interne documenten, handleidingen of procedures",
    accentColor: "#E8A04E",
  },
];

export default function DienstenPage() {
  return (
    <>
      {/* Hero + anchor nav */}
      <section className="pb-12 pt-40">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimateIn>
            <h1 className="mb-4 font-[family-name:var(--font-heading)] text-5xl font-bold text-white md:text-6xl">
              Wat we automatiseren
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="max-w-[600px] text-xl text-[#8585A3]">
              Je betaalt medewerkers om te denken, niet om te kopiëren en plakken. Wij halen het handmatige werk eruit.
            </p>
          </AnimateIn>

          {/* Anchor nav */}
          <AnimateIn delay={0.2}>
            <nav className="mt-12 flex flex-wrap gap-3">
              {diensten.map((d) => (
                <a
                  key={d.id}
                  href={`#${d.id}`}
                  className="rounded-full border border-[#2E2E4A] px-4 py-2 text-sm font-medium text-[#8585A3] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#4F8EF7]/40 hover:text-white hover:shadow-[0_4px_12px_-4px_rgba(79,142,247,0.2)]"
                >
                  {d.navLabel}
                </a>
              ))}
              <a
                href="#maatwerk"
                className="rounded-full border border-[#2E2E4A] px-4 py-2 text-sm font-medium text-[#8585A3] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#4F8EF7]/40 hover:text-white hover:shadow-[0_4px_12px_-4px_rgba(79,142,247,0.2)]"
              >
                Maatwerk
              </a>
            </nav>
          </AnimateIn>
        </div>
      </section>

      {/* Diensten */}
      {diensten.map((dienst, i) => (
        <section
          key={dienst.id}
          id={dienst.id}
          className={`relative overflow-hidden py-24 md:py-32 ${
            i % 2 === 1 ? "bg-[#1A1A2E]" : ""
          }`}
        >
          <div className="mx-auto max-w-[900px] px-6">
            <AnimateIn>
              <article>
                <div className="mb-8 flex items-start gap-5">
                  <div
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#2E2E4A] transition-colors duration-300 hover:bg-[#3E3E5A]"
                  >
                    {dienst.icon}
                  </div>
                  <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white md:text-3xl">
                    {dienst.title}
                  </h2>
                </div>

                <p className="mb-6 text-lg font-medium text-[#EDEDF4]">
                  {dienst.subtitle}
                </p>

                <div className="mb-8 flex flex-col gap-4">
                  {dienst.paragraphs.map((p) => (
                    <p key={p} className="text-[#8585A3] leading-relaxed">{p}</p>
                  ))}
                </div>

                {dienst.highlight && (
                  <div
                    className="mb-8 border-l-2 py-1 pl-6"
                    style={{ borderColor: dienst.accentColor }}
                  >
                    <p className="text-[#EDEDF4]">{dienst.highlight}</p>
                  </div>
                )}

                <p className="text-sm text-[#8585A3]">
                  <span className="font-semibold uppercase tracking-wider" style={{ color: dienst.accentColor }}>Voor wie</span>
                  <span className="mx-3 text-[#2E2E4A]">|</span>
                  {dienst.voorWie}
                </p>
              </article>
            </AnimateIn>
          </div>
        </section>
      ))}

      {/* Maatwerk */}
      <section id="maatwerk" className="border-t border-[#2E2E4A] py-24 md:py-32">
        <div className="mx-auto max-w-[700px] px-6 text-center">
          <AnimateIn>
            <h2 className="mb-6 font-[family-name:var(--font-heading)] text-3xl font-bold text-white md:text-4xl">
              Staat jouw proces er niet tussen?
            </h2>
            <p className="mb-4 text-lg text-[#EDEDF4]">
              Wij beginnen altijd bij het probleem, nooit bij de technologie.
            </p>
            <p className="mb-10 text-[#8585A3]">
              Eerst brengen we in kaart waar tijd verloren gaat. Dan pas bouwen we een oplossing die past bij hoe jij werkt. Elk MKB-bedrijf met taken die te veel tijd kosten is welkom.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-[#4F8EF7] px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#3A75D8] hover:shadow-[0_8px_30px_-8px_rgba(79,142,247,0.3)]"
            >
              Vertel over je proces
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}

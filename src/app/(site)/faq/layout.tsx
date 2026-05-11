import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Veelgestelde vragen over AI-automatisering",
  description:
    "Veelgestelde vragen over procesautomatisering, AI-oplossingen, kosten en samenwerking. Ontdek hoe Loopless werkt voor MKB-bedrijven.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Veelgestelde vragen over AI-automatisering",
    description:
      "Veelgestelde vragen over procesautomatisering, AI-oplossingen, kosten en samenwerking. Ontdek hoe Loopless werkt voor MKB-bedrijven.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veelgestelde vragen over AI-automatisering",
    description:
      "Veelgestelde vragen over procesautomatisering, AI-oplossingen, kosten en samenwerking. Ontdek hoe Loopless werkt voor MKB-bedrijven.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wat is AI-automatisering voor het MKB?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI-automatisering voor het MKB betekent dat slimme systemen repetitieve handmatige taken overnemen — leads zoeken, offertes opstellen, informatie opzoeken — zonder dat je een IT-afdeling nodig hebt. Het past op de schaal en het budget van een MKB-bedrijf, in tegenstelling tot zware enterprise-oplossingen. Je team krijgt uren per week terug om aan klantcontact en groei te besteden.",
      },
    },
    {
      "@type": "Question",
      name: "Waarom zou ik mijn bedrijfsprocessen automatiseren?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Handmatig werk kost tijd die je maar één keer kunt uitgeven. Elke uur die een medewerker besteedt aan kopiëren, zoeken of invoeren, is een uur dat niet naar klanten, groei of vakmanschap gaat. Automatisering haalt die stappen eruit zodat je team zich kan richten op werk dat er echt toe doet.",
      },
    },
    {
      "@type": "Question",
      name: "Welke processen kan ik automatiseren in mijn bedrijf?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Elk proces waarbij medewerkers dezelfde stappen herhalen. Denk aan leads zoeken en screenen, offertes opstellen, informatie opzoeken in documenten, rapporten samenstellen of data overzetten tussen systemen.",
      },
    },
    {
      "@type": "Question",
      name: "Wat is het verschil tussen procesautomatisering en gewone software kopen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Software koop je en past je bedrijf erop aan. Automatisering bouw ik op maat zodat het past bij hoe jullie al werken. We beginnen altijd bij het probleem, niet bij de technologie.",
      },
    },
    {
      "@type": "Question",
      name: "Wat kost procesautomatisering voor een klein bedrijf?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dat hangt af van hoe groot het project is. We kijken samen wat er nodig is en wat dat kost — pas daarna maak ik een voorstel. Hoe kleiner het project, hoe lager de kosten. Je betaalt nooit voor meer dan wat je nodig hebt.",
      },
    },
    {
      "@type": "Question",
      name: "Is AI-automatisering ook geschikt voor een MKB-bedrijf zonder IT-afdeling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Ik regel alle technische zaken van opzetten tot inrichten. Jij hoeft alleen aan te geven waar je vastloopt. Je hebt geen IT-kennis nodig om te beginnen.",
      },
    },
    {
      "@type": "Question",
      name: "Hoe lang duurt het om een automatisering te laten werken?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Binnen twee weken bouw ik de oplossing, daarna volgt een testfase van twee weken. Binnen een maand heb je een werkend systeem.",
      },
    },
    {
      "@type": "Question",
      name: "Wie beheert het systeem na de oplevering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Het systeem draait op jullie eigen netwerk. Wil je geen omkijken naar de technische kant? Dan log ik op afstand in om alles werkend te houden via een onderhoudsabonnement.",
      },
    },
    {
      "@type": "Question",
      name: "Is mijn data veilig als ik werk met AI-automatisering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Het systeem draait op jullie eigen netwerk, dus jullie data blijft bij jullie. Ik heb alleen toegang als jullie dat toestaan voor onderhoud.",
      },
    },
  ],
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}

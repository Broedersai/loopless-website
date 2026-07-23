"use client";

import { useState } from "react";
import Link from "next/link";

// Oplossings-configurator — kaartset "alternatief 5+1" (besloten 2026-07-23).
// Positionerings-regels (HARD): mens-eerst, geen efficiëntie/productiviteit,
// geen cijfers/besparingen, "systeem" altijd met object, AI niet als kop,
// bewijs bij naam alleen Drabor + Vuljevacature. Geen em-dashes in copy.
// Flow: intro → grootte → pijn-kaarten → aanscherping → gegevens → uitslag.
// De uitslag zit bewust ACHTER de gegevens-gate (besluit Wessel 2026-07-23).

type CardId = "vragen" | "beslissen" | "benaderen" | "overtypen" | "vacature" | "offertes";

type Card = {
  id: CardId;
  pijn: string;
  kop: string;
  body: string;
  controle: string;
  bewijs?: string;
};

const CARDS: Card[] = [
  {
    id: "vragen",
    pijn: "Mijn mensen beantwoorden de hele dag dezelfde vragen",
    kop: "Je binnendienst helpt weer klanten, in plaats van antwoorden op te zoeken.",
    body: "Een systeem beantwoordt de terugkerende vragen uit jullie eigen handleidingen en leveranciersdocumentatie. Nieuwe vraag binnen? Het antwoord staat klaar, met bronverwijzing.",
    controle: "Jouw mensen controleren het antwoord voordat het de deur uit gaat.",
  },
  {
    id: "beslissen",
    pijn: "Voor elke bestelling zoekt iemand eerst prijzen, voorraad en levertijden bij elkaar",
    kop: "Je inkoper koopt weer in, in plaats van uit te zoeken.",
    body: "Dat verzamelwerk gaat naar de achtergrond: 's ochtends staat het besteladvies al klaar, met de prijzen, voorraad en levertijden erbij.",
    controle: "Jij blijft beslissen. Het advies is een voorstel, geen bestelling. Je inkoper controleert het en drukt zelf op de knop.",
    bewijs: "Zo werkt het bij Drabor, een groothandel: de inkopers vragen met één knop een besteladvies op en controleren het voordat er iets besteld wordt.",
  },
  {
    id: "benaderen",
    pijn: "We zoeken met de hand uit welke bedrijven we benaderen",
    kop: "Elke ochtend ligt de lijst klaar. Je sales voert weer gesprekken.",
    body: "Een systeem zoekt en screent op de achtergrond welke bedrijven passen bij wat je verkoopt, en zet 's ochtends de lijst klaar die de moeite waard is.",
    controle: "Jouw mensen kiezen wie ze benaderen en voeren het gesprek. Het systeem heeft alleen het zoekwerk gedaan.",
    bewijs: "Zo werkt het bij vuljevacature.nl: de leadkwalificatie draait elke ochtend vanzelf, het team benadert de kandidaten.",
  },
  {
    id: "overtypen",
    pijn: "Gegevens gaan met de hand van de mail naar Excel naar ons systeem",
    kop: "Niemand typt meer over. De fouten die daarbij sluipen verdwijnen.",
    body: "Een systeem haalt de gegevens uit mail en bestanden en zet ze op de juiste plek in jullie systeem.",
    controle: "Twijfelgevallen legt het systeem apart voor een mens. Niets verdwijnt ongezien in de administratie.",
  },
  {
    id: "vacature",
    pijn: "We zoeken al maanden iemand, maar kunnen niemand vinden",
    kop: "Het werk komt af zonder dat je iemand hoeft te vinden.",
    body: "Vaak staat die vacature open omdat je team verzuipt in uitzoekwerk. Als een systeem dat werk doet, doen de mensen die je al hebt weer hun vak.",
    controle: "Niemand wordt vervangen. Dit gaat over de vacature die je niet ingevuld krijgt, niet over de mensen die er zijn.",
  },
  {
    id: "offertes",
    pijn: "Offertes of facturen maken kost steeds opnieuw veel tijd",
    kop: "De concept-offerte staat klaar. Jij controleert en verstuurt.",
    body: "Een systeem zet het concept klaar uit je eigen tarieven, productinfo en eerdere offertes. Geen leeg document meer, geen opzoekwerk.",
    controle: "Er gaat niets de deur uit zonder jouw controle. Jij zet de kennis en de prijs erin en drukt op versturen.",
  },
];

const MODIFIER_ID = "kennis-hoofd";
const ESCAPE_ID = "anders";

const SIZES = ["Minder dan 10", "10 tot 50", "50 tot 100", "Meer dan 100"] as const;

// Aanscherpings-vragen: alleen voor de eerst aangevinkte relevante kaart.
const SHARPEN: Partial<Record<CardId, { vraag: string; opties: [string, string] }>> = {
  vragen: {
    vraag: "Staan de antwoorden ergens vast (handleidingen, leveranciersdocs, oude mail), of zitten ze vooral in iemands hoofd?",
    opties: ["Ze staan grotendeels vast", "Vooral in iemands hoofd"],
  },
  beslissen: {
    vraag: "Gaat dat uitzoeken volgens vaste stappen, of is het elke keer echt anders?",
    opties: ["Meestal vaste stappen", "Elke keer echt anders"],
  },
  vacature: {
    vraag: "Welk werk zou die persoon vooral gaan doen?",
    opties: ["Vragen beantwoorden, uitzoeken of gegevens verwerken", "Iets heel anders (vakwerk, fysiek werk)"],
  },
};

type Step = "intro" | "grootte" | "kaarten" | "aanscherping" | "gegevens" | "uitslag";

export function Configurator() {
  const [step, setStep] = useState<Step>("intro");
  const [grootte, setGrootte] = useState<string>("");
  const [gekozen, setGekozen] = useState<string[]>([]);
  const [aanscherping, setAanscherping] = useState<Record<string, string>>({});
  const [naam, setNaam] = useState("");
  const [bedrijf, setBedrijf] = useState("");
  const [email, setEmail] = useState("");
  const [telefoon, setTelefoon] = useState("");
  const [formError, setFormError] = useState("");
  const [sending, setSending] = useState(false);

  const toggle = (id: string) =>
    setGekozen((g) => (g.includes(id) ? g.filter((x) => x !== id) : [...g, id]));

  const gekozenKaarten = CARDS.filter((c) => gekozen.includes(c.id));
  const isEscapeOnly = gekozen.includes(ESCAPE_ID) && gekozenKaarten.length === 0;
  const sharpenTargets = gekozenKaarten.filter((c) => SHARPEN[c.id]);

  const naKaarten = () => setStep(sharpenTargets.length > 0 ? "aanscherping" : "gegevens");

  const submit = async () => {
    if (!naam.trim() || !bedrijf.trim() || !email.trim() || !/.+@.+\..+/.test(email)) {
      setFormError("Vul in elk geval je naam, bedrijf en een geldig e-mailadres in.");
      return;
    }
    setFormError("");
    setSending(true);
    const payload = {
      naam: naam.trim(),
      bedrijf: bedrijf.trim(),
      email: email.trim(),
      telefoon: telefoon.trim(),
      grootte,
      keuzes: gekozen,
      aanscherping,
      pijn_zinnen: gekozenKaarten.map((c) => c.pijn),
      escape: gekozen.includes(ESCAPE_ID),
      modifier_kennis: gekozen.includes(MODIFIER_ID),
    };
    try {
      await fetch("/api/configurator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // Inzending mag de bezoeker nooit blokkeren: uitslag tonen we sowieso.
    }
    setSending(false);
    setStep("uitslag");
  };

  const nuances: string[] = [];
  if (grootte === SIZES[0])
    nuances.push(
      "Eerlijk: met minder dan 10 mensen loont een systeem alleen als het uitzoekwerk echt dagelijks terugkomt. Vaak is één gericht gesprek dan waardevoller dan een bouwtraject.",
    );
  if (grootte === SIZES[3])
    nuances.push(
      "Boven de 100 mensen spelen er meestal ook IT-afdelingen en bestaande systemen mee. Dat kan prima, maar het gesprek gaat dan eerst over waar wij naast jullie eigen mensen passen.",
    );
  if (gekozen.includes(MODIFIER_ID))
    nuances.push(
      "Je gaf aan dat de kennis vooral in het hoofd van één of twee mensen zit. Dan is de eerlijke eerste stap: die kennis vastleggen. Pas daarna kan een systeem er iets mee. Dat vastleggen hoort bij het traject.",
    );
  if (aanscherping["vragen"] === SHARPEN.vragen!.opties[1])
    nuances.push(
      "De antwoorden zitten nu vooral in hoofden. Eerst vastleggen, dan pas een systeem erop. Dat is minder sexy, maar wel de volgorde die werkt.",
    );
  if (aanscherping["beslissen"] === SHARPEN.beslissen!.opties[1])
    nuances.push(
      "Als het uitzoeken elke keer echt anders is, neemt een systeem een deel over en houdt de mens de leiding. Ook dat is winst, maar we beloven niet meer dan dat.",
    );

  const vacatureNaarVakwerk = aanscherping["vacature"] === SHARPEN.vacature!.opties[1];

  return (
    <div className="mx-auto max-w-[760px] px-6">
      {step === "intro" && (
        <Panel>
          <h1 className="mb-4 font-[family-name:var(--font-heading)] text-3xl font-bold text-white md:text-4xl">
            Welk werk zou een systeem bij jou kunnen overnemen?
          </h1>
          <p className="mb-4 text-lg leading-relaxed text-[#8585A3]">
            Beantwoord een paar vragen over waar de tijd blijft hangen. Geen verkooppraatje, maar
            een concreet overzicht: wat een systeem kan overnemen, en waar je je mensen juist voor
            houdt.
          </p>
          <p className="mb-4 font-medium text-[#EDEDF4]">
            Niemand wordt vervangen. Jouw mensen controleren en beslissen.
          </p>
          <p className="mb-8 text-sm text-[#8585A3]">
            Ongeveer 2 minuten. Je ziet het overzicht direct nadat je je gegevens hebt ingevuld.
          </p>
          <PrimaryButton onClick={() => setStep("grootte")}>Start</PrimaryButton>
        </Panel>
      )}

      {step === "grootte" && (
        <Panel>
          <StepLabel n={1} totaal={3} />
          <h2 className="mb-6 font-[family-name:var(--font-heading)] text-2xl font-bold text-white">
            Hoeveel mensen werken er bij jullie?
          </h2>
          <div className="flex flex-col gap-3">
            {SIZES.map((s) => (
              <ChoiceButton key={s} active={grootte === s} onClick={() => setGrootte(s)}>
                {s}
              </ChoiceButton>
            ))}
          </div>
          <NavRow terug={() => setStep("intro")} verder={() => setStep("kaarten")} verderDisabled={!grootte} />
        </Panel>
      )}

      {step === "kaarten" && (
        <Panel>
          <StepLabel n={2} totaal={3} />
          <h2 className="mb-2 font-[family-name:var(--font-heading)] text-2xl font-bold text-white">
            Je mensen zijn meer tijd kwijt aan uitzoeken dan aan hun eigenlijke werk. Waar zit dat
            bij jou?
          </h2>
          <p className="mb-6 text-[#8585A3]">
            Wij bouwen systemen die het werk afleveren, niet nog een chatbox. Kies wat herkenbaar
            is, meerdere mag.
          </p>
          <div className="flex flex-col gap-3">
            {CARDS.map((c) => (
              <ChoiceButton key={c.id} active={gekozen.includes(c.id)} onClick={() => toggle(c.id)}>
                &ldquo;{c.pijn}&rdquo;
              </ChoiceButton>
            ))}
            <ChoiceButton active={gekozen.includes(MODIFIER_ID)} onClick={() => toggle(MODIFIER_ID)}>
              &ldquo;De kennis zit vooral in het hoofd van één of twee mensen&rdquo;
            </ChoiceButton>
            <ChoiceButton active={gekozen.includes(ESCAPE_ID)} onClick={() => toggle(ESCAPE_ID)}>
              Iets anders / ik weet het niet precies
            </ChoiceButton>
          </div>
          <NavRow
            terug={() => setStep("grootte")}
            verder={naKaarten}
            verderDisabled={gekozen.length === 0}
          />
        </Panel>
      )}

      {step === "aanscherping" && (
        <Panel>
          <StepLabel n={3} totaal={3} />
          {sharpenTargets.map((c) => {
            const s = SHARPEN[c.id]!;
            return (
              <div key={c.id} className="mb-8">
                <p className="mb-1 text-sm text-[#8585A3]">Over &ldquo;{c.pijn}&rdquo;:</p>
                <h3 className="mb-4 font-[family-name:var(--font-heading)] text-xl font-bold text-white">
                  {s.vraag}
                </h3>
                <div className="flex flex-col gap-3">
                  {s.opties.map((o) => (
                    <ChoiceButton
                      key={o}
                      active={aanscherping[c.id] === o}
                      onClick={() => setAanscherping((a) => ({ ...a, [c.id]: o }))}
                    >
                      {o}
                    </ChoiceButton>
                  ))}
                </div>
              </div>
            );
          })}
          <NavRow
            terug={() => setStep("kaarten")}
            verder={() => setStep("gegevens")}
            verderDisabled={sharpenTargets.some((c) => !aanscherping[c.id])}
          />
        </Panel>
      )}

      {step === "gegevens" && (
        <Panel>
          <h2 className="mb-2 font-[family-name:var(--font-heading)] text-2xl font-bold text-white">
            Bijna klaar. Waar mag het overzicht heen?
          </h2>
          <p className="mb-6 text-[#8585A3]">
            Je ziet het overzicht direct op je scherm. Wessel neemt er daarna één keer contact over
            op. Je praat direct met degene die het bouwt, geen verkoper.
          </p>
          <div className="mb-2 grid gap-3 md:grid-cols-2">
            <Input placeholder="Naam" value={naam} onChange={setNaam} />
            <Input placeholder="Bedrijf" value={bedrijf} onChange={setBedrijf} />
            <Input placeholder="E-mailadres" type="email" value={email} onChange={setEmail} />
            <Input placeholder="Telefoon (optioneel)" type="tel" value={telefoon} onChange={setTelefoon} />
          </div>
          {formError && <p className="mb-2 text-sm text-[#E8A04E]">{formError}</p>}
          <NavRow
            terug={() => setStep(sharpenTargets.length > 0 ? "aanscherping" : "kaarten")}
            verder={submit}
            verderLabel={sending ? "Versturen..." : "Toon mijn overzicht"}
            verderDisabled={sending}
          />
        </Panel>
      )}

      {step === "uitslag" && (
        <div className="flex flex-col gap-6">
          <Panel>
            <h2 className="mb-2 font-[family-name:var(--font-heading)] text-3xl font-bold text-white">
              {isEscapeOnly ? "Dan is een gesprek eerlijker dan een tool." : `Dit staat er voor jou klaar, ${naam.split(" ")[0]}.`}
            </h2>
            <p className="text-[#8585A3]">
              {isEscapeOnly
                ? "Jouw situatie past niet in een standaardhokje, en dat gaan we ook niet forceren. In een kort gesprek komen we er samen achter waar de tijd bij jullie echt blijft hangen, en of een systeem daar iets kan betekenen."
                : "Geen offerte, geen verplichting: dit is wat een systeem bij jullie zou kunnen overnemen, op basis van wat je aangaf. Wessel neemt er één keer contact over op."}
            </p>
          </Panel>

          {!vacatureNaarVakwerk &&
            gekozenKaarten.map((c) => (
              <Panel key={c.id}>
                <h3 className="mb-3 font-[family-name:var(--font-heading)] text-xl font-bold text-white">
                  {c.kop}
                </h3>
                <p className="mb-3 leading-relaxed text-[#8585A3]">{c.body}</p>
                <p className="mb-3 font-medium text-[#EDEDF4]">{c.controle}</p>
                {c.bewijs && (
                  <p className="border-l-2 border-[#4F8EF7] pl-4 text-sm italic text-[#8585A3]">
                    {c.bewijs}
                  </p>
                )}
              </Panel>
            ))}

          {vacatureNaarVakwerk && (
            <Panel>
              <h3 className="mb-3 font-[family-name:var(--font-heading)] text-xl font-bold text-white">
                Eerlijk antwoord: voor vakwerk of fysiek werk bouw je geen systeem.
              </h3>
              <p className="leading-relaxed text-[#8585A3]">
                Die vacature los je niet op met automatisering, en dat gaan we ook niet beweren.
                Wat wél vaak kan: het uitzoek- en administratiewerk rond die functie weghalen, zodat
                de mensen die je hebt meer aan hun echte werk toekomen. Dat is een gesprek waard,
                geen belofte.
              </p>
            </Panel>
          )}

          {nuances.length > 0 && (
            <Panel>
              <h3 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-bold text-white">
                Eerlijk erbij
              </h3>
              <ul className="flex flex-col gap-2">
                {nuances.map((n) => (
                  <li key={n} className="leading-relaxed text-[#8585A3]">
                    {n}
                  </li>
                ))}
              </ul>
            </Panel>
          )}

          <Panel>
            <p className="mb-6 text-[#EDEDF4]">
              Binnen 4 tot 6 weken draait er één proces dat je nu handmatig doet. Vaste prijs,
              duidelijke acceptatiecriteria vooraf. Werkt het niet zoals afgesproken, dan betaal je
              de laatste termijn niet.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-[#4F8EF7] px-8 py-4 text-center font-semibold text-white transition-colors hover:bg-[#3A75D8]"
              >
                Plan een gesprek
              </Link>
              <Link
                href="/diensten"
                className="rounded-full border border-[#3E3E5A] px-8 py-4 text-center font-semibold text-white transition-colors hover:border-[#4F8EF7]/40 hover:text-[#4F8EF7]"
              >
                Bekijk de diensten
              </Link>
            </div>
          </Panel>
        </div>
      )}
    </div>
  );
}

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-[#2E2E4A] bg-[#1E1E30] p-8 md:p-10">{children}</div>
  );
}

function StepLabel({ n, totaal }: { n: number; totaal: number }) {
  return (
    <span className="mb-4 block text-xs font-medium uppercase tracking-[0.2em] text-[#4F8EF7]">
      Vraag {n} van {totaal}
    </span>
  );
}

function PrimaryButton({ children, onClick, disabled }: { children: React.ReactNode; onClick: () => void; disabled?: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="rounded-full bg-[#4F8EF7] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#3A75D8] disabled:cursor-not-allowed disabled:opacity-40"
    >
      {children}
    </button>
  );
}

function ChoiceButton({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl border px-5 py-4 text-left transition-all ${
        active
          ? "border-[#4F8EF7] bg-[#4F8EF7]/10 text-white"
          : "border-[#2E2E4A] bg-[#161625] text-[#8585A3] hover:border-[#3E3E5A] hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

function NavRow({ terug, verder, verderDisabled, verderLabel }: { terug: () => void; verder: () => void; verderDisabled?: boolean; verderLabel?: string }) {
  return (
    <div className="mt-8 flex items-center justify-between">
      <button onClick={terug} className="text-sm font-medium text-[#8585A3] transition-colors hover:text-white">
        Terug
      </button>
      <PrimaryButton onClick={verder} disabled={verderDisabled}>
        {verderLabel ?? "Verder"}
      </PrimaryButton>
    </div>
  );
}

function Input({ placeholder, value, onChange, type = "text" }: { placeholder: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-xl border border-[#2E2E4A] bg-[#161625] px-5 py-4 text-white placeholder-[#8585A3] outline-none transition-colors focus:border-[#4F8EF7]"
    />
  );
}

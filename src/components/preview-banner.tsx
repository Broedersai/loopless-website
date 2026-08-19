import { draftMode } from "next/headers";

// Preview-/voorbeeldmodus-banner voor de publieke site. Async server-component die
// ZELF draftMode() leest (request-API → MOET buiten elke 'use cache'-scope blijven;
// Next 16 pitfall, zie src/lib/supabase/content.ts). Zo blijft de (site)-layout sync.
//
// Rendert niets in de published-laag → een gewone anonieme bezoeker (geen draft-cookie)
// ziet de banner NOOIT. In draft-mode toont 'm een vaste balk met een "Preview
// verlaten"-link naar /api/draft/disable, die de draft-cookie wist en terugstuurt naar
// de pagina waar de klant stond (ISS-006, slug-besluit 29-02).
//
// ONDERAAN gefixeerd, niet bovenaan: klantsites hebben vaak een eigen fixed header
// op z-50 bovenaan; een top-banner verliest die stapeling (later in de DOM wint) en
// wordt onklikbaar.
//
// STAPELING (ISS-034, gemeten 29-02): onderaan is er WEL een fixed element om mee te
// botsen — de aankondiging-modal van de engine zelf (.announce-overlay in globals.css
// heeft position:fixed; inset:0; z-index:1000). Die lag over de banner heen, en omdat
// de overlay-div een onClick={close} heeft, sloot een klik op "Preview verlaten" de
// pop-up in plaats van de preview te verlaten. De afspraak is daarom: de banner is
// review-chrome en staat boven ALLES van de site zelf, inclusief de eigen modals.
// Vandaar z-[1100] — ruim boven de 1000 van de overlay. Wie een nieuw overlay-element
// toevoegt, blijft daaronder.
//
// ONDERRUIMTE (ISS-032, gemeten 29-01): een fixed balk zonder compenserende ruimte
// dekt de onderkant van de pagina af — op loopless.nl/375px precies de tweede hero-CTA.
// Juist in het scherm waar de klant beoordeelt of de site klopt. Opgelost met een
// <style> die alleen in de draft-tak rendert en dus per constructie niet naar de
// published-laag lekt. Het moet een style-tag zijn en geen spacer-div: de banner wordt
// per klantsite op een andere plek gemount (loopless in (site)/layout.tsx, bushido in
// de root-layout), dus een spacer kan bóven de content belanden. Een body-class zou een
// afspraak met de klantlayout vereisen en de engine niet langer dependency-vrij maken.
//
// De hoogte is daarom VAST (min-h-11 = 2.75rem) en gelijk aan de gereserveerde ruimte —
// niet impliciet uit de tekstlengte. De uitleg-zin staat achter `hidden sm:inline` omdat
// hij op 375px naar drie regels brak (gemeten box 60px); mobiel houdt "Voorbeeldmodus"
// plus de knop over, wat op één regel past.
//
// Dependency-vrij en zonder repo-specifieke imports → engine byte-identiek
// template↔loopless↔bushido (conventie 11-01). Wijzig dit bestand nooit in één repo:
// vergelijk met `git rev-parse HEAD:<pad>` (de blob-hash), niet met een bestandsdiff —
// core.autocrlf maakt op Windows verschil dat er niet is.
export async function PreviewBanner() {
  const { isEnabled } = await draftMode();
  if (!isEnabled) return null;

  return (
    <>
      <style>{`body { padding-bottom: 2.75rem; }`}</style>
      <div
        role="status"
        className="fixed bottom-0 left-0 right-0 z-[1100] flex min-h-11 items-center justify-between gap-4 bg-amber-400 px-4 py-2 text-sm text-amber-950 shadow-md"
      >
        <span className="font-medium">
          Voorbeeldmodus
          <span className="hidden sm:inline">
            {" "}
            — je bekijkt niet-gepubliceerde wijzigingen.
          </span>
        </span>
        <a
          href="/api/draft/disable"
          className="shrink-0 rounded-md bg-amber-950 px-3 py-1 font-semibold text-amber-50 hover:bg-amber-900"
        >
          Preview verlaten
        </a>
      </div>
    </>
  );
}

import { draftMode } from "next/headers";

// Preview-/voorbeeldmodus-banner voor de publieke site. Async server-component die
// ZELF draftMode() leest (request-API → MOET buiten elke 'use cache'-scope blijven;
// Next 16 pitfall, zie src/lib/supabase/content.ts). Zo blijft de (site)-layout sync.
//
// Rendert niets in de published-laag → een gewone anonieme bezoeker (geen draft-cookie)
// ziet de banner NOOIT. In draft-mode toont 'm een vaste balk met een "Preview
// verlaten"-link naar /api/draft/disable, die de draft-cookie wist en terugstuurt naar
// de published-site (ISS-006).
//
// Dependency-vrij en zonder repo-specifieke imports → engine byte-identiek
// template↔loopless (conventie 11-01).
export async function PreviewBanner() {
  const { isEnabled } = await draftMode();
  if (!isEnabled) return null;

  return (
    <div
      role="status"
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-4 bg-amber-400 px-4 py-2 text-sm text-amber-950 shadow-md"
    >
      <span className="font-medium">
        Voorbeeldmodus — je bekijkt niet-gepubliceerde wijzigingen.
      </span>
      <a
        href="/api/draft/disable"
        className="shrink-0 rounded-md bg-amber-950 px-3 py-1 font-semibold text-amber-50 hover:bg-amber-900"
      >
        Preview verlaten
      </a>
    </div>
  );
}

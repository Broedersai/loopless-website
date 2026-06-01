import { type NextRequest } from "next/server";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { timingSafeEqualStr } from "@/lib/preview/token";

// Node.js is de default runtime (en vereist door cacheComponents) — geen runtime-export
// nodig; route-segment-config "runtime" is zelfs incompatibel met cacheComponents.

// Zet draft-mode aan zodat de site de draft-laag uit de portal-BFF rendert (preview).
// Aangeroepen door de "Bekijk preview"-knop in het portaal met het gedeelde secret.
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");
  const slug = searchParams.get("slug");

  if (!timingSafeEqualStr(token, process.env.PORTAAL_PREVIEW_SECRET)) {
    return new Response("Forbidden", { status: 403 });
  }

  // Open-redirect-guard: alleen een interne, niet-protocol-relatieve path toestaan.
  // Weert //evil.com en /\evil.com (sommige browsers normaliseren \ naar /).
  const safe =
    slug && slug.startsWith("/") && !slug.startsWith("//") && !slug.startsWith("/\\")
      ? slug
      : "/";

  (await draftMode()).enable();
  redirect(safe);
}

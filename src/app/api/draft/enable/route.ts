import { type NextRequest } from "next/server";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import {
  timingSafeEqualStr,
  verifySignedPreviewToken,
} from "@/lib/preview/token";

// Node.js is de default runtime (en vereist door cacheComponents) — geen runtime-export
// nodig; route-segment-config "runtime" is zelfs incompatibel met cacheComponents.

// Zet draft-mode aan zodat de site de draft-laag uit de portal-BFF rendert (preview).
// Aangeroepen door de "Bekijk preview"-knop in het portaal met het gedeelde secret.
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");
  const slug = searchParams.get("slug");

  // Kortlevend signed token ("exp.hmac", met punt) is de norm (A-01/4.1-06): een
  // gelekte preview-URL is na de TTL waardeloos. Het rauwe secret (64-hex, zonder
  // punt) blijft één release-cyclus geaccepteerd voor oude portaal-deploys en
  // gebookmarkte URL's. TODO(A-01): dit legacy-pad verwijderen ná die cyclus.
  const secret = process.env.PORTAAL_PREVIEW_SECRET;
  const isSigned = token?.includes(".") ?? false;
  const ok = isSigned
    ? verifySignedPreviewToken(token, secret)
    : timingSafeEqualStr(token, secret);
  if (!ok) {
    return new Response("Forbidden", { status: 403 });
  }
  if (!isSigned) {
    console.warn(
      "draft/enable: rauw preview-secret via query is deprecated (A-01)",
    );
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

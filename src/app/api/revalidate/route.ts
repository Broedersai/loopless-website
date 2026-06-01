import { type NextRequest } from "next/server";
import { revalidateTag } from "next/cache";
import { timingSafeEqualStr } from "@/lib/preview/token";

// Node.js is de default runtime (en vereist door cacheComponents); een "runtime"-export
// is incompatibel met cacheComponents, dus weggelaten.

// Webhook-ontvanger: het portaal POST't hierheen na elke publish (src/lib/publish/webhook.ts)
// met header X-Revalidate-Secret + body { tenantId }. We invalideren de per-tenant cache-tag
// uit 9-04 zodat de published-laag binnen ~5s vers is.
// LET OP: revalidateTag (NIET updateTag — updateTag is Server-Actions-only).
export async function POST(request: NextRequest) {
  const provided = request.headers.get("X-Revalidate-Secret");
  if (!timingSafeEqualStr(provided, process.env.PORTAAL_REVALIDATE_SECRET)) {
    return new Response("Forbidden", { status: 403 });
  }

  let tenantId: unknown;
  try {
    ({ tenantId } = await request.json());
  } catch {
    return new Response("Bad Request", { status: 400 });
  }
  if (typeof tenantId !== "string" || !tenantId) {
    return new Response("Bad Request", { status: 400 });
  }

  // 2-arg signatuur (Next 16). { expire: 0 } = directe expiratie i.p.v. 'max'
  // (stale-while-revalidate): door de doc aanbevolen voor webhooks die NU verse data
  // willen, zodat de published-laag meteen de zojuist gepubliceerde content toont.
  revalidateTag(`tenant:${tenantId}:content`, { expire: 0 });
  return Response.json({ revalidated: true });
}

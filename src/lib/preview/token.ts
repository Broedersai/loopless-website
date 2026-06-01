import crypto from "node:crypto";

// Gespiegeld van het portaal (src/lib/publish/token.ts). Shared-secret + timing-safe
// compare: bewijst alleen "ik ken het gedeelde secret van deze klantsite". Geen JWT —
// minder aanvalsoppervlak. timingSafeEqual vereist gelijke lengte, dus lengte eerst
// (niet-secret) vergelijken.
export function timingSafeEqualStr(
  provided: string | null,
  expected: string | undefined,
): boolean {
  if (!provided || !expected) return false;
  const a = Buffer.from(provided, "utf8");
  const b = Buffer.from(expected, "utf8");
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

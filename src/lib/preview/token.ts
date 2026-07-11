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

// Verifieert het kortlevende gesigneerde preview-token uit het portaal (A-01/4.1-06,
// gespiegeld van signPreviewToken in portaal src/lib/publish/token.ts). Formaat
// "exp.hmac": weiger bij vorm-fout of verlopen exp, hercompute de HMAC-SHA256 over
// de exp-string met het gedeelde secret en vergelijk timing-safe. Geen JWT — zelfde
// rationale als hierboven.
export function verifySignedPreviewToken(
  token: string | null,
  secret: string | undefined,
): boolean {
  if (!token || !secret) return false;
  const dot = token.indexOf(".");
  if (dot === -1) return false;
  const expStr = token.slice(0, dot);
  const hmac = token.slice(dot + 1);
  if (!/^\d{1,12}$/.test(expStr) || !/^[0-9a-f]{64}$/.test(hmac)) return false;
  if (Number(expStr) < Math.floor(Date.now() / 1000)) return false;
  const expected = crypto
    .createHmac("sha256", secret)
    .update(expStr)
    .digest("hex");
  return timingSafeEqualStr(hmac, expected);
}

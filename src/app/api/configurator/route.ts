import { type NextRequest } from "next/server";

// Configurator-intake: stuurt de inzending door naar de n8n-webhook
// (server-to-server, zodat de webhook-URL niet in de browser ligt).
// De bezoeker mag hier nooit op stranden: de uitslag is client-side,
// dus fouten loggen we en geven we terug zonder de flow te breken.
export async function POST(request: NextRequest) {
  const webhook = process.env.CONFIGURATOR_WEBHOOK_URL;
  if (!webhook) {
    console.error("[configurator] CONFIGURATOR_WEBHOOK_URL ontbreekt");
    return Response.json({ ok: false }, { status: 500 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      console.error("[configurator] webhook antwoordde", res.status);
      return Response.json({ ok: false }, { status: 502 });
    }
  } catch (e) {
    console.error("[configurator] webhook onbereikbaar:", e);
    return Response.json({ ok: false }, { status: 502 });
  }

  return Response.json({ ok: true });
}

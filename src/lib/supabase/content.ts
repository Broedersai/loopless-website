import { draftMode } from "next/headers";
import { cacheLife, cacheTag } from "next/cache";
import { createClient } from "@supabase/supabase-js";

// Leesbaar voor de paginas: een blok is uiteindelijk tekst of een (publieke) foto-URL,
// gesleuteld op de slug (deel na de "/" in de portal-key page/slug).
export type ContentBlock = {
  slug: string;
  type: "text" | "image";
  text_value: string | null;
  image_url: string | null;
};

// Rauwe blok-shape zoals beide bronnen (anon-Supabase EN portal-BFF) hem leveren:
// key = "page/slug", image_url = STORAGE-PATH (geen URL). De BFF heeft draft al over
// live gemerged, dus beide paden consumeren dezelfde velden.
type RawBlock = {
  key: string;
  type: string;
  text_value: string | null;
  image_url: string | null;
};

// De portal bewaart in image_url een storage-PATH ({tenant_id}/...), niet een URL.
// Bouw de publieke URL uit het pad. Bucket tenant-assets is public (9-01).
function toPublicUrl(path: string | null): string | null {
  if (!path) return null;
  if (/^https?:\/\//i.test(path)) return path; // defensief: al een absolute URL
  return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/tenant-assets/${path}`;
}

// Published-pad: anon-read (cookieless) uit het portal-project. Leest de LIVE kolommen
// van álle rijen; drafts zijn column-level afgeschermd in het portaal (mig 0022), niet
// meer via een row-filter. Zo valt een blok in draft-status niet terug op de
// code-placeholder maar toont het z'n laatst-gepubliceerde waarde (ISS-004).
// 'use cache' + lange cacheLife + per-tenant cacheTag → revalidatie via de
// publish-webhook (9-05). draftMode() wordt BEWUST buiten deze cache-scope gelezen.
async function getPublishedBlocks(tenantId: string): Promise<RawBlock[]> {
  "use cache";
  cacheLife("max");
  cacheTag(`tenant:${tenantId}:content`);

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
  const { data, error } = await supabase
    .from("content_blocks")
    .select("key, type, text_value, image_url")
    .eq("tenant_id", tenantId);

  if (error) {
    console.error("[content] getPublishedBlocks failed:", error.message);
    return [];
  }
  return (data ?? []) as RawBlock[];
}

// Draft-pad: via de portal-BFF (service-role, draft-over-live al gemerged). no-store,
// want drafts veranderen bij elke save. Shape { tenantId, blocks, collections } as-is.
async function getDraftBlocks(tenantId: string): Promise<RawBlock[]> {
  const url = `${process.env.PORTAAL_BFF_URL}?token=${process.env.PORTAAL_PREVIEW_SECRET}&tenantId=${tenantId}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    console.error("[content] getDraftBlocks failed:", res.status);
    return [];
  }
  const json = (await res.json()) as { blocks?: RawBlock[] };
  return json.blocks ?? [];
}

export async function getBlocksByPage(
  page: string,
): Promise<Record<string, ContentBlock>> {
  // Request-API: BUITEN elke 'use cache'-scope lezen (Next 16 pitfall). Bepaalt of we
  // de gecachte published-tak of de no-store draft-tak nemen.
  const { isEnabled } = await draftMode();
  const tenantId = process.env.TENANT_ID ?? "";

  const raw = isEnabled
    ? await getDraftBlocks(tenantId)
    : await getPublishedBlocks(tenantId);

  // Geen page-kolom meer in het portal-schema: page/slug zit in de key.
  const result: Record<string, ContentBlock> = {};
  for (const b of raw) {
    const slashIndex = b.key.indexOf("/");
    if (slashIndex === -1) continue;
    const blockPage = b.key.slice(0, slashIndex);
    const slug = b.key.slice(slashIndex + 1);
    if (blockPage !== page || !slug) continue;
    result[slug] = {
      slug,
      type: b.type === "image" ? "image" : "text",
      text_value: b.text_value,
      image_url: toPublicUrl(b.image_url),
    };
  }
  return result;
}

export function blockText(
  blocks: Record<string, ContentBlock>,
  slug: string,
  fallback: string,
): string {
  return blocks[slug]?.text_value ?? fallback;
}

export function blockImage(
  blocks: Record<string, ContentBlock>,
  slug: string,
  fallback: string,
): string {
  return blocks[slug]?.image_url ?? fallback;
}

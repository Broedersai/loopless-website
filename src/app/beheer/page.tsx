import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { ContentBlock } from "@/lib/supabase/content";

const PAGE_LABELS: Record<string, string> = {
  home: "Homepage",
  over: "Over-pagina",
};

export const dynamic = "force-dynamic";

export default async function BeheerPage() {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("content_blocks")
    .select("id, slug, page, label, type, text_value, image_url, sort_order")
    .order("page")
    .order("sort_order");

  if (error) {
    return (
      <p className="rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-300">
        Kon content niet laden: {error.message}
      </p>
    );
  }

  const blocks = (data ?? []) as ContentBlock[];
  const grouped: Record<string, ContentBlock[]> = {};
  for (const block of blocks) {
    (grouped[block.page] ??= []).push(block);
  }

  return (
    <div className="space-y-10">
      <div>
        <h1 className="mb-2 font-[family-name:var(--font-heading)] text-3xl font-bold">Content beheren</h1>
        <p className="text-[#8585A3]">Klik een blok om de tekst of foto aan te passen.</p>
      </div>

      {Object.entries(grouped).map(([page, items]) => (
        <section key={page}>
          <h2 className="mb-4 font-[family-name:var(--font-heading)] text-xl font-bold">
            {PAGE_LABELS[page] ?? page}
          </h2>
          <div className="overflow-hidden rounded-xl border border-[#2E2E4A]">
            {items.map((block, i) => (
              <Link
                key={block.id}
                href={`/beheer/${block.slug}`}
                className={`flex items-center justify-between gap-4 bg-[#1E1E30] px-5 py-4 transition-colors hover:bg-[#252540] ${
                  i > 0 ? "border-t border-[#2E2E4A]" : ""
                }`}
              >
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="text-sm font-medium text-white">{block.label}</span>
                    <span className="rounded bg-[#2E2E4A] px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-[#8585A3]">
                      {block.type}
                    </span>
                  </div>
                  <p className="truncate text-sm text-[#8585A3]">
                    {block.type === "text"
                      ? (block.text_value ?? "—")
                      : (block.image_url ?? "Geen foto")}
                  </p>
                </div>
                <span className="text-[#4F8EF7]">→</span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

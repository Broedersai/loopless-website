import { unstable_cache } from "next/cache";
import { createClient } from "@supabase/supabase-js";

export type ContentBlock = {
  id: string;
  slug: string;
  page: string;
  label: string;
  type: "text" | "image";
  text_value: string | null;
  image_url: string | null;
  sort_order: number;
};

export const CONTENT_TAG = "content";

async function fetchAllBlocks(): Promise<ContentBlock[]> {
  // Anon client (no cookies) — safe inside unstable_cache. Public read via RLS.
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
  const { data, error } = await supabase
    .from("content_blocks")
    .select("id, slug, page, label, type, text_value, image_url, sort_order")
    .order("page")
    .order("sort_order");

  if (error) {
    console.error("[content] fetchAllBlocks failed:", error.message);
    return [];
  }
  return (data ?? []) as ContentBlock[];
}

export const getAllBlocks = unstable_cache(fetchAllBlocks, ["content_blocks_all"], {
  tags: [CONTENT_TAG],
});

export async function getBlocksByPage(page: string): Promise<Record<string, ContentBlock>> {
  const all = await getAllBlocks();
  const result: Record<string, ContentBlock> = {};
  for (const block of all) {
    if (block.page === page) result[block.slug] = block;
  }
  return result;
}

export function blockText(blocks: Record<string, ContentBlock>, slug: string, fallback: string): string {
  return blocks[slug]?.text_value ?? fallback;
}

export function blockImage(blocks: Record<string, ContentBlock>, slug: string, fallback: string): string {
  return blocks[slug]?.image_url ?? fallback;
}

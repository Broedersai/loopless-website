import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { ContentBlock } from "@/lib/supabase/content";
import { TextEditor, ImageEditor } from "./editor";

export const dynamic = "force-dynamic";

export default async function EditBlockPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("content_blocks")
    .select("id, slug, page, label, type, text_value, image_url, sort_order")
    .eq("slug", slug)
    .maybeSingle();

  if (error || !data) notFound();
  const block = data as ContentBlock;

  return (
    <div className="space-y-6">
      <Link href="/beheer" className="inline-block text-sm text-[#4F8EF7] hover:underline">
        ← Terug naar overzicht
      </Link>

      <div>
        <h1 className="mb-1 font-[family-name:var(--font-heading)] text-2xl font-bold">{block.label}</h1>
        <p className="font-mono text-xs text-[#8585A3]">{block.slug}</p>
      </div>

      {block.type === "text" ? (
        <TextEditor slug={block.slug} initialValue={block.text_value ?? ""} />
      ) : (
        <ImageEditor slug={block.slug} currentUrl={block.image_url} />
      )}
    </div>
  );
}

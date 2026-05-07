"use server";

import { updateTag } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { CONTENT_TAG } from "@/lib/supabase/content";

export async function signIn(formData: FormData) {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: error.message };
  }
  redirect("/beheer");
}

export async function signOut() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect("/beheer/login");
}

export async function saveText(slug: string, value: string) {
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("content_blocks")
    .update({ text_value: value })
    .eq("slug", slug);

  if (error) return { error: error.message };
  updateTag(CONTENT_TAG);
  return { ok: true };
}

export async function uploadImage(slug: string, formData: FormData) {
  const file = formData.get("file") as File | null;
  if (!file || file.size === 0) return { error: "Geen bestand geselecteerd" };

  const supabase = await createSupabaseServerClient();

  const ext = file.name.split(".").pop()?.toLowerCase() ?? "jpg";
  const path = `${slug}-${Date.now()}.${ext}`;

  const { error: uploadError } = await supabase.storage
    .from("site-images")
    .upload(path, file, { cacheControl: "3600", upsert: false });

  if (uploadError) return { error: uploadError.message };

  const { data: publicUrl } = supabase.storage.from("site-images").getPublicUrl(path);

  const { error: updateError } = await supabase
    .from("content_blocks")
    .update({ image_url: publicUrl.publicUrl })
    .eq("slug", slug);

  if (updateError) return { error: updateError.message };
  updateTag(CONTENT_TAG);
  return { ok: true };
}

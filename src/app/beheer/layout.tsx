import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { signOut } from "./actions";

export default async function BeheerLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-[#161625] text-white">
      {user && (
        <header className="border-b border-[#2E2E4A] bg-[#1A1A2E]">
          <div className="mx-auto flex max-w-[1000px] items-center justify-between px-6 py-4">
            <Link href="/beheer" className="font-[family-name:var(--font-heading)] text-lg font-bold">
              Beheerpaneel
            </Link>
            <div className="flex items-center gap-4 text-sm text-[#8585A3]">
              <span>{user.email}</span>
              <form action={signOut}>
                <button type="submit" className="rounded-md border border-[#2E2E4A] px-3 py-1 text-white transition-colors hover:border-[#4F8EF7]/40">
                  Uitloggen
                </button>
              </form>
            </div>
          </div>
        </header>
      )}
      <div className="mx-auto max-w-[1000px] px-6 py-8">{children}</div>
    </div>
  );
}

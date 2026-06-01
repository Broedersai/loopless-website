import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

// Zet draft-mode uit en stuurt terug naar de homepage (published-laag).
export async function GET() {
  (await draftMode()).disable();
  redirect("/");
}

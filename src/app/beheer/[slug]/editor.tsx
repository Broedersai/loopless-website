"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import { saveText, uploadImage } from "../actions";

type Status =
  | { kind: "idle" }
  | { kind: "saving" }
  | { kind: "saved" }
  | { kind: "error"; message: string };

export function TextEditor({ slug, initialValue }: { slug: string; initialValue: string }) {
  const [value, setValue] = useState(initialValue);
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [isPending, startTransition] = useTransition();

  function handleSave() {
    setStatus({ kind: "saving" });
    startTransition(async () => {
      const result = await saveText(slug, value);
      if (result.error) {
        setStatus({ kind: "error", message: result.error });
      } else {
        setStatus({ kind: "saved" });
        setTimeout(() => setStatus({ kind: "idle" }), 2000);
      }
    });
  }

  return (
    <div className="space-y-4">
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={Math.max(4, value.split("\n").length + 1)}
        className="w-full rounded-md border border-[#2E2E4A] bg-[#1E1E30] px-4 py-3 text-white outline-none focus:border-[#4F8EF7]"
      />
      <p className="text-xs text-[#8585A3]">
        Tip: gebruik enter voor een regelafbreking. Wijzigingen worden direct live na opslaan.
      </p>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handleSave}
          disabled={isPending || value === initialValue}
          className="rounded-md bg-[#4F8EF7] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3A75D8] disabled:opacity-50"
        >
          {status.kind === "saving" ? "Bezig…" : "Opslaan"}
        </button>
        {status.kind === "saved" && <span className="text-sm text-[#34D399]">✓ Opgeslagen</span>}
        {status.kind === "error" && (
          <span className="text-sm text-red-300">Fout: {status.message}</span>
        )}
      </div>
    </div>
  );
}

export function ImageEditor({ slug, currentUrl }: { slug: string; currentUrl: string | null }) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [previewUrl, setPreviewUrl] = useState<string | null>(currentUrl);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(formData: FormData) {
    setStatus({ kind: "saving" });
    startTransition(async () => {
      const result = await uploadImage(slug, formData);
      if (result.error) {
        setStatus({ kind: "error", message: result.error });
      } else {
        setStatus({ kind: "saved" });
        setTimeout(() => setStatus({ kind: "idle" }), 2000);
      }
    });
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) setPreviewUrl(URL.createObjectURL(file));
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      {previewUrl && (
        <div className="relative h-64 w-64 overflow-hidden rounded-xl border border-[#2E2E4A]">
          <Image
            src={previewUrl}
            alt="Voorvertoning"
            fill
            className="object-cover"
            sizes="256px"
            unoptimized
          />
        </div>
      )}
      <input
        type="file"
        name="file"
        accept="image/*"
        required
        onChange={handleFileChange}
        className="block w-full text-sm text-[#8585A3] file:mr-4 file:rounded-md file:border-0 file:bg-[#2E2E4A] file:px-4 file:py-2 file:text-white file:transition-colors hover:file:bg-[#3E3E5A]"
      />
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={isPending}
          className="rounded-md bg-[#4F8EF7] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3A75D8] disabled:opacity-50"
        >
          {status.kind === "saving" ? "Uploaden…" : "Foto uploaden"}
        </button>
        {status.kind === "saved" && <span className="text-sm text-[#34D399]">✓ Opgeslagen</span>}
        {status.kind === "error" && (
          <span className="text-sm text-red-300">Fout: {status.message}</span>
        )}
      </div>
    </form>
  );
}

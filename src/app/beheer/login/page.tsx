"use client";

import { useState, useTransition } from "react";
import { signIn } from "../actions";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(formData: FormData) {
    setError(null);
    startTransition(async () => {
      const result = await signIn(formData);
      if (result?.error) setError(result.error);
    });
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#161625] px-6">
      <form
        action={handleSubmit}
        className="w-full max-w-sm rounded-xl border border-[#2E2E4A] bg-[#1E1E30] p-8"
      >
        <h1 className="mb-6 font-[family-name:var(--font-heading)] text-2xl font-bold text-white">
          Beheerpaneel
        </h1>

        <label className="mb-4 block">
          <span className="mb-2 block text-sm text-[#8585A3]">E-mail</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className="w-full rounded-md border border-[#2E2E4A] bg-[#161625] px-3 py-2 text-white outline-none focus:border-[#4F8EF7]"
          />
        </label>

        <label className="mb-6 block">
          <span className="mb-2 block text-sm text-[#8585A3]">Wachtwoord</span>
          <input
            type="password"
            name="password"
            required
            autoComplete="current-password"
            className="w-full rounded-md border border-[#2E2E4A] bg-[#161625] px-3 py-2 text-white outline-none focus:border-[#4F8EF7]"
          />
        </label>

        {error && (
          <p className="mb-4 rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded-md bg-[#4F8EF7] px-4 py-2 font-medium text-white transition-colors hover:bg-[#3A75D8] disabled:opacity-50"
        >
          {isPending ? "Bezig…" : "Inloggen"}
        </button>
      </form>
    </div>
  );
}

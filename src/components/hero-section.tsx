"use client";

import Link from "next/link";
import NeuralBackground from "@/components/ui/flow-field-background";
import { ShinyButton } from "@/components/ui/shiny-button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Flow field background */}
      <div className="absolute inset-0">
        <NeuralBackground
          color="#4F8EF7"
          trailOpacity={0.08}
          particleCount={700}
          speed={0.6}
          className="bg-[#0D0D1A]"
        />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D1A]/90 via-[#0D0D1A]/70 to-[#0D0D1A]/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="max-w-[720px]">
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
            Minder handen.
            <br />
            Betere resultaten.
          </h1>
          <p className="mb-10 max-w-[560px] text-xl leading-relaxed text-[#6B6B8A]">
            Loopless automatiseert de repetitieve processen die jouw team
            vertragen — zodat jullie kunnen focussen op wat er écht toe doet.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/diensten"
              className="rounded-lg bg-[#4F8EF7] px-8 py-4 text-center font-semibold text-white shadow-[0_0_20px_#4F8EF740] transition-all hover:-translate-y-0.5 hover:bg-[#3A75D8] hover:shadow-[0_0_30px_#4F8EF740]"
            >
              Bekijk onze diensten
            </Link>
            <Link href="/contact">
              <ShinyButton>Plan een gesprek</ShinyButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import NeuralBackground from "@/components/ui/flow-field-background";
import { ShinyButton } from "@/components/ui/shiny-button";

const ease = [0.16, 1, 0.3, 1] as const;

export function HeroSection({ children }: { children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden">
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
      <div className="relative z-10 flex min-h-screen items-center pt-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="max-w-[720px]">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="mb-6 font-[family-name:var(--font-heading)] text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl"
            >
              Doorbreek de loop
              <br />
              van handmatig werk.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="mb-10 max-w-[560px] text-xl leading-relaxed text-[#6B6B8A]"
            >
              Minder herhaling. Meer resultaat. Loopless automatiseert de
              processen die jouw team vertragen — zodat jullie kunnen focussen op
              wat er écht toe doet.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/diensten"
                className="rounded-lg bg-[#4F8EF7] px-8 py-4 text-center font-semibold text-white shadow-[0_0_20px_#4F8EF740] transition-all hover:-translate-y-0.5 hover:bg-[#3A75D8] hover:shadow-[0_0_30px_#4F8EF760]"
              >
                Bekijk onze diensten
              </Link>
              <Link href="/contact">
                <ShinyButton>Plan een gesprek</ShinyButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Additional content within the same background */}
      {children && <div className="relative z-10">{children}</div>}
    </section>
  );
}

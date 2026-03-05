"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface NoisePatternCardProps {
  children: React.ReactNode;
  className?: string;
  patternClassName?: string;
  overlayClassName?: string;
}

export function NoisePatternCard({
  children,
  className,
  patternClassName,
  overlayClassName,
}: NoisePatternCardProps) {
  return (
    <motion.div
      className={cn(
        "w-full overflow-hidden rounded-md border",
        "bg-[#0D0D1A]",
        "border-[#1E1E35]",
        className
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div
        className={cn(
          "size-full bg-repeat bg-[length:500px_500px]",
          "bg-noise-pattern",
          patternClassName
        )}
      >
        <div className={cn("bg-[#0D0D1A]/30", overlayClassName)}>
          {children}
        </div>
      </div>
    </motion.div>
  );
}

export function NoisePatternCardBody({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-4 text-left md:p-6", className)} {...props} />
  );
}

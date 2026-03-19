import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Veelgestelde vragen over procesautomatisering, AI-oplossingen en hoe Loopless werkt voor MKB-bedrijven.",
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}

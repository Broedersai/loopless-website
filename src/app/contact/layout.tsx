import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Loopless. Vul de intake in of stuur een bericht — ik denk graag mee over jullie automatiseringsmogelijkheden.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

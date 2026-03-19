"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ShinyButton } from "@/components/ui/shiny-button";
import { LogoWithText } from "@/components/logo";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/diensten", label: "Diensten" },
  { href: "/over", label: "Over mij" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0D0D1A]/92 backdrop-blur-xl shadow-[0_1px_0_#1E1E35]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        {/* Logo with icon */}
        <Link href="/" className="z-50">
          <LogoWithText iconSize={30} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-sm font-medium transition-colors",
                pathname === item.href
                  ? "text-white after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-[#4F8EF7]"
                  : "text-[#6B6B8A] hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact">
            <ShinyButton size="sm">Plan een gesprek</ShinyButton>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="z-50 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={closeMobile}
        />
      )}

      {/* Mobile nav */}
      <nav
        className={cn(
          "fixed top-0 right-0 z-40 flex h-full w-[280px] flex-col gap-6 border-l border-[#1E1E35] bg-[#13131F] px-8 pt-24 transition-transform duration-300 md:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={closeMobile}
            className={cn(
              "text-base font-medium transition-colors",
              pathname === item.href
                ? "text-white"
                : "text-[#6B6B8A] hover:text-white"
            )}
          >
            {item.label}
          </Link>
        ))}
        <Link href="/contact" onClick={closeMobile} className="mt-4">
          <ShinyButton size="sm">Plan een gesprek</ShinyButton>
        </Link>
      </nav>
    </header>
  );
}

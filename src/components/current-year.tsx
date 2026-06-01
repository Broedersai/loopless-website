"use client";

import { useEffect, useState } from "react";

// Huidige tijd (new Date()) mag onder cacheComponents niet tijdens prerender gelezen
// worden — ook niet in een Client Component zonder Suspense. We zetten het jaartal pas
// na mount via useEffect: tijdens prerender is er geen tijd-read, op de client vult het
// zich direct in. Voor een copyright-jaar in de footer is dat ruim voldoende.
export function CurrentYear() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <>{year}</>;
}

import { Suspense } from "react";
import Image from "next/image";
import { getCollectionByKey } from "@/lib/supabase/content";

// DEMO-pagina "Projecten" — toont het COLLECTIE-patroon van de Siteup-engine:
// herhaalbare items (projecten/diensten/portfolio) die de klant zelf toevoegt,
// ordent (drag in het portaal) en publiceert. getCollectionByKey("projecten")
// levert de items gesorteerd op de in het portaal bepaalde volgorde — published,
// en in preview de draft-volgorde. Lege collectie → nette leegstaat (geen crash).
//
// Vervang per klant door het echte design; houd het getCollectionByKey-patroon
// aan voor elke herhaalbare lijst die de klant zelf moet kunnen beheren.
//
// De kop + intro zijn statisch (prerenderbare shell). De items-lijst leest in
// preview draftMode() + doet een no-store BFF-fetch (runtime-data); met
// cacheComponents MOET die in een <Suspense> staan, anders is de route "blocking"
// (Next 16). In de published-laag is de fetch gecacht ('use cache') en valt de
// fallback weg; in preview toont de skeleton kort terwijl de draft-fetch resumet.
export default function Projecten() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
        Projecten
      </h1>
      <p className="mt-4 text-lg text-zinc-600">
        Een overzicht van ons werk. Deze items beheert de klant zelf in het
        Siteup-portaal.
      </p>

      <Suspense fallback={<ProjectenSkeleton />}>
        <ProjectenLijst />
      </Suspense>
    </div>
  );
}

async function ProjectenLijst() {
  const items = await getCollectionByKey("projecten");

  if (items.length === 0) {
    return (
      <p className="mt-12 rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-8 text-center text-zinc-500">
        Nog geen projecten toegevoegd. Voeg ze toe in het Siteup-portaal.
      </p>
    );
  }

  return (
    <div className="mt-12 grid gap-8 sm:grid-cols-2">
      {items.map((item) => (
        <article
          key={item.id}
          className="overflow-hidden rounded-xl border border-zinc-200"
        >
          <div className="aspect-[3/2] overflow-hidden bg-zinc-100">
            <Image
              src={item.image_url ?? "/placeholder.svg"}
              alt={item.title ?? "Project"}
              width={600}
              height={400}
              // unoptimized: laat de lokale SVG-fallback werken zonder extra
              // image-config; echte klantfoto's komen via de gedeelde storage-
              // host (zie next.config.ts). Tune optimalisatie bij het echte design.
              unoptimized
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-5">
            <h2 className="text-lg font-semibold text-zinc-900">
              {item.title ?? "Naamloos project"}
            </h2>
            {item.text ? (
              <p className="mt-2 text-sm text-zinc-600">{item.text}</p>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}

// Skeleton tijdens de draft-resume in preview (matcht de grid-layout, geen flash
// van lege ruimte). In de published-laag rendert de gecachte lijst meteen.
function ProjectenSkeleton() {
  return (
    <div className="mt-12 grid gap-8 sm:grid-cols-2">
      {[0, 1].map((i) => (
        <div
          key={i}
          className="overflow-hidden rounded-xl border border-zinc-200"
        >
          <div className="aspect-[3/2] animate-pulse bg-zinc-100" />
          <div className="space-y-2 p-5">
            <div className="h-4 w-2/3 animate-pulse rounded bg-zinc-100" />
            <div className="h-3 w-full animate-pulse rounded bg-zinc-100" />
          </div>
        </div>
      ))}
    </div>
  );
}

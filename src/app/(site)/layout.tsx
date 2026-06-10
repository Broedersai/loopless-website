import { Suspense } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PreviewBanner } from "@/components/preview-banner";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* PreviewBanner leest draftMode() (request-API) → dynamisch. Met cacheComponents
          moet die dynamische read in een Suspense-grens staan zodat de statische shell
          (navbar/footer) prerenderbaar blijft; fallback=null want in de published-laag
          rendert de banner toch niets. De banner is position:fixed en overlapt in
          preview-modus de bovenrand — bewust laagcomplex (geen conditionele padding,
          layout blijft sync). Preview is een interne review-modus, geen published view. */}
      <Suspense fallback={null}>
        <PreviewBanner />
      </Suspense>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

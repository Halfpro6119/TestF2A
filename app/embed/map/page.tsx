import { ImpactMap } from "@/components/impact-map";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact Map",
  description: "Supplies delivered across Africa - Footprints 2 Africa",
  robots: { index: false, follow: false },
};

export default function EmbedMapPage() {
  return (
    <main
      className="min-h-screen bg-[#f7f7f7] flex flex-col items-center justify-center p-4"
      style={{ minHeight: "100dvh" }}
    >
      <h1 className="sr-only">Supplies delivered across Africa</h1>
      <div className="w-full max-w-[900px] bg-white rounded-lg shadow-sm overflow-hidden">
        <ImpactMap className="w-full min-h-[320px]" />
      </div>
    </main>
  );
}

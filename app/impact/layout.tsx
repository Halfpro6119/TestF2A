import { SiteNav } from "@/components/site-nav";

export default function ImpactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteNav />
      {children}
    </div>
  );
}

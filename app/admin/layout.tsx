import type { Metadata } from "next";
import Link from "next/link";
import { Newspaper, ArrowLeft, Heart } from "lucide-react";
import { LogoutButton } from "@/components/admin/logout-button";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-brand-grey">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/admin/news"
              className="flex items-center gap-2 text-brand-navy hover:text-brand-navy-light font-medium"
            >
              <Newspaper className="w-5 h-5" />
              News Admin
            </Link>
            <Link
              href="/admin/impact"
              className="flex items-center gap-2 text-brand-navy hover:text-brand-navy-light font-medium"
            >
              <Heart className="w-5 h-5" />
              Impact Admin
            </Link>
            <Link
              href="/"
              className="text-sm text-gray-600 hover:text-brand-navy flex items-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" /> Site
            </Link>
          </div>
          <LogoutButton />
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}

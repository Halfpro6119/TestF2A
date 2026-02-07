import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "Footprints 2 Africa - Restoring Dignity, Delivering Hope",
    template: "%s | Footprints 2 Africa",
  },
  description:
    "UK registered charity restoring dignity to ostomates across Africa. We collect, redistribute, and deliver essential medical supplies and dignity packs to under-resourced hospitals and communities.",
  keywords: [
    "charity",
    "ostomy",
    "medical supplies",
    "Africa",
    "dignity",
    "healthcare",
    "volunteer",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://footprints2africa.org.uk",
    siteName: "Footprints 2 Africa",
    title: "Footprints 2 Africa - Restoring Dignity, Delivering Hope",
    description:
      "Connecting surplus medical supplies in the UK with people who urgently need them across Africa.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Footprints 2 Africa - Restoring Dignity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Footprints 2 Africa - Restoring Dignity, Delivering Hope",
    description:
      "Connecting surplus medical supplies in the UK with people who urgently need them across Africa.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(inter.className, fraunces.variable)} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Footprints 2 Africa",
              url: "https://footprints2africa.org.uk",
              logo: "https://footprints2africa.org.uk/logo.png",
              description:
                "UK registered charity restoring dignity to ostomates across Africa",
              sameAs: [
                "https://www.facebook.com/footprints2africa",
                "https://www.twitter.com/footprints2africa",
                "https://www.instagram.com/footprints2africa",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                email: "sam@footprints2africa.org.uk",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/", anchor: "home" },
  { label: "About", href: "/about", anchor: null },
  { label: "Impact", href: "/impact", anchor: null },
  { label: "News", href: "/news", anchor: null },
  { label: "Get Involved", href: "/get-involved", anchor: null },
  { label: "Volunteer", href: "/get-involved/volunteer", anchor: null },
  { label: "Partners", href: "/get-involved/partners", anchor: null },
  { label: "Donate", href: "/", anchor: "donate" },
  { label: "Contact", href: "/", anchor: "contact" },
] as const;

function getNavHref(item: (typeof navItems)[number]): string {
  if (item.anchor === null) return item.href;
  return `${item.href}#${item.anchor}`;
}

export function SiteNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-brand-blue/20 transition-shadow duration-300 ${scrollY > 20 ? "shadow-sm" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:opacity-80"
        >
          <div className="relative w-12 h-12 transition-transform duration-300">
            <Image
              src="/logo.png"
              alt="Footprints 2 Africa Logo"
              width={48}
              height={48}
              className="transition-all duration-300"
            />
          </div>
          <div className="transition-colors duration-300">
            <span className="text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-brand-navy block">
              Footprints 2 Africa
            </span>
            <p className="text-xs text-gray-600 transition-colors duration-300 group-hover:text-brand-navy">
              Restoring Dignity
            </p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={getNavHref(item)}
              className="text-gray-700 hover:text-brand-navy transition-colors duration-300 font-medium text-sm relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-navy transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <Button
          asChild
          className="hidden sm:flex bg-brand-red hover:bg-brand-red-hover text-white min-h-[44px] min-w-[44px] transition-colors duration-300 focus-visible:ring-brand-navy focus-visible:ring-offset-2"
        >
          <Link href="/#donate">Donate</Link>
        </Button>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 min-h-[44px] min-w-[44px] hover:bg-brand-blue/10 rounded-lg transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <>
          <button
            type="button"
            className="md:hidden fixed inset-0 bg-black/20 z-40 animate-in fade-in duration-200"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          />
          <div className="md:hidden fixed top-[65px] left-4 right-4 bg-white border border-gray-200 border-t-0 rounded-b-xl shadow-lg z-50 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={getNavHref(item)}
                  className="block px-4 py-2 text-gray-700 hover:text-brand-navy hover:bg-brand-blue/10 rounded-lg transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                asChild
                className="w-full bg-brand-red hover:bg-brand-red-hover text-white min-h-[44px] transition-colors duration-300 focus-visible:ring-brand-navy focus-visible:ring-offset-2"
              >
                <Link href="/#donate" onClick={() => setIsMenuOpen(false)}>
                  Donate
                </Link>
              </Button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

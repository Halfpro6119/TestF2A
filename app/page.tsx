"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Heart,
  Users,
  Globe,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Menu,
  X,
  Play,
  Package,
  Recycle,
  BadgeCheck,
  Lock,
  Building2,
  Star,
  Boxes,
  Ship,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { CountUp } from "use-count-up";
import { ImpactMap } from "@/components/impact-map";

/**
 * Home Page Component - Premium Charity Website
 * Features:
 * 1. Animated Impact Counters (scroll-triggered)
 * 2. Interactive Impact Map (geographic reach visualization)
 * 3. Video Testimonials Section (beneficiary stories carousel)
 * 4. Trust & Social Proof Section (partner logos, donor testimonials)
 */
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [countersStarted, setCountersStarted] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Track scroll position for scroll-triggered animations
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Trigger counters when Impact Metrics section comes into view
      if (window.scrollY > 300 && !countersStarted) {
        setCountersStarted(true);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [countersStarted]);

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Video testimonials data with embedded video URLs (videoId for YouTube thumbnails)
  const testimonials = [
    {
      name: "Dickson's Story",
      quote:
        "The supplies gave me my life back. I can now work, go to school, and live with dignity.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      videoId: "dQw4w9WgXcQ",
      location: "Zimbabwe",
    },
    {
      name: "Asanda's Story",
      quote:
        "I felt alone until Footprints 2 Africa reached out. Now I know I'm not the only one.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      videoId: "dQw4w9WgXcQ",
      location: "South Africa",
    },
    {
      name: "Hospital Partnership",
      quote:
        "These supplies have transformed our ability to care for ostomates with dignity.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      videoId: "dQw4w9WgXcQ",
      location: "Botswana",
    },
  ];

  // Partner organizations and donors for social proof
  const partners = [
    { name: "NHS Trust", logo: "🏥" },
    { name: "Medical Aid", logo: "⚕️" },
    { name: "Global Health", logo: "🌍" },
    { name: "Care Foundation", logo: "❤️" },
  ];

  // Donor testimonials for trust building
  const donorTestimonials = [
    {
      name: "Sarah Johnson",
      role: "Donor",
      quote: "Seeing the direct impact of my donation makes me proud to support this mission.",
      image: "👩‍💼",
    },
    {
      name: "Michael Chen",
      role: "Volunteer",
      quote: "The team's dedication to dignity and compassion is truly inspiring.",
      image: "👨‍💼",
    },
    {
      name: "Emma Williams",
      role: "Healthcare Professional",
      quote: "This organization fills a critical gap in healthcare access across Africa.",
      image: "👩‍⚕️",
    },
  ];

  // Impact map data - countries served with statistics
  const countriesServed = [
    { name: "South Africa", supplies: 12543, color: "bg-red-500" },
    { name: "Zimbabwe", supplies: 8234, color: "bg-red-600" },
    { name: "Botswana", supplies: 5421, color: "bg-red-400" },
    { name: "Namibia", supplies: 3124, color: "bg-red-300" },
    { name: "Lesotho", supplies: 2430, color: "bg-red-200" },
  ];

  // Single source for impact numbers (kept in sync with counters + geographic section)
  const TOTAL_SUPPLIES = 31752;

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      {/* Navigation Bar - Premium fixed header */}
      <nav className={`fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 transition-shadow duration-300 ${scrollY > 20 ? "shadow-sm" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo with subtle hover effect */}
          <div className="flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:opacity-80">
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
              <span className="text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-red-600 block">
                Footprints 2 Africa
              </span>
              <p className="text-xs text-gray-600 transition-colors duration-300 group-hover:text-red-500">
                Restoring Dignity
              </p>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["Home", "About", "Impact", "Get Involved", "Contact"].map(
              (item, idx) => (
                <a
                  key={idx}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-700 hover:text-red-600 transition-colors duration-300 font-medium text-sm relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            )}
          </div>

          {/* Donate Button */}
          <Button className="hidden sm:flex bg-red-600 hover:bg-red-700 text-white min-h-[44px] min-w-[44px] transition-colors duration-300 focus-visible:ring-red-500 focus-visible:ring-offset-2">
            Donate
          </Button>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 min-h-[44px] min-w-[44px] hover:bg-gray-100 rounded-lg transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
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

        {/* Mobile menu with overlay */}
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
              {["Home", "About", "Impact", "Get Involved", "Contact"].map(
                (item, idx) => (
                  <a
                    key={idx}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="block px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white min-h-[44px] transition-colors duration-300 focus-visible:ring-red-500 focus-visible:ring-offset-2">
                Donate
              </Button>
            </div>
          </div>
          </>
        )}
      </nav>

      <main id="main">
      {/* Hero Section - contained product block */}
      <section
        id="home"
        className="pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-white relative"
      >
        <div className="max-w-3xl mx-auto">
          <div className="widget-container-hero p-8 sm:p-10 lg:p-12 text-center relative overflow-hidden">
            {/* Single subtle blur for depth - no dot pattern */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-50/50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 pointer-events-none" />
            <div className="relative z-10">
              <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
                Restoring Dignity,{" "}
                <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                  Delivering Hope
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                Connecting surplus medical supplies in the UK with people who
                urgently need them across Africa.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg sm:text-xl min-h-[44px] transition-colors duration-300 focus-visible:ring-red-500 focus-visible:ring-offset-2">
                  Donate Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  className="px-8 py-6 text-lg min-h-[44px] border-gray-300 hover:bg-gray-50 transition-colors duration-300 hover:border-red-600 hover:text-red-600 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                >
                  How We Help
                </Button>
              </div>
              <p className="mt-6 legend-text">
                UK Registered Charity No. 1214173
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Counters - single dashboard widget */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="widget-container-gradient p-6 md:p-8">
            <p className="legend-text text-center mb-6">Live impact</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: TOTAL_SUPPLIES, label: "Supplies Delivered", Icon: Package, suffix: "", featured: true },
                { value: 921.5, label: "Saved from Landfill", Icon: Recycle, suffix: "kg", featured: false },
                { value: 5, label: "Countries Served", Icon: Globe, suffix: "", featured: false },
                { value: 100, label: "Volunteer-Led", Icon: Heart, suffix: "%", featured: false },
              ].map((metric, idx) => {
                const IconComponent = metric.Icon;
                return (
                  <div
                    key={idx}
                    className={`p-6 text-center rounded-lg border transition-colors transition-shadow duration-300 cursor-default group ${
                      metric.featured
                        ? "border-red-200 bg-red-50/20 hover:border-red-200 hover:bg-red-50/30"
                        : "border-gray-200 bg-white/50 hover:border-red-200 hover:bg-red-50/20"
                    }`}
                  >
                    <div className="flex justify-center mb-3">
                      <IconComponent className="w-10 h-10 text-red-600" />
                    </div>
                    <p className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent mb-2">
                      {countersStarted ? (
                        <>
                          <CountUp
                            isCounting={countersStarted}
                            end={metric.value}
                            duration={2.5}
                            decimalPlaces={metric.suffix === "kg" ? 1 : 0}
                          />
                          {metric.suffix}
                        </>
                      ) : (
                        `0${metric.suffix}`
                      )}
                    </p>
                    <p className="legend-text-sm">
                      {metric.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* About Section - one contained block */}
      <section id="about" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="widget-container bg-white p-8 md:p-10">
            <h2 className="heading-display text-4xl font-bold text-gray-900 mb-2 text-center leading-tight">
              Our Purpose & Vision
            </h2>
            <p className="legend-text text-center mb-10">One mission: dignity and hope for ostomates across Africa.</p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="p-6 rounded-lg border border-gray-200 transition-shadow duration-300 hover:shadow-md hover:border-gray-300">
                <h3 className="heading-display text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  Our Purpose
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We restore dignity, hope, and confidence to ostomates across
                  Africa. It's not just about supplies—it's about restoring human
                  worth and belonging.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-gray-200 transition-shadow duration-300 hover:shadow-md hover:border-gray-300">
                <h3 className="heading-display text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  Our Vision
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  A world where every ostomate has access to essential supplies,
                  community support, and the dignity they deserve. Grassroots,
                  sustainable, compassionate.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-gray-200 border-l-4 border-l-red-600 bg-red-50/20 transition-shadow duration-300 hover:shadow-md">
              <h3 className="heading-display text-2xl font-bold text-gray-900 mb-4 leading-tight">
                Why It Matters
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Many ostomates are discharged with only 1-3 bags. When supplies
                run out, they resort to improvised solutions, leading to
                infections and isolation. Your support changes lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials - one widget container */}
      <section id="impact" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="widget-container rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50/50 p-6 md:p-8">
            <h2 className="heading-display text-4xl font-bold text-gray-900 mb-2 text-center leading-tight">
              Stories of Change
            </h2>
            <p className="legend-text-sm text-center mb-10">
              Hear directly from those whose lives have been transformed
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {testimonials.map((testimonial, idx) => (
                <Card
                  key={idx}
                  className={`overflow-hidden transition-shadow duration-300 cursor-pointer border-2 hover:shadow-lg hover:border-red-200 ${
                    activeTestimonial === idx
                      ? "border-red-600 shadow-lg"
                      : "border-gray-200"
                  }`}
                  onClick={() => setActiveTestimonial(idx)}
                >
                  <div className="relative w-full h-48 bg-gray-200">
                    <Image
                      src={`https://img.youtube.com/vi/${testimonial.videoId}/mqdefault.jpg`}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <Play className="w-14 h-14 text-white drop-shadow-md" fill="currentColor" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {testimonial.name}
                    </h3>
                    <p className="legend-text-sm mb-3 flex items-center gap-1 text-red-600">
                      <MapPin className="w-3.5 h-3.5" /> {testimonial.location}
                    </p>
                    <p className="text-gray-700 text-sm italic mb-4">
                      "{testimonial.quote}"
                    </p>
                    <Button
                      variant="link"
                      className="text-red-600 hover:text-red-700 p-0 text-sm transition-colors duration-300 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    >
                      Watch Video →
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <div className="flex items-center justify-center gap-3" role="tablist" aria-label="Testimonial carousel">
              <span className="legend-text">Stories</span>
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveTestimonial(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    aria-current={activeTestimonial === idx ? "true" : undefined}
                    className={`min-h-[44px] min-w-[44px] rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 ${
                      activeTestimonial === idx
                        ? "bg-red-600 w-8"
                        : "bg-gray-300 hover:bg-gray-400 w-3"
                    }`}
                  />
                ))}
              </div>
              <span className="legend-text">{activeTestimonial + 1} of {testimonials.length}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Social Proof - widget containers */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="heading-display text-4xl font-bold text-gray-900 text-center leading-tight">
            Trusted by Partners & Supporters
          </h2>

          {/* Trust badges - one horizontal bar */}
          <div className="widget-container bg-white p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { Icon: BadgeCheck, title: "Charity Verified", desc: "UK Registered Charity No. 1214173", href: "https://register-of-charities.charitycommission.gov.uk/charity-search/-/charity-details/1214173" },
                { Icon: Lock, title: "Secure Donations", desc: "100% of donations go to supplies" },
                { Icon: Users, title: "Volunteer-Led", desc: "100% volunteer-led organization" },
              ].map((badge, idx) => {
                const IconComponent = badge.Icon;
                const content = (
                  <div className="flex items-center gap-4">
                    <IconComponent className="w-8 h-8 text-red-600 shrink-0" />
                    <div>
                      <p className="font-bold text-gray-900">{badge.title}</p>
                      <p className="legend-text">{badge.desc}</p>
                    </div>
                  </div>
                );
                return (
                  <div key={idx} className="md:border-r border-gray-200 md:last:border-r-0 md:pr-8 md:last:pr-0">
                    {badge.href ? (
                      <a href={badge.href} target="_blank" rel="noopener noreferrer" className="block focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 rounded-md outline-none hover:opacity-90 transition-opacity">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Partners - one container */}
          <div className="widget-container bg-white p-6 md:p-8">
            <h3 className="heading-display text-xl font-bold text-gray-900 mb-6 text-center leading-tight">
              Our Partners
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {partners.map((partner, idx) => (
                <div
                  key={idx}
                  className="p-4 text-center border border-gray-200 rounded-lg transition-colors duration-300 hover:border-red-200 hover:bg-red-50/20"
                >
                  <Building2 className="w-10 h-10 text-red-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900 text-sm">{partner.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Donor testimonials - one container, minimal cards */}
          <div className="widget-container bg-white p-6 md:p-8">
            <h3 className="heading-display text-xl font-bold text-gray-900 mb-6 text-center leading-tight">
              What Our Supporters Say
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {donorTestimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="p-6 border border-gray-200 rounded-lg transition-shadow duration-300 hover:shadow-md hover:border-gray-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-sm shrink-0">
                      {testimonial.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{testimonial.name}</p>
                      <p className="legend-text">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Impact - reference section, refinements */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-display text-4xl font-bold text-gray-900 mb-2 text-center leading-tight">
            Our Geographic Impact
          </h2>
          <p className="legend-text-sm text-center mb-10">
            Supplies delivered across Southern Africa
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 border border-gray-200 ring-1 ring-gray-200/50 overflow-hidden">
              <ImpactMap className="w-full" />
              <p className="text-center legend-text-sm mt-4">
                {TOTAL_SUPPLIES.toLocaleString()}+ supplies delivered across 5 countries
              </p>
            </div>

            <div className="space-y-4">
              {countriesServed.map((country, idx) => (
                <div
                  key={idx}
                  className="group cursor-pointer transition-colors duration-300 hover:border-red-200 rounded-lg border border-transparent p-2 -m-2"
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-gray-900 text-sm group-hover:text-red-600">
                      {country.name}
                    </p>
                    <p className="legend-text-sm text-red-600">
                      {country.supplies.toLocaleString()} supplies
                    </p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <div
                      className={`${country.color} h-full rounded-full transition-all duration-700`}
                      style={{
                        width: `${(country.supplies / 12543) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - one process widget */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="widget-container bg-white p-8">
            <h2 className="heading-display text-4xl font-bold text-gray-900 mb-2 text-center leading-tight">
              How It Works
            </h2>
            <p className="legend-text text-center mb-10">Step 1 of 4</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
              <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 border-t-2 border-dashed border-gray-200 z-0" style={{ marginLeft: "12.5%", marginRight: "12.5%" }} />
              {[
                { num: 1, title: "Collect Donations", desc: "From individuals, NHS trusts, and medical suppliers across the UK", Icon: Package },
                { num: 2, title: "Sort & Pack", desc: "Our volunteer team carefully organizes supplies for distribution", Icon: Boxes },
                { num: 3, title: "Ship to Africa", desc: "Deliver to partner hospitals and NGOs across Southern Africa", Icon: Ship },
                { num: 4, title: "Local Distribution", desc: "Supplies reach ostomates with dignity support and care", Icon: Heart },
              ].map((step, idx) => {
                const StepIcon = step.Icon;
                return (
                  <div
                    key={idx}
                    className="text-center relative z-10"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 transition-shadow duration-300 hover:shadow-md">
                      <StepIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved - one actions block + legend row */}
      <section id="get-involved" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-display text-4xl font-bold text-gray-900 mb-2 text-center leading-tight">
            Get Involved
          </h2>
          <p className="legend-text-sm text-center mb-10">
            Choose how you'd like to make a difference. Every contribution restores dignity and hope.
          </p>

          <div className="widget-container-gradient p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl border border-gray-200 bg-white/80 transition-shadow duration-300 hover:shadow-md hover:border-red-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="heading-display text-2xl font-bold text-gray-900 leading-tight">
                    Make a Donation
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Direct impact on lives. Your donation funds collection, sorting, and delivery of essential medical supplies.
                </p>
                <Button className="bg-red-600 hover:bg-red-700 text-white w-full min-h-[44px] transition-colors duration-300 focus-visible:ring-red-500 focus-visible:ring-offset-2">
                  Donate Now
                </Button>
              </div>

              <div className="p-6 rounded-xl border border-gray-200 bg-white/80 transition-shadow duration-300 hover:shadow-md hover:border-red-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="heading-display text-2xl font-bold text-gray-900 leading-tight">
                    Volunteer
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Join our team. Help collect, sort, and pack supplies. No experience necessary—just compassion.
                </p>
                <Button
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50 w-full min-h-[44px] transition-colors duration-300 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                >
                  Get Started
                </Button>
              </div>
            </div>

            {/* Legend row - compact info strip */}
            <div className="mt-8 pt-6 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Impact", desc: "£20 helps deliver approximately 100 stoma bags", featured: true },
                { title: "Gift Aid", desc: "UK taxpayers can increase donation value by 25% at no extra cost", featured: false },
                { title: "Secure", desc: "100% of donations go directly to supplies and delivery", featured: false },
              ].map((info, idx) => (
                <div key={idx} className="text-center">
                  <p className="legend-text mb-1">{info.title}</p>
                  <p className="text-gray-900 font-medium text-sm leading-snug">{info.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact - one container for methods, second for Trust & Governance */}
      <section id="contact" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="heading-display text-4xl font-bold text-gray-900 mb-2 text-center leading-tight">
            Get In Touch
          </h2>

          <div className="widget-container bg-white p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Mail, label: "Email", value: "sam@footprints2africa.org.uk", href: "mailto:sam@footprints2africa.org.uk" },
                { icon: Phone, label: "Phone", value: "+44 7352 036320", href: "tel:+447352036320" },
                { icon: MapPin, label: "Location", value: "UK-based", sub: "We operate across the UK and Africa", href: null },
              ].map((contact, idx) => {
                const Icon = contact.icon;
                const content = (
                  <div className="text-center">
                    <p className="legend-text mb-2">{contact.label}</p>
                    <span className="text-gray-900 font-semibold text-lg block">{contact.value}</span>
                    {"sub" in contact && contact.sub && (
                      <p className="legend-text mt-1">{contact.sub}</p>
                    )}
                  </div>
                );
                return (
                  <div key={idx} className={idx < 2 ? "md:border-r border-gray-200 md:pr-8" : ""}>
                    {contact.href ? (
                      <a href={contact.href} className="block focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 rounded-lg outline-none hover:text-red-600 transition-colors">
                        <Icon className="w-6 h-6 text-red-600 mx-auto mb-2" />
                        {content}
                      </a>
                    ) : (
                      <>
                        <Icon className="w-6 h-6 text-red-600 mx-auto mb-2" />
                        {content}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="widget-container rounded-xl border border-gray-200 overflow-hidden">
            <div className="p-8 bg-gray-900">
              <h3 className="text-2xl font-bold text-white mb-6 leading-tight">
                Trust & Governance
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Charity Registration", desc: "UK Registered Charity No. 1214173" },
                  { title: "Volunteer Leadership", desc: "100% volunteer-led organization" },
                  { title: "Transparency", desc: "Complete transparency in all operations" },
                ].map((trust, idx) => (
                  <div key={idx}>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-red-400 shrink-0" />
                      <p className="font-semibold text-white">{trust.title}</p>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{trust.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - solid dark, clear dividers, muted links */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-sm font-bold mb-4 text-gray-200">
                Footprints 2 Africa
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Restoring dignity, hope, and human worth to ostomates across Africa.
              </p>
            </div>

            <div className="sm:border-r sm:border-gray-800 sm:pr-8">
              <h3 className="text-sm font-bold mb-4 text-gray-200">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                {["Home", "About", "Impact", "Get Involved"].map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-400 hover:text-gray-200 transition-colors duration-300 inline-block focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:border-r sm:border-gray-800 sm:pr-8">
              <h3 className="text-sm font-bold mb-4 text-gray-200">
                Legal
              </h3>
              <ul className="space-y-2 text-sm">
                {["Privacy Policy", "Terms of Service", "Charity Registration"].map(
                  (link, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-gray-200 transition-colors duration-300 inline-block focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold mb-4 text-gray-200">
                Follow Us
              </h3>
              <ul className="space-y-3 text-sm flex flex-col">
                {[
                  { name: "Facebook", Icon: Facebook, href: "https://www.facebook.com/footprints2africa" },
                  { name: "Twitter", Icon: Twitter, href: "https://www.twitter.com/footprints2africa" },
                  { name: "Instagram", Icon: Instagram, href: "https://www.instagram.com/footprints2africa" },
                ].map(({ name, Icon, href }) => (
                  <li key={name}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded min-h-[44px]"
                      aria-label={name}
                    >
                      <Icon className="w-5 h-5 shrink-0" />
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2026 Footprints 2 Africa. UK Registered Charity No. 1214173.</p>
            <p className="mt-2">
              <a href="#" className="hover:text-red-400 transition-colors duration-300">Designed with compassion for those who need it most.</a>
            </p>
          </div>
        </div>
      </footer>
      </main>
    </div>
  );
}

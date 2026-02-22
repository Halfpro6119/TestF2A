"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { HeroIllustration } from "@/components/hero-illustration";
import { SiteNav } from "@/components/site-nav";
import { useState, useEffect, useRef } from "react";
import {
  Heart,
  Users,
  Globe,
  ArrowRight,
  Mail,
  MapPin,
  CheckCircle,
  Play,
  Package,
  Recycle,
  BadgeCheck,
  Lock,
  Building2,
  Boxes,
  Ship,
  Facebook,
  Twitter,
  Instagram,
  FileText,
} from "lucide-react";
import type { ImpactArticle, ImpactVideo } from "@/lib/impact";
import { CountUp } from "use-count-up";
import { ImpactMap } from "@/components/impact-map";
import { DonateSection } from "@/components/donate-section";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

export function HomeContent({
  children,
  impactArticles,
  impactVideos,
}: {
  children?: React.ReactNode;
  impactArticles: ImpactArticle[];
  impactVideos: ImpactVideo[];
}) {
  const testimonials = impactVideos;
  const [countersStarted, setCountersStarted] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [playingVideoIndex, setPlayingVideoIndex] = useState<number | null>(null);
  const howItWorksRef = useRef<HTMLElement>(null);
  const [howItWorksProgress, setHowItWorksProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !countersStarted) {
        setCountersStarted(true);
      }

      const section = howItWorksRef.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        const vh = window.innerHeight;
        // Progress reaches 1 when section top is at middle of screen (50% viewport)
        const raw = (vh - rect.top) / (vh * 0.5);
        const progress = Math.min(1, Math.max(0, raw));
        setHowItWorksProgress(progress);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [countersStarted]);

  useEffect(() => {
    if (testimonials.length === 0) return;
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);


  const partners = [
    { name: "NHS Trust", logo: "🏥" },
    { name: "Medical Aid", logo: "⚕️" },
    { name: "Global Health", logo: "🌍" },
    { name: "Care Foundation", logo: "❤️" },
  ];

  const countriesServed = [
    { name: "South Africa", supplies: 12543, color: "bg-brand-navy" },
    { name: "Zimbabwe", supplies: 8234, color: "bg-brand-navy-light" },
    { name: "Botswana", supplies: 5421, color: "bg-brand-blue" },
    { name: "Namibia", supplies: 3124, color: "bg-brand-green" },
    { name: "Lesotho", supplies: 2430, color: "bg-brand-green-light" },
  ];

  const TOTAL_SUPPLIES = 31752;

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteNav />

      <main id="main">
      <section
        id="home"
        className="pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-white relative"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-6xl mx-auto">
          {/* Visible headline + subline – anchors the narrative before the illustration */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 id="hero-heading" className="heading-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 tracking-tight">
              Restoring Dignity, Delivering Hope
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Connecting UK surplus medical supplies with communities who need them across Africa.
            </p>
          </div>

          <div className="widget-container-hero overflow-hidden relative">
            <div className="relative aspect-[16/9] sm:aspect-[2.2/1] min-h-[260px] bg-brand-navy overflow-hidden">
              <HeroIllustration className="absolute inset-0 w-full h-full object-cover object-center" />
              <span className="sr-only">
                Footprints 2 Africa – Hope, Compassion, Dignity. Journey from the UK to Africa connecting surplus medical supplies with those who need them.
              </span>
              {/* CTA strip – refined overlay: starts higher so it doesn't obscure continents */}
              <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-36 bg-gradient-to-t from-brand-navy via-brand-navy/90 to-transparent px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Button asChild variant="cta-hero" className="shrink-0">
                <a href="#donate">
                  Donate Now <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white bg-white/15 text-white font-semibold hover:bg-white/25 px-6 py-5 text-base min-h-[44px] shrink-0"
              >
                <a href="#about">How We Help</a>
              </Button>
              <p className="legend-text text-white/90 text-center sm:text-left mt-1 sm:mt-0 sm:ml-2">
                UK Registered Charity No. 1214173
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                        ? "border-brand-green/40 bg-brand-green-light/30 hover:border-brand-green/40 hover:bg-brand-green-light/40"
                        : "border-gray-200 bg-white/50 hover:border-brand-blue/30 hover:bg-brand-blue/5"
                    }`}
                  >
                    <div className="flex justify-center mb-3">
                      <IconComponent className="w-10 h-10 text-brand-navy" />
                    </div>
                    <p className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-brand-navy to-brand-blue bg-clip-text text-transparent mb-2">
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

      <section id="about" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-brand-grey">
        <div className="max-w-4xl mx-auto">
          <div className="widget-container bg-white p-8 md:p-10">
            <h2 className="heading-display text-4xl font-bold text-gray-900 mb-2 text-center leading-tight">
              Our Purpose & Vision
            </h2>
            <p className="legend-text text-center mb-10">One mission: dignity and hope for ostomates across Africa.</p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="p-6 rounded-lg border border-gray-200 transition-shadow duration-300 hover:shadow-md hover:border-brand-blue/20">
                <h3 className="heading-display text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  Our Purpose
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We restore dignity, hope, and confidence to ostomates across
                  Africa. It&apos;s not just about supplies—it&apos;s about restoring human
                  worth and belonging.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-gray-200 transition-shadow duration-300 hover:shadow-md hover:border-brand-blue/20">
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

            <div className="p-6 rounded-lg border border-gray-200 border-l-4 border-l-brand-navy bg-brand-blue/10 transition-shadow duration-300 hover:shadow-md">
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

      <section id="impact" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="widget-container rounded-xl border border-gray-200 bg-gradient-to-br from-white to-brand-grey/50 p-6 md:p-8">
            <h2 className="heading-display text-4xl font-bold text-gray-900 mb-2 text-center leading-tight">
              Stories of Change
            </h2>
            <p className="legend-text-sm text-center mb-10">
              Hear directly from those whose lives have been transformed
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {testimonials.map((testimonial, idx) => (
                <Card
                  key={testimonial.id}
                  className={`overflow-hidden transition-shadow duration-300 cursor-pointer border-2 hover:shadow-lg hover:border-brand-blue/30 ${
                    activeTestimonial === idx
                      ? "border-brand-navy shadow-lg"
                      : "border-gray-200"
                  }`}
                  onClick={() => {
                    setActiveTestimonial(idx);
                    setPlayingVideoIndex(idx);
                  }}
                >
                  <div className="relative w-full aspect-video bg-gray-200">
                    <video
                      src={testimonial.video_url}
                      preload="metadata"
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                      aria-hidden
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <Play className="w-14 h-14 text-white drop-shadow-md" fill="currentColor" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {testimonial.name}
                    </h3>
                    <p className="legend-text-sm mb-3 flex items-center gap-1 text-brand-navy">
                      <MapPin className="w-3.5 h-3.5" /> {testimonial.location}
                    </p>
                    <p className="text-gray-700 text-sm italic mb-4">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <Button
                      variant="link"
                      className="text-brand-navy hover:text-brand-navy-light p-0 text-sm transition-colors duration-300 focus-visible:ring-brand-navy focus-visible:ring-offset-2"
                    >
                      Watch Video →
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <Dialog open={playingVideoIndex !== null} onOpenChange={(open) => !open && setPlayingVideoIndex(null)}>
              <DialogContent className="max-w-4xl p-0 gap-0 overflow-hidden">
                <DialogTitle className="sr-only">
                  {playingVideoIndex !== null && testimonials[playingVideoIndex]
                    ? testimonials[playingVideoIndex].name
                    : "Video"}
                </DialogTitle>
                {playingVideoIndex !== null && testimonials[playingVideoIndex] && (
                  <video
                    src={testimonials[playingVideoIndex].video_url}
                    controls
                    autoPlay
                    className="w-full aspect-video bg-black"
                    aria-label={testimonials[playingVideoIndex].name}
                  />
                )}
              </DialogContent>
            </Dialog>

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
                    className={`min-h-[44px] min-w-[44px] rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 ${
                      activeTestimonial === idx
                        ? "bg-brand-navy w-8"
                        : "bg-gray-300 hover:bg-gray-400 w-3"
                    }`}
                  />
                ))}
              </div>
              <span className="legend-text">{activeTestimonial + 1} of {testimonials.length}</span>
            </div>

            <div className="mt-12 pt-10 border-t border-gray-200">
              <h3 className="heading-display text-2xl font-bold text-gray-900 mb-6 text-center leading-tight">
                Impact Stories
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                {impactArticles.slice(0, 4).map((article) => (
                  <Link key={article.id} href={`/impact/${article.slug}`}>
                    <Card className="overflow-hidden transition-shadow duration-300 cursor-pointer border-2 hover:shadow-lg hover:border-brand-blue/30 border-gray-200 h-full flex flex-col">
                      <div className="relative w-full aspect-video bg-brand-blue/10 flex items-center justify-center overflow-hidden">
                        {article.image_url ? (
                          <Image
                            src={article.image_url}
                            alt=""
                            fill
                            className="object-contain"
                            sizes="(max-width: 640px) 100vw, 25vw"
                          />
                        ) : (
                          <FileText className="w-14 h-14 text-brand-navy" />
                        )}
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {article.title}
                        </h4>
                        <p className="legend-text-sm mb-3 flex items-center gap-1 text-brand-navy">
                          <MapPin className="w-3.5 h-3.5 shrink-0" /> {article.location}
                        </p>
                        <p className="text-gray-700 text-sm mb-4 flex-1">
                          {article.excerpt}
                        </p>
                        <Button
                          variant="link"
                          className="text-brand-navy hover:text-brand-navy-light p-0 text-sm transition-colors duration-300 focus-visible:ring-brand-navy focus-visible:ring-offset-2 w-fit"
                          asChild
                        >
                          <span>Read Story →</span>
                        </Button>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>

              <div className="flex justify-center">
                <Button asChild variant="brand">
                  <Link href="/impact">
                    View all impact stories <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-brand-grey">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="heading-display text-4xl font-bold text-gray-900 text-center leading-tight">
            Trusted by Partners & Supporters
          </h2>

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
                    <IconComponent className="w-8 h-8 text-brand-navy shrink-0" />
                    <div>
                      <p className="font-bold text-gray-900">{badge.title}</p>
                      <p className="legend-text">{badge.desc}</p>
                    </div>
                  </div>
                );
                return (
                  <div key={idx} className="md:border-r border-gray-200 md:last:border-r-0 md:pr-8 md:last:pr-0">
                    {badge.href ? (
                      <a href={badge.href} target="_blank" rel="noopener noreferrer" className="block focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 rounded-md outline-none hover:opacity-90 transition-opacity">
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

          <div className="widget-container bg-white p-6 md:p-8">
            <h3 className="heading-display text-xl font-bold text-gray-900 mb-6 text-center leading-tight">
              Our Partners
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {partners.map((partner, idx) => (
                <div
                  key={idx}
                  className="p-4 text-center border border-gray-200 rounded-lg transition-colors duration-300 hover:border-brand-blue/30 hover:bg-brand-blue/5"
                >
                  <Building2 className="w-10 h-10 text-brand-navy mx-auto mb-2" />
                  <p className="font-semibold text-gray-900 text-sm">{partner.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-display text-4xl font-bold text-gray-900 mb-2 text-center leading-tight">
            Our Geographic Impact
          </h2>
          <p className="legend-text-sm text-center mb-10">
            Supplies delivered across Southern Africa
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-brand-green-light/30 to-white rounded-xl p-6 border border-gray-200 ring-1 ring-gray-200/50 overflow-hidden">
              <ImpactMap className="w-full" />
              <p className="text-center legend-text-sm mt-4">
                {TOTAL_SUPPLIES.toLocaleString()}+ supplies delivered across 5 countries
              </p>
            </div>

            <div className="space-y-4">
              {countriesServed.map((country, idx) => (
                <div
                  key={idx}
                  className="group cursor-pointer transition-colors duration-300 hover:border-brand-blue/30 rounded-lg border border-transparent p-2 -m-2"
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-gray-900 text-sm group-hover:text-brand-navy">
                      {country.name}
                    </p>
                    <p className="legend-text-sm text-brand-navy">
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

      <section
        ref={howItWorksRef}
        className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-brand-grey"
      >
        <div className="max-w-6xl mx-auto">
          <div className="widget-container bg-white p-8">
            <h2 className="heading-display text-4xl font-bold text-gray-900 mb-2 text-center leading-tight">
              How It Works
            </h2>
            <p className="legend-text text-center mb-10">From UK collection to African distribution</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
              <div
                className="hidden lg:block absolute top-8 left-0 right-0 z-0 h-0.5 overflow-visible"
                style={{ marginLeft: "12.5%", marginRight: "12.5%" }}
                aria-hidden
              >
                <div className="absolute inset-0 border-t-2 border-dashed border-brand-blue/30" />
                <div
                  className="absolute left-0 top-0 h-0.5 border-t-2 border-solid border-brand-navy/70 transition-[width] duration-150 ease-out"
                  style={{ width: `${howItWorksProgress * 100}%` }}
                />
                {howItWorksProgress > 0.02 && (
                  <div
                    className="absolute top-1/2 w-2 h-2 rounded-full bg-brand-navy shadow-sm transition-[left] duration-150 ease-out"
                    style={{
                      left: `${howItWorksProgress * 100}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                )}
              </div>
              {[
                { num: 1, title: "Collect Donations", desc: "From individuals, NHS trusts, stoma support groups, DAC providers, and medical suppliers across the UK — preventing vital supplies from going to landfill.", Icon: Package },
                { num: 2, title: "Sort & Pack", desc: "Our 100% volunteer team carefully sorts and prepares supplies with precision and care.", Icon: Boxes },
                { num: 3, title: "Ship to Africa", desc: "Supplies are transported to trusted partner hospitals and non-profit organisations in South Africa and other under resourced communities across Africa.", Icon: Ship },
                { num: 4, title: "Local Distribution", desc: "Ostomates receive lifesaving supplies with dignity, stability and support.", Icon: Heart },
              ].map((step, idx) => {
                const StepIcon = step.Icon;
                const stepStart = idx * 0.2;
                const stepOpacity = Math.min(1, Math.max(0, (howItWorksProgress - stepStart) / 0.25));
                const stepRevealed = howItWorksProgress > stepStart;
                return (
                  <div
                    key={idx}
                    className="text-center relative z-10 transition-all duration-200 ease-out"
                    style={{
                      opacity: stepOpacity,
                      transform: stepRevealed ? "translateY(0)" : "translateY(1rem)",
                    }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-navy to-brand-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 transition-shadow duration-300 hover:shadow-md">
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

      {children}

      <DonateSection />

      <section id="get-involved" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-display text-4xl font-bold text-gray-900 mb-2 text-center leading-tight">
            Get Involved
          </h2>
          <p className="legend-text-sm text-center mb-10">
            Choose how you&apos;d like to make a difference. Every contribution restores dignity and hope.
          </p>

          <div className="widget-container-gradient p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl border border-gray-200 bg-white/80 transition-shadow duration-300 hover:shadow-md hover:border-brand-navy/40">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-brand-blue/20 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-brand-navy" />
                  </div>
                  <h3 className="heading-display text-2xl font-bold text-gray-900 leading-tight">
                    Make a Donation
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Direct impact on lives. Your donation funds collection, sorting, and delivery of essential medical supplies.
                </p>
                <Button asChild variant="cta" className="w-full">
                  <a href="#donate">Donate Now</a>
                </Button>
              </div>

              <div className="p-6 rounded-xl border border-gray-200 bg-white/80 transition-shadow duration-300 hover:shadow-md hover:border-brand-navy/40">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-brand-blue/20 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-brand-navy" />
                  </div>
                  <h3 className="heading-display text-2xl font-bold text-gray-900 leading-tight">
                    Volunteer
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Join our team. Help collect, sort, and pack supplies. No experience necessary—just compassion.
                </p>
                <Button variant="brand-outline" className="w-full" asChild>
                  <Link href="/get-involved/volunteer">Get Started</Link>
                </Button>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Impact", desc: "£20 helps deliver approximately 100 stoma bags", featured: true },
                { title: "Gift Aid", desc: "UK taxpayers can increase donation value by 25% at no extra cost", featured: false },
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

      <section id="contact" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-brand-grey">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="heading-display text-4xl font-bold text-gray-900 mb-2 text-center leading-tight">
            Get In Touch
          </h2>

          <div className="widget-container bg-white p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: Mail, label: "Email", value: "sam@footprints2africa.org.uk", href: "mailto:sam@footprints2africa.org.uk" },
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
                  <div key={idx} className={idx < 1 ? "md:border-r border-gray-200 md:pr-8" : ""}>
                    {contact.href ? (
                      <a href={contact.href} className="block focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 rounded-lg outline-none hover:text-brand-navy transition-colors">
                        <Icon className="w-6 h-6 text-brand-navy mx-auto mb-2" />
                        {content}
                      </a>
                    ) : (
                      <>
                        <Icon className="w-6 h-6 text-brand-navy mx-auto mb-2" />
                        {content}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="widget-container rounded-xl border border-gray-200 overflow-hidden">
            <div className="p-8 bg-brand-navy">
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
                      <CheckCircle className="w-5 h-5 text-brand-blue shrink-0" />
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

      <footer className="bg-brand-navy text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h3 className="text-base font-bold uppercase tracking-wide mb-4 text-white/95">
              Site Map
            </h3>
            <ul className="space-y-2 text-sm text-white/90 mb-6">
              <li>
                <Link
                  href="/about"
                  className="hover:text-brand-blue transition-colors duration-300 inline-block focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy rounded"
                >
                  About Footprints 2 Africa
                </Link>
              </li>
              <li className="pl-4">
                <a
                  href="#"
                  className="text-white/80 hover:text-brand-blue transition-colors duration-300 inline-block focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy rounded"
                >
                  – Policies
                </a>
              </li>
              <li className="pl-4">
                <a
                  href="#"
                  className="text-white/80 hover:text-brand-blue transition-colors duration-300 inline-block focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy rounded"
                >
                  – Trustees
                </a>
              </li>
              <li>
                <Link
                  href="/get-involved"
                  className="hover:text-brand-blue transition-colors duration-300 inline-block focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy rounded"
                >
                  Get Involved
                </Link>
              </li>
              <li>
                <a
                  href="#donate"
                  className="hover:text-brand-blue transition-colors duration-300 inline-block focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy rounded"
                >
                  Donate
                </a>
              </li>
              <li>
                <Link
                  href="/impact"
                  className="hover:text-brand-blue transition-colors duration-300 inline-block focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy rounded"
                >
                  Stories of Change
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="hover:text-brand-blue transition-colors duration-300 inline-block focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy rounded"
                >
                  News
                </Link>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-brand-blue transition-colors duration-300 inline-block focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy rounded"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="cta-footer">
                <a href="#donate">Become a Supporter</a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-sm font-bold mb-4 text-gray-200">
                Footprints 2 Africa
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Restoring dignity, hope, and human worth to ostomates across Africa.
              </p>
            </div>

            <div className="sm:border-r sm:border-white/15 sm:pr-8">
              <h3 className="text-sm font-bold mb-4 text-gray-200">
                Legal
              </h3>
              <ul className="space-y-2 text-sm">
                {["Privacy Policy", "Terms of Service", "Charity Registration"].map(
                  (link, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-brand-blue transition-colors duration-300 inline-block focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy rounded"
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
                      className="flex items-center gap-2 text-gray-400 hover:text-brand-blue transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy rounded min-h-[44px]"
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

          <div className="border-t border-white/15 pt-8 text-gray-400 text-sm space-y-2">
            <p>Footprints 2 Africa is a registered charity in England and Wales, no. 1214173</p>
            <p>© Copyright 2026, Footprints 2 Africa. All rights reserved.</p>
            <p className="mt-2">
              <a href="#" className="hover:text-brand-blue transition-colors duration-300">Designed with compassion for those who need it most.</a>
            </p>
          </div>
        </div>
      </footer>
      </main>
    </div>
  );
}

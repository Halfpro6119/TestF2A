import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Heart,
  ArrowRight,
  CheckCircle,
  Handshake,
  Megaphone,
  Gift,
  Users,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DonateSection } from "@/components/donate-section";
import { PartnerLogoMarquee } from "@/components/partner-logo-marquee";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Partner with Footprints 2 Africa. We work with corporations, hospitals, community groups and individuals to bring dignity and hope to ostomates across Africa.",
  openGraph: {
    title: "Partners | Footprints 2 Africa",
    description:
      "Meaningful change happens when we work together. Join our partners in sharing resources, expertise and passion for making a difference.",
  },
};

const partnerTypes = [
  {
    Icon: Building2,
    title: "Corporate & Community Partners",
    desc: "Businesses and organisations that share our vision. Partner through employee volunteering, matched giving, or long-term support.",
  },
  {
    Icon: Megaphone,
    title: "Co-host Events",
    desc: "Fundraising or awareness events that amplify our message and reach new supporters.",
  },
  {
    Icon: Gift,
    title: "In-Kind Support",
    desc: "Donate supplies, logistics, expertise or services that directly support our mission.",
  },
  {
    Icon: Users,
    title: "Spread the Word",
    desc: "Use your platform, network or voice to raise awareness and connect us with potential supporters.",
  },
];

const whyPartner = [
  {
    Icon: Heart,
    title: "Shared purpose",
    desc: "Align your brand with a cause that restores dignity and hope to vulnerable people.",
  },
  {
    Icon: Sparkles,
    title: "Measurable impact",
    desc: "Every partnership translates into real supplies reaching ostomates who need them.",
  },
  {
    Icon: Handshake,
    title: "Flexible collaboration",
    desc: "We tailor partnerships to fit your capacity—whether time, resources or visibility.",
  },
];

export default function PartnersPage() {
  return (
    <main id="main">
      {/* Hero */}
      <section
        className="pt-28 pb-16 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-brand-grey"
        aria-labelledby="partners-heading"
      >
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/get-involved"
            className="inline-flex items-center gap-2 text-brand-navy hover:text-brand-navy-light transition-colors duration-300 mb-8 text-sm font-medium focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 rounded"
          >
            ← Back to Get Involved
          </Link>
          <h1
            id="partners-heading"
            className="heading-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight"
          >
            Partners
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Meaningful change happens when we work together. Our partners play a
            vital role in helping us achieve our mission by sharing resources,
            expertise and passion for making a difference.
          </p>
        </div>
      </section>

      {/* Partner with Us - Intro */}
      <section
        className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white"
        aria-labelledby="partner-with-us-heading"
      >
        <div className="max-w-4xl mx-auto">
          <div className="widget-container bg-white p-8 md:p-10 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-brand-blue/20 rounded-lg flex items-center justify-center">
                <Handshake className="w-6 h-6 text-brand-navy" />
              </div>
              <div>
                <h2
                  id="partner-with-us-heading"
                  className="heading-display text-2xl font-bold text-gray-900 leading-tight"
                >
                  Partner with Us
                </h2>
                <p className="legend-text-sm text-gray-600">
                  Real change happens when people come together
                </p>
              </div>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We believe that real change happens when people come together.
              That&apos;s why we&apos;re inviting individuals and organisations to
              partner with us in support of{" "}
              <strong>Footprints 2 Africa</strong>, a cause that&apos;s changing
              lives every day.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you can contribute time, resources or visibility, your
              partnership can help us restore dignity, hope and care to
              ostomates across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* How You Can Get Involved */}
      <section
        className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-brand-grey"
        aria-labelledby="how-involved-heading"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            id="how-involved-heading"
            className="heading-display text-3xl font-bold text-gray-900 mb-2 text-center leading-tight"
          >
            How You Can Get Involved
          </h2>
          <p className="legend-text-sm text-center mb-12 max-w-2xl mx-auto text-gray-600">
            Choose the partnership path that fits your organisation or goals.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerTypes.map(({ Icon, title, desc }, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-gray-200 bg-white hover:border-brand-blue/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 bg-brand-blue/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-brand-navy" />
                </div>
                <h3 className="heading-display font-bold text-gray-900 mb-2 leading-tight">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section
        className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white"
        aria-labelledby="why-partner-heading"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            id="why-partner-heading"
            className="heading-display text-3xl font-bold text-gray-900 mb-2 text-center leading-tight"
          >
            Why Partner With Us
          </h2>
          <p className="legend-text-sm text-center mb-12 max-w-2xl mx-auto text-gray-600">
            When you partner with Footprints 2 Africa, you join a mission that
            makes a tangible difference.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {whyPartner.map(({ Icon, title, desc }, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-brand-blue/5 hover:border-brand-blue/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-brand-navy" />
                </div>
                <h3 className="heading-display font-bold text-gray-900 mb-2 leading-tight">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners - Logo strips */}
      <section
        className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-brand-grey"
        aria-labelledby="our-partners-heading"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            id="our-partners-heading"
            className="heading-display text-3xl font-bold text-gray-900 mb-2 text-center leading-tight"
          >
            Our Partners
          </h2>
          <p className="legend-text-sm text-center mb-12 max-w-2xl mx-auto text-gray-600">
            Kind-hearted organisations, hospitals and individuals who share our
            vision.
          </p>

          <div className="widget-container bg-white p-6 md:p-8 border border-gray-200 overflow-hidden">
            <PartnerLogoMarquee />
          </div>
        </div>
      </section>

      {/* Interested in Partnering - CTA */}
      <section
        className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white"
        aria-labelledby="interested-heading"
      >
        <div className="max-w-4xl mx-auto">
          <div className="widget-container rounded-xl overflow-hidden border border-gray-200">
            <div className="p-8 md:p-10 bg-brand-navy">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2
                  id="interested-heading"
                  className="heading-display text-2xl font-bold text-white leading-tight"
                >
                  Interested in Partnering With Us?
                </h2>
              </div>
              <p className="text-white/90 mb-6 leading-relaxed">
                We love building partnerships with kind-hearted organisations,
                hospitals and individuals who share our vision of bringing
                dignity, hope and care to ostomates across Africa.
              </p>
              <p className="text-white/90 mb-8 leading-relaxed">
                If you or your organisation would like to work with us, please
                reach out. We&apos;ll review your request and get back to you
                soon. Together we can make footprints of lasting change.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Corporate or community partnerships",
                  "Co-hosting fundraising or awareness events",
                  "In-kind donations or support",
                  "Spreading the word in your network",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-white/90">
                    <CheckCircle className="w-5 h-5 text-brand-green shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="bg-white text-brand-navy hover:bg-gray-100 min-h-[48px] px-8 transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
              >
                <a
                  href="mailto:sam@footprints2africa.org.uk?subject=Partnership%20inquiry"
                  className="inline-flex items-center gap-2"
                >
                  Email us at sam@footprints2africa.org.uk
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <DonateSection />

      {/* Footer */}
      <footer className="bg-brand-navy text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-sm font-bold mb-4 text-gray-200">
                Footprints 2 Africa
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Restoring dignity, hope, and human worth to ostomates across
                Africa.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold mb-4 text-gray-200">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:sam@footprints2africa.org.uk"
                    className="flex items-center gap-2 text-gray-400 hover:text-brand-green transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    sam@footprints2africa.org.uk
                  </a>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  UK-based · Gloucester
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold mb-4 text-gray-200">
                Follow Us
              </h3>
              <ul className="space-y-3 text-sm flex flex-col">
                {[
                  {
                    name: "Facebook",
                    Icon: Facebook,
                    href: "https://www.facebook.com/footprints2africa",
                  },
                  {
                    name: "Twitter",
                    Icon: Twitter,
                    href: "https://www.twitter.com/footprints2africa",
                  },
                  {
                    name: "Instagram",
                    Icon: Instagram,
                    href: "https://www.instagram.com/footprints2africa",
                  },
                ].map(({ name, Icon, href }) => (
                  <li key={name}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-brand-green transition-colors"
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
          <div className="border-t border-white/15 pt-8 text-gray-400 text-sm">
            <p>
              Footprints 2 Africa is a registered charity in England and Wales,
              no. 1214173
            </p>
            <p className="mt-1">
              © {new Date().getFullYear()} Footprints 2 Africa. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

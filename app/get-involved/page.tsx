import type { Metadata } from "next";
import Link from "next/link";
import {
  Package,
  MapPin,
  Truck,
  Heart,
  ArrowRight,
  Mail,
  Gift,
  Users,
  CheckCircle,
  AlertCircle,
  Facebook,
  Twitter,
  Instagram,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DonateSection } from "@/components/donate-section";
import { PageHero } from "@/components/page-hero";
import { GetInvolvedStats } from "@/components/get-involved-stats";
import { ScrollRevealSection } from "@/components/scroll-reveal-section";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Donate ostomy supplies, volunteer, or give financially. Give your surplus supplies a second life. We collect bags, catheters, pads and related accessories for ostomates across Africa.",
  openGraph: {
    title: "Get Involved | Footprints 2 Africa",
    description:
      "Donate ostomy supplies, volunteer, or give financially. Every contribution restores dignity and hope to ostomates across Africa.",
  },
};

const BULK_DONATION_FORM_URL = "https://forms.gle/MKx9xBuKyiNnbY4B9";
const JUSTGIVING_URL = "https://www.justgiving.com/charity/footprints2africa";

const donationAddress = {
  label: "Stoma",
  line1: "Limekiln Farm",
  line2: "Middle Lypiatt",
  city: "Stroud",
  postcode: "GL6 7LR",
};

export default function GetInvolvedPage() {
  return (
    <main id="main">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 bg-brand-grey">
        <PageHero
          backHref="/"
          backLabel="Back to home"
          heading="Donate Ostomy Supplies"
          description="Give your surplus supplies a second life. We collect ostomy and menstrual care supplies—including bags, catheters, pads and related accessories—and deliver them where they&apos;re needed most."
        />
      </section>

      {/* Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="widget-container-gradient p-6 md:p-8">
            <p className="legend-text text-center mb-6">Why donate</p>
            <GetInvolvedStats />
          </div>
        </div>
      </section>

      {/* General Donations */}
      <ScrollRevealSection
        className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-brand-grey"
        aria-labelledby="general-donations-heading"
      >
        <div className="max-w-4xl mx-auto">
          <div className="widget-container bg-white p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-brand-blue/20 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-brand-navy" />
              </div>
              <div>
                <h2
                  id="general-donations-heading"
                  className="heading-display text-2xl font-bold text-gray-900 leading-tight"
                >
                  General Donations
                </h2>
                <p className="legend-text-sm text-gray-600">
                  Individuals and small quantities
                </p>
              </div>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We kindly ask that all non-bulk donations be posted to the
              address below. Please include your name and email address so we can
              acknowledge your gift and confirm its arrival. Unfortunately, we
              are unable to send thank-you messages if no contact information is
              provided.
            </p>

            <div className="p-6 rounded-xl bg-brand-blue/5 border border-brand-blue/20 mb-6">
              <p className="legend-text mb-2 text-brand-navy font-medium">
                Postal address
              </p>
              <address className="text-gray-900 font-medium not-italic leading-relaxed">
                {donationAddress.label}
                <br />
                {donationAddress.line1}
                <br />
                {donationAddress.line2}
                <br />
                {donationAddress.city}
                <br />
                {donationAddress.postcode}
              </address>
              <div className="mt-4 flex items-start gap-2">
                <MapPin className="w-5 h-5 text-brand-navy shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600">
                  UK · Gloucestershire
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-amber-50 border border-amber-200">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> We do not accept any medications or
                sharps.
              </p>
            </div>
          </div>
        </div>
      </ScrollRevealSection>

      {/* Bulk Donations */}
      <section
        className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white"
        aria-labelledby="bulk-donations-heading"
      >
        <div className="max-w-4xl mx-auto">
          <div className="widget-container-gradient p-8 md:p-10 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-brand-navy text-white rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h2
                  id="bulk-donations-heading"
                  className="heading-display text-2xl font-bold text-gray-900 leading-tight"
                >
                  Bulk Donations
                </h2>
                <p className="legend-text-sm text-gray-600">
                  Institutional or bulk contributions
                </p>
              </div>
            </div>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We&apos;re always grateful for the generosity of{" "}
              <strong>hospitals, manufacturers, suppliers, pharmacies, support
              groups and organisations</strong> that support our mission. If you
              represent one of these groups with a bulk donation, we&apos;d love
              to hear from you.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We can <strong>arrange a collection</strong> to make sure your
              supplies go to where they&apos;re needed most.
            </p>
            <Button asChild variant="brand" size="cta-lg">
              <a
                href={BULK_DONATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Request bulk donation collection
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Support Beyond Supplies */}
      <section
        className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-brand-grey"
        aria-labelledby="support-beyond-heading"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            id="support-beyond-heading"
            className="heading-display text-3xl font-bold text-gray-900 mb-2 text-center leading-tight"
          >
            Support Beyond Supplies
          </h2>
          <p className="legend-text-sm text-center mb-12 max-w-2xl mx-auto">
            Your generosity powers our mission. Choose how you&apos;d like to
            make a difference.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Financial Donation */}
            <div className="widget-container bg-white p-8 transition-shadow duration-300 hover:shadow-md hover:border-brand-blue/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-brand-red" />
                </div>
                <h3 className="heading-display text-xl font-bold text-gray-900 leading-tight">
                  Donate Financially
                </h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your generosity powers our mission, turning donated supplies into
                lifesaving aid. With soaring international freight costs, every
                pound you give ensures we can continue shipping vital ostomy
                supplies where they&apos;re needed most.
              </p>
            <Button asChild variant="cta" size="cta-lg" className="w-full sm:w-auto">
                <Link href="/#donate" className="inline-flex items-center gap-2">
                  Donate now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Start Your Own Fundraiser */}
            <div className="widget-container bg-white p-8 transition-shadow duration-300 hover:shadow-md hover:border-brand-blue/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand-green/30 rounded-lg flex items-center justify-center">
                  <Gift className="w-6 h-6 text-brand-navy" />
                </div>
                <h3 className="heading-display text-xl font-bold text-gray-900 leading-tight">
                  Start Your Own Fundraiser
                </h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Turn your passion into purpose. Whether you&apos;re celebrating a
                birthday, honouring a loved one or you want to make a difference,
                create your own personal fundraising page in support of Footprints
                2 Africa.
              </p>
              <Button asChild variant="brand-outline" size="cta-lg" className="w-full sm:w-auto">
                <a
                  href={JUSTGIVING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Crowdfunding on JustGiving
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer & Partners CTAs */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Volunteer CTA */}
            <div className="widget-container rounded-xl overflow-hidden border border-gray-200">
              <div className="p-8 md:p-10 bg-brand-navy h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="heading-display text-2xl font-bold text-white leading-tight">
                  Volunteer With Us
                </h2>
                </div>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Join our team. Help collect, sort, and pack supplies before
                  shipping. No experience necessary—just compassion and a desire
                  to restore dignity to ostomates across Africa.
                </p>
                <ul className="space-y-2 mb-8">
                  {[
                    "Sort and document donated supplies",
                    "Pack shipments for delivery",
                    "Support awareness and outreach",
                  ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-white/90">
                    <CheckCircle className="w-5 h-5 text-brand-green shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
                <Button asChild variant="brand-inverse" className="mt-auto">
                  <Link
                    href="/get-involved/volunteer"
                    className="inline-flex items-center gap-2"
                  >
                    Volunteer with us
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Partners CTA */}
            <div className="widget-container rounded-xl overflow-hidden border border-gray-200">
              <div className="p-8 md:p-10 bg-brand-navy h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="heading-display text-2xl font-bold text-white leading-tight">
                    Partner With Us
                  </h2>
                </div>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Corporations, hospitals, community groups and individuals—we
                  work with partners who share our vision of bringing dignity,
                  hope and care to ostomates across Africa.
                </p>
                <ul className="space-y-2 mb-8">
                  {[
                    "Corporate or community partnerships",
                    "Co-host fundraising or awareness events",
                    "In-kind donations and support",
                    "Spread the word in your network",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-white/90">
                      <CheckCircle className="w-5 h-5 text-brand-green shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="brand-inverse" className="mt-auto">
                  <Link
                    href="/get-involved/partners"
                    className="inline-flex items-center gap-2"
                  >
                    Explore partnerships
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
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

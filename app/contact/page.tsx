import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Facebook,
  Instagram,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DonateSection } from "@/components/donate-section";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { ScrollRevealSection } from "@/components/scroll-reveal-section";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Footprints 2 Africa. We'd love to hear from you—whether you have questions, want to volunteer, donate supplies, or explore a partnership.",
  openGraph: {
    title: "Contact Us | Footprints 2 Africa",
    description:
      "Together we can make a difference. Get in touch with our team for support or more information.",
    url: "/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Footprints 2 Africa",
    description:
      "Together we can make a difference. Get in touch with our team for support or more information.",
  },
  alternates: { canonical: "/contact" },
};

const CONTACT_EMAIL = "sam@footprints2africa.org.uk";

const socialLinks = [
  {
    name: "Facebook",
    Icon: Facebook,
    href: "https://www.facebook.com/p/Footprints-2-Africa-61573135224358/",
  },
  {
    name: "Instagram",
    Icon: Instagram,
    href: "https://www.instagram.com/footprints2africa/?hl=en",
  },
];

const trustItems = [
  {
    title: "Charity Registration",
    desc: "UK Registered Charity No. 1214173",
  },
  {
    title: "Volunteer Leadership",
    desc: "100% volunteer-led organization",
  },
  {
    title: "Transparency",
    desc: "Complete transparency in all operations",
  },
];

export default function ContactPage() {
  return (
    <main id="main">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 bg-brand-grey">
        <PageHero
          backHref="/"
          backLabel="Back to home"
          heading="Contact Us"
          description="Together, we can make a difference. Get in touch with our team for support or more information—we'd love to hear from you."
          legend="We typically respond within 2–3 working days"
        />
      </section>

      {/* Contact methods + Form */}
      <ScrollRevealSection className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact methods – single container per design audit */}
            <div className="lg:col-span-1">
              <div className="widget-container bg-white p-8 rounded-xl border border-gray-200 h-full">
                <h2 className="heading-display text-xl font-bold text-gray-900 mb-6 leading-tight">
                  Get In Touch
                </h2>
                <p className="legend-text mb-6">
                  Our team look forward to hearing from you. Reach out using the
                  details below or send us a message.
                </p>

                <div className="space-y-6">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="flex items-start gap-3 group focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 rounded-lg p-3 -m-3 transition-colors"
                  >
                    <div className="w-10 h-10 bg-brand-blue/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-brand-blue/30 transition-colors">
                      <Mail className="w-5 h-5 text-brand-navy" />
                    </div>
                    <div>
                      <p className="legend-text mb-1">Email</p>
                      <span className="text-gray-900 font-semibold group-hover:text-brand-navy transition-colors">
                        {CONTACT_EMAIL}
                      </span>
                    </div>
                  </a>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-brand-blue/20 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-brand-navy" />
                    </div>
                    <div>
                      <p className="legend-text mb-1">Location</p>
                      <p className="text-gray-900 font-semibold">UK-based</p>
                      <p className="legend-text text-sm mt-0.5">
                        We operate across the UK and Africa
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="legend-text mb-3">Follow us on social media</p>
                    <div className="flex flex-wrap gap-3">
                      {socialLinks.map(({ name, Icon, href }) => (
                        <a
                          key={name}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 text-gray-600 hover:border-brand-navy hover:text-brand-navy hover:bg-brand-blue/10 transition-colors focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2"
                          aria-label={name}
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="widget-container bg-white p-8 md:p-10 rounded-xl border border-gray-200">
                <h2 className="heading-display text-xl font-bold text-gray-900 mb-2 leading-tight">
                  Send us a message
                </h2>
                <p className="legend-text mb-8">
                  Fill in the form below and we&apos;ll get back to you as soon as we can.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </ScrollRevealSection>

      {/* Trust & Governance */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-brand-grey">
        <div className="max-w-4xl mx-auto">
          <div className="widget-container rounded-xl border border-gray-200 overflow-hidden">
            <div className="p-8 md:p-10 bg-brand-navy">
              <h2 className="heading-display text-2xl font-bold text-white mb-6 leading-tight">
                Trust & Governance
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {trustItems.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-brand-green shrink-0" />
                      <p className="font-semibold text-white">{item.title}</p>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="widget-container bg-white p-10 border border-gray-200">
            <h2 className="heading-display text-2xl font-bold text-gray-900 mb-3 leading-tight">
              Ready to make a difference?
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Your support helps restore dignity to ostomates across Africa.
              Donate supplies, volunteer, or give financially.
            </p>
            <Button asChild variant="cta" size="cta-lg">
              <Link href="/#donate" className="inline-flex items-center gap-2">
                Donate now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
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
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="flex items-center gap-2 text-gray-400 hover:text-brand-green transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    {CONTACT_EMAIL}
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
                {socialLinks.map(({ name, Icon, href }) => (
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

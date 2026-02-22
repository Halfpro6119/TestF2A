import type { Metadata } from "next";
import Link from "next/link";
import {
  Users,
  Heart,
  ArrowRight,
  CheckCircle,
  Building2,
  Briefcase,
  Sparkles,
  Quote,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DonateSection } from "@/components/donate-section";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Volunteers are the heart of our mission. Join Footprints 2 Africa to collect, sort and ship vital ostomy supplies that restore dignity and hope to ostomates across Africa.",
  openGraph: {
    title: "Volunteer | Footprints 2 Africa",
    description:
      "Give your time, give hope. Join our volunteer community—individuals or employer-supported teams—and help transform lives.",
  },
};

const INDIVIDUAL_SIGNUP_URL = "https://forms.gle/H3cMmPr7vKwQW9pX6";
const EMPLOYER_SIGNUP_URL = "https://forms.gle/2mNwDxDSaNzkApP86";

const individualBenefits = [
  "Sort and document donated supplies",
  "Pack shipments for delivery",
  "Support awareness and outreach",
  "Flexible hours—a few hours a week or one-off events",
];

const employerBenefits = [
  {
    Icon: Briefcase,
    title: "Flexible opportunities",
    desc: "For individuals or teams—team days, skilled volunteering, or long-term partnerships",
  },
  {
    Icon: Sparkles,
    title: "Hands-on or skills-based",
    desc: "Tailored to your team's expertise and goals",
  },
  {
    Icon: Building2,
    title: "Visibility and recognition",
    desc: "Showcase your company's community support",
  },
  {
    Icon: Heart,
    title: "Positive impact",
    desc: "Boost employee engagement, wellbeing and retention",
  },
];

export default function VolunteerPage() {
  return (
    <main id="main">
      {/* Hero */}
      <section
        className="pt-28 pb-16 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-brand-grey"
        aria-labelledby="volunteer-heading"
      >
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/get-involved"
            className="inline-flex items-center gap-2 text-brand-navy hover:text-brand-navy-light transition-colors duration-300 mb-8 text-sm font-medium focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 rounded"
          >
            ← Back to Get Involved
          </Link>
          <h1
            id="volunteer-heading"
            className="heading-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight"
          >
            Volunteer
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Volunteers are the heart of our mission—when you give your time, you
            give hope. Ready to make a difference? Join our volunteer community
            today.
          </p>
        </div>
      </section>

      {/* Individual Volunteers */}
      <section
        className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white"
        aria-labelledby="individual-heading"
      >
        <div className="max-w-4xl mx-auto">
          <div className="widget-container bg-white p-8 md:p-10 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-brand-blue/20 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-brand-navy" />
              </div>
              <div>
                <h2
                  id="individual-heading"
                  className="heading-display text-2xl font-bold text-gray-900 leading-tight"
                >
                  Become part of something life-changing
                </h2>
                <p className="legend-text-sm text-gray-600">
                  Individual volunteers
                </p>
              </div>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We&apos;re looking for passionate, caring people to join us in
              bringing dignity and hope to vulnerable ostomy patients. Every
              day, people living with a stoma go without the basic supplies they
              need to live comfortably and confidently. By volunteering your
              time, you help us collect, sort and ship vital supplies that
              transform lives.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Whether you can spare a few hours each week or lend a hand at a
              one-off event, your time and energy make a difference. We are an
              inclusive organisation that welcomes volunteers of all
              backgrounds, abilities and identities. Everyone is valued and
              encouraged to get involved.
            </p>
            <ul className="space-y-2 mb-8">
              {individualBenefits.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Button
              asChild
              className="bg-brand-navy hover:bg-brand-navy-light text-white min-h-[48px] px-8 transition-colors duration-300 focus-visible:ring-brand-navy focus-visible:ring-offset-2"
            >
              <a
                href={INDIVIDUAL_SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Sign up as an individual
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Employer Supported Volunteering */}
      <section
        className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-brand-grey"
        aria-labelledby="employer-heading"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2
              id="employer-heading"
              className="heading-display text-3xl font-bold text-gray-900 mb-2 leading-tight"
            >
              Employer Supported Volunteering
            </h2>
            <p className="legend-text-sm max-w-2xl mx-auto text-gray-600">
              When businesses support employee volunteering, everyone wins.
            </p>
          </div>
          <p className="text-gray-700 mb-10 max-w-3xl mx-auto text-center leading-relaxed">
            Employer-Supported Volunteering (ESV) gives your team the
            opportunity to make a meaningful impact in the community while
            building stronger teams, boosting morale and aligning your brand
            with positive social change. Whether it&apos;s a team day of
            service, skilled volunteering or long-term partnerships, we&apos;ll
            work with you to create a programme that fits your goals and makes a
            real difference.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {employerBenefits.map(({ Icon, title, desc }, idx) => (
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

          <div className="max-w-2xl mx-auto text-center">
            <Button
              asChild
              className="bg-brand-navy hover:bg-brand-navy-light text-white min-h-[48px] px-8 transition-colors duration-300 focus-visible:ring-brand-navy focus-visible:ring-offset-2"
            >
              <a
                href={EMPLOYER_SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Sign up as an employer
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <p className="mt-4 text-sm text-gray-600">
              Questions?{" "}
              <Link
                href="/#contact"
                className="text-brand-navy hover:text-brand-navy-light font-medium underline underline-offset-2"
              >
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section
        className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white"
        aria-labelledby="testimonial-heading"
      >
        <div className="max-w-3xl mx-auto">
          <h2 id="testimonial-heading" className="sr-only">
            Volunteer testimonial
          </h2>
          <blockquote className="widget-container-hero p-8 md:p-10">
            <Quote className="w-10 h-10 text-brand-navy/30 mb-4" aria-hidden />
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
              I&apos;m so proud to support Footprints 2 Africa, a charity giving
              unwanted colostomy bags a new purpose, helping restore health,
              dignity and comfort to those in desperate need across Africa. In
              my own time, I help sort, pack and clinically assess supplies that
              would otherwise be destroyed. A small act of kindness can bring
              dignity to someone&apos;s life—that&apos;s why I do it.
            </p>
            <footer>
              <cite className="not-italic font-semibold text-brand-navy">
                Scott
              </cite>
              <span className="text-gray-500 text-sm ml-2">— Volunteer</span>
            </footer>
          </blockquote>
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

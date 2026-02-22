import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  BadgeCheck,
  Users,
  ArrowRight,
  CheckCircle,
  Building2,
  Shield,
  FileText,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DonateSection } from "@/components/donate-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Footprints 2 Africa is a UK registered charity (1214173) restoring dignity to ostomates across Africa. Meet our team, learn our story, and see how we're making a difference.",
  openGraph: {
    title: "About Us | Footprints 2 Africa",
    description:
      "UK registered charity restoring dignity to ostomates. 100% volunteer-led. Meet our team and learn our story.",
  },
};

const CHARITY_COMMISSION_URL =
  "https://register-of-charities.charitycommission.gov.uk/charity-details/?regid=1214173&subid=0";

const team = [
  {
    name: "Sam Yiollaris",
    role: "Founder | Missions Lead",
    description: "Driving our mission to connect surplus supplies with those who need them most.",
    image: "/F2Ateamprofiles/sam_profile.jpg",
  },
  {
    name: "Sherie Erwee",
    role: "Trustee | Finance and Governance Lead",
    description: "Ensuring transparency and responsible stewardship of every donation.",
    image: "/F2Ateamprofiles/sherie_profile.jpg",
  },
  {
    name: "Colette Fisher",
    role: "Trustee | Health and Safety and Operations Lead",
    description: "Overseeing safe, dignified delivery of supplies to our partners.",
    image: "/F2Ateamprofiles/colette_profile.jpg",
  },
  {
    name: "Stevie & The Stoma",
    role: "Digital Outreach and Awareness Lead",
    description: "Raising awareness and building community through lived experience.",
    image: "/F2Ateamprofiles/stevie_profile.jpg",
  },
  {
    name: "Abby Bryan",
    role: "Wales Operational Lead",
    description: "Coordinating collection and distribution across Wales.",
    image: "/F2Ateamprofiles/abby_profile.jpg",
  },
  {
    name: "Mercy Mwaisoloka",
    role: "Zambia Operational Lead",
    description: "Leading our on-the-ground distribution and partner relationships in Zambia.",
    image: "/F2Ateamprofiles/mercy_profile.webp",
  },
];

const trustBadges = [
  {
    Icon: BadgeCheck,
    title: "Charity Verified",
    desc: "UK Registered Charity No. 1214173",
    href: CHARITY_COMMISSION_URL,
  },
  {
    Icon: Shield,
    title: "Fundraising Regulator",
    desc: "Committed to best practice in fundraising",
  },
  {
    Icon: Users,
    title: "100% Volunteer-Led",
    desc: "No salaries—every penny serves our mission",
  },
];

const governanceItems = [
  {
    title: "Charity Registration",
    desc: "Registered with the Charity Commission for England and Wales. Our details are publicly verifiable.",
  },
  {
    title: "Transparent Operations",
    desc: "We publish our objectives and report on how donations are used. No hidden costs.",
  },
  {
    title: "Volunteer Leadership",
    desc: "Our trustees and team give their time freely. We are driven by compassion, not profit.",
  },
];

export default function AboutPage() {
  return (
    <main id="main">
      {/* Hero */}
      <section
        className="pt-28 pb-16 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-brand-grey"
        aria-labelledby="about-heading"
      >
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-brand-navy hover:text-brand-navy-light transition-colors duration-300 mb-8 text-sm font-medium focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 rounded"
          >
            ← Back to home
          </Link>
          <h1
            id="about-heading"
            className="heading-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight"
          >
            About Footprints 2 Africa
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            A UK registered, faith-based charity dedicated to bringing dignity,
            hope and compassion to ostomates. We distribute donated stoma
            supplies and provide support, empowering the most vulnerable to live
            with confidence and care.
          </p>
          <p className="legend-text text-gray-500">
            UK Registered Charity No. 1214173 · England and Wales
          </p>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustBadges.map((badge, idx) => {
              const IconComponent = badge.Icon;
              const content = (
                <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 bg-gray-50/50 hover:bg-gray-50 hover:border-brand-blue/30 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-brand-navy shrink-0" />
                  <div className="text-left">
                    <p className="font-bold text-gray-900 text-sm">
                      {badge.title}
                    </p>
                    <p className="legend-text">{badge.desc}</p>
                  </div>
                </div>
              );
              return (
                <div key={idx}>
                  {badge.href ? (
                    <a
                      href={badge.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 rounded-lg outline-none"
                    >
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
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-brand-grey">
        <div className="max-w-4xl mx-auto">
          <div className="widget-container bg-white p-8 md:p-10">
            <h2 className="heading-display text-3xl font-bold text-gray-900 mb-6 leading-tight">
              Our Story
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                At Footprints 2 Africa, we collect stoma supplies from across the
                UK—supplies that would otherwise sit unused in cupboards or end
                up in landfill—and ship them directly to under-resourced
                hospitals and non-profit organisations across Africa. We are a{" "}
                <strong>100% volunteer-led charity</strong>, driven by
                compassion, not profit.
              </p>
              <p>
                After life-changing stoma surgery, many patients are discharged
                with just one to three bags, often the wrong size, poorly
                fitting, with little or no education on how to manage their
                stoma safely or with dignity. When those bags run out, there are
                often no replacements available from the hospital, and buying
                supplies is far too expensive for most people.
              </p>
              <p>
                With no support, people do whatever they can to cope. They begin
                improvising with bread bags, disposable nappies, rags, tins and
                heavy duty tape. It leads to leaks, broken skin, infections and
                constant discomfort—but the physical pain is only part of the
                story.
              </p>
              <p>
                Without proper supplies, many feel distressed, ashamed and
                forgotten. They cannot work, attend school or take part in
                everyday life. They hide—isolated and rejected—not because of
                their condition, but because they do not have the basic supplies
                needed to live with dignity.
              </p>
              <p className="text-brand-navy font-medium">
                Footprints 2 Africa exists to change that. We restore dignity,
                hope and confidence by connecting surplus supplies in the UK with
                the people who desperately need them. Every box we send is more
                than just medical stock—it is a message that says:{" "}
                <em>you are seen, you are valued and you are not alone.</em>
              </p>
            </div>

            <div className="mt-10 p-6 rounded-lg border-l-4 border-l-brand-navy bg-brand-blue/10">
              <h3 className="heading-display text-xl font-bold text-gray-900 mb-4">
                You can be part of this journey
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-navy shrink-0 mt-0.5" />
                  <span>
                    <strong>Donate:</strong> Every £20 helps us deliver 100
                    stoma bags.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-navy shrink-0 mt-0.5" />
                  <span>
                    <strong>Volunteer:</strong> We would love your help to sort,
                    document and pack supplies before shipping.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-navy shrink-0 mt-0.5" />
                  <span>
                    <strong>Share:</strong> Spread the word so more people can
                    join this mission of dignity.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-display text-3xl font-bold text-gray-900 mb-2 text-center leading-tight">
            Our Team
          </h2>
          <p className="legend-text-sm text-center mb-12 max-w-2xl mx-auto">
            The hearts behind the mission. Every member of our team gives their
            time voluntarily to restore dignity to ostomates across Africa.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="widget-container p-6 transition-shadow duration-300 hover:shadow-md hover:border-brand-blue/30"
              >
                <div className="flex items-start gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 bg-brand-blue/20">
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <h3 className="heading-display text-lg font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="legend-text-sm text-brand-navy mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & Transparency */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="widget-container rounded-xl overflow-hidden border border-gray-200">
            <div className="p-8 md:p-10 bg-brand-navy">
              <h2 className="heading-display text-2xl font-bold text-white mb-6 leading-tight">
                Governance & Transparency
              </h2>
              <p className="text-white/90 mb-8">
                We are committed to the highest standards of accountability. Our
                charity is regulated by the Charity Commission for England and
                Wales, and we follow best practice in fundraising.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {governanceItems.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-brand-green shrink-0" />
                      <p className="font-semibold text-white">{item.title}</p>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/20">
                <a
                  href={CHARITY_COMMISSION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-brand-green transition-colors font-medium focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy rounded"
                >
                  <FileText className="w-4 h-4" />
                  View our Charity Commission entry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-brand-grey">
        <div className="max-w-4xl mx-auto text-center">
          <div className="widget-container bg-white p-10">
            <Building2 className="w-14 h-14 text-brand-navy mx-auto mb-4" />
            <h2 className="heading-display text-2xl font-bold text-gray-900 mb-3 leading-tight">
              Want to Partner with Us?
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              We work with hospitals, non-profit organisations, and community
              groups across Africa. If you would like to explore a partnership,
              we would love to hear from you.
            </p>
            <Button
              asChild
              className="bg-brand-navy hover:bg-brand-navy-light text-white px-8 py-6 min-h-[44px] transition-colors duration-300 focus-visible:ring-brand-navy focus-visible:ring-offset-2"
            >
              <Link href="/#contact">
                Get in touch <ArrowRight className="ml-2 w-4 h-4" />
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
            <p className="mt-1">© {new Date().getFullYear()} Footprints 2 Africa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

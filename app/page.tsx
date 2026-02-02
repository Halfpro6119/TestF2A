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
} from "lucide-react";

/**
 * Home Page Component
 * Premium charity website with refined, subtle animations
 * Features: smooth transitions, elegant hover states, professional micro-interactions
 */
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Track scroll position for subtle parallax effects
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation Bar - Premium fixed header with refined transitions */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm transition-all duration-300">
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
            <div className="transition-all duration-300">
              <h1 className="text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-red-600">
                Footprints 2 Africa
              </h1>
              <p className="text-xs text-gray-600 transition-colors duration-300 group-hover:text-red-500">
                Restoring Dignity
              </p>
            </div>
          </div>

          {/* Desktop Navigation Menu with refined underlines */}
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

          {/* Donate Button with refined hover effect */}
          <Button className="hidden sm:flex bg-red-600 hover:bg-red-700 text-white transition-all duration-300 hover:shadow-lg transform hover:scale-102">
            Donate
          </Button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-all duration-300"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu with smooth animation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
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
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white transition-all duration-300">
                Donate
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Premium with subtle animations */}
      <section
        id="home"
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden"
      >
        {/* Subtle animated background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-red-50 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Animated headline */}
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
            Restoring Dignity,{" "}
            <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
              Delivering Hope
            </span>
          </h2>

          {/* Animated subheadline */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Connecting surplus medical supplies in the UK with people who
            urgently need them across Africa. One precious bag at a time.
          </p>

          {/* CTA Buttons with refined hover effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-102 active:scale-98">
              Donate Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="px-8 py-6 text-lg border-gray-300 hover:bg-gray-50 transition-all duration-300 hover:border-red-600 hover:text-red-600 transform hover:scale-102 active:scale-98"
            >
              How We Help
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section - Refined card interactions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Metric Cards with subtle hover effects */}
            {[
              { value: "31,752", label: "Supplies Delivered", icon: "📦" },
              { value: "921.5kg", label: "Saved from Landfill", icon: "♻️" },
              { value: "5", label: "Countries Served", icon: "🌍" },
              { value: "100%", label: "Volunteer-Led", icon: "❤️" },
            ].map((metric, idx) => (
              <Card
                key={idx}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-102 hover:-translate-y-1 cursor-pointer group bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-red-200"
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="text-4xl mb-3 transition-transform duration-300">
                  {metric.icon}
                </div>
                <p className="text-4xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent mb-2 transition-all duration-300">
                  {metric.value}
                </p>
                <p className="text-gray-600 font-medium transition-colors duration-300 group-hover:text-gray-900">
                  {metric.label}
                </p>
                {hoveredCard === idx && (
                  <div className="mt-4 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full animate-in fade-in duration-300"></div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Premium cards with refined interactions */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-in fade-in duration-700">
            Our Purpose & Vision
          </h3>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Purpose Card */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-102 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-red-200 group cursor-pointer">
              <div className="text-4xl mb-4 transition-transform duration-300">
                🎯
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-red-600">
                Our Purpose
              </h4>
              <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-900">
                We restore dignity, hope, and confidence to ostomates across
                Africa. It's not just about supplies—it's about restoring human
                worth and belonging.
              </p>
            </Card>

            {/* Vision Card */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-102 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-red-200 group cursor-pointer">
              <div className="text-4xl mb-4 transition-transform duration-300">
                ✨
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-red-600">
                Our Vision
              </h4>
              <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-900">
                A world where every ostomate has access to essential supplies,
                community support, and the dignity they deserve. Grassroots,
                sustainable, compassionate.
              </p>
            </Card>
          </div>

          {/* Why It Matters - Premium card with accent */}
          <Card className="p-8 mt-8 bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-600 hover:shadow-lg transition-all duration-300 transform hover:scale-102 hover:-translate-y-1 group cursor-pointer">
            <h4 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-red-700">
              Why It Matters
            </h4>
            <p className="text-gray-700 leading-relaxed transition-colors duration-300 group-hover:text-gray-900">
              Many ostomates are discharged with only 1-3 bags. When supplies
              run out, they resort to improvised solutions, leading to
              infections and isolation. Your support changes lives.
            </p>
          </Card>
        </div>
      </section>

      {/* Impact Stories Section - Refined story cards */}
      <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-in fade-in duration-700">
            Stories of Change
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Story Cards with refined interactions */}
            {[
              {
                name: "Dickson's Story",
                quote:
                  "The supplies gave me my life back. I can now work, go to school, and live with dignity.",
              },
              {
                name: "Asanda's Story",
                quote:
                  "I felt alone until Footprints 2 Africa reached out. Now I know I'm not the only one.",
              },
              {
                name: "Hospital Partnership",
                quote:
                  "These supplies have transformed our ability to care for ostomates with dignity.",
              },
            ].map((story, idx) => (
              <Card
                key={idx}
                className="p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-102 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-red-200 group cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-4 transition-all duration-300">
                  <Heart className="w-5 h-5 text-red-600 transition-transform duration-300" />
                  <h4 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-red-600">
                    {story.name}
                  </h4>
                </div>
                <p className="text-gray-600 italic mb-4 transition-colors duration-300 group-hover:text-gray-900">
                  "{story.quote}"
                </p>
                <Button
                  variant="link"
                  className="text-red-600 hover:text-red-700 p-0 transition-all duration-300 group-hover:translate-x-1"
                >
                  Read Full Story →
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - Refined process steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-in fade-in duration-700">
            How It Works
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Process Steps with refined animations */}
            {[
              {
                num: 1,
                title: "Collect Donations",
                desc: "From individuals, NHS trusts, and medical suppliers across the UK",
              },
              {
                num: 2,
                title: "Sort & Pack",
                desc: "Our volunteer team carefully organizes supplies for distribution",
              },
              {
                num: 3,
                title: "Ship to Africa",
                desc: "Deliver to partner hospitals and NGOs across Southern Africa",
              },
              {
                num: 4,
                title: "Local Distribution",
                desc: "Supplies reach ostomates with dignity support and care",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="text-center group cursor-pointer transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-400 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 transition-all duration-300 group-hover:shadow-lg transform group-hover:scale-110 group-hover:-translate-y-1">
                  {step.num}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-red-600">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-900">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section - Premium CTA cards */}
      <section id="get-involved" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-gray-900 mb-4 text-center animate-in fade-in duration-700">
            Get Involved
          </h3>
          <p className="text-xl text-gray-600 text-center mb-12 animate-in fade-in duration-700 delay-100">
            Choose how you'd like to make a difference. Every contribution,
            no matter the size, restores dignity and hope.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Donate Card */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-102 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-red-200 group cursor-pointer">
              <div className="flex items-center gap-3 mb-4 transition-all duration-300 justify-center">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-red-600">
                  <Heart className="w-6 h-6 text-red-600 transition-colors duration-300 group-hover:text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-red-600">
                  Make a Donation
                </h4>
              </div>
              <p className="text-gray-600 mb-6 transition-colors duration-300 group-hover:text-gray-900 text-center">
                Direct impact on lives. Your donation directly funds the
                collection, sorting, and delivery of essential medical supplies
                to ostomates across Africa.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white w-full transition-all duration-300 hover:shadow-lg transform hover:scale-102 active:scale-98">
                Donate Now
              </Button>
            </Card>

            {/* Volunteer Card */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-102 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-red-200 group cursor-pointer">
              <div className="flex items-center gap-3 mb-4 transition-all duration-300 justify-center">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-red-600">
                  <Users className="w-6 h-6 text-red-600 transition-colors duration-300 group-hover:text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-red-600">
                  Volunteer
                </h4>
              </div>
              <p className="text-gray-600 mb-6 transition-colors duration-300 group-hover:text-gray-900 text-center">
                Join our passionate team. Help collect, sort, and pack supplies
                for distribution. No experience necessary—just compassion.
              </p>
              <Button
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50 w-full transition-all duration-300 hover:shadow-lg transform hover:scale-102 active:scale-98"
              >
                Get Started
              </Button>
            </Card>
          </div>

          {/* Impact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "💡",
                title: "Impact",
                desc: "£20 helps deliver approximately 100 stoma bags",
              },
              {
                icon: "✨",
                title: "Gift Aid",
                desc: "UK taxpayers can increase donation value by 25% at no extra cost",
              },
              {
                icon: "🔒",
                title: "Secure",
                desc: "100% of donations go directly to supplies and delivery",
              },
            ].map((info, idx) => (
              <Card
                key={idx}
                className="p-6 bg-gradient-to-br from-red-50 to-red-100 border-l-4 border-red-600 hover:shadow-lg transition-all duration-300 transform hover:scale-102 hover:-translate-y-1 group cursor-pointer"
              >
                <p className="text-2xl mb-2 transition-transform duration-300 text-center">
                  {info.icon}
                </p>
                <p className="text-sm text-gray-600 mb-2 transition-colors duration-300 group-hover:text-gray-900 text-center">
                  {info.title}
                </p>
                <p className="text-gray-900 font-semibold transition-colors duration-300 group-hover:text-red-700 text-center">
                  {info.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Premium contact cards */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-in fade-in duration-700">
            Get In Touch
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Contact Cards */}
            {[
              {
                icon: Mail,
                title: "Email",
                value: "sam@footprints2africa.org.uk",
                href: "mailto:sam@footprints2africa.org.uk",
              },
              {
                icon: Phone,
                title: "Phone",
                value: "+44 7352 036320",
                href: "tel:+447352036320",
              },
              {
                icon: MapPin,
                title: "Location",
                value: "United Kingdom",
                href: "#",
              },
            ].map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <Card
                  key={idx}
                  className="p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-102 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-red-200 group cursor-pointer"
                >
                  <div className="transition-all duration-300 inline-block mb-4 flex justify-center w-full">
                    <Icon className="w-8 h-8 text-red-600 transition-colors duration-300 group-hover:text-red-700" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-red-600">
                    {contact.title}
                  </h4>
                  <a
                    href={contact.href}
                    className="text-red-600 hover:text-red-700 transition-all duration-300 font-medium group-hover:underline"
                  >
                    {contact.value}
                  </a>
                </Card>
              );
            })}
          </div>

          {/* Trust Section - Premium governance card */}
          <Card className="p-8 bg-gradient-to-r from-gray-900 to-gray-800 border-t-4 border-red-600 hover:shadow-lg transition-all duration-300 transform hover:scale-102 hover:-translate-y-1 group cursor-pointer">
            <h4 className="text-2xl font-bold text-white mb-6 transition-colors duration-300 group-hover:text-red-400">
              Trust & Governance
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              {[
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
              ].map((trust, idx) => (
                <div
                  key={idx}
                  className="transition-all duration-300 group-hover:translate-x-1"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-red-600 transition-transform duration-300" />
                    <p className="font-semibold text-white transition-colors duration-300 group-hover:text-red-400">
                      {trust.title}
                    </p>
                  </div>
                  <p className="text-gray-300 text-sm transition-colors duration-300 group-hover:text-gray-100">
                    {trust.desc}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Footer - Premium footer with refined interactions */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="transition-all duration-300 hover:opacity-80">
              <h4 className="text-lg font-bold mb-4 transition-colors duration-300 hover:text-red-400">
                Footprints 2 Africa
              </h4>
              <p className="text-gray-400 text-sm transition-colors duration-300 hover:text-gray-300">
                Restoring dignity, hope, and human worth to ostomates across
                Africa.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4 transition-colors duration-300 hover:text-red-400">
                Quick Links
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {["Home", "About", "Impact", "Get Involved"].map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="hover:text-red-400 transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-bold mb-4 transition-colors duration-300 hover:text-red-400">
                Legal
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {["Privacy Policy", "Terms of Service", "Charity Registration"].map(
                  (link, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="hover:text-red-400 transition-all duration-300 hover:translate-x-1 inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-lg font-bold mb-4 transition-colors duration-300 hover:text-red-400">
                Follow Us
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {["Facebook", "Twitter", "Instagram"].map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="hover:text-red-400 transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p className="transition-colors duration-300 hover:text-gray-300">
              © 2026 Footprints 2 Africa. UK Registered Charity No. 1214173.
            </p>
            <p className="mt-2 transition-colors duration-300 hover:text-red-400">
              Designed with compassion for those who need it most.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import {
  Heart,
  Users,
  Globe,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
} from "lucide-react";

/**
 * Home Page Component
 * Main landing page for Footprints 2 Africa charity website
 * Displays mission, impact, stories, and call-to-action sections
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar - Fixed at top with smooth styling */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3 group cursor-pointer transition-transform duration-300 hover:scale-105">
            <Image
              src="/logo.png"
              alt="Footprints 2 Africa Logo"
              width={48}
              height={48}
              className="transition-all duration-300 group-hover:scale-110"
            />
            <div>
              <h1 className="text-lg font-bold text-gray-900">
                Footprints 2 Africa
              </h1>
              <p className="text-xs text-gray-600">Restoring Dignity</p>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-red-600 transition-all duration-300 font-medium text-sm relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-red-600 transition-all duration-300 font-medium text-sm relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#impact"
              className="text-gray-700 hover:text-red-600 transition-all duration-300 font-medium text-sm relative group"
            >
              Impact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#get-involved"
              className="text-gray-700 hover:text-red-600 transition-all duration-300 font-medium text-sm relative group"
            >
              Get Involved
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-red-600 transition-all duration-300 font-medium text-sm relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Donate Button */}
          <Button className="bg-red-600 hover:bg-red-700 text-white transition-all duration-300">
            Donate
          </Button>
        </div>
      </nav>

      {/* Hero Section - Main headline and value proposition */}
      <section
        id="home"
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Restoring Dignity, Delivering Hope
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Connecting surplus medical supplies in the UK with people who
            urgently need them across Africa. One precious bag at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg">
              Donate Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="px-8 py-6 text-lg border-gray-300 hover:bg-gray-50 transition-all duration-300"
            >
              How We Help
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section - Key statistics showing charity impact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Metric Card 1: Supplies Delivered */}
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <p className="text-4xl font-bold text-red-600 mb-2">31,752</p>
              <p className="text-gray-600 font-medium">Supplies Delivered</p>
            </Card>

            {/* Metric Card 2: Landfill Saved */}
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <p className="text-4xl font-bold text-red-600 mb-2">921.5kg</p>
              <p className="text-gray-600 font-medium">Saved from Landfill</p>
            </Card>

            {/* Metric Card 3: Countries Served */}
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <p className="text-4xl font-bold text-red-600 mb-2">5</p>
              <p className="text-gray-600 font-medium">Countries Served</p>
            </Card>

            {/* Metric Card 4: Volunteer-Led */}
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <p className="text-4xl font-bold text-red-600 mb-2">100%</p>
              <p className="text-gray-600 font-medium">Volunteer-Led</p>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section - Mission and vision */}
      <section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Purpose & Vision
          </h3>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Purpose Card */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Our Purpose
              </h4>
              <p className="text-gray-600 leading-relaxed">
                We restore dignity, hope, and confidence to ostomates across
                Africa. It's not just about supplies—it's about restoring human
                worth and belonging.
              </p>
            </Card>

            {/* Vision Card */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h4>
              <p className="text-gray-600 leading-relaxed">
                A world where every ostomate has access to essential supplies,
                community support, and the dignity they deserve. Grassroots,
                sustainable, compassionate.
              </p>
            </Card>
          </div>

          {/* Why It Matters */}
          <Card className="p-8 mt-8 bg-red-50 border-l-4 border-red-600 hover:shadow-lg transition-all duration-300">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Why It Matters
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Many ostomates are discharged with only 1-3 bags. When supplies
              run out, they resort to improvised solutions, leading to
              infections and isolation. Your support changes lives.
            </p>
          </Card>
        </div>
      </section>

      {/* Impact Stories Section - Real testimonials */}
      <section
        id="impact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Stories of Change
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Story Card 1 */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-red-600" />
                <h4 className="text-xl font-bold text-gray-900">
                  Dickson's Story
                </h4>
              </div>
              <p className="text-gray-600 italic mb-4">
                "The supplies gave me my life back. I can now work, go to
                school, and live with dignity."
              </p>
              <Button
                variant="link"
                className="text-red-600 hover:text-red-700 p-0"
              >
                Read Full Story →
              </Button>
            </Card>

            {/* Story Card 2 */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-red-600" />
                <h4 className="text-xl font-bold text-gray-900">
                  Asanda's Story
                </h4>
              </div>
              <p className="text-gray-600 italic mb-4">
                "I felt alone until Footprints 2 Africa reached out. Now I know
                I'm not the only one."
              </p>
              <Button
                variant="link"
                className="text-red-600 hover:text-red-700 p-0"
              >
                Read Full Story →
              </Button>
            </Card>

            {/* Story Card 3 */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-red-600" />
                <h4 className="text-xl font-bold text-gray-900">
                  Hospital Partnership
                </h4>
              </div>
              <p className="text-gray-600 italic mb-4">
                "These supplies have transformed our ability to care for
                ostomates with dignity."
              </p>
              <Button
                variant="link"
                className="text-red-600 hover:text-red-700 p-0"
              >
                Read Full Story →
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section - Process explanation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            How It Works
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Collect Donations
              </h4>
              <p className="text-gray-600 text-sm">
                From individuals, NHS trusts, and medical suppliers across the
                UK
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Sort & Pack
              </h4>
              <p className="text-gray-600 text-sm">
                Our volunteer team carefully organizes supplies for distribution
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Ship to Africa
              </h4>
              <p className="text-gray-600 text-sm">
                Deliver to partner hospitals and NGOs across Southern Africa
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Local Distribution
              </h4>
              <p className="text-gray-600 text-sm">
                Supplies reach ostomates with dignity support and care
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section - Call to action */}
      <section
        id="get-involved"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Get Involved
          </h3>
          <p className="text-xl text-gray-600 text-center mb-12">
            Choose how you'd like to make a difference. Every contribution,
            no matter the size, restores dignity and hope.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Donate Card */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">
                  Make a Donation
                </h4>
              </div>
              <p className="text-gray-600 mb-6">
                Direct impact on lives. Your donation directly funds the
                collection, sorting, and delivery of essential medical supplies
                to ostomates across Africa.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white w-full">
                Donate Now
              </Button>
            </Card>

            {/* Volunteer Card */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Volunteer</h4>
              </div>
              <p className="text-gray-600 mb-6">
                Join our passionate team. Help collect, sort, and pack supplies
                for distribution. No experience necessary—just compassion.
              </p>
              <Button
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50 w-full"
              >
                Get Started
              </Button>
            </Card>
          </div>

          {/* Impact Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-red-50 border-l-4 border-red-600">
              <p className="text-sm text-gray-600 mb-2">💡 Impact</p>
              <p className="text-gray-900 font-semibold">
                £20 helps deliver approximately 100 stoma bags
              </p>
            </Card>
            <Card className="p-6 bg-red-50 border-l-4 border-red-600">
              <p className="text-sm text-gray-600 mb-2">✨ Gift Aid</p>
              <p className="text-gray-900 font-semibold">
                UK taxpayers can increase donation value by 25% at no extra cost
              </p>
            </Card>
            <Card className="p-6 bg-red-50 border-l-4 border-red-600">
              <p className="text-sm text-gray-600 mb-2">🔒 Secure</p>
              <p className="text-gray-900 font-semibold">
                100% of donations go directly to supplies and delivery
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Get In Touch
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Email */}
            <Card className="p-8 text-center hover:shadow-lg transition-all duration-300">
              <Mail className="w-8 h-8 text-red-600 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-gray-900 mb-2">Email</h4>
              <a
                href="mailto:sam@footprints2africa.org.uk"
                className="text-red-600 hover:text-red-700 transition-colors"
              >
                sam@footprints2africa.org.uk
              </a>
            </Card>

            {/* Phone */}
            <Card className="p-8 text-center hover:shadow-lg transition-all duration-300">
              <Phone className="w-8 h-8 text-red-600 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-gray-900 mb-2">Phone</h4>
              <a
                href="tel:+447352036320"
                className="text-red-600 hover:text-red-700 transition-colors"
              >
                +44 7352 036320
              </a>
            </Card>

            {/* Location */}
            <Card className="p-8 text-center hover:shadow-lg transition-all duration-300">
              <MapPin className="w-8 h-8 text-red-600 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Location
              </h4>
              <p className="text-gray-600">United Kingdom</p>
            </Card>
          </div>

          {/* Trust Section */}
          <Card className="p-8 bg-white border-t-4 border-red-600">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">
              Trust & Governance
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-red-600" />
                  <p className="font-semibold text-gray-900">
                    Charity Registration
                  </p>
                </div>
                <p className="text-gray-600 text-sm">
                  UK Registered Charity No. 1214173
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-red-600" />
                  <p className="font-semibold text-gray-900">
                    Volunteer Leadership
                  </p>
                </div>
                <p className="text-gray-600 text-sm">
                  100% volunteer-led organization
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-red-600" />
                  <p className="font-semibold text-gray-900">Transparency</p>
                </div>
                <p className="text-gray-600 text-sm">
                  Complete transparency in all operations
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h4 className="text-lg font-bold mb-4">Footprints 2 Africa</h4>
              <p className="text-gray-400 text-sm">
                Restoring dignity, hope, and human worth to ostomates across
                Africa.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#impact" className="hover:text-white transition-colors">
                    Impact
                  </a>
                </li>
                <li>
                  <a
                    href="#get-involved"
                    className="hover:text-white transition-colors"
                  >
                    Get Involved
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Charity Registration
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-lg font-bold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>
              © 2026 Footprints 2 Africa. UK Registered Charity No. 1214173.
            </p>
            <p className="mt-2">
              Designed with compassion for those who need it most.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Sparkles,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer transition-transform duration-300 hover:scale-105">
            {/* Logo Image */}
            <Image
              src="/logo.png"
              alt="Footprints 2 Africa Logo"
              width={48}
              height={48}
              className="transition-all duration-300 group-hover:scale-110"
            />
            <div>
              <h1 className="text-lg font-bold text-gray-900 transition-colors duration-300">Footprints 2 Africa</h1>
              <p className="text-xs text-gray-600 transition-colors duration-300">Restoring Dignity</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-red-600 transition-all duration-300 font-medium text-sm relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-gray-700 hover:text-red-600 transition-all duration-300 font-medium text-sm relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#mission" className="text-gray-700 hover:text-red-600 transition-all duration-300 font-medium text-sm relative group">
              Our Mission
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#impact" className="text-gray-700 hover:text-red-600 transition-all duration-300 font-medium text-sm relative group">
              Impact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#involved" className="text-gray-700 hover:text-red-600 transition-all duration-300 font-medium text-sm relative group">
              Get Involved
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition-all duration-300 font-medium text-sm relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          <Button className="bg-red-600 hover:bg-red-700 text-white transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
            Donate
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in slide-in-from-left-8 duration-700">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-500 hover:text-red-600">
                Restoring Dignity, Delivering Hope
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed transition-all duration-500 hover:text-gray-900">
                Connecting surplus medical supplies in the UK with people who urgently need them across Africa. One precious bag at a time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 group">
                  Donate Now
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 transition-all duration-300 hover:border-red-600 hover:text-red-600 hover:shadow-lg hover:scale-105 active:scale-95">
                  How We Help
                </Button>
              </div>

              {/* Impact Metrics */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "31,752", label: "Supplies Delivered", id: "metric-1" },
                  { value: "921.5kg", label: "Saved from Landfill", id: "metric-2" },
                  { value: "5", label: "Countries Served", id: "metric-3" },
                  { value: "100%", label: "Volunteer-Led", id: "metric-4" },
                ].map((metric) => (
                  <div
                    key={metric.id}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-red-200 hover:scale-105 cursor-pointer group"
                  >
                    <p className="text-3xl font-bold text-red-600 transition-all duration-300 group-hover:text-orange-600">
                      {metric.value}
                    </p>
                    <p className="text-sm text-gray-600 mt-1 transition-all duration-300 group-hover:text-gray-900">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-right-8 duration-700 group hover:shadow-3xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-orange-500 opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <div className="text-center text-white">
                  <Heart className="w-24 h-24 mx-auto mb-4 opacity-80 animate-pulse" />
                  <p className="text-2xl font-bold transition-all duration-300">Restoring Dignity</p>
                  <p className="text-lg opacity-90 mt-2 transition-all duration-300">One precious bag at a time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-white border-y border-gray-200 py-6 transition-all duration-300 hover:bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <div className="flex items-center gap-3 group transition-all duration-300 hover:scale-105">
              <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 transition-all duration-300 group-hover:scale-125" />
              <p className="text-gray-700 font-medium transition-all duration-300 group-hover:text-red-600">UK Registered Charity No. 1214173</p>
            </div>
            <div className="flex items-center gap-3 group transition-all duration-300 hover:scale-105">
              <Users className="w-6 h-6 text-red-600 flex-shrink-0 transition-all duration-300 group-hover:scale-125" />
              <p className="text-gray-700 font-medium transition-all duration-300 group-hover:text-red-600">100% Volunteer-Led</p>
            </div>
            <div className="flex items-center gap-3 group transition-all duration-300 hover:scale-105">
              <Heart className="w-6 h-6 text-red-600 flex-shrink-0 transition-all duration-300 group-hover:scale-125" />
              <p className="text-gray-700 font-medium transition-all duration-300 group-hover:text-red-600">Faith-Based with Deep Compassion</p>
            </div>
          </div>
        </div>
      </section>

      {/* About / Mission Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-in fade-in duration-700">Our Purpose & Vision</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Heart,
                title: "Our Purpose",
                description: "We restore dignity, hope, and confidence to ostomates across Africa. It's not just about supplies—it's about restoring human worth and belonging.",
              },
              {
                icon: Globe,
                title: "Our Vision",
                description: "A world where every ostomate has access to essential supplies, community support, and the dignity they deserve. Grassroots, sustainable, compassionate.",
              },
              {
                icon: Sparkles,
                title: "Why It Matters",
                description: "Many ostomates are discharged with only 1-3 bags. When supplies run out, they resort to improvised solutions, leading to infections and isolation.",
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <item.icon className="w-12 h-12 mb-4 transition-all duration-300 group-hover:scale-125 text-red-600" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3 transition-all duration-300 group-hover:text-red-600">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed transition-all duration-300 group-hover:text-gray-900">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-lg shadow-lg p-8 animate-in fade-in duration-700">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Journey</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { year: "2019", label: "Founded", desc: "Footprints 2 Africa established" },
                { year: "31K+", label: "Supplies", desc: "Delivered to Africa" },
                { year: "5", label: "Countries", desc: "Across Southern Africa" },
                { year: "921kg", label: "Saved", desc: "From landfill" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="text-center group transition-all duration-300 hover:scale-110 cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className={`${idx % 2 === 0 ? "bg-red-100" : "bg-orange-100"} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:scale-125`}>
                    <p className={`text-2xl font-bold ${idx % 2 === 0 ? "text-red-600" : "text-orange-600"}`}>
                      {item.year}
                    </p>
                  </div>
                  <p className="font-semibold text-gray-900 transition-all duration-300 group-hover:text-red-600">
                    {item.label}
                  </p>
                  <p className="text-sm text-gray-600 mt-2 transition-all duration-300 group-hover:text-gray-900">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section id="mission" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-in fade-in duration-700">Stories of Change</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: "story-1",
                title: "Dickson's Story",
                quote: "The supplies gave me my life back. I can now work, go to school, and live with dignity.",
                gradient: "from-red-600 to-orange-500",
              },
              {
                id: "story-2",
                title: "Asanda's Story",
                quote: "I felt alone until Footprints 2 Africa reached out. Now I know I'm not the only one.",
                gradient: "from-orange-500 to-red-600",
              },
              {
                id: "story-3",
                title: "Hospital Partnership",
                quote: "These supplies have transformed our ability to care for ostomates with dignity.",
                gradient: "from-red-600 to-orange-500",
              },
            ].map((story, idx) => (
              <Card
                key={story.id}
                className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4 cursor-pointer group animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`h-48 bg-gradient-to-br ${story.gradient} flex items-center justify-center transition-all duration-500 group-hover:scale-110`}>
                  <Users className="w-24 h-24 text-white opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-125" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 transition-all duration-300 group-hover:text-red-600">
                    {story.title}
                  </h3>
                  <p className="text-gray-700 mb-4 transition-all duration-300 group-hover:text-gray-900 italic">
                    <span aria-hidden="true">&ldquo;</span>
                    {story.quote}
                    <span aria-hidden="true">&rdquo;</span>
                  </p>
                  <Button
                    variant="outline"
                    className="w-full transition-all duration-300 hover:bg-red-600 hover:text-white hover:border-red-600 hover:scale-105 active:scale-95"
                  >
                    Read Full Story
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-in fade-in duration-700">How It Works</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "1", title: "Collect Donations", desc: "From individuals, NHS trusts, and medical suppliers across the UK", color: "red" },
              { num: "2", title: "Sort & Pack", desc: "Our volunteer team carefully organizes supplies for distribution", color: "orange" },
              { num: "3", title: "Ship to Africa", desc: "Deliver to partner hospitals and NGOs across Southern Africa", color: "red" },
              { num: "4", title: "Local Distribution", desc: "Supplies reach ostomates with dignity support and care", color: "orange" },
            ].map((step, idx) => (
              <div
                key={idx}
                className="text-center group transition-all duration-300 hover:scale-110 cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`${step.color === "red" ? "bg-red-600 group-hover:bg-red-700" : "bg-orange-600 group-hover:bg-orange-700"} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold transition-all duration-300 group-hover:shadow-xl group-hover:scale-125`}>
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 transition-all duration-300 group-hover:text-red-600">
                  {step.title}
                </h3>
                <p className="text-gray-700 transition-all duration-300 group-hover:text-gray-900">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved - PREMIUM ENHANCED */}
      <section id="involved" className="py-20 bg-gradient-to-b from-white via-red-50/30 to-white relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/20 rounded-full blur-3xl -z-10 transition-all duration-700 hover:blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl -z-10 transition-all duration-700 hover:blur-2xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-in fade-in duration-700">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 transition-all duration-500 hover:text-red-600">
              Get Involved
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-300 hover:text-gray-900">
              Choose how you'd like to make a difference. Every contribution, no matter the size, restores dignity and hope.
            </p>
          </div>
          
          <Tabs defaultValue="donate-money" className="w-full">
            {/* Premium Tab List with smooth transitions */}
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-gray-100/50 backdrop-blur-sm p-1.5 rounded-xl border border-gray-200/50 transition-all duration-300 hover:bg-gray-100/70 hover:border-gray-300/50">
              <TabsTrigger 
                value="donate-money" 
                className="transition-all duration-300 data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-red-600 rounded-lg"
              >
                💰 Donate Money
              </TabsTrigger>
              <TabsTrigger 
                value="donate-supplies" 
                className="transition-all duration-300 data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-red-600 rounded-lg"
              >
                📦 Donate Supplies
              </TabsTrigger>
              <TabsTrigger 
                value="volunteer" 
                className="transition-all duration-300 data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-red-600 rounded-lg"
              >
                🤝 Volunteer
              </TabsTrigger>
              <TabsTrigger 
                value="fundraise" 
                className="transition-all duration-300 data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-red-600 rounded-lg"
              >
                🎯 Fundraise
              </TabsTrigger>
            </TabsList>

            {/* Donate Money Tab */}
            <TabsContent value="donate-money" className="space-y-6 animate-in fade-in duration-500">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Main Card */}
                <Card className="p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border-0 group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-red-200 group-hover:scale-110">
                      <span className="text-2xl">💰</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 transition-all duration-300 group-hover:text-red-600">
                        Make a Donation
                      </h3>
                      <p className="text-sm text-gray-600 transition-all duration-300 group-hover:text-gray-900">
                        Direct impact on lives
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed transition-all duration-300 group-hover:text-gray-900">
                    Your donation directly funds the collection, sorting, and delivery of essential medical supplies to ostomates across Africa.
                  </p>
                  <Button size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 group/btn">
                    Donate Now
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </Card>

                {/* Impact Cards */}
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200/50 rounded-lg p-6 transition-all duration-300 hover:border-red-300 hover:shadow-lg hover:scale-105 group cursor-pointer">
                    <p className="text-sm font-semibold text-gray-600 mb-2 transition-all duration-300 group-hover:text-red-600">
                      💡 Impact
                    </p>
                    <p className="text-gray-900 font-bold transition-all duration-300 group-hover:text-red-600">
                      £20 helps deliver approximately 100 stoma bags
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200/50 rounded-lg p-6 transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:scale-105 group cursor-pointer">
                    <p className="text-sm font-semibold text-gray-600 mb-2 transition-all duration-300 group-hover:text-blue-600">
                      ✨ Gift Aid
                    </p>
                    <p className="text-gray-900 font-bold transition-all duration-300 group-hover:text-blue-600">
                      UK taxpayers can increase donation value by 25% at no extra cost
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/50 rounded-lg p-6 transition-all duration-300 hover:border-green-300 hover:shadow-lg hover:scale-105 group cursor-pointer">
                    <p className="text-sm font-semibold text-gray-600 mb-2 transition-all duration-300 group-hover:text-green-600">
                      🔒 Secure
                    </p>
                    <p className="text-gray-900 font-bold transition-all duration-300 group-hover:text-green-600">
                      100% of donations go directly to supplies and delivery
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Donate Supplies Tab */}
            <TabsContent value="donate-supplies" className="space-y-6 animate-in fade-in duration-500">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border-0 group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-orange-200 group-hover:scale-110">
                      <span className="text-2xl">📦</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 transition-all duration-300 group-hover:text-red-600">
                        Donate Medical Supplies
                      </h3>
                      <p className="text-sm text-gray-600 transition-all duration-300 group-hover:text-gray-900">
                        From healthcare professionals
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed transition-all duration-300 group-hover:text-gray-900">
                    If you work in healthcare or have access to surplus ostomy supplies, we'd love to hear from you.
                  </p>
                  <Button size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 group/btn">
                    Contact Us to Donate
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </Card>

                <div className="space-y-4">
                  {[
                    { icon: "✓", text: "Unopened, unexpired stoma bags" },
                    { icon: "✓", text: "Adhesive removers and skin care products" },
                    { icon: "✓", text: "Dignity packs and personal care items" },
                    { icon: "✓", text: "Medical equipment and accessories" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200 transition-all duration-300 hover:bg-red-50 hover:border-red-200 hover:shadow-md hover:scale-105 group cursor-pointer"
                    >
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-red-200 group-hover:scale-110">
                        <span className="text-red-600 font-bold transition-all duration-300 group-hover:text-red-700">{item.icon}</span>
                      </div>
                      <p className="text-gray-700 font-medium transition-all duration-300 group-hover:text-gray-900">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Volunteer Tab */}
            <TabsContent value="volunteer" className="space-y-6 animate-in fade-in duration-500">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border-0 group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 transition-all duration-300 group-hover:text-red-600">
                        Become a Volunteer
                      </h3>
                      <p className="text-sm text-gray-600 transition-all duration-300 group-hover:text-gray-900">
                        Join our passionate team
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed transition-all duration-300 group-hover:text-gray-900">
                    Join our 100% volunteer-led team. We need help with sorting, packing, fundraising, and more.
                  </p>
                  <Button size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 group/btn">
                    Volunteer With Us
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </Card>

                <div className="space-y-4">
                  {[
                    { icon: "⏰", text: "Flexible hours to fit your schedule" },
                    { icon: "💪", text: "Make a direct impact on lives" },
                    { icon: "👥", text: "Join a compassionate community" },
                    { icon: "🌟", text: "Develop new skills and experience" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200 transition-all duration-300 hover:bg-green-50 hover:border-green-200 hover:shadow-md hover:scale-105 group cursor-pointer"
                    >
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110">
                        <span className="text-lg">{item.icon}</span>
                      </div>
                      <p className="text-gray-700 font-medium transition-all duration-300 group-hover:text-gray-900">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Fundraise Tab */}
            <TabsContent value="fundraise" className="space-y-6 animate-in fade-in duration-500">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border-0 group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-purple-200 group-hover:scale-110">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 transition-all duration-300 group-hover:text-red-600">
                        Fundraise for Us
                      </h3>
                      <p className="text-sm text-gray-600 transition-all duration-300 group-hover:text-gray-900">
                        Organize your own campaign
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed transition-all duration-300 group-hover:text-gray-900">
                    Organize a fundraising event, challenge, or campaign to support Footprints 2 Africa.
                  </p>
                  <Button size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 group/btn">
                    Start Fundraising
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </Card>

                <div className="space-y-4">
                  {[
                    { icon: "🏃", text: "Run a marathon or sports challenge" },
                    { icon: "🎉", text: "Host a community event" },
                    { icon: "🎂", text: "Create a birthday fundraiser" },
                    { icon: "🌍", text: "Organize a workplace campaign" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200 transition-all duration-300 hover:bg-purple-50 hover:border-purple-200 hover:shadow-md hover:scale-105 group cursor-pointer"
                    >
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-purple-200 group-hover:scale-110">
                        <span className="text-lg">{item.icon}</span>
                      </div>
                      <p className="text-gray-700 font-medium transition-all duration-300 group-hover:text-gray-900">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Impact Map */}
      <section id="impact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-in fade-in duration-700">Where We Work</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 transition-all duration-300 hover:text-red-600">Countries Served</h3>
                <div className="space-y-4">
                  {["South Africa", "Botswana", "Namibia", "Zambia", "Zimbabwe"].map((country, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 group transition-all duration-300 hover:scale-105 hover:translate-x-2 cursor-pointer"
                    >
                      <MapPin className="w-6 h-6 text-red-600 transition-all duration-300 group-hover:scale-125" />
                      <p className="text-gray-700 font-medium transition-all duration-300 group-hover:text-red-600">
                        {country}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="animate-in fade-in slide-in-from-right-8 duration-700">
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 transition-all duration-300 hover:text-red-600">Key Partnerships</h3>
                <div className="space-y-4">
                  {[
                    { name: "Helen Joseph Hospital", location: "South Africa", color: "red" },
                    { name: "Botswana Healthcare Network", location: "Botswana", color: "orange" },
                    { name: "Namibia Medical NGO", location: "Namibia", color: "red" },
                    { name: "Zambia Health Initiative", location: "Zambia", color: "orange" },
                  ].map((partner, idx) => (
                    <div
                      key={idx}
                      className={`border-l-4 ${partner.color === "red" ? "border-red-600" : "border-orange-600"} pl-4 group transition-all duration-300 hover:scale-105 hover:translate-x-2 cursor-pointer`}
                    >
                      <p className="font-semibold text-gray-900 transition-all duration-300 group-hover:text-red-600">
                        {partner.name}
                      </p>
                      <p className="text-sm text-gray-600 transition-all duration-300 group-hover:text-gray-900">
                        {partner.location}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Block */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-in fade-in duration-700">Understanding Ostomies</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-in fade-in slide-in-from-left-8 duration-700">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-all duration-300 hover:text-red-600">What is an Ostomy?</h3>
              <p className="text-gray-700 mb-4 leading-relaxed transition-all duration-300 hover:text-gray-900">
                An ostomy is a surgically created opening (stoma) in the abdomen that allows waste to be diverted into an external pouch. It's a life-saving procedure for people with conditions like colorectal cancer, inflammatory bowel disease, and familial polyposis.
              </p>
              <p className="text-gray-700 leading-relaxed transition-all duration-300 hover:text-gray-900">
                Ostomates require regular supplies to maintain health, hygiene, and dignity. Without access to proper supplies, they face serious health risks and social isolation.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-in fade-in slide-in-from-right-8 duration-700">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-all duration-300 hover:text-red-600">Types of Ostomies</h3>
              <div className="space-y-4">
                {[
                  { name: "Colostomy", desc: "Opening in the colon" },
                  { name: "Ileostomy", desc: "Opening in the small intestine" },
                  { name: "Urostomy", desc: "Opening for urinary diversion" },
                ].map((type, idx) => (
                  <div
                    key={idx}
                    className="group transition-all duration-300 hover:scale-105 hover:translate-x-2 cursor-pointer"
                  >
                    <p className="font-semibold text-gray-900 transition-all duration-300 group-hover:text-red-600">
                      {type.name}
                    </p>
                    <p className="text-sm text-gray-600 transition-all duration-300 group-hover:text-gray-900">
                      {type.desc}
                    </p>
                  </div>
                ))}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Button
                    variant="outline"
                    className="w-full transition-all duration-300 hover:bg-red-600 hover:text-white hover:border-red-600 hover:scale-105 active:scale-95"
                  >
                    Learn More About Ostomy Care
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Governance & Trust */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-in fade-in duration-700">Trust & Governance</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Charity Registration",
                desc: "UK Registered Charity No. 1214173",
                btn: "View Charity Commission Profile",
              },
              {
                icon: Users,
                title: "Volunteer Leadership",
                desc: "100% volunteer-led organization with passionate trustees dedicated to our mission.",
                btn: "Meet Our Team",
              },
              {
                icon: Heart,
                title: "Transparency",
                desc: "We believe in complete transparency about how donations are used and impact delivered.",
                btn: "View Annual Report",
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 group cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <item.icon className="w-12 h-12 text-red-600 mb-4 transition-all duration-300 group-hover:scale-125 group-hover:text-orange-600" />
                <h3 className="text-xl font-bold text-gray-900 mb-3 transition-all duration-300 group-hover:text-red-600">
                  {item.title}
                </h3>
                <p className="text-gray-700 mb-4 transition-all duration-300 group-hover:text-gray-900">
                  {item.desc}
                </p>
                <Button
                  variant="outline"
                  className="w-full text-sm transition-all duration-300 hover:bg-red-600 hover:text-white hover:border-red-600 hover:scale-105 active:scale-95"
                >
                  {item.btn}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-in fade-in duration-700">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-in fade-in slide-in-from-left-8 duration-700">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 transition-all duration-300 hover:text-red-600">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4 group transition-all duration-300 hover:scale-105 hover:translate-x-2 cursor-pointer">
                  <Mail className="w-6 h-6 text-red-600 flex-shrink-0 mt-1 transition-all duration-300 group-hover:scale-125" />
                  <div>
                    <p className="font-semibold text-gray-900 transition-all duration-300 group-hover:text-red-600">Email</p>
                    <a href="mailto:sam@footprints2africa.org.uk" className="text-red-600 hover:text-red-700 transition-all duration-300">
                      sam@footprints2africa.org.uk
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 group transition-all duration-300 hover:scale-105 hover:translate-x-2 cursor-pointer">
                  <Phone className="w-6 h-6 text-red-600 flex-shrink-0 mt-1 transition-all duration-300 group-hover:scale-125" />
                  <div>
                    <p className="font-semibold text-gray-900 transition-all duration-300 group-hover:text-red-600">Phone</p>
                    <a href="tel:+441234567890" className="text-red-600 hover:text-red-700 transition-all duration-300">
                      +44 7352 036320
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 group transition-all duration-300 hover:scale-105 hover:translate-x-2 cursor-pointer">
                  <MapPin className="w-6 h-6 text-red-600 flex-shrink-0 mt-1 transition-all duration-300 group-hover:scale-125" />
                  <div>
                    <p className="font-semibold text-gray-900 transition-all duration-300 group-hover:text-red-600">Location</p>
                    <p className="text-gray-700 transition-all duration-300 group-hover:text-gray-900">United Kingdom</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-right-8 duration-700">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 transition-all duration-300 hover:text-red-600">Send us a Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300 hover:border-red-300"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300 hover:border-red-300"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300 hover:border-red-300"
                ></textarea>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 transition-all duration-300 hover:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="group transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4 cursor-pointer">
                <Image
                  src="/logo.png"
                  alt="Footprints 2 Africa Logo"
                  width={40}
                  height={40}
                  className="transition-all duration-300 group-hover:scale-110"
                />
                <h4 className="font-bold transition-all duration-300 group-hover:text-red-400">Footprints 2 Africa</h4>
              </div>
              <p className="text-gray-400 text-sm transition-all duration-300 group-hover:text-gray-300">
                Restoring dignity, hope, and human worth to ostomates across Africa.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 transition-all duration-300 hover:text-red-400">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#home" className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">About</a></li>
                <li><a href="#impact" className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">Impact</a></li>
                <li><a href="#involved" className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">Get Involved</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 transition-all duration-300 hover:text-red-400">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">Charity Registration</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 transition-all duration-300 hover:text-red-400">Follow Us</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">Instagram</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm transition-all duration-300 hover:text-gray-300">
            <p>&copy; 2026 Footprints 2 Africa. UK Registered Charity No. 1214173.</p>
            <p className="mt-2">Designed with compassion for those who need it most.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

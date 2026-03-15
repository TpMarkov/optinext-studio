import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";
import { ArrowRight, Zap, Rocket, Shield } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-navy mb-4">
              Our Services
            </h2>
            <p className="text-text/70 text-lg max-w-2xl mx-auto">
              Fast, SEO-optimized Next.js websites & MVPs that actually convert.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Starter Card */}
            <div className="p-8 bg-navy rounded-2xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-cyan/10 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-cyan" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-4">
                Starter – Performance Landing Page
              </h3>
              <ul className="text-white/70 mb-6 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-cyan">•</span> Next.js + Tailwind
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan">•</span> 95+ Lighthouse score
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan">•</span> Basic SEO + analytics
                </li>
              </ul>
              <p className="font-bold text-green text-lg mb-2">€1,800 – €2,800</p>
              <p className="text-white/60 text-sm mb-4">7–10 days</p>
              <Link 
                href="/contact" 
                className="inline-block w-full text-center bg-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-green/90 transition-all duration-200"
              >
                Get Started
              </Link>
            </div>
            
            {/* Growth Card */}
            <div className="p-8 bg-navy rounded-2xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-cyan/10 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7 text-cyan" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-4">
                Growth – Business Website
              </h3>
              <ul className="text-white/70 mb-6 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-cyan">•</span> Multi-page structure
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan">•</span> CMS integration
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan">•</span> Advanced SEO
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan">•</span> Performance tuning
                </li>
              </ul>
              <p className="font-bold text-green text-lg mb-2">€3,500 – €6,500</p>
              <p className="text-white/60 text-sm mb-4">2–3 weeks</p>
              <Link 
                href="/contact" 
                className="inline-block w-full text-center bg-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-green/90 transition-all duration-200"
              >
                Get Started
              </Link>
            </div>
            
            {/* Enterprise Card */}
            <div className="p-8 bg-navy rounded-2xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-cyan/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-cyan" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-4">
                Enterprise – SaaS MVP Frontend
              </h3>
              <ul className="text-white/70 mb-6 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-cyan">•</span> Authentication
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan">•</span> Dashboard
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan">•</span> API integrations
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan">•</span> Optimisation
                </li>
              </ul>
              <p className="font-bold text-green text-lg mb-2">€7,500 – €14,000</p>
              <p className="text-white/60 text-sm mb-2">4–6 weeks</p>
              <p className="text-cyan text-sm mb-4">Monthly Performance Retainer €350/month</p>
              <Link 
                href="/contact" 
                className="inline-block w-full text-center bg-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-green/90 transition-all duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-navy mb-4">
              Our Recent Work
            </h2>
            <p className="text-text/70 text-lg max-w-2xl mx-auto">
              Fast, SEO-optimized Next.js websites & MVPs that actually convert.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: Dental SaaS Platform */}
            <div className="bg-navy rounded-2xl p-8 border border-white/10 hover:border-cyan/50 transition-all duration-300">
              <h3 className="font-heading text-2xl font-semibold text-white mb-3">
                Dental SaaS Platform
              </h3>
              <p className="text-white/70 mb-4">Performance optimisation + Stripe integration</p>
              <p className="text-green font-semibold text-lg mb-6">+340% faster load time, 95 Lighthouse score</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-cyan/10 text-cyan rounded-full text-sm font-medium">Next.js</span>
                <span className="px-3 py-1 bg-cyan/10 text-cyan rounded-full text-sm font-medium">TypeScript</span>
                <span className="px-3 py-1 bg-cyan/10 text-cyan rounded-full text-sm font-medium">Tailwind</span>
              </div>
              <button className="border-2 border-cyan text-cyan px-6 py-3 rounded-lg font-semibold hover:bg-cyan hover:text-navy transition-all duration-200">
                View Case Study
              </button>
            </div>

            {/* Card 2: Travel Booking Web App */}
            <div className="bg-navy rounded-2xl p-8 border border-white/10 hover:border-cyan/50 transition-all duration-300">
              <h3 className="font-heading text-2xl font-semibold text-white mb-3">
                Travel Booking Web App
              </h3>
              <p className="text-white/70 mb-4">SEO + SSR implementation</p>
              <p className="text-green font-semibold text-lg mb-6">+280% organic traffic</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-cyan/10 text-cyan rounded-full text-sm font-medium">Next.js</span>
                <span className="px-3 py-1 bg-cyan/10 text-cyan rounded-full text-sm font-medium">TypeScript</span>
                <span className="px-3 py-1 bg-cyan/10 text-cyan rounded-full text-sm font-medium">Tailwind</span>
              </div>
              <button className="border-2 border-cyan text-cyan px-6 py-3 rounded-lg font-semibold hover:bg-cyan hover:text-navy transition-all duration-200">
                View Case Study
              </button>
            </div>

            {/* Card 3: E-commerce MVP */}
            <div className="bg-navy rounded-2xl p-8 border border-white/10 hover:border-cyan/50 transition-all duration-300">
              <h3 className="font-heading text-2xl font-semibold text-white mb-3">
                E-commerce MVP
              </h3>
              <p className="text-white/70 mb-4">Conversion-focused design</p>
              <p className="text-green font-semibold text-lg mb-6">+65% sales increase</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-cyan/10 text-cyan rounded-full text-sm font-medium">Next.js</span>
                <span className="px-3 py-1 bg-cyan/10 text-cyan rounded-full text-sm font-medium">TypeScript</span>
                <span className="px-3 py-1 bg-cyan/10 text-cyan rounded-full text-sm font-medium">Tailwind</span>
              </div>
              <button className="border-2 border-cyan text-cyan px-6 py-3 rounded-lg font-semibold hover:bg-cyan hover:text-navy transition-all duration-200">
                View Case Study
              </button>
            </div>

            {/* Card 4: AI Productivity Tool */}
            <div className="bg-navy rounded-2xl p-8 border border-white/10 hover:border-cyan/50 transition-all duration-300">
              <h3 className="font-heading text-2xl font-semibold text-white mb-3">
                AI Productivity Tool
              </h3>
              <p className="text-white/70 mb-4">Next.js 15 + OpenAI integration</p>
              <p className="text-green font-semibold text-lg mb-6">Full MVP delivered in 4 weeks</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-cyan/10 text-cyan rounded-full text-sm font-medium">Next.js 15</span>
                <span className="px-3 py-1 bg-cyan/10 text-cyan rounded-full text-sm font-medium">TypeScript</span>
                <span className="px-3 py-1 bg-cyan/10 text-cyan rounded-full text-sm font-medium">Tailwind</span>
              </div>
              <button className="border-2 border-cyan text-cyan px-6 py-3 rounded-lg font-semibold hover:bg-cyan hover:text-navy transition-all duration-200">
                View Case Study
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl font-bold text-navy mb-8">
            About OptiNext Studio
          </h2>
          <p className="text-text/80 text-lg leading-relaxed">
            Hi, I'm [Your Name], founder of OptiNext Studio. I'm a React, TypeScript and Next.js specialist based in Bulgaria. With 100% client satisfaction and 95+ Lighthouse scores guaranteed, I help startups and small businesses build websites and MVPs that actually grow their business. Built in Bulgaria with EU quality at competitive rates.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-white mb-4">
              Ready to Build Your Next Project?
            </h2>
            <p className="text-white/70 text-lg">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray/20 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray/20 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray/20 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-green/90 transition-all duration-200 hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Calendly Section */}
            <div className="text-center">
              <h3 className="font-heading text-2xl font-semibold text-white mb-6">
                Book a Free 30-min Strategy Call
              </h3>
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/optinext/30min"
                  style={{ minWidth: "320px", height: "500px" }}
                />
                <script
                  src="https://assets.calendly.com/assets/external/widget.js"
                  async
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

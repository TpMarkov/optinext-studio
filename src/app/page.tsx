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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Get a free audit and consultation for your Next.js project.
          </p>
          <a
            href="mailto:hello@optinext.studio"
            className="inline-flex items-center justify-center space-x-2 bg-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green/90 transition-all duration-200 hover:shadow-xl"
          >
            <span>Get Free Audit</span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

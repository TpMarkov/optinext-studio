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
      <section id="services" className="py-20 bg-white">
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
            <div className="p-8 bg-gray rounded-2xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-cyan/10 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-cyan" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-navy mb-4">
                Starter – Performance Landing Page
              </h3>
              <p className="text-text/70 mb-4">
                High-performance landing page with 95+ Lighthouse score.
              </p>
              <p className="font-bold text-green text-lg mb-4">€1,800 – €2,800</p>
              <Link 
                href="/services" 
                className="inline-flex items-center text-cyan hover:text-cyan/80 font-medium"
              >
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="p-8 bg-gray rounded-2xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-green/10 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7 text-green" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-navy mb-4">
                Growth – Business Website
              </h3>
              <p className="text-text/70 mb-4">
                Multi-page website with CMS integration.
              </p>
              <p className="font-bold text-green text-lg mb-4">€3,500 – €6,500</p>
              <Link 
                href="/services" 
                className="inline-flex items-center text-cyan hover:text-cyan/80 font-medium"
              >
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="p-8 bg-gray rounded-2xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-navy/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-navy" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-navy mb-4">
                Enterprise – SaaS MVP
              </h3>
              <p className="text-text/70 mb-4">
                Full-featured SaaS MVP with auth and dashboards.
              </p>
              <p className="font-bold text-green text-lg mb-4">€7,500 – €14,000</p>
              <Link 
                href="/services" 
                className="inline-flex items-center text-cyan hover:text-cyan/80 font-medium"
              >
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              href="/services" 
              className="inline-flex items-center bg-navy text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy/90 transition-all duration-200 hover:shadow-xl"
            >
              View All Services <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
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

import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray via-white to-cyan/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-cyan/10 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-cyan rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-navy">
                Available for new projects
              </span>
            </div>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-tight">
              Fast, SEO-optimized{" "}
              <span className="gradient-text">Next.js websites</span>{" "}
              & MVPs that actually convert.
            </h1>

            <p className="text-xl text-text/70 max-w-xl">
              Built in Bulgaria. I help startups and small businesses create
              high-performance websites that rank on Google and turn visitors
              into customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 bg-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green/90 transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
              >
                <span>Get Free Audit</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center space-x-2 border-2 border-navy text-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-navy hover:text-white transition-all duration-200"
              >
                <span>See Portfolio</span>
                <ChevronRight size={20} />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-gray/20">
              <p className="text-sm text-text/50 mb-4">
                Trusted by companies worldwide
              </p>
              <div className="flex items-center space-x-8 opacity-50">
                <div className="text-2xl font-bold text-navy">Next.js</div>
                <div className="text-2xl font-bold text-navy">TypeScript</div>
                <div className="text-2xl font-bold text-navy">Tailwind</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square">
              {/* Abstract geometric shapes */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 to-navy/20 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-4 bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green/10 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-green rounded"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray/30 rounded w-32"></div>
                      <div className="h-2 bg-gray/20 rounded w-24"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray/30 rounded w-full"></div>
                    <div className="h-3 bg-gray/30 rounded w-4/5"></div>
                    <div className="h-3 bg-gray/30 rounded w-3/5"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="h-20 bg-cyan/10 rounded-lg"></div>
                    <div className="h-20 bg-navy/10 rounded-lg"></div>
                    <div className="h-20 bg-green/10 rounded-lg"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white px-4 py-2 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-green">⚡</span>
                  <span className="font-semibold text-navy">100 Lighthouse Score</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-cyan">🔍</span>
                  <span className="font-semibold text-navy">SEO Optimized</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

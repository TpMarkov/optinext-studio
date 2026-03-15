import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About - OptiNext Studio",
  description: "Learn about OptiNext Studio - Fast, SEO-optimized Next.js websites & MVPs that actually convert. Built in Bulgaria.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* About Hero */}
      <section className="pt-32 pb-20 bg-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-5xl font-bold text-navy mb-8 text-center">
            About OptiNext Studio
          </h1>
          
          <div className="bg-white rounded-2xl p-10 shadow-lg">
            <p className="text-text/80 text-xl leading-relaxed mb-6">
              Hi, I'm <strong>Martin</strong>, founder of OptiNext Studio. I'm a React, TypeScript and Next.js specialist based in Bulgaria. With 100% client satisfaction and 95+ Lighthouse scores guaranteed, I help startups and small businesses build websites and MVPs that actually grow their business.
            </p>
            
            <p className="text-text/80 text-xl leading-relaxed mb-6">
              Built in Bulgaria with EU quality at competitive rates.
            </p>
            
            <div className="mt-8 pt-8 border-t border-gray/20">
              <h2 className="font-heading text-2xl font-semibold text-navy mb-4">
                Why Choose OptiNext Studio?
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green text-xl">✓</span>
                  <span className="text-text/80">100% Client Satisfaction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green text-xl">✓</span>
                  <span className="text-text/80">95+ Lighthouse Scores Guaranteed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green text-xl">✓</span>
                  <span className="text-text/80">Fast Turnaround Times</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green text-xl">✓</span>
                  <span className="text-text/80">EU Quality at Competitive Rates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

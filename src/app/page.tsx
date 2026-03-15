import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-navy text-center mb-16">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray rounded-2xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-cyan/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-navy mb-4">
                Next.js Development
              </h3>
              <p className="text-text/70">
                High-performance web applications built with the latest Next.js features and best practices.
              </p>
            </div>
            <div className="p-8 bg-gray rounded-2xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-green/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-navy mb-4">
                SEO Optimization
              </h3>
              <p className="text-text/70">
                Technical SEO audits and optimizations to help your website rank higher on Google.
              </p>
            </div>
            <div className="p-8 bg-gray rounded-2xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-navy/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-navy mb-4">
                MVP Development
              </h3>
              <p className="text-text/70">
                Fast-track your startup with a minimum viable product that attracts investors and users.
              </p>
            </div>
          </div>
        </div>
      </section>

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

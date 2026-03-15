import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Zap, Rocket, Shield, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | OptiNext Studio",
  description: "Fast, SEO-optimized Next.js websites & MVPs that actually convert. Built in Bulgaria.",
  openGraph: {
    title: "Services | OptiNext Studio",
    description: "Fast, SEO-optimized Next.js websites & MVPs that actually convert. Built in Bulgaria.",
    url: "https://optinext-studio.vercel.app/services",
    siteName: "OptiNext Studio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "OptiNext Studio Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | OptiNext Studio",
    description: "Fast, SEO-optimized Next.js websites & MVPs that actually convert. Built in Bulgaria.",
    images: ["/logo.png"],
  },
};

const services = [
  {
    name: "Starter",
    subtitle: "Performance Landing Page",
    price: "€1,800 – €2,800",
    timeline: "7–10 days",
    description:
      "Perfect for startups and small businesses needing a fast, high-converting landing page.",
    features: [
      "Next.js + Tailwind CSS",
      "95+ Lighthouse Score",
      "Basic SEO Setup",
      "Analytics Integration",
      "Responsive Design",
      "Contact Form",
    ],
    icon: Zap,
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Growth",
    subtitle: "Business Website",
    price: "€3,500 – €6,500",
    timeline: "2–3 weeks",
    description:
      "Ideal for growing businesses that need a multi-page website with content management.",
    features: [
      "Multi-page Website",
      "Sanity/Contentful CMS",
      "Advanced SEO",
      "Performance Tuning",
      "Blog Integration",
      "Custom Forms",
      "Team/Portfolio Sections",
    ],
    icon: Rocket,
    popular: true,
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    subtitle: "SaaS MVP Frontend",
    price: "€7,500 – €14,000",
    timeline: "4–6 weeks",
    description:
      "Full-featured SaaS MVP with authentication, dashboards, and API integrations.",
    features: [
      "User Authentication",
      "Admin Dashboard",
      "API Integrations",
      "Stripe/Payment Setup",
      "Database Design",
      "Deployment & DevOps",
      "Performance Optimization",
    ],
    icon: Shield,
    popular: false,
    cta: "Get Started",
  },
];

const addOns = [
  {
    name: "Monthly Performance & Maintenance Retainer",
    price: "€350/month",
    features: [
      "Performance Monitoring",
      "Security Updates",
      "Content Updates",
      "Lighthouse Audits",
      "Priority Support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-navy mb-6">
            Our{" "}
            <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-text/70 max-w-2xl mx-auto">
            Fast, SEO-optimized Next.js websites & MVPs that actually convert.
            Built in Bulgaria.
          </p>
        </div>
      </section>

      {/* Services Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                    service.popular
                      ? "border-green transform md:-translate-y-4"
                      : "border-gray/20"
                  }`}
                >
                  {service.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-green text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          service.popular ? "bg-green" : "bg-cyan/10"
                        }`}
                      >
                        <Icon
                          className={`w-6 h-6 ${
                            service.popular ? "text-white" : "text-cyan"
                          }`}
                        />
                      </div>
                      <div>
                        <h3 className="font-heading text-2xl font-bold text-navy">
                          {service.name}
                        </h3>
                        <p className="text-text/60 text-sm">{service.subtitle}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="font-heading text-3xl font-bold text-navy">
                        {service.price}
                      </p>
                      <p className="text-text/60 text-sm mt-1">
                        Timeline: {service.timeline}
                      </p>
                    </div>

                    <p className="text-text/70 mb-6">{service.description}</p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-3 text-text/80"
                        >
                          <Check className="w-5 h-5 text-green flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className={`block w-full py-4 rounded-lg font-semibold text-center transition-all duration-200 ${
                        service.popular
                          ? "bg-green text-white hover:bg-green/90 hover:shadow-lg"
                          : "bg-navy text-white hover:bg-navy/90 hover:shadow-lg"
                      }`}
                    >
                      {service.cta}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-navy mb-4">
              Add-on Services
            </h2>
            <p className="text-text/70">
              Optional extras to keep your site running at peak performance.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {addOns.map((addOn, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 border border-cyan/20"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-navy">
                      {addOn.name}
                    </h3>
                  </div>
                  <div className="text-2xl font-bold text-green">
                    {addOn.price}
                  </div>
                </div>

                <ul className="grid md:grid-cols-2 gap-3">
                  {addOn.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-3 text-text/80"
                    >
                      <Check className="w-5 h-5 text-cyan flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

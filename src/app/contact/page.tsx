import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - OptiNext Studio",
  description: "Get in touch with OptiNext Studio for your Next.js project. Book a free 30-min strategy call.",
  openGraph: {
    title: "Contact - OptiNext Studio",
    description: "Get in touch with OptiNext Studio for your Next.js project. Book a free 30-min strategy call.",
    url: "https://optinext-studio.vercel.app/contact",
    siteName: "OptiNext Studio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Contact OptiNext Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - OptiNext Studio",
    description: "Get in touch with OptiNext Studio for your Next.js project. Book a free 30-min strategy call.",
    images: ["/logo.png"],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Contact Hero */}
      <section className="pt-32 pb-20 bg-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-5xl font-bold text-navy mb-8 text-center">
            Get In Touch
          </h1>
          <p className="text-text/70 text-xl text-center max-w-2xl mx-auto mb-16">
            Have a project in mind? Let's discuss how we can help you build a fast, SEO-optimized Next.js website that converts.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Calendly Section */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-navy mb-6 text-center">
                Book a Free 30-min Strategy Call
              </h2>
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/optinext/30min"
                  style={{ minWidth: "320px", height: "700px" }}
                />
                <Script calendly="https://assets.calendly.com/assets/external/widget.js" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Script({ calendly }: { calendly: string }) {
  return (
    <script
      src={calendly}
      async
    />
  );
}

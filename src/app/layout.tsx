import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OptiNext Studio | Fast, SEO-optimized Next.js Websites & MVPs",
  description: "Fast, SEO-optimized Next.js websites & MVPs that actually convert. Built in Bulgaria.",
  keywords: ["Next.js", "React", "Web Development", "SEO", "MVP", "Bulgaria", "Performance"],
  authors: [{ name: "OptiNext Studio" }],
  openGraph: {
    title: "OptiNext Studio | Fast, SEO-optimized Next.js Websites & MVPs",
    description: "Fast, SEO-optimized Next.js websites & MVPs that actually convert. Built in Bulgaria.",
    type: "website",
    locale: "en_US",
    alternateLocale: "bg_BG",
    siteName: "OptiNext Studio",
    url: "https://optinext-studio.vercel.app",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "OptiNext Studio - Fast, SEO-optimized Next.js Websites & MVPs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OptiNext Studio | Fast, SEO-optimized Next.js Websites & MVPs",
    description: "Fast, SEO-optimized Next.js websites & MVPs that actually convert. Built in Bulgaria.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebDevelopmentAgency",
    "name": "OptiNext Studio",
    "description": "Fast, SEO-optimized Next.js websites & MVPs that actually convert. Built in Bulgaria.",
    "url": "https://optinext-studio.vercel.app",
    "areaServed": "Worldwide",
    "priceRange": "€1,800 - €14,000",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

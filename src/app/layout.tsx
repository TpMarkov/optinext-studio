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
  description: "Next.js Performance & SEO Specialist for Startups and Small Businesses. Built in Bulgaria.",
  keywords: ["Next.js", "React", "Web Development", "SEO", "MVP", "Bulgaria", "Performance"],
  authors: [{ name: "OptiNext Studio" }],
  openGraph: {
    title: "OptiNext Studio | Fast, SEO-optimized Next.js Websites & MVPs",
    description: "Next.js Performance & SEO Specialist for Startups and Small Businesses. Built in Bulgaria.",
    type: "website",
    locale: "en_US",
    alternateLocale: "bg_BG",
    siteName: "OptiNext Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "OptiNext Studio | Fast, SEO-optimized Next.js Websites & MVPs",
    description: "Next.js Performance & SEO Specialist for Startups and Small Businesses. Built in Bulgaria.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

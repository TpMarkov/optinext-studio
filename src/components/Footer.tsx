import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-cyan rounded-lg flex items-center justify-center">
                <span className="text-navy font-bold text-xl">N</span>
              </div>
              <span className="font-heading font-bold text-xl">
                OptiNext<span className="text-cyan">Studio</span>
              </span>
            </Link>
            <p className="text-white/70 max-w-md mb-6">
              Fast, SEO-optimized Next.js websites & MVPs that actually convert.
              Built in Bulgaria.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-cyan hover:text-navy transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-cyan hover:text-navy transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-cyan hover:text-navy transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:hello@optinext.studio"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-cyan hover:text-navy transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-white/70 hover:text-cyan transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-white/70 hover:text-cyan transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white/70 hover:text-cyan transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/70 hover:text-cyan transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              <li className="text-white/70">Next.js Development</li>
              <li className="text-white/70">SEO Optimization</li>
              <li className="text-white/70">Performance Audit</li>
              <li className="text-white/70">MVP Development</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {currentYear} OptiNext Studio. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-2">
            <span className="bg-green/20 text-green px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-2">
              <span>🇧🇬</span>
              <span>Built in Bulgaria</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, you'd handle form submission here
    alert("Thank you for your message! We'll be in touch soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <h2 className="font-heading text-2xl font-semibold text-navy mb-6">
        Send us a Message
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray/20 rounded-lg focus:ring-2 focus:ring-cyan focus:border-transparent outline-none transition-all"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray/20 rounded-lg focus:ring-2 focus:ring-cyan focus:border-transparent outline-none transition-all"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray/20 rounded-lg focus:ring-2 focus:ring-cyan focus:border-transparent outline-none transition-all resize-none"
            placeholder="Tell us about your project..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green text-white px-6 py-4 rounded-lg font-semibold hover:bg-green/90 transition-all duration-200 flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          Send Message
        </button>
      </form>

      {/* Contact Info */}
      <div className="mt-8 pt-8 border-t border-gray/20">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-cyan" />
            <span className="text-text/80">hello@optinext.studio</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-cyan" />
            <span className="text-text/80">Bulgaria, EU</span>
          </div>
        </div>
      </div>
    </div>
  );
}

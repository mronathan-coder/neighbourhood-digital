"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-12 text-center">
        <p className="text-[#00e5ff] text-3xl font-mono font-bold mb-3">// sent.</p>
        <p className="text-[#888888]">Thanks — we&apos;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Your name"
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="bg-transparent border border-white/10 text-white placeholder:text-[#888888] px-5 py-4 focus:outline-none focus:border-[#00e5ff] transition-colors duration-200 text-sm"
      />
      <input
        type="email"
        placeholder="Your email"
        required
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="bg-transparent border border-white/10 text-white placeholder:text-[#888888] px-5 py-4 focus:outline-none focus:border-[#00e5ff] transition-colors duration-200 text-sm"
      />
      <textarea
        placeholder="Tell us about your business..."
        required
        rows={5}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="bg-transparent border border-white/10 text-white placeholder:text-[#888888] px-5 py-4 focus:outline-none focus:border-[#00e5ff] transition-colors duration-200 resize-none text-sm"
      />
      <button
        type="submit"
        className="bg-[#00e5ff] text-[#0d0d0d] font-bold py-4 px-8 hover:bg-white transition-colors duration-200 text-sm tracking-widest uppercase"
      >
        Send message →
      </button>
    </form>
  );
}

"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "I already have a website. Can you just update it instead of building a new one?",
    a: "We build every site fresh on our own modern platform, rather than editing an existing site. This means faster load times, better security, and no dependence on outdated plugins or themes. If you already have content — text, images, pricing — we'll move all of it across for you. You lose nothing except the slow, clunky parts.",
  },
  {
    q: "I'm currently with WordPress / Wix / another platform. Do I need to switch?",
    a: "Yes — we build all our sites on one modern platform so we can offer fast turnaround, flat pricing, and reliable support. Think of it like moving to a nicer building rather than renovating an old one. Your content, branding and domain all move across with you.",
  },
  {
    q: "Who hosts my website once it's built?",
    a: "We host it for you as part of your monthly plan. This is included in your Hosting & Care fee (R250/month) or Retainer (R750/month). It means your site stays fast, secure, and online with zero effort from you.",
  },
  {
    q: "Can I host my website myself, or keep it with my current hosting company (e.g. Afrihost, Domains.co.za)?",
    a: "Our websites are built on modern technology that needs a specific type of hosting most traditional hosting companies don't support. For this reason, hosting is included as part of what we do — it keeps your site fast and reliable, and means you never have to think about it. You're always welcome to keep your domain name registered wherever you like — domain and hosting are two separate things, and we'll help you connect them.",
  },
  {
    q: "How secure is my website? What if it gets hacked?",
    a: "Security is one of the biggest reasons we build and host the way we do. Our platform runs on modern infrastructure with automatic security patches, encrypted connections (SSL), and built-in protection against common attacks — all included as standard, with no extra setup or plugins needed. This is very different from older platforms like WordPress, where outdated themes and plugins are one of the most common ways small business sites get hacked. We keep everything updated behind the scenes so you don't have to think about it. If anything ever does go wrong, it's covered under your monthly plan — we'll sort it, fast.",
  },
  {
    q: "What can I edit myself once my site is live?",
    a: "You can update content that's designed to change often — things like prices, products, services, team members, and similar repeatable information — through a simple Google Sheet that updates your site automatically. Design changes, new pages, or new features fall under our retainer or project work, since that's where our ongoing support and craft come in.",
  },
  {
    q: "What's included in the Retainer?",
    a: "Ongoing changes, content updates beyond what your Google Sheet covers, small design tweaks, troubleshooting, and priority support — so your site keeps working hard for you long after launch.",
  },
  {
    q: "Do I own my website?",
    a: "Yes. Your content and brand are always yours. While we manage hosting for reliability and performance, we're upfront with you from day one about what's included so there are never any surprises.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-16 px-6">
      <span className="absolute top-3 left-3 text-[#00e5ff] opacity-25 font-mono text-base leading-none select-none pointer-events-none">+</span>
      <span className="absolute top-3 right-3 text-[#00e5ff] opacity-25 font-mono text-base leading-none select-none pointer-events-none">+</span>
      <span className="absolute bottom-3 left-3 text-[#00e5ff] opacity-25 font-mono text-base leading-none select-none pointer-events-none">+</span>
      <span className="absolute bottom-3 right-3 text-[#00e5ff] opacity-25 font-mono text-base leading-none select-none pointer-events-none">+</span>

      <div className="max-w-7xl mx-auto">
        <div className="reveal mb-16">
          <p className="font-mono text-[#00e5ff] text-base tracking-[0.3em] uppercase mb-4">
            // frequently asked questions
          </p>
          <h2 className="font-mono font-bold text-4xl sm:text-5xl text-[#e8f4fd] tracking-tight">
            <span className="text-[#00e5ff]">// </span>QUESTIONS, ANSWERED.
          </h2>
        </div>

        <div className="border border-[#00e5ff]/10">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} border-b border-[#00e5ff]/10 last:border-b-0`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={`w-full text-left py-5 px-6 sm:px-8 flex items-start justify-between gap-6 group transition-colors duration-200 ${openIndex === i ? "bg-[#ff1133]/8" : "hover:bg-[#ff1133]/8 active:bg-[#ff1133]/8"}`}
                aria-expanded={openIndex === i}
              >
                <span className={`font-mono font-bold text-sm sm:text-base tracking-wide leading-snug transition-colors duration-200 ${openIndex === i ? "text-[#ff1133]" : "text-[#e8f4fd] group-hover:text-[#ff1133] group-active:text-[#ff1133]"}`}>
                  {faq.q}
                </span>
                <span
                  className="text-[#00e5ff] font-mono text-xl shrink-0 leading-none mt-0.5 transition-transform duration-300 select-none"
                  style={{ transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)" }}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: openIndex === i ? "600px" : "0px" }}
              >
                <p className="text-[#a8c4d8] text-sm sm:text-base leading-relaxed px-6 sm:px-8 pb-6 pt-1">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#00e5ff]/10" />
    </section>
  );
}

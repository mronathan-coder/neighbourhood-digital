import Navbar from "@/app/components/Navbar";
import ScrollRevealInit from "@/app/components/ScrollRevealInit";
import FAQ from "@/app/components/FAQ";

/* ─── Pixel Invader SVG ─────────────────────────────────────────── */

function PixelInvader({ className }: { className?: string }) {
  return (
    <svg
      width="32"
      height="28"
      viewBox="0 0 32 28"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="8" y="0" width="4" height="4" />
      <rect x="20" y="0" width="4" height="4" />
      <rect x="4" y="4" width="4" height="4" />
      <rect x="8" y="4" width="4" height="4" />
      <rect x="12" y="4" width="4" height="4" />
      <rect x="16" y="4" width="4" height="4" />
      <rect x="20" y="4" width="4" height="4" />
      <rect x="24" y="4" width="4" height="4" />
      <rect x="0" y="8" width="4" height="4" />
      <rect x="4" y="8" width="4" height="4" />
      <rect x="8" y="8" width="4" height="4" />
      <rect x="12" y="8" width="4" height="4" />
      <rect x="16" y="8" width="4" height="4" />
      <rect x="20" y="8" width="4" height="4" />
      <rect x="24" y="8" width="4" height="4" />
      <rect x="28" y="8" width="4" height="4" />
      <rect x="0" y="12" width="4" height="4" />
      <rect x="4" y="12" width="4" height="4" />
      <rect x="12" y="12" width="4" height="4" />
      <rect x="16" y="12" width="4" height="4" />
      <rect x="24" y="12" width="4" height="4" />
      <rect x="28" y="12" width="4" height="4" />
      <rect x="0" y="16" width="4" height="4" />
      <rect x="4" y="16" width="4" height="4" />
      <rect x="8" y="16" width="4" height="4" />
      <rect x="12" y="16" width="4" height="4" />
      <rect x="16" y="16" width="4" height="4" />
      <rect x="20" y="16" width="4" height="4" />
      <rect x="24" y="16" width="4" height="4" />
      <rect x="28" y="16" width="4" height="4" />
      <rect x="8" y="20" width="4" height="4" />
      <rect x="20" y="20" width="4" height="4" />
      <rect x="4" y="24" width="4" height="4" />
      <rect x="24" y="24" width="4" height="4" />
    </svg>
  );
}

/* ─── Johannesburg pixel skyline ────────────────────────────────── */

function JohannesburgSkyline() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 536 132"
      preserveAspectRatio="xMidYMax meet"
      className="w-full opacity-50"
      aria-hidden="true"
    >
      <path
        d="M 0 132 L 3 132 L 3 108 L 26 108 L 26 107 L 27 107 L 27 106 L 28 106 L 28 86 L 31 86 L 31 85 L 42 85 L 42 104 L 45 104 L 45 105 L 51 105 L 51 104 L 53 104 L 53 105 L 59 105 L 59 104 L 60 104 L 60 102 L 62 102 L 62 103 L 63 103 L 63 104 L 65 104 L 65 105 L 71 105 L 71 104 L 74 104 L 74 99 L 76 99 L 76 98 L 77 98 L 77 96 L 79 96 L 79 99 L 83 99 L 83 97 L 84 97 L 84 96 L 87 96 L 87 95 L 91 95 L 91 96 L 93 96 L 93 105 L 96 105 L 96 103 L 98 103 L 98 100 L 101 100 L 101 101 L 102 101 L 102 103 L 104 103 L 104 95 L 108 95 L 108 87 L 110 87 L 110 86 L 114 86 L 114 87 L 115 87 L 115 88 L 117 88 L 117 92 L 121 92 L 121 95 L 122 95 L 122 97 L 127 97 L 127 100 L 133 100 L 133 80 L 143 80 L 143 96 L 153 96 L 153 94 L 154 94 L 154 93 L 155 93 L 155 91 L 161 91 L 161 93 L 163 93 L 163 100 L 164 100 L 164 80 L 166 80 L 166 100 L 169 100 L 169 94 L 181 94 L 181 97 L 185 97 L 185 95 L 190 95 L 190 96 L 193 96 L 193 97 L 195 97 L 195 98 L 201 98 L 201 99 L 205 99 L 205 98 L 208 98 L 208 93 L 212 93 L 212 94 L 215 94 L 215 95 L 217 95 L 217 98 L 223 98 L 223 99 L 226 99 L 226 93 L 227 93 L 227 94 L 229 94 L 229 93 L 230 93 L 230 90 L 233 90 L 233 89 L 235 89 L 235 88 L 239 88 L 239 89 L 240 89 L 240 90 L 246 90 L 246 91 L 248 91 L 248 90 L 250 90 L 250 91 L 254 91 L 254 92 L 258 92 L 258 91 L 259 91 L 259 84 L 260 84 L 260 83 L 261 83 L 261 81 L 264 81 L 264 84 L 265 84 L 265 87 L 267 87 L 267 88 L 272 88 L 272 95 L 273 95 L 273 94 L 274 94 L 274 95 L 277 95 L 277 92 L 279 92 L 279 93 L 281 93 L 281 86 L 283 86 L 283 85 L 285 85 L 285 84 L 288 84 L 288 85 L 296 85 L 296 86 L 297 86 L 297 91 L 301 91 L 301 89 L 302 89 L 302 87 L 303 87 L 303 86 L 305 86 L 305 85 L 309 85 L 309 77 L 311 77 L 311 75 L 317 75 L 317 76 L 318 76 L 318 77 L 319 77 L 319 76 L 320 76 L 320 75 L 322 75 L 322 76 L 323 76 L 323 77 L 327 77 L 327 42 L 337 42 L 337 41 L 338 41 L 338 42 L 347 42 L 347 82 L 351 82 L 351 81 L 353 81 L 353 80 L 354 80 L 354 81 L 355 81 L 355 82 L 357 82 L 357 81 L 359 81 L 359 82 L 362 82 L 362 83 L 369 83 L 369 90 L 370 90 L 370 92 L 371 92 L 371 93 L 372 93 L 372 87 L 375 87 L 375 86 L 376 86 L 376 85 L 378 85 L 378 86 L 380 86 L 380 87 L 381 87 L 381 84 L 384 84 L 384 82 L 387 82 L 387 84 L 390 84 L 390 89 L 393 89 L 393 86 L 395 86 L 395 85 L 397 85 L 397 86 L 400 86 L 400 87 L 401 87 L 401 92 L 402 92 L 402 88 L 410 88 L 410 90 L 412 90 L 412 87 L 413 87 L 413 86 L 414 86 L 414 85 L 417 85 L 417 86 L 422 86 L 422 35 L 424 35 L 424 32 L 426 32 L 426 18 L 427 18 L 427 32 L 428 32 L 428 35 L 431 35 L 431 81 L 435 81 L 435 82 L 439 82 L 439 81 L 441 81 L 441 80 L 447 80 L 447 79 L 448 79 L 448 78 L 449 78 L 449 79 L 455 79 L 455 80 L 461 80 L 461 88 L 467 88 L 467 84 L 468 84 L 468 83 L 469 83 L 469 82 L 473 82 L 473 80 L 482 80 L 482 81 L 489 81 L 489 82 L 491 82 L 491 84 L 496 84 L 496 87 L 497 87 L 497 88 L 499 88 L 499 86 L 505 86 L 505 84 L 509 84 L 509 82 L 510 82 L 510 81 L 511 81 L 511 80 L 516 80 L 516 81 L 517 81 L 517 80 L 519 80 L 519 81 L 522 81 L 522 82 L 523 82 L 523 88 L 526 88 L 526 132 L 535 132"
        fill="none"
        stroke="#00E5FF"
        strokeWidth="1"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ─── Section corner crosshairs ─────────────────────────────────── */

function Crosshairs() {
  return (
    <>
      <span className="absolute top-3 left-3 text-[#00e5ff] opacity-25 font-mono text-base leading-none select-none pointer-events-none">+</span>
      <span className="absolute top-3 right-3 text-[#00e5ff] opacity-25 font-mono text-base leading-none select-none pointer-events-none">+</span>
      <span className="absolute bottom-3 left-3 text-[#00e5ff] opacity-25 font-mono text-base leading-none select-none pointer-events-none">+</span>
      <span className="absolute bottom-3 right-3 text-[#00e5ff] opacity-25 font-mono text-base leading-none select-none pointer-events-none">+</span>
    </>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      <ScrollRevealInit />
      <Navbar />

      {/* Fixed viewport corner crosshairs */}
      <div className="fixed inset-0 pointer-events-none z-40">
        <span className="absolute top-4 left-4 text-[#00e5ff] opacity-20 font-mono text-lg leading-none">+</span>
        <span className="absolute top-4 right-4 text-[#00e5ff] opacity-20 font-mono text-lg leading-none">+</span>
        <span className="absolute bottom-4 left-4 text-[#00e5ff] opacity-20 font-mono text-lg leading-none">+</span>
        <span className="absolute bottom-4 right-4 text-[#00e5ff] opacity-20 font-mono text-lg leading-none">+</span>
      </div>

      <main>
        {/* ══════════════════ HERO ══════════════════ */}
        <section className="relative min-h-[75vh] sm:min-h-screen flex items-center overflow-hidden pt-20">
          <Crosshairs />

          {/* Floating pixel invaders */}
          <PixelInvader className="hidden sm:block absolute top-[15%] left-[5%] text-[#00e5ff] opacity-30 scale-150 animate-float-a animation-delay-500" />
          <PixelInvader className="hidden sm:block absolute top-[22%] right-[12%] text-[#00e5ff] opacity-20 scale-90 animate-float-b animation-delay-1500" />
          <PixelInvader className="absolute bottom-[20%] right-[5%] text-[#00e5ff] opacity-20 scale-125 animate-float-a animation-delay-1000" />

          {/* Mobile-only animated invader — cyan/red pulse, aligned with headline on the right */}
          <div className="sm:hidden absolute top-[35%] right-6 pointer-events-none"
            style={{ animation: "invader-color-fade 12s linear infinite both, invader-breathe 3s ease-in-out infinite" }}>
            <PixelInvader className="w-14 h-auto" />
          </div>

          <div className="max-w-7xl mx-auto px-6 w-full pt-2 pb-20 relative z-10">
            <div className="reveal">
              <h1 className="font-mono font-bold text-3xl sm:text-5xl lg:text-6xl text-[#e8f4fd] leading-none tracking-tight mb-8 sm:whitespace-nowrap">
                <span className="text-[#00e5ff]">// </span>YOUR WEBSITE, SORTED.
                <span className="cursor-blink text-[#00e5ff] ml-1">_</span>
              </h1>

              <p className="font-mono text-lg sm:text-xl mb-3 leading-relaxed">
                <span className="text-[#00e5ff]">// </span><span className="text-[#4a6080]">flat-rate websites for south african small businesses.</span>
              </p>
              <p className="font-mono text-lg sm:text-xl mb-8 leading-relaxed">
                <span className="text-[#00e5ff]">// </span><span className="text-[#4a6080]">starting from r3,500. no hidden fees.</span>
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["NO LOCK-IN CONTRACTS", "FILES ARE 100% YOURS", "LIVE IN 1–2 WEEKS"].map((chip) => (
                  <span key={chip} className="font-mono text-sm tracking-widest border border-[#00e5ff]/30 text-[#00e5ff]/60 px-4 py-2">
                    {chip}
                  </span>
                ))}
              </div>
              <p className="font-mono text-lg sm:text-xl leading-relaxed max-w-2xl">
                <span className="text-[#00e5ff]">// </span><span className="text-[#4a6080]">in tough economic times, your business deserves a professional, fantastic website - at a price that actually makes sense.</span>
              </p>
            </div>
          </div>

          {/* Hero invader — desktop only */}
          <div className="hidden sm:block absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none">
            <div style={{ animation: "invader-color-fade 12s linear infinite both, invader-breathe 3s ease-in-out infinite" }}>
              <PixelInvader className="w-[133px] lg:w-[196px] h-auto" />
            </div>
          </div>

          {/* Johannesburg pixel skyline */}
          <div className="absolute bottom-px left-0 right-0 pointer-events-none z-0 overflow-hidden">
            <JohannesburgSkyline />
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-[#00e5ff]/10" />
        </section>

        {/* ══════════════════ WHY ND ══════════════════ */}
        <section id="services" className="relative py-16 px-6">
          <Crosshairs />
          <PixelInvader className="hidden sm:block absolute top-[10%] right-[4%] text-[#00e5ff] opacity-15 scale-75 animate-float-b animation-delay-1000 pointer-events-none" />
          <PixelInvader className="hidden sm:block absolute bottom-[12%] left-[3%] text-[#00e5ff] opacity-10 scale-100 animate-float-a animation-delay-2500 pointer-events-none" />
          <div className="max-w-7xl mx-auto">
            <div className="reveal mb-16">
              <p className="font-mono text-[#00e5ff] text-base tracking-[0.3em] uppercase mb-4">
                // why neighbourhood digital
              </p>
              <h2 className="font-mono font-bold text-4xl sm:text-5xl text-[#e8f4fd] tracking-tight">
                NO AGENCY NONSENSE.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#00e5ff]/10">
              {[
                {
                  num: "01",
                  title: "FAST",
                  body: "Most sites live in 1–2 weeks. Not 3 months and 12 status calls.",
                },
                {
                  num: "02",
                  title: "YOUR FILES,\nYOUR CALL",
                  body: "Host with us or take the files. No platform lock-in. Ever.",
                },
                {
                  num: "03",
                  title: "FLAT\nPRICING",
                  body: "You know the exact cost before we start. No surprises.",
                },
                {
                  num: "04",
                  title: "UPDATE IT\nYOURSELF",
                  body: "Change a price in a spreadsheet. Your site reflects it in seconds. No developer needed.",
                },
              ].map((card, i) => (
                <div
                  key={card.num}
                  className={`reveal reveal-delay-${i + 1} group p-8 border-[#00e5ff]/10 transition-colors duration-300 hover:bg-[#ff1133]/8 cursor-default ${i < 3 ? "border-r" : ""}`}
                >
                  <div className="font-mono text-[#00e5ff] text-4xl font-bold mb-5 opacity-50">
                    {card.num}
                  </div>
                  <h3 className="font-mono font-bold text-[#e8f4fd] group-hover:text-[#ff1133] text-xl tracking-widest mb-4 whitespace-pre-line transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-[#4a6080] text-base leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>

            <div className="reveal mt-16 pt-16 border-t border-[#00e5ff]/10 max-w-2xl">
              <p className="font-mono text-[#00e5ff] text-base tracking-[0.3em] uppercase mb-4">
                // who we are
              </p>
              <h3 className="font-mono font-bold text-2xl sm:text-3xl text-[#e8f4fd] tracking-tight mb-8">
                WE&apos;RE LOCAL. WE&apos;RE SMALL. SAME AS YOU.
              </h3>
              <p className="text-[#4a6080] text-base sm:text-lg leading-relaxed mb-6">
                Neighbourhood Digital is a small web studio based in Johannesburg. We work with local businesses who need a professional website without the agency price tag or the agency runaround.
              </p>
              <p className="font-mono text-[#6b7fa0] text-sm tracking-wide">
                No account managers. No offshore handoffs. Just us.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-[#00e5ff]/10" />
        </section>

        {/* ══════════════════ HOW IT WORKS ══════════════════ */}
        <section id="how-it-works" className="relative py-16 px-6">
          <Crosshairs />
          <PixelInvader className="hidden sm:block absolute top-[8%] left-[6%] text-[#00e5ff] opacity-15 scale-75 animate-float-a animation-delay-2000 pointer-events-none" />
          <PixelInvader className="hidden sm:block absolute bottom-[10%] right-[5%] text-[#00e5ff] opacity-10 scale-125 animate-float-b animation-delay-500 pointer-events-none" />
          <div className="max-w-7xl mx-auto">
            <div className="reveal mb-16">
              <p className="font-mono text-[#00e5ff] text-base tracking-[0.3em] uppercase mb-4">
                // the process
              </p>
              <h2 className="font-mono font-bold text-4xl sm:text-5xl text-[#e8f4fd] tracking-tight">
                HOW IT WORKS.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#00e5ff]/10">
              {[
                {
                  num: "01",
                  title: "WE TALK.",
                  body: "You tell us what you need. No brief, no jargon, no decks. Just a conversation.",
                },
                {
                  num: "02",
                  title: "WE BUILD.",
                  body: "Clean, fast, on-brand. We handle every technical detail.",
                },
                {
                  num: "03",
                  title: "WE LAUNCH.",
                  body: "Live in 1–2 weeks. Domain, hosting, go-live — all sorted.",
                },
                {
                  num: "04",
                  title: "WE HAND IT OVER.",
                  body: "Update your own content via Google Sheets. No login needed.",
                },
              ].map((step, i) => (
                <div
                  key={step.num}
                  className={`reveal reveal-delay-${i + 1} group p-8 border-[#00e5ff]/10 transition-colors duration-300 hover:bg-[#ff1133]/8 cursor-default ${i < 3 ? "border-r" : ""}`}
                >
                  <div className="font-mono text-[#00e5ff] text-4xl font-bold mb-6 opacity-40 leading-none">
                    {step.num}
                  </div>
                  <h3 className="font-mono font-bold text-[#e8f4fd] group-hover:text-[#ff1133] text-xl tracking-widest mb-4 whitespace-pre-line transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[#4a6080] text-base leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-[#00e5ff]/10" />
        </section>

        {/* ══════════════════ PRICING ══════════════════ */}
        <section id="pricing" className="relative py-16 px-6">
          <Crosshairs />
          <div className="max-w-7xl mx-auto">
            <div className="reveal mb-4">
              <p className="font-mono text-[#00e5ff] text-base tracking-[0.3em] uppercase mb-4">
                // pricing
              </p>
              <h2 className="font-mono font-bold text-4xl sm:text-5xl text-[#e8f4fd] tracking-tight">
                KNOW THE COST UPFRONT.
              </h2>
            </div>
            <p className="reveal font-mono text-[#4a6080] text-sm tracking-wide mb-14">
              // You know the price before we start. No surprises.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* One-Off */}
              <div className="reveal reveal-delay-1 group border-2 border-[#00e5ff]/15 p-8 flex flex-col hover:border-[#00e5ff] hover:bg-[#ff1133]/10 transition-all duration-300">
                <p className="font-mono text-[#4a6080] text-xs tracking-[0.25em] uppercase mb-3 group-hover:text-white transition-colors duration-300">ONE-OFF WEBSITE</p>
                <div className="mb-1">
                  <span className="font-mono text-[#4a6080] text-xs tracking-widest uppercase group-hover:text-white transition-colors duration-300">from</span>
                  <p className="font-mono font-bold text-4xl text-[#e8f4fd]">
                    <span className="text-[#00e5ff] group-hover:text-[#ff1133] transition-colors duration-300">R3,500</span>
                    <span className="text-[#4a6080] text-lg group-hover:text-white transition-colors duration-300">/website</span>
                  </p>
                </div>
                <p className="font-mono text-[#4a6080] text-xs tracking-wide mb-0 group-hover:text-white transition-colors duration-300">Most sites land right here. We confirm before we start.</p>
                <div className="h-px bg-[#00e5ff]/10 my-6" />
                <ul className="flex flex-col gap-3 text-sm text-[#4a6080] group-hover:text-white flex-1 mb-8 transition-colors duration-300">
                  {[
                    "Custom design, built from scratch",
                    "Mobile responsive",
                    "Live in 1–2 weeks",
                    "Google Sheets CMS (optional)",
                    "Files are yours to keep",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="font-mono text-[#00e5ff] shrink-0 mt-0.5 group-hover:text-white transition-colors duration-300">→</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/27613829267"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center border border-[#00e5ff]/30 text-[#00e5ff] font-mono font-bold text-xs tracking-widest py-3 px-4 hover:bg-[#00e5ff] hover:text-[#020c18] transition-all duration-200"
                >
                  [ WHATSAPP US → ]
                </a>
              </div>

              {/* Hosting & Care */}
              <div className="reveal reveal-delay-2 group border-2 border-[#00e5ff]/15 p-8 flex flex-col hover:border-[#00e5ff] hover:bg-[#ff1133]/10 transition-all duration-300">
                <p className="font-mono text-[#4a6080] text-xs tracking-[0.25em] uppercase mb-3 group-hover:text-white transition-colors duration-300">HOSTING &amp; CARE</p>
                <p className="font-mono font-bold text-4xl text-[#e8f4fd] mb-1">
                  <span className="text-[#00e5ff] group-hover:text-[#ff1133] transition-colors duration-300">R250</span>
                  <span className="text-[#4a6080] text-lg group-hover:text-white transition-colors duration-300">/month</span>
                </p>
                <div className="h-px bg-[#00e5ff]/10 my-6" />
                <ul className="flex flex-col gap-3 text-sm text-[#4a6080] group-hover:text-white flex-1 mb-8 transition-colors duration-300">
                  {[
                    "Your site stays live — we watch it so you don't have to",
                    "Security kept up to date, automatically",
                    "Something breaks? We fix it, same day",
                    "SSL included (the padlock in the browser bar)",
                    "Monthly speed checks — we keep things fast",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="font-mono text-[#00e5ff] shrink-0 mt-0.5 group-hover:text-white transition-colors duration-300">→</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/27613829267"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center border border-[#00e5ff]/30 text-[#00e5ff] font-mono font-bold text-xs tracking-widest py-3 px-4 hover:bg-[#00e5ff] hover:text-[#020c18] transition-all duration-200"
                >
                  [ WHATSAPP US → ]
                </a>
              </div>

              {/* Retainer */}
              <div className="reveal reveal-delay-3 group border-2 border-[#00e5ff]/15 p-8 flex flex-col hover:border-[#00e5ff] hover:bg-[#ff1133]/10 transition-all duration-300">
                <p className="font-mono text-[#4a6080] text-xs tracking-[0.25em] uppercase mb-3 group-hover:text-white transition-colors duration-300">RETAINER</p>
                <div className="mb-1">
                  <span className="font-mono text-[#4a6080] text-xs tracking-widest uppercase group-hover:text-white transition-colors duration-300">from</span>
                  <p className="font-mono font-bold text-4xl text-[#e8f4fd]">
                    <span className="text-[#00e5ff] group-hover:text-[#ff1133] transition-colors duration-300">R750</span>
                    <span className="text-[#4a6080] text-lg group-hover:text-white transition-colors duration-300">/month</span>
                  </p>
                </div>
                <div className="h-px bg-[#00e5ff]/10 my-6" />
                <ul className="flex flex-col gap-3 text-sm text-[#4a6080] group-hover:text-white flex-1 mb-8 transition-colors duration-300">
                  {[
                    "Everything in Hosting & Care",
                    "Ongoing content updates",
                    "Design tweaks & changes",
                    "Priority support",
                    "Proactive monthly review — we flag issues before you notice them",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="font-mono text-[#00e5ff] shrink-0 mt-0.5 group-hover:text-white transition-colors duration-300">→</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/27613829267"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center border border-[#00e5ff]/30 text-[#00e5ff] font-mono font-bold text-xs tracking-widest py-3 px-4 hover:bg-[#00e5ff] hover:text-[#020c18] transition-all duration-200"
                >
                  [ WHATSAPP US → ]
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-[#00e5ff]/10" />
        </section>

        {/* ══════════════════ WHAT YOU ACTUALLY GET ══════════════════ */}
        <section id="whats-included" className="relative py-16 px-6">
          <Crosshairs />
          <PixelInvader className="hidden sm:block absolute top-[6%] right-[7%] text-[#00e5ff] opacity-15 scale-75 animate-float-b animation-delay-1500 pointer-events-none" />
          <PixelInvader className="hidden sm:block absolute bottom-[8%] left-[5%] text-[#00e5ff] opacity-10 scale-100 animate-float-a animation-delay-1000 pointer-events-none" />
          <div className="max-w-7xl mx-auto">
            <div className="reveal mb-16">
              <p className="font-mono text-[#00e5ff] text-base tracking-[0.3em] uppercase mb-4">
                // what&apos;s included
              </p>
              <h2 className="font-mono font-bold text-4xl sm:text-5xl text-[#e8f4fd] tracking-tight">
                WHAT YOU ACTUALLY GET.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#00e5ff]/10">
              {[
                {
                  num: "01",
                  title: "UP TO 5 PAGES",
                  body: "Home, About, Services, Gallery, Contact — or whatever makes sense for your business. Need more? We'll talk.",
                },
                {
                  num: "02",
                  title: "2 ROUNDS OF\nREVISIONS",
                  body: "You'll see a draft. Tell us what to change. We refine it. Simple.",
                },
                {
                  num: "03",
                  title: "MOBILE-READY",
                  body: "Built to look right on any screen — not an afterthought.",
                },
                {
                  num: "04",
                  title: "YOUR DOMAIN,\nSORTED",
                  body: "We'll help register it or connect one you already own. It's yours. Not ours.",
                },
                {
                  num: "05",
                  title: "HANDOVER CALL",
                  body: "We walk you through the site before it goes live. You'll know how everything works before we're done.",
                },
                {
                  num: "06",
                  title: "BOOKING PLATFORM\nCONNECTED",
                  body: "Already using Fresha, Dine Plan, Calendly or similar? We'll embed your booking system directly into your site.",
                },
              ].map((item, i) => (
                <div
                  key={item.num}
                  className={`reveal reveal-delay-${i + 1} group p-8 border-[#00e5ff]/10 transition-colors duration-300 hover:bg-[#ff1133]/8 cursor-default ${(i + 1) % 3 !== 0 ? "border-r" : ""} ${i < 3 ? "border-b" : ""}`}
                >
                  <div className="font-mono text-[#00e5ff] text-4xl font-bold mb-6 opacity-40 leading-none">
                    {item.num}
                  </div>
                  <h3 className="font-mono font-bold text-[#e8f4fd] group-hover:text-[#ff1133] text-xl tracking-widest mb-4 whitespace-pre-line transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[#4a6080] text-base leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-[#00e5ff]/10" />
        </section>

        {/* ══════════════════ FAQ ══════════════════ */}
        <FAQ />

        {/* ══════════════════ WORK ══════════════════ */}
        <section id="work" className="relative py-16 px-6 bg-[#071020]">
          <Crosshairs />
          <div className="max-w-7xl mx-auto">
            <div className="reveal mb-16">
              <p className="font-mono text-[#00e5ff] text-base tracking-[0.3em] uppercase mb-4">
                // recent work
              </p>
              <h2 className="font-mono font-bold text-4xl sm:text-5xl text-[#e8f4fd] tracking-tight">
                BUILT FOR REAL BUSINESSES.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  gradient: "linear-gradient(135deg, #1a0a2e 0%, #2d0a4e 60%, #0a0a1e 100%)",
                  tag: "RESTAURANT",
                  name: "Mama J's Kitchen",
                  desc: "Menu driven by Google Sheets. Owner updates prices themselves — site reflects it in seconds.",
                  delay: 1,
                },
                {
                  gradient: "linear-gradient(135deg, #001a2e 0%, #003d5c 60%, #001018 100%)",
                  tag: "AUTO REPAIR",
                  name: "AutoCare Pro",
                  desc: "Clean one-pager with services, location, and a WhatsApp booking button. Live in 9 days.",
                  delay: 2,
                },
                {
                  gradient: "linear-gradient(135deg, #0a1e0a 0%, #0a3018 60%, #050f05 100%)",
                  tag: "GARDEN & PLANTS",
                  name: "Lush Garden Centre",
                  desc: "Seasonal stock list managed in a spreadsheet by the owner. No developer needed after handover.",
                  delay: 3,
                },
              ].map((project) => (
                <div
                  key={project.name}
                  className={`reveal reveal-delay-${project.delay} group border border-[#00e5ff]/10 hover:border-[#00e5ff]/30 transition-all duration-300`}
                >
                  <div className="h-48 relative overflow-hidden" style={{ background: project.gradient }}>
                    <PixelInvader className="absolute bottom-3 right-3 text-[#00e5ff] opacity-20 scale-75" />
                  </div>
                  <div className="p-6">
                    <span className="font-mono text-[#00e5ff] text-xs tracking-[0.25em]">{project.tag}</span>
                    <h3 className="font-mono font-bold text-[#e8f4fd] text-base mt-2 mb-2 group-hover:text-[#00e5ff] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-[#4a6080] text-sm leading-relaxed">{project.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-[#00e5ff]/10" />
        </section>

        {/* ══════════════════ QUOTE — LIGHT SECTION ══════════════════ */}
        <section className="relative py-16 px-6 bg-[#cce8f4]">
          <div className="max-w-7xl mx-auto">
            <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="border-l-4 border-[#00e5ff] pl-8">
                <p className="font-mono font-bold text-2xl sm:text-3xl lg:text-4xl text-[#020c18] leading-tight tracking-tight uppercase">
                  &ldquo;DO I EVEN NEED A WEBSITE IF I&apos;M ON INSTAGRAM?&rdquo;
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#020c18]/70 text-base sm:text-lg leading-relaxed mb-4">
                  Yes — and no. Instagram rents you an audience. A website owns one.
                </p>
                <p className="text-[#020c18]/70 text-base leading-relaxed">
                  No jargon, no judgment. Just straight answers from people who build websites for a living.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* ══════════════════ CONTACT / CTA ══════════════════ */}
        <section id="contact" className="relative py-16 px-6 text-center">
          <Crosshairs />
          <PixelInvader className="absolute top-[20%] left-[8%] text-[#00e5ff] opacity-20 scale-150 animate-float-a animation-delay-500" />
          <PixelInvader className="absolute bottom-[25%] right-[8%] text-[#00e5ff] opacity-15 scale-125 animate-float-b animation-delay-1500" />

          <div className="max-w-2xl mx-auto">
            <div className="reveal">
              <p className="font-mono text-[#00e5ff] text-base tracking-[0.3em] mb-8">
                // your website, sorted
              </p>
              <h2 className="font-mono font-bold text-4xl sm:text-5xl lg:text-6xl text-[#e8f4fd] tracking-tight mb-6">
                READY TO SORT YOUR WEBSITE?
              </h2>
              <p className="font-mono text-[#4a6080] italic mb-12 text-base leading-relaxed">
                WhatsApp us. Tell us about your business. No commitment, no pressure.
              </p>

              <a
                href="tel:+27613829267"
                className="block font-mono font-bold text-5xl sm:text-6xl lg:text-7xl text-[#00e5ff] tracking-widest mb-4 hover:text-white transition-colors duration-200"
              >
                061 382 9267
              </a>

              <a
                href="mailto:oliver@neighbourhooddigital.co.za"
                className="block font-mono text-[#4a6080] text-base tracking-wide mb-10 hover:text-[#00e5ff] transition-colors duration-200"
              >
                oliver@neighbourhooddigital.co.za
              </a>

              <a
                href="https://wa.me/27613829267"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#00e5ff] text-[#020c18] font-mono font-bold text-sm tracking-widest px-10 py-4 hover:bg-white transition-colors duration-200 mb-8"
              >
                [ WHATSAPP US → ]
              </a>

              <p className="font-mono text-[#4a6080] text-sm tracking-widest">
                <a
                  href="mailto:oliver@neighbourhooddigital.co.za"
                  className="hover:text-[#00e5ff] transition-colors duration-200"
                >
                  neighbourhooddigital.co.za
                </a>
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-[#00e5ff]/10" />
        </section>
      </main>

      {/* ══════════════════ FOOTER ══════════════════ */}
      <footer className="relative py-6 px-6 border-t border-[#00e5ff]/10">
        <span className="absolute top-3 left-3 text-[#00e5ff] opacity-20 font-mono text-base leading-none select-none">+</span>
        <span className="absolute top-3 right-3 text-[#00e5ff] opacity-20 font-mono text-base leading-none select-none">+</span>

        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono text-[#4a6080] text-xs tracking-widest uppercase">
            NEIGHBOURHOOD DIGITAL · JOHANNESBURG ·{" "}
            <a
              href="mailto:hello@neighbourhooddigital.co.za"
              className="hover:text-[#00e5ff] transition-colors"
            >
              neighbourhooddigital.co.za
            </a>
          </p>
          <p className="font-mono text-[#4a6080] text-xs tracking-widest">
            // your website, sorted.
          </p>
        </div>
      </footer>
    </>
  );
}

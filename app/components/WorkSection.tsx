"use client";

import { useState, useEffect, useRef, useCallback } from "react";

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

interface Project {
  tag: string;
  name: string;
  desc: string;
  url: string;
  screenshot: string;
  concept: boolean;
}

const PROJECTS: Project[] = [
  {
    tag: "CONSULTANCY",
    name: "Change_X Academy of Business",
    desc: "Team performance consultancy. Built fresh on Next.js, live and in active use.",
    url: "https://changex-academy-seven.vercel.app/",
    screenshot: "/screenshots/changex.png",
    concept: false,
  },
  {
    tag: "WEB DESIGN AGENCY",
    name: "Neighbourhood Digital",
    desc: "Our own site, built on exactly what we sell our clients.",
    url: "https://neighbourhood-digital.vercel.app/",
    screenshot: "/screenshots/neighbourhood-digital.png",
    concept: false,
  },
  {
    tag: "CONCEPT — MEDICAL",
    name: "Illovo Practice",
    desc: "Concept design for a family medicine practice. Not a live client — a demonstration of range.",
    url: "/concepts/illovo-practice.html",
    screenshot: "/screenshots/illovo-practice.png",
    concept: true,
  },
  {
    tag: "CONCEPT — RESTAURANT",
    name: "Tide & Ember",
    desc: "Concept design for an upscale steakhouse. Not a live client — a demonstration of range.",
    url: "/concepts/tide-and-ember.html",
    screenshot: "/screenshots/tide-and-ember.png",
    concept: true,
  },
];

function PreviewModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [loadState, setLoadState] = useState<"loading" | "loaded" | "failed">("loading");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setLoadState("loading");
    timerRef.current = setTimeout(() => {
      setLoadState((prev) => (prev === "loading" ? "failed" : prev));
    }, 3000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [project.url]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      <div
        className="relative bg-[#020c18] border border-[#00e5ff]/20 flex flex-col w-full h-full sm:w-[90vw] sm:h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#00e5ff]/10 shrink-0">
          <span className="font-mono text-[#00e5ff] text-xs tracking-widest truncate mr-4">
            {project.name}
          </span>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[#a8c4d8] text-xs hover:text-[#00e5ff] tracking-widest transition-colors whitespace-nowrap"
            >
              OPEN IN NEW TAB ↗
            </a>
            <button
              onClick={onClose}
              aria-label="Close preview"
              className="font-mono text-[#a8c4d8] text-2xl hover:text-white transition-colors leading-none w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>
          </div>
        </div>

        {/* Content area */}
        <div className="relative flex-1 overflow-hidden">
          {loadState !== "failed" && (
            <iframe
              src={project.url}
              title={project.name}
              className={`w-full h-full border-none transition-opacity duration-500 ${
                loadState === "loaded" ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => {
                if (timerRef.current) clearTimeout(timerRef.current);
                setLoadState("loaded");
              }}
            />
          )}

          {loadState === "loading" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-[#00e5ff] text-xs tracking-[0.3em] animate-pulse">
                LOADING...
              </span>
            </div>
          )}

          {loadState === "failed" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8 text-center">
              <p className="font-mono text-[#a8c4d8] text-sm leading-relaxed max-w-sm">
                This site can&apos;t be previewed in an embedded window.
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs tracking-widest border border-[#00e5ff]/30 text-[#00e5ff] px-6 py-3 hover:bg-[#00e5ff] hover:text-[#020c18] transition-all duration-200"
              >
                [ VIEW DIRECTLY ↗ ]
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function WorkSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const handleClose = useCallback(() => setActiveProject(null), []);

  return (
    <>
      <section id="work" className="relative py-16 px-6 bg-[#071020]">
        {/* Corner crosshairs */}
        <span className="absolute top-3 left-3 text-[#00e5ff] opacity-25 font-mono text-base leading-none select-none pointer-events-none">+</span>
        <span className="absolute top-3 right-3 text-[#00e5ff] opacity-25 font-mono text-base leading-none select-none pointer-events-none">+</span>
        <span className="absolute bottom-3 left-3 text-[#00e5ff] opacity-25 font-mono text-base leading-none select-none pointer-events-none">+</span>
        <span className="absolute bottom-3 right-3 text-[#00e5ff] opacity-25 font-mono text-base leading-none select-none pointer-events-none">+</span>

        <div className="max-w-7xl mx-auto">
          <div className="reveal mb-16">
            <p className="font-mono text-[#00e5ff] text-base tracking-[0.3em] uppercase mb-4">
              // recent work
            </p>
            <h2 className="font-mono font-bold text-4xl sm:text-5xl text-[#e8f4fd] tracking-tight">
              BUILT FOR REAL BUSINESSES.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PROJECTS.map((project, i) => (
              <button
                key={project.name}
                onClick={() => setActiveProject(project)}
                className={`reveal reveal-delay-${i + 1} group border border-[#00e5ff]/10 hover:border-[#00e5ff]/30 transition-all duration-300 text-left w-full cursor-pointer`}
              >
                {/* Preview thumbnail area */}
                <div
                  className="h-48 relative overflow-hidden bg-[#020c18]"
                  style={{
                    backgroundImage: `url(${project.screenshot})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                  }}
                >
                  {/* Dark overlay — lifts on hover to reveal more of the screenshot */}
                  <div className="absolute inset-0 bg-[#020c18]/60 group-hover:bg-[#020c18]/30 transition-all duration-400" />

                  {project.concept && (
                    <span className="absolute top-3 left-3 font-mono text-[10px] tracking-widest border border-[#4a6080]/60 text-[#a8c4d8] px-2 py-1 bg-[#020c18]/60 z-10">
                      CONCEPT
                    </span>
                  )}

                  {/* Hover "preview" hint */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <span className="font-mono text-white text-xs tracking-[0.3em] bg-[#020c18]/60 px-3 py-2">
                      [ PREVIEW → ]
                    </span>
                  </div>
                </div>

                {/* Card text */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-[#00e5ff] text-xs tracking-[0.25em]">
                      {project.tag}
                    </span>
                    {project.concept && (
                      <span className="font-mono text-[10px] tracking-widest border border-[#4a6080]/40 text-[#a8c4d8] px-2 py-0.5">
                        CONCEPT
                      </span>
                    )}
                  </div>
                  <h3 className="font-mono font-bold text-[#e8f4fd] text-base mb-2 group-hover:text-[#00e5ff] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-[#a8c4d8] text-sm leading-relaxed">{project.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#00e5ff]/10" />
      </section>

      {activeProject && (
        <PreviewModal project={activeProject} onClose={handleClose} />
      )}
    </>
  );
}

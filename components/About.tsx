"use client";

import { useEffect, useRef } from "react";
import { personalData } from "@/data/personal";
import { registerGSAP } from "@/lib/animations";

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { gsap } = registerGSAP();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 px-6 sm:px-8 z-10"
    >
      <div className="max-w-4xl mx-auto">
        <div
          ref={contentRef}
          className="bg-white/95 backdrop-blur-sm rounded-2xl border-2 border-ooo-cosmic p-7 sm:p-10 shadow-relic"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
            {/* Left: Cozy & Melancholic Scene: Campfire by an Overgrown Relic with Marceline-style Bass Guitar */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 bg-ooo-cassette rounded-xl border-2 border-ooo-cosmic shadow-relic-sm flex items-center justify-center p-3 select-none overflow-hidden">
                <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
                  {/* Sky vignette (Twilight dusk) */}
                  <rect x="8" y="8" width="184" height="184" rx="10" fill="#BDECF0" stroke="#1C2230" strokeWidth="2" />
                  {/* Twilight lavender gradient overlay */}
                  <path d="M8 8H192V110C160 115 120 100 8 110V8Z" fill="#CBBDF4" opacity="0.4" />

                  {/* Distant cratered moon */}
                  <circle cx="160" cy="40" r="16" fill="#FFF8EA" stroke="#1C2230" strokeWidth="1.8" />
                  <circle cx="155" cy="36" r="3" fill="#EADFCD" />
                  <circle cx="166" cy="44" r="4" fill="#EADFCD" />

                  {/* Overgrown hill cliff */}
                  <path
                    d="M8 140C50 120 140 120 192 140V192H8V140Z"
                    fill="#7FB988"
                    stroke="#1C2230"
                    strokeWidth="2.2"
                  />

                  {/* Ancient overgrown computer terminal / arcade cabinet relic */}
                  <g transform="translate(24, 82)">
                    <rect x="0" y="0" width="38" height="62" rx="4" fill="#D8DED9" stroke="#1C2230" strokeWidth="2" />
                    <rect x="5" y="8" width="28" height="24" rx="2" fill="#47CFB8" stroke="#1C2230" strokeWidth="1.5" />
                    <line x1="8" y1="16" x2="28" y2="16" stroke="#C7F5EE" strokeWidth="1" />
                    <line x1="8" y1="22" x2="24" y2="22" stroke="#C7F5EE" strokeWidth="1" />
                    {/* Creeping moss & wild ivy on terminal */}
                    <path d="M-2 24Q6 14 12 18Q18 22 24 10" stroke="#528561" strokeWidth="2" fill="none" />
                    <circle cx="12" cy="18" r="2" fill="#95CE9C" />
                    <circle cx="24" cy="10" r="1.5" fill="#FF478B" />
                  </g>

                  {/* Marceline-style Red Rocker Bass leaning on the overgrown relic */}
                  <g transform="translate(62, 78) rotate(16)">
                    {/* Headstock & neck */}
                    <line x1="8" y1="0" x2="8" y2="60" stroke="#1C2230" strokeWidth="3" />
                    <line x1="9" y1="2" x2="9" y2="58" stroke="#FFF8EA" strokeWidth="0.8" />
                    <rect x="5" y="-6" width="6" height="8" rx="1" fill="#FF478B" stroke="#1C2230" strokeWidth="1.2" />
                    {/* Double cutaway bass body */}
                    <path
                      d="M-2 60C-8 55 -6 45 4 48C14 45 16 55 10 60C16 66 12 76 4 74C-4 76 -8 66 -2 60Z"
                      fill="#E03668"
                      stroke="#1C2230"
                      strokeWidth="2"
                    />
                    <circle cx="4" cy="62" r="3" fill="#1C2230" />
                  </g>

                  {/* Campfire logs & warm flame */}
                  <line x1="118" y1="156" x2="148" y2="148" stroke="#1C2230" strokeWidth="3.5" strokeLinecap="round" />
                  <line x1="118" y1="148" x2="148" y2="156" stroke="#1C2230" strokeWidth="3.5" strokeLinecap="round" />
                  <path
                    d="M133 150C139 144 144 136 137 125C130 132 127 139 133 150Z"
                    fill="#FFD642"
                    stroke="#1C2230"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M133 148C136 145 138 140 135 134C132 137 130 141 133 148Z"
                    fill="#FF478B"
                  />
                  {/* Floating warm embers */}
                  <circle cx="138" cy="118" r="1.5" fill="#FFD642" />
                  <circle cx="129" cy="112" r="1.2" fill="#FF478B" />

                  {/* Warm enamel coffee mug sitting by the fire */}
                  <rect x="160" y="146" width="10" height="10" rx="2" fill="#FFF8EA" stroke="#1C2230" strokeWidth="1.5" />
                  <path d="M170 148Q174 151 170 154" stroke="#1C2230" strokeWidth="1.2" fill="none" />
                </svg>
              </div>
            </div>

            {/* Right: Story */}
            <div className="md:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-md bg-ooo-bmoScreen border border-ooo-bmo/40 font-mono text-[11px] font-bold text-ooo-cosmic uppercase w-fit mb-3">
                <span>LOG ENTRY // ABOUT</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-ooo-cosmic mb-4 tracking-tight">
                A LITTLE ABOUT ME
              </h2>

              <div className="space-y-4 text-ooo-cosmic/85 text-sm sm:text-base leading-relaxed">
                {personalData.aboutText.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

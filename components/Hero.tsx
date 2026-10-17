"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, FileText, Terminal, Radio } from "lucide-react";
import { personalData } from "@/data/personal";
import { registerGSAP } from "@/lib/animations";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const photoRef = useRef<HTMLDivElement | null>(null);
  const tagRef = useRef<HTMLDivElement | null>(null);
  const nameRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLDivElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { gsap } = registerGSAP();

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.fromTo(
      photoRef.current,
      { opacity: 0, scale: 0.85, x: -25 },
      { opacity: 1, scale: 1, x: 0, duration: 0.7, ease: "back.out(1.4)" }
    )
      .fromTo(
        tagRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.4"
      )
      .fromTo(
        nameRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.4"
      )
      .fromTo(
        descRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.4"
      )
      .fromTo(
        buttonsRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.4"
      );

    return () => {
      tl.kill();
    };
  }, []);

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsElem = document.getElementById("projects");
    if (projectsElem) {
      projectsElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] flex flex-col justify-center items-center px-6 pt-24 pb-16 z-10"
    >
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-10 lg:gap-14 items-center">
        {/* Left Side: Polaroid Portrait with Perched BMO Companion */}
        <div
          ref={photoRef}
          className="md:col-span-5 flex justify-center md:justify-end select-none pr-4 sm:pr-6"
        >
          <div className="relative animate-float-slow">
            {/* Polaroid Casing */}
            <div className="relative bg-ooo-cassette p-3.5 sm:p-4 pb-7 sm:pb-8 rounded-2xl border-2 border-ooo-cosmic shadow-relic -rotate-2 hover:rotate-0 transition-transform duration-300 w-52 sm:w-60 md:w-64 lg:w-72 group">
              {/* Washi Tape Strip at top */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-5 bg-ooo-bmo/80 border border-ooo-cosmic/40 -rotate-1 shadow-sm rounded-sm" />

              {/* Photo Window */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden border-2 border-ooo-cosmic bg-ooo-bmoScreen mb-3">
                <Image
                  src={personalData.avatarUrl}
                  alt={personalData.name}
                  fill
                  sizes="(max-width: 640px) 240px, 300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  priority
                />
                {/* Subtle vignette tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-ooo-cosmic/15 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Polaroid Caption */}
              <div className="flex items-center justify-between px-1 font-mono text-[11px] sm:text-xs font-bold text-ooo-cosmic/80">
                <span>UMAR INAMDAR</span>
                <span className="text-ooo-marceline text-xs">♥</span>
              </div>

              {/* Mini BMO perched on the lower-right corner of the frame (off the photo) */}
              <div
                className="absolute -bottom-3 -right-4 sm:-right-6 w-9 h-11 sm:w-11 sm:h-14 pointer-events-none drop-shadow-relic-sm z-20 rotate-6"
                aria-hidden="true"
              >
                <svg viewBox="0 0 100 120" fill="none" className="w-full h-full">
                  {/* Antenna */}
                  <line x1="50" y1="18" x2="50" y2="4" stroke="#1C2230" strokeWidth="2.2" strokeLinecap="round" />
                  <circle cx="50" cy="4" r="3" fill="#FF478B" stroke="#1C2230" strokeWidth="1.8" />
                  <path d="M48 16Q52 10 50 6" stroke="#528561" strokeWidth="1.5" fill="none" />

                  {/* BMO Body */}
                  <rect
                    x="12"
                    y="18"
                    width="70"
                    height="90"
                    rx="10"
                    fill="#47CFB8"
                    stroke="#1C2230"
                    strokeWidth="2.2"
                  />

                  {/* Screen */}
                  <rect
                    x="20"
                    y="26"
                    width="60"
                    height="40"
                    rx="6"
                    fill="#C7F5EE"
                    stroke="#1C2230"
                    strokeWidth="1.8"
                  />

                  {/* Face with blinking eyes */}
                  <g className="animate-bmo-blink origin-center">
                    <rect x="34" y="38" width="5" height="7" rx="1.5" fill="#1C2230" />
                    <rect x="61" y="38" width="5" height="7" rx="1.5" fill="#1C2230" />
                    <path
                      d="M46 51Q50 56 54 51"
                      stroke="#1C2230"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <ellipse cx="30" cy="49" rx="3" ry="2" fill="#FF478B" opacity="0.6" />
                    <ellipse cx="70" cy="49" rx="3" ry="2" fill="#FF478B" opacity="0.6" />
                  </g>

                  {/* D-Pad Buttons */}
                  <g transform="translate(24, 76)">
                    <rect x="4" y="0" width="4" height="12" rx="1" fill="#FFD642" stroke="#1C2230" strokeWidth="1.2" />
                    <rect x="0" y="4" width="12" height="4" rx="1" fill="#FFD642" stroke="#1C2230" strokeWidth="1.2" />
                  </g>

                  {/* Action Button */}
                  <circle cx="68" cy="82" r="3.5" fill="#FF478B" stroke="#1C2230" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Headline, Name, Role, Description, Buttons */}
        <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
          {/* Radio Broadcast / Signal Indicator */}
          <div
            ref={tagRef}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 border border-ooo-cosmic/20 font-mono text-[11px] font-bold tracking-wider text-ooo-cosmic mb-3 shadow-sm"
          >
            <Radio size={13} className="text-ooo-marceline animate-pulse" />
            <span>FREQ: 104.7 FM // THE LAND OF OOO</span>
          </div>

          {/* Hero Name: UMAR */}
          <h1
            ref={nameRef}
            className="text-6xl sm:text-6xl md:text-6xl lg:text-6xl font-extrabold tracking-tight text-ooo-cosmic mb-3 leading-none"
          >
            UMAR INAMDAR
          </h1>

          {/* Subtitle Badge */}
          <div
            ref={subtitleRef}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-ooo-cassette border-2 border-ooo-cosmic shadow-relic-sm mb-4"
          >
            <Terminal size={14} className="text-ooo-bmoDark" />
            <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-ooo-cosmic uppercase">
              AI &amp; BACKEND DEVELOPER
            </span>
          </div>

          {/* Description */}
          <p
            ref={descRef}
            className="text-base sm:text-lg text-ooo-cosmic/90 max-w-lg mb-8 leading-relaxed font-normal"
          >
            Crafting resilient backend architectures, AI systems, and practical software amidst the overgrown digital wasteland. Driven by curiosity, lo-fi beats, and cosmic wonder.
          </p>

          {/* Lo-Fi Action Buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto"
          >
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="w-full sm:w-auto px-7 py-3.5 bg-ooo-bmo hover:bg-ooo-bmoScreenDark text-ooo-cosmic font-mono font-bold text-xs sm:text-sm tracking-wider uppercase rounded-xl border-2 border-ooo-cosmic shadow-relic hover:shadow-relic-neon hover:-translate-y-0.5 active:translate-y-0.5 transition-all text-center flex items-center justify-center gap-2.5"
            >
              <span>DISCOVER PROJECTS</span>
              <ArrowDown size={15} />
            </a>

            <a
              href={personalData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 bg-ooo-cassette hover:bg-white text-ooo-cosmic font-mono font-bold text-xs sm:text-sm tracking-wider uppercase rounded-xl border-2 border-ooo-cosmic shadow-relic hover:shadow-relic-hover hover:-translate-y-0.5 active:translate-y-0.5 transition-all text-center flex items-center justify-center gap-2.5"
            >
              <FileText size={15} />
              <span>SALVAGED RESUME</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
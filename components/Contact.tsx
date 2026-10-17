"use client";

import { useState, useEffect, useRef } from "react";
import { Mail, Github, Linkedin, Copy, Check, Radio } from "lucide-react";
import { personalData } from "@/data/personal";
import { registerGSAP } from "@/lib/animations";
import confetti from "canvas-confetti";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { gsap } = registerGSAP();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);

    try {
      confetti({
        particleCount: 26,
        spread: 45,
        origin: { y: 0.8 },
        colors: ["#47CFB8", "#FF478B", "#FFD642", "#C7F5EE"],
        disableForReducedMotion: true,
      });
    } catch {
      // Fallback
    }

    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 px-6 sm:px-8 z-10"
    >
      <div className="max-w-3xl mx-auto text-center">
        <div
          ref={containerRef}
          className="bg-white rounded-2xl border-2 border-ooo-cosmic p-8 sm:p-12 shadow-relic relative"
        >
          {/* Radio Transmission Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ooo-bmoScreen border border-ooo-bmo/40 font-mono text-[11px] font-bold tracking-wider text-ooo-cosmic uppercase mb-4">
            <Radio size={12} className="text-ooo-marceline animate-pulse" />
            <span>RADIO DISPATCH // FREQ: 104.7 FM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-ooo-cosmic mb-3 tracking-tight">
            LET&apos;S BUILD SOMETHING
          </h2>

          <p className="text-sm sm:text-base text-ooo-cosmic/80 mb-8 max-w-lg mx-auto leading-relaxed">
            Have an idea, opportunity, or just want to tune in? Broadcast a signal into my terminal.
          </p>

          {/* Action Buttons */}
          <div className="mb-7 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={`mailto:${personalData.email}`}
              className="w-full sm:w-auto px-7 py-3.5 bg-ooo-marceline hover:bg-ooo-marcelineDark text-white font-mono font-bold text-xs sm:text-sm tracking-wider uppercase rounded-xl border-2 border-ooo-cosmic shadow-relic hover:shadow-marceline-neon hover:-translate-y-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
            >
              <Mail size={15} />
              <span>Broadcast Email</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto px-5 py-3.5 bg-ooo-cassette hover:bg-white text-ooo-cosmic font-mono font-bold text-xs sm:text-sm tracking-wider uppercase rounded-xl border-2 border-ooo-cosmic shadow-relic-sm hover:shadow-relic hover:-translate-y-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2"
              title="Copy email address"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-green-600" />
                  <span className="text-green-700">Frequency Copied</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 pt-6 border-t border-ooo-cosmic/10 font-mono text-xs font-bold">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-ooo-cassette hover:bg-white rounded-lg border border-ooo-cosmic/20 text-ooo-cosmic hover:border-ooo-cosmic transition-all"
            >
              <Github size={14} />
              <span>GitHub</span>
            </a>

            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-ooo-cassette hover:bg-white rounded-lg border border-ooo-cosmic/20 text-ooo-cosmic hover:border-ooo-cosmic transition-all"
            >
              <Linkedin size={14} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

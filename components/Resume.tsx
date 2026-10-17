"use client";

import { useEffect, useRef } from "react";
import { FileText, Download, ExternalLink, HardDrive } from "lucide-react";
import { personalData } from "@/data/personal";
import { registerGSAP } from "@/lib/animations";

export default function Resume() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { gsap } = registerGSAP();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
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
      id="resume"
      ref={sectionRef}
      className="relative py-20 px-6 sm:px-8 z-10"
    >
      <div className="max-w-2xl mx-auto">
        <div
          ref={cardRef}
          className="bg-ooo-cassette rounded-2xl border-2 border-ooo-cosmic p-7 sm:p-10 shadow-relic text-center relative overflow-hidden"
        >
          {/* Tape Index Stamp */}
          <div className="absolute top-4 right-4 font-mono text-[10px] font-bold tracking-widest text-ooo-cosmic/50 uppercase px-2 py-0.5 rounded border border-ooo-cosmic/20">
            DOC_REV_2026.DAT
          </div>

          <div className="w-12 h-12 rounded-xl bg-ooo-bmoScreen border-2 border-ooo-cosmic shadow-relic-sm flex items-center justify-center mx-auto mb-4 text-ooo-cosmic">
            <HardDrive size={22} className="text-ooo-bmoDark" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-ooo-cosmic mb-2 tracking-tight">
            MY RESUME
          </h2>

          <p className="text-sm sm:text-base text-ooo-cosmic/80 mb-7 max-w-md mx-auto leading-relaxed">
            Want the full version? Inspect my qualifications, academic background, and technical milestones.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={personalData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-ooo-bmoScreen text-ooo-cosmic font-mono font-bold text-xs sm:text-sm tracking-wider uppercase rounded-xl border-2 border-ooo-cosmic shadow-relic-sm hover:shadow-relic hover:-translate-y-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
            >
              <span>View Resume</span>
              <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href={personalData.resumeUrl}
              download="Umar_Inamdar_Resume.pdf"
              className="w-full sm:w-auto px-6 py-3 bg-ooo-bmo hover:bg-ooo-bmoDark text-ooo-cosmic hover:text-white font-mono font-bold text-xs sm:text-sm tracking-wider uppercase rounded-xl border-2 border-ooo-cosmic shadow-relic-sm hover:shadow-relic hover:-translate-y-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

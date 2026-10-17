"use client";

import { useEffect, useRef } from "react";
import { registerGSAP } from "@/lib/animations";

export default function Background() {
  const farLayerRef = useRef<SVGSVGElement | null>(null);
  const midLayerRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { gsap } = registerGSAP();

    const ctx = gsap.context(() => {
      if (farLayerRef.current) {
        gsap.to(farLayerRef.current, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5,
          },
        });
      }
      if (midLayerRef.current) {
        gsap.to(midLayerRef.current, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-gradient-to-b from-[#BDECF0] via-[#D8F0F3] to-[#E8F5E9]"
    >
      {/* Melancholic twilight & cosmic glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,rgba(203,189,244,0.35)_0%,rgba(189,236,240,0)_80%)]" />

      {/* Cosmic cratered Adventure Time moon */}
      <div className="absolute top-[8%] right-[12%] sm:right-[16%] opacity-70">
        <svg width="44" height="44" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="26" fill="#FFF8EA" stroke="#1C2230" strokeWidth="2" />
          {/* Subtle moon craters */}
          <circle cx="22" cy="24" r="5" fill="#EADFCD" stroke="#1C2230" strokeWidth="1.2" />
          <circle cx="38" cy="34" r="7" fill="#EADFCD" stroke="#1C2230" strokeWidth="1.2" />
          <circle cx="25" cy="40" r="3" fill="#EADFCD" stroke="#1C2230" strokeWidth="1" />
        </svg>
      </div>

      {/* Drifting Cloud 1: Flat-bottomed cumulus */}
      <div
        className="absolute top-[12%] -left-[240px] w-[220px] animate-cloud-slow opacity-85"
        style={{ animationDuration: "85s" }}
      >
        <svg viewBox="0 0 140 56" fill="none" className="w-full">
          <path
            d="M24 48C14 48 6 40 6 30C6 21 14 14 24 14C26 7 35 2 46 2C58 2 68 8 72 17C76 14 82 12 88 12C100 12 110 20 112 30C118 31 124 36 124 42C124 48 118 48 112 48L24 48Z"
            fill="#FFFFFF"
            stroke="#1C2230"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Drifting Cloud 2: Lower midground cloud */}
      <div
        className="hidden md:block absolute top-[28%] -left-[280px] w-[240px] animate-cloud-medium opacity-75"
        style={{ animationDuration: "65s", animationDelay: "-30s" }}
      >
        <svg viewBox="0 0 150 60" fill="none" className="w-full">
          <path
            d="M30 50C18 50 8 41 8 30C8 20 17 14 28 14C31 6 42 2 54 2C68 2 80 8 84 19C88 16 94 14 100 14C114 14 124 23 126 34C132 35 138 40 138 46C138 50 131 50 125 50L30 50Z"
            fill="#FFFFFF"
            stroke="#1C2230"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Far Landscape: Distant overgrown ridges with ruined radio antenna and ancient girders */}
      <div className="absolute -bottom-8 left-0 right-0 w-full overflow-hidden leading-none">
        <svg
          ref={farLayerRef}
          viewBox="0 0 1440 320"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-56 sm:h-68 md:h-84 opacity-80"
        >
          {/* Distant soft lavender/cyan mountain ridges */}
          <path
            d="M0 320V190C160 150 280 120 440 145C600 170 700 95 860 120C1020 145 1160 85 1300 115C1380 130 1420 150 1440 160V320H0Z"
            fill="#C5BFE3"
            stroke="#1C2230"
            strokeWidth="2"
          />

          {/* Ruined human telecom antenna spire on a distant ridge */}
          <g transform="translate(860, 48)">
            <line x1="0" y1="72" x2="0" y2="0" stroke="#1C2230" strokeWidth="2.5" />
            <line x1="-12" y1="20" x2="12" y2="20" stroke="#1C2230" strokeWidth="1.8" />
            <line x1="-8" y1="36" x2="8" y2="36" stroke="#1C2230" strokeWidth="1.8" />
            <line x1="-16" y1="52" x2="16" y2="52" stroke="#1C2230" strokeWidth="1.8" />
            <circle cx="0" cy="0" r="3" fill="#E03668" stroke="#1C2230" strokeWidth="1.5" />
            {/* Creeping vines on the antenna */}
            <path d="M-3 65Q2 52 -1 40Q-3 28 1 18" stroke="#528561" strokeWidth="2" fill="none" />
          </g>
        </svg>
      </div>

      {/* Midground Hills: Overgrown Land of Ooo Knolls with Moss and Half-Buried Retro TV Monitor */}
      <div className="absolute -bottom-6 left-0 right-0 w-full overflow-hidden leading-none">
        <svg
          ref={midLayerRef}
          viewBox="0 0 1440 260"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-44 sm:h-56 md:h-72"
        >
          {/* Main rolling mossy hills */}
          <path
            d="M0 260V170C200 130 380 185 580 150C780 115 940 165 1160 130C1280 110 1380 135 1440 145V260H0Z"
            fill="#7FB988"
            stroke="#1C2230"
            strokeWidth="2.2"
          />

          {/* Half-buried ancient human CRT television relic overgrown with clover & vines */}
          <g transform="translate(480, 126)">
            {/* TV Shell tilted in the soil */}
            <rect
              x="0"
              y="0"
              width="46"
              height="38"
              rx="6"
              transform="rotate(-8)"
              fill="#D8DED9"
              stroke="#1C2230"
              strokeWidth="2"
            />
            {/* TV Screen */}
            <rect
              x="5"
              y="5"
              width="28"
              height="24"
              rx="4"
              transform="rotate(-8)"
              fill="#47CFB8"
              stroke="#1C2230"
              strokeWidth="1.5"
            />
            {/* TV Knobs */}
            <circle cx="34" cy="10" r="2.5" fill="#FFF8EA" stroke="#1C2230" strokeWidth="1.2" />
            <circle cx="34" cy="18" r="2.5" fill="#FFF8EA" stroke="#1C2230" strokeWidth="1.2" />
            {/* Overgrown moss & vine creeping across the TV */}
            <path
              d="M-4 30C4 22 12 18 18 10C24 6 32 8 36 2"
              stroke="#528561"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="16" cy="14" r="2.5" fill="#FF478B" />
          </g>

          {/* Quiet grass blades */}
          <g stroke="#1C2230" strokeWidth="1.8" strokeLinecap="round">
            <path d="M180 180L184 172L187 180" />
            <path d="M184 172V180" />

            <path d="M780 156L784 148L787 156" />
            <path d="M784 148V156" />

            <path d="M1060 166L1064 158L1067 166" />
            <path d="M1064 158V166" />

            <path d="M1300 146L1304 138L1307 146" />
            <path d="M1304 138V146" />
          </g>
        </svg>
      </div>

      {/* Near Rolling Horizon Ridge (Warm overgrown moss/soil base) */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 150"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-24 sm:h-32 md:h-44"
        >
          <path
            d="M0 150V115C260 75 540 120 820 85C1100 50 1320 100 1440 85V150H0Z"
            fill="#A3D29B"
            stroke="#1C2230"
            strokeWidth="2.5"
          />

          <g stroke="#1C2230" strokeWidth="1.8" strokeLinecap="round">
            <path d="M340 124L344 116L348 124" />
            <path d="M344 116V124" />

            <path d="M920 102L924 94L928 102" />
            <path d="M924 94V102" />
          </g>
        </svg>
      </div>
    </div>
  );
}

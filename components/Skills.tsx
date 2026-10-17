"use client";

import { useEffect, useRef } from "react";
import { registerGSAP } from "@/lib/animations";
import { Cpu } from "lucide-react";

interface SkillItem {
  name: string;
  category: string;
  tagColor: string;
}

const SKILLS: SkillItem[] = [
  { name: "Java", category: "CORE", tagColor: "bg-ooo-marceline/15 text-ooo-marcelineDark border-ooo-marceline/30" },
  { name: "Spring Boot", category: "BACKEND", tagColor: "bg-ooo-bmoScreen text-ooo-cosmic border-ooo-bmo/40" },
  { name: "React", category: "FRONTEND", tagColor: "bg-[#E5DFF6] text-ooo-cosmic border-[#B7A9DE]" },
  { name: "Python", category: "CORE", tagColor: "bg-ooo-solarGold/25 text-ooo-cosmic border-ooo-solarGold/50" },
  { name: "SQL", category: "DATA", tagColor: "bg-ooo-bmoScreen text-ooo-cosmic border-ooo-bmo/40" },
  { name: "Git", category: "OPS", tagColor: "bg-ooo-cassette text-ooo-cosmic border-ooo-cosmic/20" },
  { name: "AI / RAG", category: "INTELLIGENCE", tagColor: "bg-ooo-marceline/15 text-ooo-marcelineDark border-ooo-marceline/30" },
  { name: "REST APIs", category: "NETWORK", tagColor: "bg-ooo-bmoScreen text-ooo-cosmic border-ooo-bmo/40" },
  { name: "MySQL", category: "DATA", tagColor: "bg-[#E5DFF6] text-ooo-cosmic border-[#B7A9DE]" },
  { name: "FastAPI", category: "BACKEND", tagColor: "bg-ooo-solarGold/25 text-ooo-cosmic border-ooo-solarGold/50" },
  { name: "TypeScript", category: "CORE", tagColor: "bg-ooo-bmoScreen text-ooo-cosmic border-ooo-bmo/40" },
  { name: "Docker", category: "CONTAINER", tagColor: "bg-ooo-cassette text-ooo-cosmic border-ooo-cosmic/20" },
  { name: "ChromaDB", category: "VECTOR", tagColor: "bg-ooo-bmoScreen text-ooo-cosmic border-ooo-bmo/40" },
  { name: "Next.js", category: "FULLSTACK", tagColor: "bg-ooo-marceline/15 text-ooo-marcelineDark border-ooo-marceline/30" },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { gsap } = registerGSAP();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 20 },
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

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-20 px-6 sm:px-8 z-10"
    >
      <div className="max-w-3xl mx-auto text-center">
        <div ref={containerRef}>
          {/* Header */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ooo-cassette border border-ooo-cosmic/20 font-mono text-[11px] font-bold tracking-wider text-ooo-cosmic uppercase mb-3">
            <Cpu size={13} className="text-ooo-bmoDark" />
            <span>MODULE INVENTORY // CHIPSET</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-ooo-cosmic mb-3 tracking-tight">
            TOOLS I USE
          </h2>

          <p className="text-sm sm:text-base text-ooo-cosmic/75 mb-9 max-w-md mx-auto">
            Technologies, libraries, and protocols wired into my daily workflow.
          </p>

          {/* Module Grid */}
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {SKILLS.map((skill) => (
              <div
                key={skill.name}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-ooo-cosmic/20 shadow-sm hover:shadow-relic-sm hover:-translate-y-0.5 transition-all duration-150 cursor-default select-none ${skill.tagColor}`}
              >
                <span className="font-mono text-xs font-bold">{skill.name}</span>
                <span className="text-[9px] font-mono opacity-50 px-1 py-0.5 rounded bg-white/40">
                  {skill.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

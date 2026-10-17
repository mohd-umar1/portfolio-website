"use client";

import { useEffect, useRef } from "react";
import { projectsData } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { registerGSAP } from "@/lib/animations";

export default function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { gsap } = registerGSAP();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      const cards = gridRef.current?.querySelectorAll(".project-card");
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 px-6 sm:px-8 z-10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div ref={headingRef} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ooo-bmoScreen border border-ooo-bmo/40 font-mono text-[11px] font-bold tracking-wider text-ooo-cosmic uppercase mb-3">
            <span>SALVAGED ARTIFACTS // SIDE A</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ooo-cosmic tracking-tight mb-3">
            MY PROJECTS
          </h2>

          <p className="text-sm sm:text-base text-ooo-cosmic/80 max-w-md mx-auto">
            Practical systems and software built along the winding roads of Ooo.
          </p>
        </div>

        {/* 2-Column Responsive Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7"
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

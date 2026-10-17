"use client";

import { Github, ExternalLink, Disc3 } from "lucide-react";
import { Project } from "@/data/projects";

const COLOR_MAP = {
  mint: "bg-ooo-bmoScreen border-ooo-bmo text-ooo-cosmic",
  pink: "bg-ooo-marceline/15 border-ooo-marceline/40 text-ooo-marcelineDark",
  yellow: "bg-ooo-solarGold/25 border-ooo-solarGold/60 text-ooo-cosmic",
  lavender: "bg-[#E5DFF6] border-[#B7A9DE] text-ooo-cosmic",
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const badgeClass = COLOR_MAP[project.accentColor] || COLOR_MAP.mint;

  return (
    <article className="project-card group relative flex flex-col justify-between bg-white rounded-2xl border-2 border-ooo-cosmic p-6 sm:p-7 shadow-relic hover:shadow-relic-hover hover:-translate-y-1 transition-all duration-200">
      <div>
        {/* Header: Cassette Track / Status */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-ooo-cosmic/10 font-mono text-xs">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border font-bold uppercase ${badgeClass}`}
          >
            <Disc3 size={12} className="animate-spin-slow" />
            <span>TRACK {project.number}</span>
          </span>

          <span className="text-ooo-cosmic/40 font-mono text-[11px] font-medium tracking-widest">
            STEREO // PRESERVED
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-extrabold text-ooo-cosmic mb-2.5 tracking-tight group-hover:text-ooo-marceline transition-colors">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm sm:text-base text-ooo-cosmic/80 leading-relaxed mb-6 font-normal">
          {project.description}
        </p>
      </div>

      <div>
        {/* Tech Stack Chips (Lo-Fi memory card style) */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] font-mono font-semibold text-ooo-cosmic bg-ooo-cassette rounded-md border border-ooo-cosmic/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-5 pt-3.5 border-t border-ooo-cosmic/10 font-mono text-xs font-bold uppercase tracking-wider">
          <a
            href={project.github_frontend}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-ooo-cosmic hover:text-ooo-marceline transition-colors group/link"
          >
            <Github size={14} />
            <span>Frontend</span>
            <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-1">
              →
            </span>
          </a>

          {/* {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-ooo-cosmic hover:text-ooo-bmoDark transition-colors group/link"
            >
              <ExternalLink size={14} />
              <span>Live System</span>
              <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-1">
                ↗
              </span>
            </a>
          )} */}
          <a
            href={project.github_backend}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-ooo-cosmic hover:text-ooo-marceline transition-colors group/link"
          >
            <Github size={14} />
            <span>Backend</span>
            <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}

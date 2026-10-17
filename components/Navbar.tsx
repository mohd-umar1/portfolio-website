"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "PROJECTS", href: "#projects", track: "01" },
  { label: "ABOUT", href: "#about", track: "02" },
  { label: "SKILLS", href: "#skills", track: "03" },
  { label: "RESUME", href: "#resume", track: "04" },
  { label: "CONTACT", href: "#contact", track: "05" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <header className="fixed top-5 left-0 right-0 z-40 px-4 pointer-events-none">
      <div className="max-w-fit mx-auto flex items-center justify-center pointer-events-auto">
        {/* Desktop Lo-Fi Deck Capsule */}
        <nav
          className="hidden md:flex items-center gap-1 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border-2 border-ooo-cosmic shadow-relic"
          aria-label="Audio Deck Navigation"
        >
          {/* Mini Tape Status Indicator */}
          <div className="flex items-center gap-1.5 pl-2 pr-3 mr-1 border-r border-ooo-cosmic/20 font-mono text-[11px] font-bold text-ooo-cosmic">
            <span className="w-2 h-2 rounded-full bg-ooo-marceline animate-pulse" />
            <span className="tracking-wider">SIDE A</span>
          </div>

          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="group px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider text-ooo-cosmic hover:bg-ooo-bmoScreen/70 transition-all duration-150 flex items-center gap-1.5 font-mono"
            >
              <span className="text-[10px] text-ooo-cosmic/40 group-hover:text-ooo-marceline transition-colors">
                {link.track}
              </span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Mobile Bar */}
        <div className="md:hidden flex items-center justify-between w-[90vw] max-w-sm px-4 py-2.5 rounded-full bg-white/95 backdrop-blur-md border-2 border-ooo-cosmic shadow-relic">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-ooo-cosmic">
            <span className="w-2 h-2 rounded-full bg-ooo-marceline animate-pulse" />
            <span>TAPE 01 // MENU</span>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            className="p-1.5 text-ooo-cosmic rounded-full hover:bg-ooo-bmoScreen/50 transition-colors"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden pointer-events-auto fixed inset-x-4 top-20 bg-white/98 backdrop-blur-lg rounded-2xl border-2 border-ooo-cosmic p-6 shadow-relic transition-all duration-300 ease-out origin-top ${
          mobileMenuOpen
            ? "opacity-100 scale-y-100"
            : "opacity-0 scale-y-95 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-2.5 font-mono text-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xs font-bold tracking-widest text-ooo-cosmic py-2.5 rounded-xl hover:bg-ooo-bmoScreen/60 transition-colors flex items-center justify-center gap-2 border border-transparent hover:border-ooo-cosmic/15"
            >
              <span className="text-ooo-marceline text-[10px]">{link.track}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

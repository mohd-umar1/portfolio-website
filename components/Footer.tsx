import { personalData } from "@/data/personal";

export default function Footer() {
  return (
    <footer className="relative py-14 px-6 sm:px-8 border-t-2 border-ooo-cosmic/15 text-center z-10 bg-white/60 backdrop-blur-sm">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-3">
        {/* Subtle Lo-Fi Cassette Emblem */}
        <div className="w-9 h-7 rounded-md bg-ooo-cassette border-2 border-ooo-cosmic shadow-relic-sm flex items-center justify-center gap-1.5">
          <div className="w-2 h-2 rounded-full border border-ooo-cosmic bg-white" />
          <div className="w-2.5 h-1 rounded-sm bg-ooo-cosmic/30" />
          <div className="w-2 h-2 rounded-full border border-ooo-cosmic bg-white" />
        </div>

        {/* Wordmark */}
        <h2 className="text-lg font-extrabold tracking-wider text-ooo-cosmic uppercase font-mono">
          {personalData.firstName}
        </h2>

        {/* Poetic Subtitle */}
        <p className="text-xs sm:text-sm text-ooo-cosmic/75 font-medium">
          Everything stays, right where you left it. Built with coffee &amp; curiosity.
        </p>

        {/* Links */}
        <div className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-wider text-ooo-cosmic pt-1">
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ooo-marceline transition-colors"
          >
            GitHub
          </a>
          <span className="text-ooo-cosmic/30">•</span>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ooo-marceline transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-ooo-cosmic/30">•</span>
          <a
            href={`mailto:${personalData.email}`}
            className="hover:text-ooo-marceline transition-colors"
          >
            Broadcast
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[11px] text-ooo-cosmic/45 font-mono pt-2">
          &copy; {new Date().getFullYear()} {personalData.name} // TRANSMISSION END
        </p>
      </div>
    </footer>
  );
}

import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#050505] text-white border-t border-white/10 px-6 md:px-12 py-12 md:py-16 font-mono text-xs">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        
        {/* Brand & Copyright */}
        <div className="space-y-2">
          <div className="font-anton text-2xl tracking-wider uppercase text-white">
            DARSH VAISHNANI
          </div>
          <div className="flex items-center gap-2 text-neutral-500">
            <span>© 2026</span>
            <span>·</span>
            <span>ALL RIGHTS RESERVED</span>
            <span>·</span>
            <span>DESIGN MEETS TECHNOLOGY</span>
          </div>
        </div>

        {/* External Links */}
        <div className="flex flex-wrap items-center gap-6 text-neutral-400">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-lime-400 transition-colors uppercase"
          >
            GITHUB
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-lime-400 transition-colors uppercase"
          >
            TWITTER / X
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-lime-400 transition-colors uppercase"
          >
            LINKEDIN
          </a>
          <a
            href="mailto:darshprime6id@gmail.com"
            className="hover:text-lime-400 transition-colors uppercase"
          >
            EMAIL
          </a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors uppercase cursor-pointer"
        >
          <span>BACK TO SUMMIT</span>
          <span className="text-lime-400">↑</span>
        </button>

      </div>
    </footer>
  );
};

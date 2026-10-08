import React from 'react';

export const HeroNavigation: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12 py-6 border-b border-white/5 bg-[#050505]/70 backdrop-blur-md transition-all duration-300">
      {/* Wordmark */}
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        className="font-mono text-xs md:text-sm font-bold tracking-[0.25em] text-white hover:text-lime-400 transition-colors uppercase"
      >
        DARSH VAISHNANI
      </a>

      {/* Nav Links */}
      <nav className="hidden md:flex items-center gap-6 lg:gap-10">
        <button onClick={() => scrollTo('hero')} className="text-xs font-mono font-medium tracking-[0.2em] text-neutral-400 hover:text-white transition-colors cursor-pointer">CONCEPT</button>
        <button onClick={() => scrollTo('hands-section')} className="text-xs font-mono font-medium tracking-[0.2em] text-neutral-400 hover:text-white transition-colors cursor-pointer">DUALITY</button>
        <button onClick={() => scrollTo('work-section')} className="text-xs font-mono font-medium tracking-[0.2em] text-neutral-400 hover:text-white transition-colors cursor-pointer">SELECTED WORK</button>
        <button onClick={() => scrollTo('about-section')} className="text-xs font-mono font-medium tracking-[0.2em] text-neutral-400 hover:text-white transition-colors cursor-pointer">EXPERTISE</button>
        <button onClick={() => scrollTo('contact-section')} className="text-xs font-mono font-medium tracking-[0.2em] text-neutral-400 hover:text-white transition-colors cursor-pointer">INQUIRIES</button>
      </nav>

      {/* CTA */}
      <button
        onClick={() => scrollTo('contact-section')}
        className="text-xs font-mono tracking-[0.2em] text-black bg-white hover:bg-lime-400 px-4 py-2 transition-all duration-300 font-semibold uppercase whitespace-nowrap cursor-pointer shadow-sm"
      >
        INITIATE CONTACT
      </button>
    </header>
  );
};

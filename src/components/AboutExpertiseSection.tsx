import React, { useState } from 'react';
import portraitImg from '../assets/images/myimage.png';

interface CapabilityRow {
  num: string;
  title: string;
  tagline: string;
  tags: string[];
}

const CAPABILITIES: CapabilityRow[] = [
  {
    num: '01',
    title: 'ART DIRECTION & BRAND SYSTEMS',
    tagline: 'Monumental typography, sculptural packaging, and high-fashion visual narratives.',
    tags: ['Editorial Grids', 'Typography Choreography', '3D Packaging', 'Brand Architecture'],
  },
  {
    num: '02',
    title: 'CREATIVE COMPUTATION & SHADERS',
    tagline: 'Zero-jank 120fps pipelines, custom WebGL fragment shaders, and mathematical physics.',
    tags: ['TypeScript / React 19', 'Three.js / WebGL / GLSL', 'Hardware Compositors', 'Canvas DSP'],
  },
  {
    num: '03',
    title: 'KINETIC & SENSORY INTERACTION',
    tagline: 'Physical momentum in UI: scroll-driven anatomical choreography and reactive cursors.',
    tags: ['Sub-Pixel Lerp', 'Mask Reveal Engines', 'Micro-Interactions', 'Spatial Audio'],
  },
  {
    num: '04',
    title: 'DUALITY & SYNTHETIC BIOLOGY',
    tagline: 'Where Renaissance human form converges with vacuum-sealed cybernetic aesthetics.',
    tags: ['Organic Morphing', 'Multi-Layer Compositing', 'Experimental Prototyping', 'Real-Time FX'],
  },
];

const MARQUEE_KEYWORDS = [
  'DARSH VAISHNANI',
  'CREATIVE TECHNOLOGIST',
  'ART DIRECTOR',
  '120FPS ENGINEERING',
  'KINETIC CHOREOGRAPHY',
  'EDITORIAL TYPOGRAPHY',
  'CUSTOM GLSL SHADERS',
  'DUALITY & SYNTHESIS',
];

export const AboutExpertiseSection: React.FC = () => {
  const [activeCap, setActiveCap] = useState<number | null>(0);
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);

  return (
    <section id="about-section" className="relative w-full bg-[#050505] text-white border-t border-white/10 overflow-hidden">
      
      {/* 1. TOP RUNNING KINETIC TICKER (High-Impact Editorial Ticker) */}
      <div className="w-full bg-[#0c0c0c] border-b border-white/10 py-3 sm:py-3.5 overflow-hidden select-none">
        <div className="animate-ticker flex items-center whitespace-nowrap">
          {[...MARQUEE_KEYWORDS, ...MARQUEE_KEYWORDS].map((kw, i) => (
            <div key={i} className="flex items-center mx-5 md:mx-8 group cursor-default">
              <span className="font-bebas text-xl sm:text-2xl md:text-3xl tracking-widest text-neutral-300 group-hover:text-lime-400 transition-colors uppercase">
                {kw}
              </span>
              <span className="ml-5 md:ml-8 text-lime-400 text-xs sm:text-sm select-none">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        
        {/* 2. SECTION CHAPTER KICKER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-white/10 mb-16 gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-lime-400 tracking-[0.3em] uppercase">
              [ 03 / IDENTITY & PHILOSOPHY ]
            </span>
            <span className="text-neutral-600 font-mono text-xs">/</span>
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
              BIOGRAPHY & PRACTICE
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-lime-400">
            <span className="h-2 w-2 rounded-full bg-lime-400 animate-pulse" />
            <span>AVAILABLE FOR SELECT COMMISSIONS · 2026</span>
          </div>
        </div>

        {/* 3. MAIN EDITORIAL GRID: PORTRAIT (LEFT) + TYPOGRAPHY & NARRATIVE (RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: EDITORIAL PHOTO & TELEMETRY DOSSIER          */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* The Portrait Container with Gallery Frame */}
            <div
              onMouseEnter={() => setIsPhotoHovered(true)}
              onMouseLeave={() => setIsPhotoHovered(false)}
              className="relative w-full aspect-[3/4] bg-[#0c0c0c] border border-white/15 overflow-hidden group cursor-pointer"
            >
              {/* Corner Reticle Brackets (Like Camera Viewfinder) */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-lime-400/80 z-20 pointer-events-none" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-lime-400/80 z-20 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-lime-400/80 z-20 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-lime-400/80 z-20 pointer-events-none" />

              {/* Top Film Metadata */}
              <div className="absolute top-4 left-0 right-0 px-8 flex items-center justify-between z-20 pointer-events-none font-mono text-[10px] text-white/70 tracking-widest uppercase">
                <span>PORTRAIT // ARCHIVE 01</span>
                <span>FIG. 26-A</span>
              </div>

              {/* The Actual Portrait Photo */}
              <img
                src={portraitImg}
                alt="Darsh Vaishnani — Creative Technologist & Digital Designer"
                className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
                  isPhotoHovered
                    ? 'scale-105 contrast-110 brightness-105'
                    : 'scale-100 contrast-100 brightness-95 grayscale-[15%]'
                }`}
                loading="eager"
              />

              {/* Atmospheric Gradient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 pointer-events-none z-10" />

              {/* Bottom Photo Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-20 pointer-events-none">
                <span className="font-mono text-[10px] text-lime-400 uppercase tracking-widest block mb-1">
                  PRINCIPAL ARCHITECT
                </span>
                <p className="font-anton text-2xl uppercase tracking-wider text-white">
                  DARSH VAISHNANI
                </p>
                <div className="flex items-center justify-between text-neutral-400 font-mono text-[10px] mt-1 pt-2 border-t border-white/10">
                  <span>23.0225° N, 72.5714° E</span>
                  <span className="text-white/60">GLOBAL OPERATIONS</span>
                </div>
              </div>
            </div>

            {/* Tactical Dossier Card Under Photo */}
            <div className="p-6 bg-[#0a0a0a] border border-white/10 space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-neutral-500 uppercase">ROLE</span>
                <span className="text-white font-medium">CREATIVE DIRECTOR & ENGINEER</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-neutral-500 uppercase">STUDIO FOCUS</span>
                <span className="text-white font-medium">HIGH-END INTERACTIVE ART</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-neutral-500 uppercase">STACK CORE</span>
                <span className="text-lime-400 font-medium">THREE.JS · REACT · GLSL</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-500 uppercase">AVAILABILITY</span>
                <span className="text-lime-400 font-medium">SELECT Q4 / 2026 COMMISSIONS</span>
              </div>
            </div>

            {/* Direct Connect Action */}
            <a
              href="#contact-section"
              className="group flex items-center justify-between p-4 bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-lime-400 transition-colors"
            >
              <span>INITIATE COLLABORATION</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>

          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: MODERN EDITORIAL TYPOGRAPHY & DISCIPLINE    */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 flex flex-col space-y-12">
            
            {/* Monumental Headline */}
            <div>
              <span className="font-mono text-xs text-lime-400 tracking-[0.25em] uppercase block mb-4">
                THE MANIFESTO & IDENTITY
              </span>
              <h2 className="font-anton text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight leading-[0.88] text-white">
                SCULPTING <br />
                <span className="text-lime-400">
                  DIGITAL REALITY
                </span> <br />
                WITH ABSOLUTE RIGOR.
              </h2>
            </div>

            {/* Standout Modern Manifesto Paragraph (Space Grotesk) */}
            <div className="border-l-2 border-lime-400 pl-6 py-2">
              <p className="font-grotesk text-xl sm:text-2xl md:text-3xl font-light text-neutral-100 leading-snug tracking-tight">
                I operate where <span className="text-white font-normal underline decoration-lime-400/50 underline-offset-4">visceral visual art direction</span> and <span className="text-lime-400 font-normal">sub-pixel computational engineering</span> collide. No boilerplate templates. No generic software interfaces. Only bespoke interactive spectacles crafted to command attention.
              </p>
            </div>

            {/* Two-Column Deep Narrative Prose */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-neutral-400 font-sans text-sm sm:text-base leading-relaxed border-t border-b border-white/10 py-8">
              <div className="space-y-3">
                <span className="font-mono text-xs text-white uppercase tracking-widest block font-semibold">
                  01 // VISUAL INTUITION
                </span>
                <p>
                  Rooted in classical print typography, cinematic color theory, and avant-garde packaging aesthetics. I treat the browser viewport as an expansive exhibition wall where every layout grid holds gravitational weight.
                </p>
              </div>

              <div className="space-y-3">
                <span className="font-mono text-xs text-white uppercase tracking-widest block font-semibold">
                  02 // COMPUTATIONAL MASTERY
                </span>
                <p>
                  Every micro-interaction is engineered from first principles. Writing custom physics lerp solvers, hardware-accelerated compositor hooks, and GLSL fragment shaders to deliver unwavering 120 FPS fidelity.
                </p>
              </div>
            </div>

            {/* Quantitative Claim-to-Proof Numbers */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-4">
              <div>
                <span className="font-anton text-4xl sm:text-5xl text-white tabular-nums">10+</span>
                <p className="font-mono text-[10px] text-lime-400 uppercase tracking-widest mt-1">YEARS SCULPTING</p>
              </div>
              <div>
                <span className="font-anton text-4xl sm:text-5xl text-lime-400 tabular-nums">120<span className="text-2xl">FPS</span></span>
                <p className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest mt-1">HARDWARE TARGET</p>
              </div>
              <div>
                <span className="font-anton text-4xl sm:text-5xl text-white tabular-nums">40+</span>
                <p className="font-mono text-[10px] text-lime-400 uppercase tracking-widest mt-1">GLOBAL PIECES</p>
              </div>
              <div>
                <span className="font-anton text-4xl sm:text-5xl text-neutral-300 tabular-nums">0.01</span>
                <p className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest mt-1">LERP FIDELITY</p>
              </div>
            </div>

            {/* Interactive Discipline Accordion Matrix */}
            <div className="pt-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="font-mono text-xs text-lime-400 tracking-[0.25em] uppercase">
                  CORE PRACTICE CAPABILITIES
                </span>
                <span className="font-mono text-xs text-neutral-500">HOVER TO INSPECT</span>
              </div>

              <div className="space-y-3">
                {CAPABILITIES.map((cap, idx) => {
                  const isOpen = activeCap === idx;
                  return (
                    <div
                      key={cap.num}
                      onMouseEnter={() => setActiveCap(idx)}
                      onClick={() => setActiveCap(idx)}
                      className={`p-5 border transition-all duration-300 cursor-pointer ${
                        isOpen
                          ? 'bg-[#0f0f0f] border-lime-400/70 shadow-[0_0_20px_rgba(163,230,53,0.15)]'
                          : 'bg-[#080808] border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className={`font-mono text-xs font-bold ${isOpen ? 'text-lime-400' : 'text-neutral-500'}`}>
                            {cap.num}
                          </span>
                          <h4 className={`font-anton text-lg sm:text-xl uppercase tracking-wider transition-colors ${
                            isOpen ? 'text-white' : 'text-neutral-300'
                          }`}>
                            {cap.title}
                          </h4>
                        </div>
                        <span className={`font-mono text-xs transition-transform duration-300 ${isOpen ? 'rotate-90 text-lime-400' : 'text-neutral-500'}`}>
                          →
                        </span>
                      </div>

                      {isOpen && (
                        <div className="mt-4 pt-3 border-t border-white/10 space-y-3 animate-in fade-in duration-200">
                          <p className="font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed">
                            {cap.tagline}
                          </p>
                          <div className="flex flex-wrap gap-2 pt-1">
                            {cap.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="font-mono text-[10px] px-2 py-0.5 bg-black/80 border border-white/15 text-neutral-300 uppercase tracking-wider"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Closing Signature Block */}
            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-neutral-500">
              <p>“CODE IS THE CHISEL. ART IS THE INTENT.”</p>
              <p className="text-neutral-400">DARSH VAISHNANI © 2026</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

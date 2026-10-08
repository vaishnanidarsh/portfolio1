import React, { useState } from 'react';

interface Project {
  id: string;
  title: string;
  year: string;
  discipline: string;
  client: string;
  description: string;
  highlights: string[];
  tech: string[];
}

const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'CYBERNETIC CHRYSALIS',
    year: '2026',
    discipline: 'Speculative 3D Packaging & Art Direction',
    client: 'Autonomous Lab Tokyo',
    description: 'An exploration of biological preservation inside sterile industrial plastic packaging. Investigates the tension between organic vitality and synthetic constraints through tactile shaders and physics displacement.',
    highlights: ['Multi-layer material simulation', 'Organic chlorophyll illumination', 'Vacuum-seal specular topography'],
    tech: ['WebGL', 'GLSL Shaders', 'Three.js', 'Substance 3D'],
  },
  {
    id: '02',
    title: 'THE CREATION PROTOCOL',
    year: '2026',
    discipline: 'Interactive Scroll Choreography',
    client: 'Digital Arts Biennale',
    description: 'Reinterpreting Michelangelo’s Sistine Chapel fresco as a responsive kinetic interface. Two anatomical entities navigate viewport parallax to approach an asymptote of touch driven purely by user scroll velocity.',
    highlights: ['Scroll-linked kinematic timeline', 'Puppet-spring mouse parallax', 'Sub-millisecond compositor rendering'],
    tech: ['React 19', 'Motion Compositor', 'Hardware Accelerated', 'Canvas API'],
  },
  {
    id: '03',
    title: 'NEO-SPATIAL SYSTEM',
    year: '2025',
    discipline: 'Interactive Spatial Sound & Visuals',
    client: 'Klanghaus Berlin',
    description: 'A dark-mode audiovisual environment built for spatial sound projection. Web Audio API frequency analyzers displace high-contrast typography in response to user voice input.',
    highlights: ['32-bit Web Audio FFT analysis', 'Real-time typography warping', 'Spatial room reverb modeling'],
    tech: ['Web Audio API', 'TypeScript', 'Tailwind CSS', 'Vite'],
  },
  {
    id: '04',
    title: 'ALGORITHMIC DUALITY',
    year: '2025',
    discipline: 'Generative Brand & Interactive Design',
    client: 'Synthetica Ventures',
    description: 'An experimental digital identity system that shifts between stark structural monochrome and vibrant bio-synthetic luminescence depending on visitor cursor velocity and viewport focus.',
    highlights: ['Dynamic SVG feather masking', 'Zero-latency interaction loop', 'Art-directed responsive grid'],
    tech: ['Modern CSS Masks', 'Intersection Observer', 'Tailwind v4'],
  },
];

const WALLPAPERS = [
  {
    title: 'BIO-SYNTHESIS I',
    res: '8K ULTRA',
    aspect: '16:9 CINEMATIC',
    gradient: 'from-lime-950/40 via-black to-emerald-950/30',
    accent: '#a3e635',
  },
  {
    title: 'CREATION CONVERGENCE',
    res: '6K MONOCHROME',
    aspect: '16:9 DUAL SCREEN',
    gradient: 'from-neutral-900/60 via-lime-950/20 to-black',
    accent: '#bef264',
  },
  {
    title: 'VACUUM PACKAGED CORE',
    res: '4K VERTICAL',
    aspect: '9:16 MOBILE FOLIO',
    gradient: 'from-emerald-950/40 via-black to-lime-950/30',
    accent: '#a3e635',
  },
];

export const SelectedWorkSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work-section" className="relative w-full bg-[#050505] text-white py-28 md:py-40 px-6 md:px-12 border-t border-white/10 z-20">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
        <div>
          <span className="font-mono text-xs tracking-[0.25em] text-lime-400 uppercase">
            SECTION 3 · DISCOVER & ARCHIVE
          </span>
          <h2 className="font-anton text-4xl sm:text-6xl md:text-8xl uppercase tracking-tight mt-2">
            SELECTED WORKS
          </h2>
        </div>

        <div className="font-mono text-xs text-neutral-400 max-w-sm tracking-wide">
          <p>
            Editorial experiments and interactive commissions at the convergence of art direction, systems architecture, and physical digital interaction.
          </p>
        </div>
      </div>

      {/* Projects List with Editorial Table Hierarchy */}
      <div className="divide-y divide-white/10">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group py-8 md:py-12 flex flex-col lg:flex-row lg:items-center justify-between gap-6 cursor-pointer hover:bg-white/[0.02] px-2 md:px-4 transition-all duration-300"
          >
            {/* Number & Title */}
            <div className="flex items-baseline gap-6 md:gap-10">
              <span className="font-mono text-sm md:text-base text-neutral-500 tabular-nums">
                {project.id}
              </span>
              <h3 className="font-anton text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white group-hover:text-lime-400 group-hover:translate-x-2 transition-all duration-300">
                {project.title}
              </h3>
            </div>

            {/* Metadata (Unboxed text with typographic separators) */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 font-mono text-sm sm:text-base text-neutral-300">
              <span className="text-neutral-200 font-normal">{project.discipline}</span>
              <span aria-hidden="true" className="text-lime-400 font-bold">·</span>
              <span className="text-neutral-300">{project.client}</span>
              <span aria-hidden="true" className="text-lime-400 font-bold">·</span>
              <span className="tabular-nums text-neutral-400">{project.year}</span>
            </div>

            {/* Action prompt */}
            <div className="flex items-center gap-2 font-mono text-xs text-lime-400 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
              <span>CASE STUDY</span>
              <span className="text-sm">→</span>
            </div>
          </div>
        ))}
      </div>

      {/* DISCOVER: DIGITAL WALLPAPERS & ARTIFACTS AREA */}
      <div className="mt-28 pt-16 border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="font-mono text-xs tracking-[0.25em] text-lime-400 uppercase">
              DIGITAL ARTIFACTS & WALLPAPERS
            </span>
            <h3 className="font-anton text-3xl md:text-5xl uppercase tracking-tight text-white mt-1">
              SPECULATIVE EDITIONS
            </h3>
          </div>
          <p className="font-mono text-xs text-neutral-400">
            HIGH-RESOLUTION RENDER ARCHIVE FOR IMMERSIVE SCREENS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WALLPAPERS.map((item, idx) => (
            <div
              key={idx}
              className={`relative h-64 p-6 bg-gradient-to-br ${item.gradient} border border-white/10 hover:border-lime-400/50 flex flex-col justify-between transition-all duration-500 group overflow-hidden`}
            >
              <div className="flex items-center justify-between font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                <span>{item.res}</span>
                <span className="text-lime-400">{item.aspect}</span>
              </div>

              <div>
                <h4 className="font-anton text-2xl uppercase tracking-tight text-white group-hover:text-lime-300 transition-colors">
                  {item.title}
                </h4>
                <div className="mt-3 flex items-center gap-2 font-mono text-[10px] text-neutral-400 group-hover:text-white transition-colors">
                  <span>DISCOVER EDITION</span>
                  <span>↗</span>
                </div>
              </div>

              {/* Ambient lime corner aura */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-lime-500/20 blur-xl rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-[#0a0a0a] border border-white/15 p-6 md:p-10 text-white shadow-2xl">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-3 font-mono text-xs text-lime-400">
                <span>PROJECT {selectedProject.id}</span>
                <span className="text-neutral-600">/</span>
                <span>{selectedProject.year}</span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="font-mono text-xs text-neutral-400 hover:text-white px-2 py-1 transition-colors cursor-pointer"
              >
                ✕ ESC
              </button>
            </div>

            {/* Modal Content */}
            <div className="py-6 space-y-6">
              <h3 className="font-anton text-3xl sm:text-5xl uppercase tracking-tight">
                {selectedProject.title}
              </h3>

              <div className="flex flex-wrap items-center gap-3 text-sm sm:text-base font-mono text-neutral-300">
                <span className="text-white font-medium">{selectedProject.discipline}</span>
                <span aria-hidden="true" className="text-lime-400 font-bold">·</span>
                <span>CLIENT: {selectedProject.client}</span>
              </div>

              <p className="font-sans text-sm md:text-base text-neutral-300 leading-relaxed">
                {selectedProject.description}
              </p>

              <div>
                <h4 className="font-mono text-xs tracking-widest text-lime-400 uppercase mb-3">
                  CORE TECHNICAL HIGHLIGHTS
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs md:text-sm text-neutral-300 font-mono">
                      <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs tracking-widest text-neutral-400 uppercase mb-3">
                  TECHNOLOGY STACK
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-mono bg-white/5 border border-white/10 text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-6 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 bg-lime-400 hover:bg-lime-300 text-black font-mono text-xs font-bold uppercase transition-colors cursor-pointer shadow-lg shadow-lime-900/30"
              >
                RETURN TO FOLIO
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

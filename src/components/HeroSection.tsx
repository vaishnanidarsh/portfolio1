import React, { useRef, useState, useEffect } from 'react';
import { makeTransparent } from '../utils/transparentImage';

interface HeroSectionProps {
  scrollProgress: number;
  onHoverArtworkChange: (isOver: boolean) => void;
}

// Head image bounds in 1920×1080 SVG coordinate space
const HX = 570;
const HY = 40;
const HW = 780;
const HH = 1000;

export const HeroSection: React.FC<HeroSectionProps> = ({
  scrollProgress,
  onHoverArtworkChange,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);
  const headContainerRef = useRef<HTMLDivElement>(null);

  const [blackHeadSrc, setBlackHeadSrc] = useState<string>('/assets/2.png');
  const [greenHeadSrc, setGreenHeadSrc] = useState<string>('/assets/1.png');

  useEffect(() => {
    makeTransparent('/assets/2.png').then(setBlackHeadSrc);
    makeTransparent('/assets/1.png').then(setGreenHeadSrc);
  }, []);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!headContainerRef.current) return;
    const rect = headContainerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    setMousePos({ x, y });
  };

  const handlePointerEnter = () => {
    setIsHovered(true);
    onHoverArtworkChange(true);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    onHoverArtworkChange(false);
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black select-none"
    >
      {/* Subtle lime atmospheric glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_50%,rgba(163,230,53,0.06),transparent_75%)] pointer-events-none" />

      <div
        className="relative w-full h-full max-w-[1920px] max-h-screen flex items-center justify-center p-2 sm:p-4 md:p-8"
        style={{
          transform: `translate3d(0, ${-scrollProgress * 150}px, 0)`,
          opacity: Math.max(0, 1 - scrollProgress * 1.5),
          transition: 'transform 0.05s linear, opacity 0.05s linear',
        }}
      >
        <svg
          viewBox="0 0 1920 1080"
          className="w-full h-full max-h-[96vh] object-contain overflow-visible"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <style>
              {`
                .hero-font {
                  font-family: 'Anton', Impact, sans-serif;
                  font-weight: 900;
                  letter-spacing: -0.04em;
                }
              `}
            </style>

            {/*
              feMorphology outline filter
              ─────────────────────────────────────────────────────
              dilate by 2px → subtract original → white ring.
              Creates ONE clean thin outer ring around the letter
              silhouette with NO inner stroke artifacts.
              radius=2 → ~1px ring at typical viewport sizes.
            */}
            <filter id="letter-outline" x="-3%" y="-5%" width="106%" height="110%">
              <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="expanded" />
              <feComposite operator="out" in="expanded" in2="SourceAlpha" result="ring" />
              <feFlood floodColor="#ffffff" floodOpacity="1" result="white" />
              <feComposite operator="in" in="white" in2="ring" result="outline" />
            </filter>
          </defs>

          {/* ═══════════════════════════════════════════════════════
              LAYER 1 — SOLID WHITE TYPOGRAPHY
              Full-width, full height. Covers entire viewport.
              DARSH:     x=60→1100  (textLength 1040)
              VAISHNANI: x=60→1660  (textLength 1600)
              Both lines fully visible as solid white.
          ═══════════════════════════════════════════════════════ */}
          <g id="layer1-solid" fill="#ffffff" className="hero-font pointer-events-none">
            <text x="60" y="505" fontSize="390" textLength="1040" lengthAdjust="spacingAndGlyphs">
              DARSH
            </text>
            <text x="60" y="865" fontSize="390" textLength="1600" lengthAdjust="spacingAndGlyphs">
              VAISHNANI
            </text>
          </g>

          {/* ═══════════════════════════════════════════════════════
              LAYER 2 — HEAD IMAGE
              Composites naturally over solid text.
              Opaque face area covers solid white below.
              Transparent areas (background) reveal solid white.
          ═══════════════════════════════════════════════════════ */}
          <foreignObject x={HX} y={HY} width={HW} height={HH} className="overflow-visible">
            <div
              ref={headContainerRef}
              onPointerMove={handlePointerMove}
              onPointerEnter={handlePointerEnter}
              onPointerLeave={handlePointerLeave}
              className="relative w-full h-full cursor-none select-none"
            >
              {/* Green core — revealed on hover */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img
                  src={greenHeadSrc}
                  alt="Green Core Bio Head"
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(163,230,53,0.4)]"
                  draggable={false}
                />
              </div>
              {/* Black packaged head with radial reveal on hover */}
              <div
                className="absolute inset-0 flex items-center justify-center transition-all duration-150"
                style={{
                  WebkitMaskImage: isHovered
                    ? `radial-gradient(circle 140px at ${mousePos.x * 100}% ${mousePos.y * 100}%, transparent 0%, transparent 60%, black 100%)`
                    : 'none',
                  maskImage: isHovered
                    ? `radial-gradient(circle 140px at ${mousePos.x * 100}% ${mousePos.y * 100}%, transparent 0%, transparent 60%, black 100%)`
                    : 'none',
                }}
              >
                <img
                  src={blackHeadSrc}
                  alt="Vacuum-Sealed Packaged Head"
                  className="w-full h-full object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.98)]"
                  draggable={false}
                />
              </div>
            </div>
          </foreignObject>

          {/* ═══════════════════════════════════════════════════════
              LAYER 3 — FULL-WIDTH OUTLINE TYPOGRAPHY
              ───────────────────────────────────────────────────────
              Same coordinates as Layer 1. NO clipPath.
              Covers the COMPLETE "DARSH" and "VAISHNANI" text.

              feMorphology filter:
              - fill="#ffffff" provides SourceAlpha letter shapes
              - dilate 2px → expand silhouette
              - subtract original → ONE thin white ring
              - transparent interior → head image visible through letters

              On solid-white areas:  ring is a ~1px border outside letters
              On head-image areas:   ring is clean white outline over image
              Result: full text visible as outlined version throughout.

              ONE <text> per word. No stroke. No shadow. No duplicates.
          ═══════════════════════════════════════════════════════ */}
          <g
            id="layer3-outline"
            fill="#ffffff"
            filter="url(#letter-outline)"
            className="hero-font pointer-events-none"
          >
            <text x="60" y="505" fontSize="390" textLength="1040" lengthAdjust="spacingAndGlyphs">
              DARSH
            </text>
            <text x="60" y="865" fontSize="390" textLength="1600" lengthAdjust="spacingAndGlyphs">
              VAISHNANI
            </text>
          </g>

        </svg>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 font-mono text-[10px] tracking-widest text-neutral-500 uppercase pointer-events-none transition-opacity duration-300"
        style={{ opacity: Math.max(0, 1 - scrollProgress * 2.5) }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-lime-400 animate-pulse" />
        <span>SCROLL DOWN</span>
      </div>
    </section>
  );
};

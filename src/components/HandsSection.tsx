import React, { useRef, useEffect, useState } from 'react';
import { makeTransparent } from '../utils/transparentImage';

export const HandsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftHandRef = useRef<HTMLDivElement>(null);
  const rightHandRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // Reliable image sources with fallbacks & background stripping
  const [leftSource, setLeftSource] = useState<string>('/assets/lh.png');
  const [rightSource, setRightSource] = useState<string>('/assets/rh.png');

  useEffect(() => {
    makeTransparent('/assets/lh.png').then(setLeftSource);
    makeTransparent('/assets/rh.png').then(setRightSource);
  }, []);

  // Smooth animation refs
  const scrollRatio = useRef(0);
  const mousePos = useRef({ x: 0, y: 0 });
  const animFrame = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      
      const progress = Math.max(0, Math.min(1, (windowH - rect.top) / (windowH + rect.height * 0.5)));
      scrollRatio.current = progress;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mousePos.current = { x, y };
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    handleScroll();

    let curLeftOffset = 0;
    let curRightOffset = 0;
    let curMouseX = 0;
    let curMouseY = 0;

    const render = () => {
      const p = scrollRatio.current;
      const targetConvergence = (p - 0.5) * 6;

      curLeftOffset += (targetConvergence - curLeftOffset) * 0.1;
      curRightOffset += (-targetConvergence - curRightOffset) * 0.1;

      curMouseX += (mousePos.current.x * 10 - curMouseX) * 0.08;
      curMouseY += (mousePos.current.y * 8 - curMouseY) * 0.08;

      if (leftHandRef.current) {
        leftHandRef.current.style.transform = `translate3d(${curLeftOffset + curMouseX}px, calc(-50% + ${curMouseY}px), 0)`;
      }

      if (rightHandRef.current) {
        rightHandRef.current.style.transform = `translate3d(${curRightOffset + curMouseX * 0.8}px, calc(-50% + ${curMouseY * 0.8}px), 0)`;
      }

      if (glowRef.current) {
        const glowOpacity = Math.max(0, (p - 0.4) * 1.5);
        glowRef.current.style.opacity = `${Math.min(0.85, glowOpacity)}`;
      }

      animFrame.current = requestAnimationFrame(render);
    };

    animFrame.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animFrame.current);
    };
  }, []);

  return (
    <section
      id="hands-section"
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black text-white select-none py-16"
    >
      {/* Pure black background with subtle green energy field */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_50%,rgba(163,230,53,0.04),transparent_75%)] pointer-events-none" />

      {/* Main 16:9 Stage */}
      <div className="relative w-full max-w-[1920px] h-screen max-h-[1080px] flex items-center justify-center px-4 sm:px-6 md:px-12">
        
        {/* =========================================================================
            LEFT ARM (Human Hand - lh.png)
            - Flipped horizontally so shoulder anchors to left screen boundary
            - Fingertips point inward toward center text
            ========================================================================= */}
        <div
          ref={leftHandRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[38vw] max-w-[620px] h-[36vh] sm:h-[44vh] z-20 pointer-events-none will-change-transform flex items-center justify-start"
        >
          <img
            src={leftSource}
            alt="Left Hand (Human)"
            className="w-full h-full object-contain object-left scale-x-[-1] filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
            draggable={false}
          />
        </div>

        {/* =========================================================================
            CENTER TYPOGRAPHY (Matching Reference Image 1)
            - Single line headline: DESIGN X TECHNOLOGY
            ========================================================================= */}
        <div className="relative z-30 flex flex-col items-center justify-center text-center max-w-[95vw] px-2 pointer-events-none">
          
          {/* Top Line: creating connections */}
          <p className="font-mono text-sm sm:text-base md:text-lg text-lime-400 tracking-[0.2em] lowercase select-none mb-3 sm:mb-4 font-medium">
            creating connections
          </p>

          {/* Center Headline: DESIGN X TECHNOLOGY on a single row */}
          <h2 className="font-anton text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[8.5rem] uppercase tracking-tighter text-white leading-none whitespace-nowrap select-none filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]">
            DESIGN X TECHNOLOGY
          </h2>

          {/* Subtitle */}
          <div className="mt-4 sm:mt-6 font-mono text-xs sm:text-sm md:text-base text-neutral-400 tracking-wider lowercase max-w-xl mx-auto leading-relaxed select-none">
            <p>two distinct disiplines converge into a unified creative</p>
            <p className="mt-0.5">methodology</p>
          </div>

        </div>

        {/* =========================================================================
            RIGHT ARM (Cybernetic Hand - rh.png)
            ========================================================================= */}
        <div
          ref={rightHandRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[34vw] max-w-[580px] h-[36vh] sm:h-[42vh] z-20 pointer-events-none will-change-transform flex items-center justify-end"
        >
          <img
            src={rightSource}
            alt="Right Hand (Cybernetic)"
            className="w-full h-full object-contain object-right filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
            draggable={false}
          />
        </div>

        {/* Energy convergence glow */}
        <div
          ref={glowRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none transition-opacity duration-300 z-10"
          style={{
            opacity: 0,
            background: 'radial-gradient(circle, rgba(163,230,53,0.25) 0%, rgba(132,204,22,0.08) 50%, transparent 70%)',
            filter: 'blur(35px)',
          }}
        />

      </div>
    </section>
  );
};

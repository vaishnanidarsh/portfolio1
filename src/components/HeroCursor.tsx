import React, { useEffect, useRef, useState } from 'react';

interface HeroCursorProps {
  isOverArtwork: boolean;
  artworkLabel?: string;
}

export const HeroCursor: React.FC<HeroCursorProps> = ({
  isOverArtwork,
  artworkLabel = 'REVEAL',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  // Direct DOM references for 120 FPS hardware acceleration
  const innerSquareRef = useRef<HTMLDivElement>(null);
  const outerSquareRef = useRef<HTMLDivElement>(null);

  // Position coordinates in refs (zero React re-renders during motion)
  const mouse = useRef({ x: -100, y: -100 });
  const outerPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Check if hovering clickable or interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = Boolean(
          target.closest('a, button, input, select, textarea, [role="button"], .cursor-pointer')
        );
        setIsHoveringInteractive(isClickable);
      }
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Spring interpolation loop for smooth trailing square
    let animId: number;
    const animate = () => {
      // Snappy, precise mechanical spring follow
      const ease = 0.22;
      outerPos.current.x += (mouse.current.x - outerPos.current.x) * ease;
      outerPos.current.y += (mouse.current.y - outerPos.current.y) * ease;

      // Update inner square (exact 1:1 mouse position, zero latency)
      if (innerSquareRef.current) {
        innerSquareRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
      }

      // Update outer trailing square
      if (outerSquareRef.current) {
        outerSquareRef.current.style.transform = `translate3d(${outerPos.current.x}px, ${outerPos.current.y}px, 0)`;
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      
      {/* 1. INNER SOLID SQUARE CORE (Pinned 1:1 to exact mouse position) */}
      <div
        ref={innerSquareRef}
        className="absolute top-0 left-0 will-change-transform pointer-events-none"
        style={{
          transform: `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`,
        }}
      >
        <div
          className={`-ml-[3px] -mt-[3px] transition-all duration-150 ${
            isOverArtwork
              ? 'w-2 h-2 bg-lime-400 shadow-[0_0_8px_rgba(163,230,53,0.9)]'
              : isHoveringInteractive
              ? 'w-2 h-2 bg-lime-400 shadow-[0_0_8px_rgba(163,230,53,0.9)]'
              : 'w-1.5 h-1.5 bg-white'
          }`}
        />
      </div>

      {/* 2. OUTER GEOMETRIC SQUARE RETICLE (Smooth trailing spring frame) */}
      {/* Exactly like the reference image: sharp geometric box framing the inner square */}
      <div
        ref={outerSquareRef}
        className="absolute top-0 left-0 will-change-transform pointer-events-none"
        style={{
          transform: `translate3d(${outerPos.current.x}px, ${outerPos.current.y}px, 0)`,
        }}
      >
        <div
          className={`flex items-center justify-center transition-all duration-200 ease-out ${
            isOverArtwork
              ? '-ml-7 -mt-7 w-14 h-14 border border-lime-400/90 bg-lime-400/[0.04]'
              : isHoveringInteractive
              ? '-ml-5 -mt-5 w-10 h-10 border border-lime-400/90 bg-lime-500/[0.08] shadow-[0_0_12px_rgba(163,230,53,0.3)]'
              : '-ml-3.5 -mt-3.5 w-7 h-7 border border-white/70 bg-transparent'
          } ${isMouseDown ? 'scale-75' : 'scale-100'}`}
        >
          {/* Subtle technical corner accents when hovering interactive targets */}
          {isHoveringInteractive && !isOverArtwork && (
            <div className="absolute inset-0 border border-dashed border-lime-400/40" />
          )}

          {/* Technical label for artwork reveal mode */}
          {isOverArtwork && (
            <span className="font-mono text-[8px] font-bold tracking-widest text-lime-400 uppercase select-none opacity-90 mt-8 whitespace-nowrap bg-black/80 px-1 border border-lime-400/40">
              {artworkLabel}
            </span>
          )}
        </div>
      </div>

    </div>
  );
};

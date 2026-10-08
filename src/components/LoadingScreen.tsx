import React, { useState, useEffect } from 'react';
import SplitFlapText from './SplitFlapText';

interface LoadingScreenProps {
  onComplete?: () => void;
  minimumDuration?: number; // milliseconds
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onComplete,
  minimumDuration = 3200,
}) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [statusText, setStatusText] = useState('SYSTEM BOOT');

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / minimumDuration) * 100));
      setProgress(pct);

      if (pct < 30) {
        setStatusText('INITIALIZING CORE ENGINE');
      } else if (pct < 65) {
        setStatusText('LOADING CREATIVE MATRIX');
      } else if (pct < 90) {
        setStatusText('SYNCING SHADERS & ASSETS');
      } else {
        setStatusText('ALL SYSTEMS OPERATIONAL');
      }

      if (elapsed >= minimumDuration) {
        clearInterval(interval);
        setProgress(100);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 800); // match exit transition duration
        }, 500);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [minimumDuration, onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 600);
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-[#040804] text-white select-none transition-all duration-700 ease-in-out ${
        isExiting
          ? 'opacity-0 scale-105 pointer-events-none -translate-y-4'
          : 'opacity-100 scale-100'
      }`}
      style={{
        backgroundImage: `
          radial-gradient(ellipse at center, rgba(163, 230, 53, 0.08) 0%, rgba(4, 8, 4, 0.95) 70%, #030603 100%),
          linear-gradient(rgba(163, 230, 53, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(163, 230, 53, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 32px 32px, 32px 32px',
      }}
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-lime-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Header Bar */}
      <div className="w-full max-w-6xl px-6 pt-6 sm:pt-8 flex items-center justify-between z-10 text-xs sm:text-sm font-mono tracking-widest text-lime-400/80">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime-500"></span>
          </span>
          <span className="font-semibold text-lime-300">DARSH.SYS // v2.6</span>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-neutral-400">
          <span className="text-lime-400/60">LATENCY: 12ms</span>
          <span>•</span>
          <span className="text-lime-400/60">KERNEL: LIME-RT</span>
        </div>

        <button
          onClick={handleSkip}
          className="group flex items-center gap-1.5 px-3 py-1 rounded border border-lime-400/30 bg-lime-950/40 text-lime-400 hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all text-xs cursor-pointer font-mono"
        >
          <span>SKIP INTRO</span>
          <span className="group-hover:translate-x-0.5 transition-transform">→</span>
        </button>
      </div>

      {/* Center Display with SplitFlap */}
      <div className="w-full max-w-5xl px-4 flex flex-col items-center justify-center my-auto z-10 text-center">
        {/* Subtitle tag */}
        <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-lime-500/30 bg-lime-950/30 text-lime-300 text-xs tracking-wider uppercase backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
          <span>{statusText}</span>
        </div>

        {/* SplitFlap Text Component */}
        <div className="w-full flex items-center justify-center overflow-x-auto py-4 px-2 no-scrollbar">
          <div className="transform scale-[0.68] sm:scale-90 md:scale-100 transition-transform origin-center">
            <SplitFlapText
              words={[
                'INITIALIZING',
                'DARSH VAISHNANI',
                'CREATIVE TECH',
                'PORTFOLIO 2026',
                'SIGNAL LIVE'
              ]}
              flipDuration={0.11}
              stagger={0.05}
              cycleDelay={1600}
              charset="alphanumeric"
              flipsPerChar={6}
              tileColor="#091408"
              textColor="#bef264"
              tileRadius={8}
              gap={5}
              fontSize={44}
              loop
              padTo={15}
            />
          </div>
        </div>

        {/* Status subline */}
        <p className="mt-5 text-neutral-400 text-xs sm:text-sm font-mono tracking-wider max-w-md">
          DIGITAL DESIGNER & CREATIVE TECHNOLOGIST
        </p>
      </div>

      {/* Bottom Progress Bar & Telemetry */}
      <div className="w-full max-w-3xl px-6 pb-8 sm:pb-10 z-10 flex flex-col gap-3">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-lime-400 font-medium tracking-wider flex items-center gap-2">
            <span>[</span>
            <span>{progress === 100 ? 'READY' : 'LOADING'}</span>
            <span>]</span>
          </span>
          <span className="text-lime-300 font-bold tracking-widest text-sm">
            {progress}%
          </span>
        </div>

        {/* Outer Bar */}
        <div className="relative w-full h-2 bg-neutral-900/80 rounded-full overflow-hidden border border-lime-500/20 p-[1px]">
          <div
            className="h-full bg-gradient-to-r from-lime-600 via-lime-400 to-lime-300 rounded-full transition-all duration-150 ease-out shadow-[0_0_12px_rgba(163,230,53,0.6)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Minimal aesthetic grid corners */}
        <div className="flex items-center justify-between text-[10px] text-lime-400/40 font-mono pt-1">
          <span>LOC: 23.0225° N, 72.5714° E</span>
          <span>FRAMEWORK: REACT 19 + VITE</span>
        </div>
      </div>

      {/* Decorative Corner Borders */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-lime-400/40 pointer-events-none" />
      <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-lime-400/40 pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-lime-400/40 pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-lime-400/40 pointer-events-none" />
    </div>
  );
};

export default LoadingScreen;

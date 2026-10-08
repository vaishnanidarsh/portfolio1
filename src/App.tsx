/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { HeroNavigation } from './components/HeroNavigation';
import { HeroCursor } from './components/HeroCursor';
import { HeroSection } from './components/HeroSection';
import { HandsSection } from './components/HandsSection';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { AboutExpertiseSection } from './components/AboutExpertiseSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOverArtwork, setIsOverArtwork] = useState(false);
  const [heroScrollProgress, setHeroScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowH = window.innerHeight;
      const prog = Math.max(0, Math.min(1, scrollY / (windowH * 0.85)));
      setHeroScrollProgress(prog);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-lime-400 selection:text-black font-sans antialiased overflow-x-hidden">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <HeroCursor isOverArtwork={isOverArtwork} artworkLabel="REVEAL" />
      <HeroNavigation />

      <HeroSection
        scrollProgress={heroScrollProgress}
        onHoverArtworkChange={setIsOverArtwork}
      />
      <HandsSection />
      <SelectedWorkSection />
      <AboutExpertiseSection />
      <ContactSection />
      <Footer />

    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Mail, Check, Copy, ArrowUpRight, Send, Terminal, Clock, MapPin, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [transmissionCode, setTransmissionCode] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  // Live time ticker
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' IST'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('darshprime6id@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) return;

    setIsSubmitting(true);
    const code = `TX-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTransmissionCode(code);
    }, 1200);
  };

  const mailtoUrl = `mailto:darshprime6id@gmail.com?subject=${encodeURIComponent(
    formData.subject || 'Transmission Inquiry'
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section
      id="contact-section"
      className="relative w-full bg-[#050505] text-white py-28 md:py-40 px-6 md:px-12 border-t border-white/10 z-20 overflow-hidden"
    >
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-lime-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-lime-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10 mb-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs tracking-[0.3em] text-lime-400 uppercase">
                [ 04 / TRANSMISSION & INQUIRIES ]
              </span>
              <span className="text-neutral-600 font-mono text-xs">/</span>
              <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                DISPATCH SYSTEM
              </span>
            </div>
            <h2 className="font-anton text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight text-white mt-3">
              INITIATE THE <br />
              <span className="text-lime-400">DIALOGUE.</span>
            </h2>
          </div>

          <div className="font-mono text-xs text-neutral-400 max-w-sm tracking-wide space-y-2">
            <p>
              Open for select creative technology commissions, speculative art direction, and interactive systems engineering worldwide.
            </p>
            <div className="flex items-center gap-2 text-lime-400 pt-1">
              <span className="h-2 w-2 rounded-full bg-lime-400 animate-ping" />
              <span className="font-bold">SYSTEM STATUS: ONLINE & ACCEPTING</span>
            </div>
          </div>
        </div>

        {/* Two-Column Grid: Telemetry & Dossier (Left) + Interactive Dispatch (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Live Status, Direct Mail, Coordinates, & Matrix */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Contact Card */}
            <div className="bg-[#0a0a0a] border border-white/15 p-6 md:p-8 space-y-6 relative overflow-hidden group">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-xs tracking-widest text-neutral-400 uppercase flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-lime-400" />
                  DIRECT FREQUENCY
                </span>
                <span className="font-mono text-[10px] text-lime-400 bg-lime-400/10 px-2 py-0.5 border border-lime-400/20">
                  PRIMARY INBOX
                </span>
              </div>

              <div>
                <span className="font-mono text-xs text-neutral-500 uppercase block mb-1">
                  EMAIL TRANSMISSION
                </span>
                <a
                  href="mailto:darshprime6id@gmail.com"
                  className="font-anton text-xl sm:text-2xl text-white hover:text-lime-400 transition-colors break-all"
                >
                  darshprime6id@gmail.com
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white text-white hover:text-black font-mono text-xs uppercase font-bold transition-all cursor-pointer border border-white/20"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-lime-400" />
                      <span>COPIED TO CLIPBOARD</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY ADDRESS</span>
                    </>
                  )}
                </button>

                <a
                  href="mailto:darshprime6id@gmail.com"
                  className="flex items-center gap-2 px-4 py-2.5 bg-lime-400 hover:bg-lime-300 text-black font-mono text-xs uppercase font-bold transition-colors cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>OPEN CLIENT</span>
                </a>
              </div>
            </div>

            {/* Telemetry Dossier */}
            <div className="bg-[#080808] border border-white/10 p-6 space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-neutral-500 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-lime-400" />
                  LOCAL STUDIO TIME
                </span>
                <span className="text-white font-mono tabular-nums">{currentTime || '12:00:00 IST'}</span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-neutral-500 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-lime-400" />
                  HEADQUARTERS
                </span>
                <span className="text-white uppercase">GUJARAT , RAJKOT</span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-neutral-500 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-lime-400" />
                  RESPONSE HORIZON
                </span>
                <span className="text-lime-400 font-bold">&lt; 24 HOURS</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-neutral-500">TYPICAL ENGAGEMENT</span>
                <span className="text-neutral-300">CUSTOM ART DIRECTION & TECH</span>
              </div>
            </div>

            {/* Network Nodes / Social Links */}
            <div className="space-y-3">
              <span className="font-mono text-xs tracking-widest text-neutral-400 uppercase block">
                GLOBAL NETWORK NODES
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                {[
                  { name: 'GITHUB', handle: 'darshvaishnani', url: 'https://github.com' },
                  { name: 'LINKEDIN', handle: 'darsh-vaishnani', url: 'https://linkedin.com' },
                ].map((node, i) => (
                  <a
                    key={i}
                    href={node.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 bg-[#0a0a0a] border border-white/10 hover:border-lime-400/60 flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <span className="text-neutral-300 group-hover:text-lime-400 block font-bold transition-colors">
                        {node.name}
                      </span>
                      <span className="text-[10px] text-neutral-500 block mt-0.5">
                        {node.handle}
                      </span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-lime-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT: Interactive Inquiry Dispatch Terminal Form */}
          <div className="lg:col-span-7 bg-[#0a0a0a] border border-white/15 p-6 sm:p-10 relative">
            
            {/* Terminal Header Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="h-3 w-3 rounded-full bg-lime-400 inline-block" />
                <span className="font-mono text-xs text-neutral-400 ml-2">
                  DISPATCH_TERMINAL // v2.6.0
                </span>
              </div>
              <span className="font-mono text-[10px] text-lime-400 tracking-widest uppercase">
                ENCRYPTED TRANSMISSION
              </span>
            </div>

            {submitted ? (
              /* Success Receipt View */
              <div className="py-12 space-y-6 text-center animate-in fade-in zoom-in-95 duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lime-400/10 border border-lime-400/30 text-lime-400 mb-2">
                  <Check className="w-8 h-8" />
                </div>
                
                <h3 className="font-anton text-3xl sm:text-5xl uppercase tracking-tight text-white">
                  TRANSMISSION RECEIVED
                </h3>
                
                <p className="font-mono text-xs sm:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-lime-400 font-bold">{formData.name}</span>. Your dispatch packet has been securely logged with authorization code <span className="font-bold text-white bg-white/10 px-2 py-0.5">{transmissionCode}</span>.
                </p>

                <div className="p-4 bg-black/60 border border-white/10 max-w-md mx-auto font-mono text-xs text-left space-y-2">
                  <div className="flex justify-between text-neutral-400">
                    <span>NAME:</span>
                    <span className="text-white">{formData.name}</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>EMAIL:</span>
                    <span className="text-lime-400">{formData.email}</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>SUBJECT:</span>
                    <span className="text-white">{formData.subject}</span>
                  </div>
                  <div className="pt-2 border-t border-white/10 text-neutral-400">
                    <span className="block mb-1">MESSAGE:</span>
                    <span className="text-neutral-200 line-clamp-3">{formData.message}</span>
                  </div>
                </div>

                <div className="pt-4 flex justify-center gap-4">
                  <a
                    href={mailtoUrl}
                    className="px-6 py-3 bg-lime-400 hover:bg-lime-300 text-black font-mono text-xs font-bold uppercase transition-colors"
                  >
                    SYNC VIA MAIL CLIENT
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-6 py-3 bg-white/10 hover:bg-white text-white hover:text-black font-mono text-xs font-bold uppercase transition-colors cursor-pointer border border-white/20"
                  >
                    SEND ANOTHER PACKET
                  </button>
                </div>
              </div>
            ) : (
              /* The Form Interface */
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Name & Email (Row) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-neutral-400 uppercase tracking-wider block">
                      01 // NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Lin"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 px-4 py-3 font-mono text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-lime-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-xs text-neutral-400 uppercase tracking-wider block">
                      02 // EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. maya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 px-4 py-3 font-mono text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-lime-400 transition-colors"
                    />
                  </div>
                </div>

                {/* 2. Subject */}
                <div className="space-y-2">
                  <label className="font-mono text-xs text-neutral-400 uppercase tracking-wider block">
                    03 // SUBJECT *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Interactive Commission / 3D Art Direction"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-black/60 border border-white/15 px-4 py-3 font-mono text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-lime-400 transition-colors"
                  />
                </div>

                {/* 3. Message */}
                <div className="space-y-2">
                  <label className="font-mono text-xs text-neutral-400 uppercase tracking-wider block">
                    04 // MESSAGE *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Write your message, project goals, or inquiry details here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black/60 border border-white/15 p-4 font-mono text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-lime-400 transition-colors resize-none"
                  />
                </div>

                {/* Submit / Dispatch Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="font-mono text-[11px] text-neutral-500">
                    * ALL TRANSMISSIONS ARE DIRECT & CONFIDENTIAL
                  </span>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <a
                      href={mailtoUrl}
                      className="px-4 py-3 bg-white/5 hover:bg-white/10 text-neutral-300 font-mono text-xs uppercase font-medium transition-colors border border-white/10 text-center flex-1 sm:flex-none"
                    >
                      DIRECT MAILTO
                    </a>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center gap-2 px-8 py-3 bg-lime-400 hover:bg-lime-300 text-black font-mono text-xs font-bold uppercase transition-all duration-300 cursor-pointer disabled:opacity-50 shadow-lg shadow-lime-900/30 flex-1 sm:flex-none"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="h-3 w-3 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>TRANSMITTING...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>DISPATCH INQUIRY</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

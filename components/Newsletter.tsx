'use client';

import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      setEmail('');
    } else {
      alert('Please enter a valid aesthetic email.');
    }
  };

  return (
    <section id="newsletter" className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
      <div className="relative w-full rounded-[48px] overflow-hidden bg-gradient-to-r from-[#6366f1] via-[#818cf8] to-[#a78bfa] p-12 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-12 group transition-all duration-700">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-all duration-1000"></div>

        <div className="relative z-10 max-w-xl">
          <h2 className="text-5xl lg:text-7xl font-display font-medium text-white mb-8 tracking-tight leading-tight">
            Ready to refine <br />
            your <span className="font-extrabold italic">style?</span>
          </h2>
          <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-md">
            Join our Elite Atelier for early access to AI-curated drops and private collections.
          </p>
        </div>

        <div className="relative z-10 w-full lg:w-auto min-w-[350px] lg:min-w-[500px]">
          {!isSubscribed ? (
            <>
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-2 flex items-center shadow-2xl transition-all duration-500 hover:border-white/40">
                <input 
                  type="email" 
                  placeholder="Your aesthetic email..." 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-none text-white placeholder:text-white/60 px-8 py-5 w-full focus:ring-0 outline-none text-lg"
                />
                <button 
                  onClick={handleSubscribe}
                  className="bg-white text-[#6366f1] px-12 py-5 rounded-full font-extrabold uppercase tracking-[0.2em] text-[11px] hover:bg-atelier-dark hover:text-white transition-all shadow-xl active:scale-95"
                >
                  Join
                </button>
              </div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-bold mt-6 ml-8">
                Privacy prioritized. Curator selected.
              </p>
            </>
          ) : (
            <div className="flex flex-col items-center lg:items-end animate-fade-in">
              <div className="flex items-center gap-4 text-white mb-4">
                <CheckCircle2 size={32} className="text-white" />
                <span className="text-2xl font-display font-medium">Welcome to the Atelier</span>
              </div>
              <p className="text-white/60 text-xs uppercase tracking-widest font-bold">
                Check your inbox for the curation keys.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

'use client';

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen min-h-[900px] flex items-center overflow-hidden bg-white">
      {/* Immersive Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.png" 
          alt="Premium Lifestyle" 
          className="w-full h-full object-cover object-center opacity-100"
        />
        {/* Subtle white-to-transparent gradient from left for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent"></div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="max-w-2xl animate-fade-in-up">
          <div className="flex items-center gap-4 mb-10">
            <span className="px-3 py-1 bg-atelier-accent/10 rounded text-[10px] uppercase tracking-[0.4em] font-extrabold text-[#6366f1]">
              AI-Powered Experience
            </span>
          </div>

          <h1 className="text-7xl md:text-[110px] font-display font-medium text-slate-900 leading-[0.9] mb-12 tracking-[-0.04em]">
            Shop Smarter.<br />
            <span className="font-extrabold text-[#3730a3]">Live Better.</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-500 max-w-xl leading-relaxed mb-16 font-light">
            Step into the Digital Atelier. Our concierge AI curates the world&apos;s 
            finest collections tailored exclusively for your lifestyle.
          </p>

          <div className="flex flex-wrap gap-6 items-center">
            <button 
              onClick={() => document.getElementById('selection')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-[#6366f1] to-[#818cf8] text-white px-12 py-5 font-extrabold uppercase tracking-[0.2em] text-[11px] rounded-xl hover:shadow-2xl hover:shadow-indigo-500/40 transition-all duration-500 hover:-translate-y-1 active:scale-95"
            >
              Explore Atelier
            </button>
            <button className="bg-[#f0f0f8] text-[#3730a3] px-12 py-5 font-extrabold uppercase tracking-[0.2em] text-[11px] rounded-xl hover:bg-slate-200 transition-all duration-500 hover:-translate-y-1 active:scale-95">
              Seasonal Lookbook
            </button>
          </div>
        </div>
      </div>

      {/* Subtle light glow behind text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[180px] -translate-x-1/4 pointer-events-none"></div>
    </div>
  );
};

export default Hero;

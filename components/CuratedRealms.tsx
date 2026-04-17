'use client';

import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useSearchStore } from '@/store/useSearchStore';

const realms = [
  { 
    name: 'Timepieces', 
    description: 'Precision & Elegance', 
    image: '/images/watch.png', 
    className: 'lg:col-span-5 lg:row-span-2'
  },
  { 
    name: 'Acoustic Engineering', 
    description: 'Sound perfected by AI analytics.', 
    image: '/images/audio.png', 
    className: 'lg:col-span-7 lg:row-span-1'
  },
  { 
    name: 'Essence', 
    description: 'Tools for the curated life.', 
    image: '/images/essence.png', 
    className: 'lg:col-span-4 lg:row-span-1'
  },
  { 
    name: 'Footwear', 
    description: 'Minimalist performance.', 
    image: '/images/shoes.png', 
    className: 'lg:col-span-3 lg:row-span-1'
  },
];

const CuratedRealms = () => {
  const { setActiveCategory } = useSearchStore();

  const handleCategoryClick = (category: string) => {
    // Map realm names to product categories if necessary
    const categoryMap: { [key: string]: string } = {
      'Timepieces': 'Home', // Or 'Accessories' if it existed
      'Acoustic Engineering': 'Audio',
      'Essence': 'Stationery',
      'Footwear': 'Photography' // Based on the Lumix image used in initial data? Wait.
    };
    
    // For now, let's use a simpler mapping or just use the name if it matches
    const targetCategory = categoryMap[category] || category;
    setActiveCategory(targetCategory);
    document.getElementById('selection')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="realms" className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-4xl md:text-5xl font-display font-medium text-atelier-dark tracking-tight">
              Curated Realms
            </h2>
            <button className="text-[11px] uppercase tracking-[0.2em] font-extrabold text-[#6366f1] flex items-center gap-2 hover:translate-x-1 transition-transform">
              View All Categories <ArrowRight size={16} />
            </button>
          </div>
          <p className="text-slate-400 text-sm font-light">Explore departments redefined by intelligence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 auto-rows-[300px] gap-6">
          {realms.map((realm, index) => (
            <div 
              key={index}
              onClick={() => handleCategoryClick(realm.name)}
              className={`group cursor-pointer relative overflow-hidden rounded-2xl ${realm.className}`}
            >
              <div className="absolute inset-0 bg-slate-100 transition-transform duration-700 group-hover:scale-105">
                <img 
                  src={realm.image} 
                  alt={realm.name} 
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              </div>
              
              <div className="absolute bottom-10 left-10">
                <h4 className="text-3xl font-display font-medium text-white mb-2">
                  {realm.name}
                </h4>
                {realm.name === 'Timepieces' && (
                  <p className="text-sm text-white/70 font-light tracking-wide">
                    Precision & Elegance
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedRealms;

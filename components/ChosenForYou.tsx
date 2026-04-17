'use client';

import React, { useRef } from 'react';
import { ArrowRight, ArrowLeft, ChevronRight } from 'lucide-react';
import { useUIStore } from '@/store/useUIStore';

const recommendations = [
  {
    id: 'rec1',
    title: 'Noir Performance Soles',
    match: 98,
    image: '/images/shoes.png',
    price: 320.00,
    category: 'Footwear',
    rating: 5,
  },
  {
    id: 'rec2',
    title: 'Titanium Chronograph',
    match: 92,
    image: '/images/watch.png',
    price: 1150.00,
    category: 'Accessories',
    rating: 5,
  },
  {
    id: 'rec3',
    title: 'Modernist Desk Set',
    match: 88,
    image: '/images/essence.png',
    price: 180.00,
    category: 'Stationery',
    rating: 4,
  },
  {
    id: 'rec4',
    title: 'Lumix Vintage Edition',
    match: 85,
    image: '/images/shoes.png', // reusing images for layout testing
    price: 499.00,
    category: 'Photography',
    rating: 5,
  },
  {
    id: 'rec5',
    title: 'Ethereal Over-Ear',
    match: 82,
    image: '/images/audio.png',
    price: 850.00,
    category: 'Audio',
    rating: 5,
  }
];

const ChosenForYou = () => {
  const { openQuickView } = useUIStore();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-atelier-dark tracking-tight mb-2">
              Chosen For You
            </h2>
            <p className="text-slate-400 text-sm font-light">Based on your aesthetic profile</p>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="h-12 w-12 rounded-full bg-slate-100/80 flex items-center justify-center text-slate-400 hover:bg-atelier-dark hover:text-white transition-all shadow-sm"
            >
              <ArrowLeft size={18} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="h-12 w-12 rounded-full bg-slate-100/80 flex items-center justify-center text-slate-400 hover:bg-atelier-dark hover:text-white transition-all shadow-sm"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {recommendations.map((item, index) => (
            <div 
              key={index}
              className="min-w-[340px] md:min-w-[420px] bg-[#5B5B62] rounded-[32px] p-6 flex items-center gap-6 transition-transform hover:-translate-y-1 duration-500 snap-start"
            >
              {/* Product Image Box */}
              <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center overflow-hidden shrink-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover p-2"
                />
              </div>

              {/* Content */}
              <div className="flex-grow">
                <div className="text-[10px] uppercase tracking-widest font-extrabold text-[#6366f1] mb-2">
                  {item.match}% MATCH
                </div>
                <h4 className="text-lg font-display font-medium text-white mb-6 leading-tight">
                  {item.title}
                </h4>
                <button 
                  onClick={() => openQuickView(item)}
                  className="text-[11px] uppercase tracking-[0.2em] font-extrabold text-[#6366f1] hover:text-white transition-colors flex items-center gap-3 group"
                >
                  Quick View
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChosenForYou;

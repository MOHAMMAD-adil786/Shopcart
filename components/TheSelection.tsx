'use client';

import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { useSearchStore } from '@/store/useSearchStore';

const categories = ["AI CHOICE", "Trending", "Photography", "Audio", "Stationery", "Home"];

const products = [
  { id: '1', title: 'Lumix Vintage Edition', price: 499.00, category: 'PHOTOGRAPHY', image: '/images/shoes.png', rating: 5, status: 'ai-choice' as const },
  { id: '2', title: 'Ethereal Over-Ear', price: 850.00, category: 'AUDIO', image: '/images/audio.png', rating: 5, status: 'trending' as const },
  { id: '3', title: 'Architect Fountain Pen', price: 120.00, category: 'STATIONERY', image: '/images/essence.png', rating: 5, status: 'ai-choice' as const },
  { id: '4', title: 'Lumina Orbital Lamp', price: 235.00, category: 'HOME', image: '/images/watch.png', rating: 4, status: 'trending' as const },
];

const TheSelection = () => {
  const { activeCategory, setActiveCategory, searchQuery } = useSearchStore();

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = 
        activeCategory === "AI CHOICE" || 
        product.category.toLowerCase() === activeCategory.toLowerCase() ||
        (activeCategory === "Trending" && product.status === "trending");
      
      const matchesSearch = 
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="selection" className="py-32 bg-[#f9f9fb]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div>
            <h2 className="text-[11px] uppercase tracking-[0.4em] font-extrabold text-[#6366f1] mb-6">The Selection</h2>
            <h3 className="text-4xl md:text-6xl font-display font-medium text-slate-900 tracking-tight leading-tight">
              Featured Masterpieces
            </h3>
          </div>
          
          <div 
            className="w-full lg:w-max overflow-x-auto pb-2 scrollbar-hide mr-auto lg:mr-0 lg:ml-auto"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex bg-white/50 backdrop-blur-sm p-1.5 rounded-2xl shadow-sm border border-slate-100 min-w-max">
              {categories.map((cat) => (
                  <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 lg:px-5 py-3 rounded-xl text-[10px] uppercase tracking-widest font-extrabold transition-all whitespace-nowrap ${
                      activeCategory === cat ? 'bg-atelier-dark text-white shadow-lg' : 'text-slate-400 hover:text-atelier-dark hover:bg-slate-50'
                    }`}
                  >
                    {cat}
                  </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              category={product.category}
              rating={product.rating}
              status={product.status}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheSelection;

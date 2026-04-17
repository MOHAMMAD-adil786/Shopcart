'use client';

import React, { useState } from 'react';
import { Star, ShoppingCart, Heart, Check } from 'lucide-react';
import { useCart } from '@/store/useCart';
import { useUIStore } from '@/store/useUIStore';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  status?: 'ai-choice' | 'trending' | 'limited';
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, price, image, category, rating, status }) => {
  const addItem = useCart((state) => state.addItem);
  const { openQuickView } = useUIStore();
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    addItem({ id, title, price, image });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="group bg-white rounded-[24px] border border-slate-100 p-4 transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2">
      <div 
        className="relative aspect-square mb-6 rounded-[20px] overflow-hidden bg-slate-50 cursor-pointer"
        onClick={() => openQuickView({ id, title, price, image, category, rating, status })}
      >
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          <div className="px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-md text-[9px] font-extrabold text-slate-900 uppercase tracking-[0.2em] shadow-sm w-fit border border-slate-100">
            {category}
          </div>
          {status === 'ai-choice' && (
            <div className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-atelier-accent to-purple-600 text-white text-[9px] font-extrabold uppercase tracking-[0.2em] shadow-lg shadow-indigo-500/30 w-fit">
              AI CHOICE
            </div>
          )}
          {status === 'trending' && (
            <div className="px-3 py-1.5 rounded-lg bg-atelier-dark text-white text-[9px] font-extrabold uppercase tracking-[0.2em] shadow-lg w-fit">
              TRENDING
            </div>
          )}
        </div>
        
        <button className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-white/95 backdrop-blur-md text-slate-400 hover:text-atelier-accent transition-all shadow-sm border border-slate-100 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
          <Heart size={18} />
        </button>
        
        {/* Product image with subtle zoom on hover */}
        <div className="w-full h-full flex items-center justify-center bg-slate-50 transition-transform duration-1000 group-hover:scale-110">
           {image ? (
             <img src={image} alt={title} className="w-full h-full object-cover" />
           ) : (
             <ShoppingCart size={48} className="text-slate-200 opacity-20" />
           )}
        </div>
      </div>

      <div className="px-2 pb-2">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-display font-bold text-atelier-dark line-clamp-1 group-hover:text-atelier-accent transition-colors duration-500">
            {title}
          </h3>
        </div>
        
        <div className="flex items-center gap-1.5 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={12} 
              className={i < rating ? "fill-atelier-accent text-atelier-accent" : "text-slate-200"} 
            />
          ))}
          <span className="text-[10px] text-slate-400 ml-2 font-bold tracking-widest">4.8 / 5.0</span>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold mb-1">Price</span>
            <span className="text-2xl font-display font-extrabold text-atelier-dark tracking-tighter">${price}</span>
          </div>
          <button 
            onClick={handleAdd}
            className={`h-14 w-14 rounded-2xl transition-all duration-500 active:scale-90 flex items-center justify-center group/btn shadow-sm overflow-hidden relative ${
              isAdded ? 'bg-emerald-500 text-white' : 'bg-slate-50 text-atelier-dark hover:bg-atelier-dark hover:text-white'
            }`}
          >
            {isAdded ? (
              <Check size={20} className="relative z-10 animate-scale-in" />
            ) : (
              <ShoppingCart size={20} className="relative z-10 transition-transform duration-500 group-hover/btn:scale-110" />
            )}
            {!isAdded && <div className="absolute inset-0 bg-atelier-dark translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out"></div>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

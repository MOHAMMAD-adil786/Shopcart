'use client';

import React, { useState } from 'react';
import { X, ShoppingCart, Check } from 'lucide-react';
import { useUIStore } from '@/store/useUIStore';
import { useCart } from '@/store/useCart';

const QuickViewModal = () => {
  const { isQuickViewOpen, closeQuickView, selectedProduct, openCart } = useUIStore();
  const addItem = useCart((state) => state.addItem);
  const [isAdded, setIsAdded] = useState(false);

  if (!isQuickViewOpen || !selectedProduct) return null;

  const handleAdd = () => {
    addItem({ 
      id: selectedProduct.id, 
      title: selectedProduct.title, 
      price: selectedProduct.price, 
      image: selectedProduct.image 
    });
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      closeQuickView();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity animate-fade-in-up" 
        onClick={closeQuickView}
      />

      <div className="relative w-full max-w-4xl bg-white rounded-[32px] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-scale-in">
        {/* Close Button */}
        <button 
          onClick={closeQuickView}
          className="absolute top-6 right-6 z-10 h-10 w-10 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center text-slate-400 hover:text-atelier-dark transition-all hover:bg-white"
        >
          <X size={20} />
        </button>

        {/* Product Image Section */}
        <div className="w-full md:w-1/2 p-6 md:p-12 pb-0 md:pb-12 bg-slate-50 flex items-center justify-center relative min-h-[300px]">
           <div className="absolute top-8 left-8 z-10 flex flex-col gap-2">
             <div className="px-4 py-2 rounded-xl bg-white shadow-sm text-[10px] font-extrabold text-slate-900 uppercase tracking-widest border border-slate-100">
               {selectedProduct.category}
             </div>
             {selectedProduct.status && (
               <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-atelier-accent to-purple-600 text-white shadow-lg text-[10px] font-extrabold uppercase tracking-widest w-fit">
                 {selectedProduct.status === 'ai-choice' ? 'AI CHOICE' : selectedProduct.status}
               </div>
             )}
           </div>
           {selectedProduct.image ? (
             <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full h-full object-contain max-h-[400px] object-center drop-shadow-2xl" />
           ) : (
             <ShoppingCart size={64} className="text-slate-200" />
           )}
        </div>

        {/* Product Details Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-display font-medium text-atelier-dark mb-4 leading-tight tracking-tight">
            {selectedProduct.title}
          </h2>
          
          <div className="flex items-center gap-4 mb-8">
             <span className="text-4xl font-display font-extrabold text-[#6366f1] tracking-tighter">
               ${selectedProduct.price}
             </span>
             <span className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400 border border-slate-200 px-3 py-1 rounded-full">
               In Stock
             </span>
          </div>

          <p className="text-slate-500 font-light leading-relaxed mb-10">
            Carefully curated for its exceptional build quality and aesthetic profile. This item meets all standards for the modern lifestyle.
          </p>

          <button 
            onClick={handleAdd}
            className={`w-full py-6 rounded-2xl font-extrabold uppercase tracking-[0.2em] text-[11px] transition-all duration-500 flex items-center justify-center gap-3 shadow-xl active:scale-[0.98] ${
              isAdded 
                ? 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-emerald-500/30' 
                : 'bg-atelier-dark text-white hover:bg-atelier-accent'
            }`}
          >
            {isAdded ? (
              <>
                <Check size={18} />
                Added to Selection
              </>
            ) : (
              <>
                <ShoppingCart size={18} />
                Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;

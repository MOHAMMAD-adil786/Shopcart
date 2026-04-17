'use client';

import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/store/useCart';
import { useUIStore } from '@/store/useUIStore';

const CartDrawer = () => {
  const { isCartOpen, closeCart } = useUIStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Always render but hide with CSS to avoid hydration issues
  if (!mounted) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer Panel */}
      <div 
        className={`fixed inset-y-0 right-0 z-[101] w-full max-w-md transform transition-transform duration-500 ease-in-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <CartDrawerContent />
      </div>
    </>
  );
};

const CartDrawerContent = () => {
  const { closeCart } = useUIStore();
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <div className="flex h-full flex-col bg-white shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-8 border-b border-slate-50">
        <h2 className="text-2xl font-display font-bold text-atelier-dark flex items-center gap-3">
          Your Atelier <span className="text-slate-300 font-light">({items.length})</span>
        </h2>
        <button 
          onClick={closeCart}
          className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-atelier-dark hover:text-white transition-all"
        >
          <X size={20} />
        </button>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto px-8 py-8 scrollbar-hide">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="h-24 w-24 rounded-full bg-slate-50 flex items-center justify-center text-slate-200 mb-6">
              <ShoppingBag size={40} />
            </div>
            <h3 className="text-xl font-display font-medium text-atelier-dark mb-2">Empty Selection</h3>
            <p className="text-slate-400 text-sm font-light max-w-[200px]">
              Your curated collection is currently waiting for your first choice.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {items.map((item) => (
              <div key={item.id} className="flex gap-6 group">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 p-2">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-display font-bold text-atelier-dark leading-snug">
                        {item.title}
                      </h4>
                      <span className="text-sm font-display font-extrabold text-atelier-dark">
                        ${item.price}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center bg-slate-50 rounded-lg p-1">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-7 w-7 flex items-center justify-center text-slate-400 hover:text-atelier-dark transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-[11px] font-bold text-atelier-dark">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-7 w-7 flex items-center justify-center text-slate-400 hover:text-atelier-dark transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-slate-300 hover:text-rose-500 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      {items.length > 0 && (
        <div className="border-t border-slate-50 px-8 py-10 space-y-6">
          <div className="flex justify-between items-end">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold mb-1">Subtotal</span>
              <span className="text-3xl font-display font-extrabold text-atelier-dark tracking-tighter">
                ${totalPrice().toFixed(2)}
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-light">VAT & Shipping calculated at checkout</p>
          </div>

          <button className="w-full bg-atelier-dark text-white py-6 rounded-2xl font-extrabold uppercase tracking-[0.2em] text-[11px] hover:bg-atelier-accent transition-all shadow-xl active:scale-[0.98]">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartDrawer;

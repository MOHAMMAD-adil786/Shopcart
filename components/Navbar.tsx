'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import { useCart } from '@/store/useCart';
import { useSearchStore } from '@/store/useSearchStore';
import { useUIStore } from '@/store/useUIStore';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const totalItems = useCart((state) => state.totalItems());
  const { searchQuery, setSearchQuery } = useSearchStore();
  const { openLogin, openCart } = useUIStore();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white shadow-[0_1px_20px_rgba(0,0,0,0.02)] py-4' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Left: Logo and Links */}
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center">
            <span className={`text-2xl font-display font-bold tracking-tight transition-colors duration-500 ${isScrolled ? 'text-[#6366f1]' : 'text-white'}`}>
              Shop<span className={isScrolled ? 'text-[#6366f1]' : 'text-white'}>Cart</span>
            </span>
          </Link>

          <nav className={`hidden lg:flex space-x-10 text-[13px] items-center font-medium transition-colors duration-500 ${isScrolled ? 'text-slate-600' : 'text-white/80'}`}>
            <Link href="/" className={`relative py-2 transition-all ${isScrolled ? 'text-[#6366f1]' : 'text-white font-bold'}`}>
              Discover
              <div className={`absolute bottom-0 left-0 w-full h-[2px] rounded-full transition-all ${isScrolled ? 'bg-[#6366f1]' : 'bg-white'}`}></div>
            </Link>
            <Link href="/atelier" className="hover:text-[#6366f1] transition-all">Atelier</Link>
            <Link href="/collections" className="hover:text-[#6366f1] transition-all">Collections</Link>
          </nav>
        </div>

        {/* Right: Search & Icons */}
        <div className="flex items-center gap-8">
          <div className="hidden lg:block w-72">
            <div className="relative group">
              <Search className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-500 ${isScrolled ? 'text-slate-400' : 'text-white/40'}`} size={16} />
              <input 
                type="text" 
                placeholder="Curated search..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full border-none rounded-xl py-2.5 pl-12 pr-6 text-xs transition-all duration-500 outline-none ${
                  isScrolled 
                    ? 'bg-[#f3f0ff] text-slate-800 placeholder:text-slate-400' 
                    : 'bg-white/10 backdrop-blur-md text-white placeholder:text-white/40'
                }`}
              />
            </div>
          </div>

          <div className={`flex items-center space-x-6 transition-colors duration-500 ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
            <button 
              onClick={openCart}
              className="relative transition-transform hover:scale-110"
            >
              <ShoppingBag size={20} />
              {mounted && totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#6366f1] text-white text-[8px] font-bold h-3.5 w-3.5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
            <button 
              onClick={openLogin}
              className="transition-transform hover:scale-110"
            >
              <User size={22} />
            </button>
            <button className="lg:hidden">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

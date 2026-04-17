import React from 'react';
import { Share2, AtSign } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0D0D15] text-white py-24 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24">
          
          {/* Column 1: Brand */}
          <div className="max-w-xs">
            <h2 className="text-2xl font-display font-medium mb-12 flex items-center gap-2">
              ShopCart
            </h2>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              The world&apos;s first AI-curated digital atelier for high-end lifestyle essentials. 
              Experience the future of commerce.
            </p>
          </div>

          {/* Column 2: Atelier */}
          <div>
            <h4 className="text-lg font-display font-medium mb-10">Atelier</h4>
            <ul className="space-y-6">
              {['Sustainability', 'Our Story', 'Craftsmanship', 'Journal'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="text-lg font-display font-medium mb-10">Support</h4>
            <ul className="space-y-6">
              {['Shipping', 'Returns', 'Order Tracking', 'Sizing Guide'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect & Legal */}
          <div>
            <h4 className="text-lg font-display font-medium mb-10">Connect</h4>
            <div className="flex gap-4 mb-12">
              <button className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-white/10 transition-all border border-white/10">
                <Share2 size={18} />
              </button>
              <button className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-white/10 transition-all border border-white/10">
                <AtSign size={18} />
              </button>
            </div>
            
            <div className="space-y-4 mb-12">
              {['Privacy Policy', 'Terms of Service', 'Cookies'].map((link) => (
                <a key={link} href="#" className="block text-slate-500 hover:text-white transition-colors text-[12px] font-light">
                  {link}
                </a>
              ))}
            </div>

            <p className="text-[#6366f1]/60 text-[11px] font-medium leading-relaxed max-w-[140px]">
              © 2024 ShopCart Atelier. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

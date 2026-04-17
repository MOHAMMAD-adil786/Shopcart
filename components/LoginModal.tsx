'use client';

import React, { useState, useEffect } from 'react';
import { X, Mail, Key, ArrowLeft } from 'lucide-react';
import { useUIStore } from '@/store/useUIStore';

const LoginModal = () => {
  const { isLoginOpen, closeLogin } = useUIStore();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [view, setView] = useState<'options' | 'form'>('options');

  useEffect(() => {
    if (!isLoginOpen) {
      setTimeout(() => setView('options'), 300);
    }
  }, [isLoginOpen]);

  if (!isLoginOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity animate-fade-in-up" 
        onClick={closeLogin}
      />

      <div className="relative w-full max-w-md bg-white rounded-[32px] shadow-2xl overflow-hidden animate-scale-in">
        {/* Top Controls */}
        <div className="absolute top-6 left-6 right-6 flex justify-between z-10 pointer-events-none">
           <div className="pointer-events-auto">
             {view === 'form' && (
               <button 
                 onClick={() => setView('options')}
                 className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-atelier-dark transition-all"
               >
                 <ArrowLeft size={20} />
               </button>
             )}
           </div>
           <button 
             onClick={closeLogin}
             className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-rose-500 hover:text-white transition-all pointer-events-auto"
           >
             <X size={20} />
           </button>
        </div>

        <div className="p-10 md:p-12 mt-4">
          {view === 'options' ? (
            <div className="flex flex-col items-center justify-center text-center space-y-6 animate-fade-in-up">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-2">
                <span className="text-2xl font-display font-bold text-atelier-dark">SC</span>
              </div>
              <div>
                <h2 className="text-3xl font-display font-medium text-atelier-dark mb-2 tracking-tight">
                  Welcome to Atelier
                </h2>
                <p className="text-slate-400 text-sm font-light">
                  Choose how you would like to proceed.
                </p>
              </div>
              
              <div className="w-full space-y-3 pt-4">
                <button 
                  onClick={() => { setIsLoginMode(true); setView('form'); }}
                  className="w-full bg-atelier-dark text-white py-5 rounded-2xl font-extrabold uppercase tracking-[0.2em] text-[11px] hover:bg-atelier-accent transition-all duration-500 shadow-xl active:scale-[0.98]"
                >
                  Sign In
                </button>
                <button 
                  onClick={() => { setIsLoginMode(false); setView('form'); }}
                  className="w-full bg-slate-50 border border-slate-100 text-atelier-dark py-5 rounded-2xl font-extrabold uppercase tracking-[0.2em] text-[11px] hover:bg-slate-100 transition-all duration-500 active:scale-[0.98]"
                >
                  Create Account
                </button>
              </div>
            </div>
          ) : (
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-display font-medium text-atelier-dark mb-2 tracking-tight">
                {isLoginMode ? 'Sign In' : 'Create Account'}
              </h2>
              <p className="text-slate-400 text-sm font-light mb-10">
                {isLoginMode ? 'Access your curated collections.' : 'Join the elite atelier.'}
              </p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                {!isLoginMode && (
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 ml-2">Name</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Your aesthetic name..." 
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#6366f1] transition-colors text-slate-700"
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 ml-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      type="email" 
                      placeholder="Email address..." 
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-14 pr-6 py-4 text-sm focus:outline-none focus:border-[#6366f1] transition-colors text-slate-700"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center ml-2 mr-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Password</label>
                    {isLoginMode && (
                      <button type="button" className="text-[10px] font-bold text-[#6366f1] hover:text-indigo-700">Forgot?</button>
                    )}
                  </div>
                  <div className="relative">
                    <Key className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      type="password" 
                      placeholder="••••••••" 
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-14 pr-6 py-4 text-sm focus:outline-none focus:border-[#6366f1] transition-colors text-slate-700"
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-atelier-dark text-white py-5 rounded-2xl font-extrabold uppercase tracking-[0.2em] text-[11px] hover:bg-atelier-accent transition-all duration-500 shadow-xl active:scale-[0.98] mt-4"
                >
                  {isLoginMode ? 'Enter Atelier' : 'Create Profile'}
                </button>
              </form>
            </div>
          )}

          <div className="mt-8 text-center flex items-center justify-center gap-2 text-sm text-slate-500 font-light">
            {isLoginMode ? "Don't have an account?" : "Already a member?"}
            <button 
              onClick={() => setIsLoginMode(!isLoginMode)}
              className="font-bold text-atelier-dark hover:text-[#6366f1] transition-colors"
            >
              {isLoginMode ? 'Sign up' : 'Sign in'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

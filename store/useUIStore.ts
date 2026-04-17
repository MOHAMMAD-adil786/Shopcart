import { create } from 'zustand';

interface UIStore {
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  
  isQuickViewOpen: boolean;
  selectedProduct: any | null;
  openQuickView: (product: any) => void;
  closeQuickView: () => void;
  isLoginOpen: boolean;
  openLogin: () => void;
  closeLogin: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isCartOpen: false,
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  
  isQuickViewOpen: false,
  selectedProduct: null,
  openQuickView: (product) => set({ isQuickViewOpen: true, selectedProduct: product }),
  closeQuickView: () => set({ isQuickViewOpen: false, selectedProduct: null }),

  isLoginOpen: false,
  openLogin: () => set({ isLoginOpen: true }),
  closeLogin: () => set({ isLoginOpen: false }),
}));

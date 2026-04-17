import { create } from 'zustand';

interface SearchStore {
  searchQuery: string;
  activeCategory: string;
  setSearchQuery: (query: string) => void;
  setActiveCategory: (category: string) => void;
  clearFilters: () => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  searchQuery: '',
  activeCategory: 'AI CHOICE',
  setSearchQuery: (query) => set({ searchQuery: query }),
  setActiveCategory: (category) => set({ activeCategory: category }),
  clearFilters: () => set({ searchQuery: '', activeCategory: 'AI CHOICE' }),
}));

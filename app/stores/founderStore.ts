import { create } from 'zustand';

interface FounderStore {
  isOpen: boolean;
  openFounder: () => void;
  closeFounder: () => void;
}

export const useFounderStore = create<FounderStore>((set) => ({
  isOpen: false,
  openFounder: () => set({ isOpen: true }),
  closeFounder: () => set({ isOpen: false }),
}));

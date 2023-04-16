import { create } from 'zustand';

export const useModalStore = create((set) => ({
  modalIsActive: false,
  openModal: () => set({ modalIsActive: true }),
  closeModal: () => set({ modalIsActive: false }),
}));

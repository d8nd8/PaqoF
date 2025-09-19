
import { create } from 'zustand'

export const useOverlayStore = create<IOverlayStore>((set) => ({
  transferOpen: false,
  confirmOpen: false,
  successOpen: false,

  openTransfer: () => set({ transferOpen: true }),
  openConfirm: () => set({ confirmOpen: true }),
  openSuccess: () => set({ successOpen: true }),

  closeAll: () => set({
    transferOpen: false,
    confirmOpen: false,
    successOpen: false,
  }),
}));
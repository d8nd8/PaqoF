import { create } from 'zustand';

import type IApplicationStore from './types';


const useApplicationStore = create<IApplicationStore>((set, get) => ({
  headerOffset: false,
  fullscreen: false,
  fullscreenCentered: false,
  modal: null,
  preloaders: [],
  enablePreloader: (name: string) => {
    const { preloaders } = get()
    if (!preloaders.includes(name)) {
      set({ preloaders: [...preloaders, name] })
    }
    const resolve = () => {
      const { preloaders } = get()
      set({ preloaders: preloaders.filter((preloader) => preloader !== name) })
    }
    return { resolve }
  },
  setFullscreen: (fullscreen) => set({ fullscreen }),
  setFullscreenCentered: (fullscreenCentered) => set({ fullscreenCentered }),
  setHeaderOffset: (headerOffset) => set({ headerOffset }),
  openModal: (modal) => set({ modal }),
  closeModal: () => set({ modal: null }),
  currentOverlay: null,
  overlayHistory: [],
  previousOverlay: null,
  openOverlay: (name) => {
    const { overlayHistory } = get()
    set({
      currentOverlay: name,
      overlayHistory: [...overlayHistory, name],
    })
  },
  closeOverlay: () => {
    const { overlayHistory } = get()
    const newHistory = [...overlayHistory]
    newHistory.pop()
    set({
      overlayHistory: newHistory,
      currentOverlay: newHistory[newHistory.length - 1] || null,
    })
  },
  goBack: () => {
    const { overlayHistory } = get()
    if (overlayHistory.length > 1) {
      const newHistory = [...overlayHistory]
      newHistory.pop()
      set({
        overlayHistory: newHistory,
        currentOverlay: newHistory[newHistory.length - 1] || null,
      })
    } else {
      set({ overlayHistory: [], currentOverlay: null })
    }
  },
  setPreviousOverlay: (value) => set({ previousOverlay: value }),
  restoreOverlay: () => {
    const { previousOverlay } = get()
    if (previousOverlay) {
      set({
        currentOverlay: previousOverlay,
        overlayHistory: [previousOverlay],
        previousOverlay: null,
      })
    }
  },
}))

export default useApplicationStore
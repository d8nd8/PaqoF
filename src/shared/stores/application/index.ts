import { create } from 'zustand';

import type IApplicationStore from './types';

const useApplicationStore = create<IApplicationStore>((set, get) => ({
  headerOffset: false,
  fullscreen: false,
  fullscreenCentered: false,
  modal: null,
  preloaders: [],
  enablePreloader: (name: string) => {
    const { preloaders } = get();
    if (!preloaders.includes(name)) {
      set({ preloaders: [...preloaders, name] });
    }

    const resolve = () => {
      const { preloaders } = get();
      set({ preloaders: preloaders.filter((preloader) => preloader !== name) });
    }

    return { resolve };
  },
  setFullscreen: (fullscreen: boolean) => set({ fullscreen }),
  setFullscreenCentered: (fullscreenCentered: boolean) => set({ fullscreenCentered }),
  setHeaderOffset: (headerOffset: boolean) => set({ headerOffset }),
  openModal: (modal: string) => set({ modal }),
  closeModal: () => set({ modal: null }),
}));

export default useApplicationStore;
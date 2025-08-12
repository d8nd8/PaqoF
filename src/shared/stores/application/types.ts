
export default interface IApplicationStore {
  modal: string | null;
  fullscreen: boolean;
  fullscreenCentered: boolean;
  headerOffset: boolean;
  preloaders: string[];
  enablePreloader: (name: string) => { resolve: () => void };
  setFullscreen: (fullscreen: boolean) => void;
  setFullscreenCentered: (fullscreenCentered: boolean) => void;
  setHeaderOffset: (headerOffset: boolean) => void;
  openModal: (modal: string) => void;
  closeModal: () => void;
}
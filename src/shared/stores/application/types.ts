
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

  currentOverlay: string | null
  overlayHistory: string[]
  previousOverlay: string | null
  openOverlay: (name: string) => void
  closeOverlay: () => void
  goBack: () => void
  setPreviousOverlay: (value: string | null) => void
  restoreOverlay: () => void
}
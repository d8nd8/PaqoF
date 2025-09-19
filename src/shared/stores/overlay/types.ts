interface IOverlayStore {
  transferOpen: boolean;
  confirmOpen: boolean;
  successOpen: boolean;

  openTransfer: () => void;
  openConfirm: () => void;
  openSuccess: () => void;

  closeAll: () => void;
}
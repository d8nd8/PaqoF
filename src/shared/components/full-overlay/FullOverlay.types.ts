import React from 'react'

export interface FullOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
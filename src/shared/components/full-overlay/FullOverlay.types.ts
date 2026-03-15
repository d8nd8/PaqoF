import React from 'react'

export interface FullOverlayProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  /** Без анимации появления, только анимация при закрытии */
  exitOnlyAnimation?: boolean
}
import React from 'react'
import { useSafeAreaInsets } from '@/shared/hooks/useSafeAreaInsets'
import { AnimatePresence } from 'framer-motion'

import * as S from './FullOverlay.styled'

import type { FullOverlayProps } from './FullOverlay.types'

export const FullOverlay: React.FC<FullOverlayProps> = ({
  isOpen,
  onClose,
  children,
  exitOnlyAnimation = false,
}) => {
  const { top, bottom } = useSafeAreaInsets()

  const backdropInitial = exitOnlyAnimation ? { opacity: 1 } : { opacity: 0 }
  const backdropAnimate = { opacity: 1 }
  const backdropExit = exitOnlyAnimation
    ? { opacity: 0, transition: { duration: 0.2 } }
    : { opacity: 0 }
  const contentInitial = exitOnlyAnimation ? { y: 0 } : { y: '100%' }
  const contentAnimate = { y: 0 }
  const contentExit = exitOnlyAnimation
    ? { y: '100%', transition: { duration: 0.3, ease: 'easeOut' as const } }
    : { y: '100%' }

  return (
    <AnimatePresence>
      {isOpen && (
        <S.Backdrop
          style={{ zIndex: 10000 }}
          initial={backdropInitial}
          animate={backdropAnimate}
          exit={backdropExit}
          transition={exitOnlyAnimation ? { duration: 0 } : { duration: 0.2 }}
          onClick={onClose}
        >
          <S.Content
            $top={top}
            $bottom={bottom}
            initial={contentInitial}
            animate={contentAnimate}
            exit={contentExit}
            transition={exitOnlyAnimation ? { duration: 0 } : { duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <S.CloseButton
              $top={top}
              onClick={onClose}
            >
              ✕
            </S.CloseButton>

            {children}
          </S.Content>
        </S.Backdrop>
      )}
    </AnimatePresence>
  )
}

export default FullOverlay

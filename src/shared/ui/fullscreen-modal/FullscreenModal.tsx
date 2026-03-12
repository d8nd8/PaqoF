import React from 'react'
import { PageHeader } from '@/shared/components/PageHeader/PageHeader'
import { useSafeAreaInsets } from '@/shared/hooks/useSafeAreaInsets'
import useApplicationStore from '@/shared/stores/application'

import * as S from './FullscreenModal.styled'

interface FullscreenModalProps {
  isOpen: boolean
  title: string
  onClose: () => void
  children: React.ReactNode
  style?: React.CSSProperties
}

export const FullscreenModal: React.FC<FullscreenModalProps> = ({
  isOpen,
  title,
  onClose,
  children,
  style,
}) => {
  const { top, bottom } = useSafeAreaInsets()
  const { fullscreen } = useApplicationStore()

  if (!isOpen) return null

  return (
    <S.Overlay
      $top={top}
      $bottom={bottom}
      style={style}
    >
      <S.ModalContent>
        <PageHeader
          title={title}
          onBack={onClose}
        />
        <S.ContentArea>{children}</S.ContentArea>
      </S.ModalContent>
    </S.Overlay>
  )
}

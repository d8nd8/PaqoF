import React from 'react'
import { useSafeAreaInsets } from '@/shared/hooks/useSafeAreaInsets'
import ChevronLeft from '@icons/chevron-left.svg?react'
import { useNavigate } from 'react-router-dom'

import { BackButton, HeaderWrapper, RightSlot, Title } from './PageHeader.styled'

interface Props {
  title: string
  color?: string
  onBack?: () => void
  rightSlot?: React.ReactNode
  showBackButton?: boolean
  customTopInset?: number
  style?: React.CSSProperties
}

export const PageHeader: React.FC<Props> = ({
  title,
  color,
  onBack,
  rightSlot,
  showBackButton = true,
  customTopInset,
  style,
}) => {
  const navigate = useNavigate()
  const { top } = useSafeAreaInsets()

  const handleBack = () => {
    if (onBack) onBack()
    else navigate(-1)
  }

  return (
    <HeaderWrapper
      insetTop={customTopInset ?? top}
      style={style}
    >
      {showBackButton && (
        <BackButton
          onClick={handleBack}
          color={color}
        >
          <ChevronLeft />
        </BackButton>
      )}

      <Title color={color}>{title}</Title>

      <RightSlot color={color}>{rightSlot ?? <div style={{ width: 24 }} />}</RightSlot>
    </HeaderWrapper>
  )
}

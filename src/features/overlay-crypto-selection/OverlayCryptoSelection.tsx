import React from 'react'
import { CryptoList, type CryptoItemData } from '@/features/crypto-list/CryptoList'
import { BottomSheet } from '@/shared/components/BottomSheet/BottomSheet'
import CheckIcon from '@icons/check.svg?react'

import * as S from './OverlayCryptoSelection.styled'

export interface OverlayCryptoSelectionProps {
  isOpen: boolean
  onClose: () => void
  cryptos: CryptoItemData[]
  selectedCryptoId?: string
  onCryptoSelect: (crypto: CryptoItemData) => void
  title?: string
  style?: React.CSSProperties
}

export const OverlayCryptoSelection: React.FC<OverlayCryptoSelectionProps> = ({
  isOpen,
  style,
  onClose,
  cryptos,
  selectedCryptoId,
  onCryptoSelect,
  title = 'Выберите криптовалюту',
}) => {
  const handleCryptoClick = (crypto: CryptoItemData) => {
    onCryptoSelect(crypto)
    onClose()
  }

  const renderRightSection = (crypto: CryptoItemData) => {
    const isSelected = crypto.id === selectedCryptoId

    return (
      <S.SelectionIndicator $isSelected={isSelected}>
        <CheckIcon />
      </S.SelectionIndicator>
    )
  }

  return (
    <BottomSheet
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      showBottomButton={false}
      closeButtonText="✕"
    >
      <S.OverlayCryptoSelectionContent style={style}>
        <CryptoList
          cryptos={cryptos}
          onCryptoClick={handleCryptoClick}
          showRightSection={true}
          renderRightSection={renderRightSection}
          disableNavigation
          infoVariant="amount"
        />
      </S.OverlayCryptoSelectionContent>
    </BottomSheet>
  )
}

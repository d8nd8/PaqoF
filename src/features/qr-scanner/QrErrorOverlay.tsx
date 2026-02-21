import React from 'react'
import { BottomSheet } from '@/shared/components/BottomSheet/BottomSheet'
import { colors } from '@/styles/theme'
import ErrorIcon from '@icons/scanner/qr-error.svg?react'
import { useTranslation } from 'react-i18next'

import * as S from '../payment-overlay/PaymentOverlay.styled'

export interface QrErrorOverlayProps {
  isOpen: boolean
  onClose: () => void
  onButtonClick: () => void
}

export const QrErrorOverlay: React.FC<QrErrorOverlayProps> = ({
  isOpen,
  onClose,
  onButtonClick,
}) => {
  const { t } = useTranslation()

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick()
    } else {
      onClose()
    }
  }

  return (
    <BottomSheet
      isOpen={isOpen}
      onClose={onClose}
      showBottomButton={true}
      showCloseButton={false}
      bottomButtonText={t('common.retry')}
      onBottomButtonClick={handleButtonClick}
      showHeader={false}
      background={colors.systemBackground}
    >
      <S.StatusContainer>
        <S.StatusHeader>{t('payment.overlay.errorTitle')}</S.StatusHeader>
        <S.ErrorContainer>
          <ErrorIcon />
          <S.ErrorTitle>{t('payment.overlay.errorSubtitle')}</S.ErrorTitle>
          <S.ErrorDescription>{t('payment.overlay.errorDescription')}</S.ErrorDescription>
        </S.ErrorContainer>
      </S.StatusContainer>
    </BottomSheet>
  )
}

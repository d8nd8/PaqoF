import React from 'react'
import { type CryptoItemData } from '@/features/crypto-list/CryptoList'
import ChevronDownIcon from '@icons/chevron-left.svg?react'
import UsdtIcon from '@icons/usdt-icon.svg?react'

import * as S from './PaymentOverlay.styled'

export interface CurrencyButtonProps {
  currency?: CryptoItemData
  onClick: () => void
  disabled?: boolean
  hasOptions?: boolean
  placeholder?: string
}

export const CurrencyButton: React.FC<CurrencyButtonProps> = ({
  currency,
  onClick,
  disabled = false,
  hasOptions = true,
  placeholder = 'Выберите валюту',
}) => {
  const renderIcon = () => {
    if (!currency) return null

    if (currency.symbol === 'USDT') {
      return <UsdtIcon />
    }

    if (currency.useCustomIcon && React.isValidElement(currency.icon)) {
      return currency.icon
    }

    return <S.CurrencyIconText>{currency.icon}</S.CurrencyIconText>
  }

  return (
    <S.CurrencyButtonContainer
      onClick={onClick}
      disabled={disabled || !hasOptions}
      hasOptions={hasOptions}
    >
      <S.CurrencyContent>
        {currency ? (
          <>
            <S.CurrencyIcon
              color={currency.iconColor}
              isUSDT={currency.symbol === 'USDT'}
            >
              {renderIcon()}
            </S.CurrencyIcon>
            <S.CurrencyInfo>
              <S.CurrencyName>{currency.name}</S.CurrencyName>
              <S.CurrencyAmount>{currency.amount}</S.CurrencyAmount>
            </S.CurrencyInfo>
          </>
        ) : (
          <S.PlaceholderText>{placeholder}</S.PlaceholderText>
        )}
      </S.CurrencyContent>

      {hasOptions && !disabled && (
        <S.ChevronContainer>
          <ChevronDownIcon />
        </S.ChevronContainer>
      )}
    </S.CurrencyButtonContainer>
  )
}

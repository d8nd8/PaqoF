import styled from '@emotion/styled'

export const CryptoListContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  overflow: 'hidden',
})

export const CryptoItemContainer = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '14px',
  color: theme.colors.systemElevatedBackground,
  backgroundColor: theme.colors.systemElevatedBackground,
  borderRadius: '14px',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
}))

interface CryptoIconProps {
  color?: string
  isUSDT?: boolean
}

export const CryptoIcon = styled.div<CryptoIconProps>(() => ({
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '10px',
  flexShrink: 0,

  '& svg': {
    width: 38,
    height: 38,
  },
}))

export const CryptoIconText = styled.span(() => ({
  fontSize: '13px',
  fontWeight: '600',
}))

export const CryptoInfo = styled.div({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
})

export const CryptoName = styled.div(({ theme }) => ({
  fontSize: '13px',
  fontWeight: '600',
  color: theme.colors.neutral950,
  lineHeight: '18px',
}))

export const CryptoRubles = styled.div(({ theme }) => ({
  fontSize: '12px',
  color: `${theme.colors.textSecondary} !important`,
  lineHeight: '18px',
}))

export const CryptoAmount = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
})

export const CryptoAmountValue = styled.div(({ theme }) => ({
  fontSize: '13px',
  fontWeight: '600',
  color: theme.colors.neutral950,
  lineHeight: '18px',
}))

export const CryptoAmountInRubles = styled.div(({ theme }) => ({
  fontSize: '12px',
  color: theme.colors.textSecondary,
  lineHeight: '16px',
}))

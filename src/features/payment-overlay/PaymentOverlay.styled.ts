import styled from '@emotion/styled'

export const PaymentFormContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  height: '100%',

  padding: '0 14px',
}))

export const PaymentDetails = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  padding: '14px',
  backgroundColor: theme.colors.systemElevatedBackground,
  borderRadius: '13px',
}))

export const DetailRow = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  letterSpacing: '-0.08px',
})

export const DetailLabel = styled.span(({ theme }) => ({
  fontSize: '13px',
  fontWeight: 400,
  color: theme.colors.textSecondary,
  lineHeight: '18px',
}))

export const DetailValue = styled.span(({ theme }) => ({
  fontSize: '13px',
  fontWeight: 600,
  color: theme.colors.neutral950,
  lineHeight: '18px',
}))

export const CurrencySection = styled.div({})

export const TotalSection = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '50px',
})

export const TotalLabel = styled.div(({ theme }) => ({
  display: 'flex',
  letterSpacing: '-0.43px',
  flexDirection: 'column',
  fontSize: '17px',
  lineHeight: '22px',
  fontWeight: 600,
  color: theme.colors.neutral950,
}))

export const CommissionNote = styled.span(({ theme }) => ({
  fontSize: '12px',
  fontWeight: 400,
  letterSpacing: '0px',
  color: theme.colors.textTertiary,
  lineHeight: '16px',
}))

export const TotalAmount = styled.div(({ theme }) => ({
  fontSize: '28px',
  fontWeight: 700,
  color: theme.colors.neutral950,
  lineHeight: '34px',
  letterSpacing: '0.38px',
}))

// ======================
// ✅ SUCCESS STATE STYLES
// ======================
interface StatusContainerProps {
  success?: boolean
}

export const StatusContainer = styled.div<StatusContainerProps>(
  ({ success = false, theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '14px 14px 0',
    background: success
      ? `
    radial-gradient(165.91% 110.87% at 0% 0%, ${theme.colors.primary300} 0%, rgba(242, 242, 247, 0.00) 60%), radial-gradient(164.95% 98.92% at 52.53% 0%, ${theme.colors.success500} 0%, rgba(242, 242, 247, 0.00) 60%), radial-gradient(165.9% 110.75% at 100% 0%, ${theme.colors.success400} 0%, rgba(242, 242, 247, 0.00) 60%), ${theme.colors.systemBackground}
  `
      : 'transparent',
    color: theme.colors.neutral950,

    overflowX: 'hidden',
    touchAction: 'pan-y',
    overscrollBehaviorY: 'contain',
  }),
)

export const StatusHeader = styled.h2<{ success?: boolean }>(
  ({ success = false, theme }) => ({
    fontSize: '16px',
    fontWeight: 600,
    color: theme.colors.neutral950,
    lineHeight: '21px',
    marginBottom: '20px',
  }),
)

export const StatusDate = styled.div(({ theme }) => ({
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '16px',
  color: `${theme.colors.textSecondary} !important`,
  letterSpacing: '0px',
  textAlign: 'center',
}))

export const SuccessIcon = styled.img({
  width: '90px',
  height: '90px',
  animation: 'fadeInScale 0.5s ease forwards',

  '@keyframes fadeInScale': {
    from: { opacity: 0, transform: 'scale(0.6)' },
    to: { opacity: 1, transform: 'scale(1)' },
  },
})

export const StatusAmount = styled.div(({ theme }) => ({
  fontSize: '28px',
  fontWeight: 700,
  color: theme.colors.neutral950,
  lineHeight: '34px',
  letterSpacing: '0.38px',
  marginBottom: '56px',
}))

export const StatusDetails = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  width: '100%',
  backgroundColor: theme.colors.systemElevatedBackground,
  borderRadius: '12px',
  padding: '14px',
  marginBottom: '20px',
}))

// ======================
// ❌ ERROR STATE
// ======================
export const ErrorTitle = styled.h3(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 600,
  color: '#000000',
  marginBottom: '5px',
  marginTop: '20px',
  lineHeight: '25px',
  letterSpacing: '-0.45px',
}))

export const ErrorContainer = styled.div({
  display: 'flex',
  height: '273px',
  padding: '0 16px',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ErrorDescription = styled.p(({ theme }) => ({
  fontSize: '15px',
  fontWeight: 400,
  color: theme.colors.textSecondary,
  letterSpacing: '-0.23px',
  lineHeight: '20px',
}))

// ======================
// 💰 Currency Button
// ======================
interface CurrencyButtonContainerProps {
  disabled: boolean
  hasOptions: boolean
}

export const CurrencyButtonContainer = styled.button<CurrencyButtonContainerProps>(
  ({ disabled, hasOptions, theme }) => ({
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: disabled || !hasOptions ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease',
    opacity: disabled ? 0.6 : 1,

    '&:active': {
      transform: disabled || !hasOptions ? 'none' : 'scale(0.98)',
    },

    '&:focus': {
      outline: 'none',
      borderColor: hasOptions && !disabled ? '#4CAF50' : '#E5E5E7',
    },
  }),
)

export const CurrencyContent = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  flex: 1,
})

interface CurrencyIconProps {
  color?: string
  isUSDT?: boolean
}

export const CurrencyIcon = styled.div<CurrencyIconProps>(
  ({ color = '#4CAF50', isUSDT = false }) => ({
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: isUSDT ? '#4CAF50' : color,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,

    '& svg': {
      width: isUSDT ? '24px' : '20px',
      height: isUSDT ? '24px' : '20px',
      fill: '#ffffff',
    },
  }),
)

export const CurrencyIconText = styled.span({
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: 1,
})

export const CurrencyInfo = styled.div({
  display: 'flex',
  flexDirection: 'column',
  color: '#ffffff',
  alignItems: 'flex-start',
  gap: '2px',
})

export const CurrencyName = styled.div({
  fontSize: '16px',
  fontWeight: 600,
  color: '#000000',
  lineHeight: '20px',
})

export const CurrencyAmount = styled.div({
  fontSize: '14px',
  fontWeight: 400,
  color: '#8E8E93',
  lineHeight: '18px',
})

export const PlaceholderText = styled.div(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 400,
  color: theme.colors.textSecondary,
  lineHeight: '20px',
}))

export const ChevronContainer = styled.div({
  width: '20px',
  height: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'rotate(-90deg)',

  '& svg': {
    width: '16px',
    height: '16px',
    fill: '#8E8E93',
  },
})

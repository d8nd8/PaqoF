import styled from '@emotion/styled'

export const OverlayWrapper = styled.div<{ insetTop?: number }>(({ theme }) => ({
  position: 'fixed',
  inset: 0,
  background: theme.colors.systemBackground,
  display: 'flex',
  flexDirection: 'column',
  zIndex: theme.zIndex.modal,
  paddingLeft: 14,
  paddingRight: 14,
}))

export const Header = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  paddingTop: '70px',
  paddingBottom: '10px',
})

export const BackButton = styled.button(({ theme }) => ({
  position: 'absolute',
  left: '16px',
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '21px',
  '& svg': {
    width: '24px',
    height: '24px',
    display: 'block',
    stroke: theme.colors.textPrimary,
  },
}))

export const AmountInput = styled.input<{ $length: number; $hasError?: boolean }>(
  ({ theme, $length, $hasError }) => ({
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontSize: '34px',
    fontWeight: 700,
    lineHeight: '41px',
    letterSpacing: '0.4px',
    color: $hasError ? theme.colors.error500 : theme.colors.textPrimary,
    minWidth: '2ch',
    width: `${Math.min(Math.max(2, $length), 7)}ch`,
    textAlign: 'left',
    padding: 0,
  }),
)

export const Title = styled.h2(({ theme }) => ({
  flex: 1,
  textAlign: 'center',
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '21px',
  letterSpacing: '-0.31px',
  color: theme.colors.textPrimary,
  margin: 0,
}))

export const Content = styled.div({
  flex: 1,
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
})

export const SectionTitle = styled.div(({ theme }) => ({
  fontSize: '15px',
  lineHeight: '20px',
  fontWeight: theme.typography.fontWeight.semibold,
  letterSpacing: '-0.23px',
  color: theme.colors.textPrimary,
}))

export const Card = styled.div(({ theme }) => ({
  width: '100%',
  borderRadius: '13px',
  padding: '14px',
  background: theme.colors.neutral100,
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
}))

export const AmountRow = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const AmountSub = styled.div<{ $hasError?: boolean }>(({ theme, $hasError }) => ({
  fontSize: '13px',
  lineHeight: '18px',
  fontWeight: theme.typography.fontWeight.normal,
  letterSpacing: '-0.08px',
  color: $hasError ? theme.colors.error500 : theme.colors.textPrimary,
}))

export const PresetRow = styled.div({
  display: 'flex',
  gap: '10px',
  flexWrap: 'nowrap',
  overflowX: 'auto',
  padding: '0 16px',
  margin: '0 -16px',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': { display: 'none' },
  scrollSnapType: 'x mandatory',
})

export const PresetButton = styled.button(({ theme }) => ({
  borderRadius: '8px',
  border: `1px solid ${theme.colors.neutral300}`,
  background: theme.colors.textQuaternary,
  fontSize: theme.typography.fontSize.sm,
  padding: '5px 10px',
  cursor: 'pointer',
  color: theme.colors.textPrimary,
  fontWeight: 500,
  textDecoration: 'none',
  appearance: 'none',
  WebkitAppearance: 'none',
  whiteSpace: 'nowrap',
}))

export const AmountValue = styled.div<{ $hasError?: boolean }>(
  ({ theme, $hasError }) => ({
    fontSize: '34px',
    fontWeight: 700,
    lineHeight: '41px',
    letterSpacing: '0.4px',
    color: $hasError ? theme.colors.error500 : theme.colors.textPrimary,
    display: 'flex',
    alignItems: 'baseline',
    gap: '0px',
    marginBottom: '-10px',
    transition: 'color 0.2s ease',
  }),
)

export const CurrencySymbol = styled.span<{ $hasError?: boolean }>(
  ({ theme, $hasError }) => ({
    fontSize: '22px',
    fontWeight: 700,
    lineHeight: '28px',
    letterSpacing: '-0.26px',
    color: $hasError ? theme.colors.error500 : theme.colors.textPrimary,
  }),
)

export const ErrorSub = styled.div(({ theme }) => ({
  fontSize: '13px',
  lineHeight: '18px',
  fontWeight: 400,
  letterSpacing: '-0.08px',
  color: `${theme.colors.error500} !important`,
  marginTop: '4px',
  '& span': {
    color: `${theme.colors.blueberry} !important`,
    cursor: 'pointer',
    textDecoration: 'none',
  },
}))
export const InputWrapper = styled.div<{ hasError?: boolean }>(({ theme, hasError }) => ({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '13px',
  padding: '10px',
  background: theme.colors.neutral100,
  border: `1px solid ${hasError ? theme.colors.error500 : theme.colors.systemElevatedBackground}`,
}))

export const AddressInput = styled.input(({ theme }) => ({
  flex: 1,
  border: 'none',
  outline: 'none',
  fontSize: theme.typography.fontSize.md,
  color: theme.colors.textPrimary,
  background: 'transparent',
}))

export const IconButton = styled.button({
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const SwapButton = styled.button(({ theme }) => ({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  border: 'none',
  background: theme.colors.primary400,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '& svg': {
    width: '40px',
    height: '40px',
    color: theme.colors.textPrimary,
  },
}))

export const ErrorMessage = styled.div(({ theme }) => ({
  marginTop: '6px',
  fontSize: '13px',
  lineHeight: '18px',
  color: `${theme.colors.error500} !important`,
}))

export const CardTitle = styled.div(({ theme }) => ({
  fontSize: '13px',
  lineHeight: '18px',
  fontWeight: theme.typography.fontWeight.normal,
  color: theme.colors.textPrimary,
  marginBottom: '-10px',
}))

export const BottomButton = styled.button(({ theme }) => ({
  margin: '0 16px 40px',
  height: '44px',
  borderRadius: '10px',
  background: theme.colors.primary500,
  color: theme.colors.textPrimary,
  fontSize: '15px',
  fontWeight: 600,
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'opacity 0.2s ease',
  '&:active': { transform: 'scale(0.98)' },
}))

export const CommissionButton = styled.button(({ theme }) => ({
  marginTop: theme.spacing.sm,
  width: '100%',
  height: '50px',
  borderRadius: theme.borderRadius.md,
  border: 'none',
  background: theme.colors.warning100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `0 ${theme.spacing.lg}`,
  cursor: 'pointer',
  '& .left': {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.sm,
    fontSize: '13px',
    lineHeight: '13px',
    fontWeight: theme.typography.fontWeight.normal,
    color: theme.colors.textPrimary,
    '& strong': {
      fontWeight: theme.typography.fontWeight.semibold,
      color: theme.colors.textPrimary,
    },
    '& span, & a': {
      color: `${theme.colors.textPrimary} !important`,
      textDecoration: 'none !important',
    },
  },
  '& .icon': {
    width: '16px',
    height: '16px',
    color: theme.colors.warning500,
    flexShrink: 0,
  },
  '& .chevron': {
    flexShrink: 0,
    color: theme.colors.warning400,
  },
}))

export const BottomSection = styled.div<{ $insetBottom?: number }>(
  ({ $insetBottom = 0 }) => ({
    padding: `30px 14px calc(40px + ${$insetBottom}px)`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }),
)
export const MainButton = styled.button(({ theme }) => ({
  width: '100%',
  height: '44px',
  background: theme.colors.primary500,
  color: theme.colors.textPrimary,
  border: 'none',
  borderRadius: '10px',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '20px',
  cursor: 'pointer',
}))

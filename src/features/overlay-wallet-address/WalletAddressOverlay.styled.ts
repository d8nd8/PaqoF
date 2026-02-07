import styled from '@emotion/styled'

export const OverlayWrapper = styled.div<{ insetTop?: number }>(
  ({ theme, insetTop = 0 }) => ({
    position: 'fixed',
    inset: 0,
    zIndex: theme.zIndex.modal,
    display: 'flex',
    flexDirection: 'column',
    background: theme.colors.systemBackground,
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: `${insetTop}px`,
  }),
)

export const Header = styled.div({
  display: 'flex',
  alignItems: 'center',
  paddingTop: '70px',
  paddingBottom: '25px',
  paddingLeft: '16px',
  paddingRight: '16px',
  position: 'relative',
})

export const BackButton = styled.button(({ theme }) => ({
  position: 'absolute',
  left: '16px',
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  '& svg': {
    width: '24px',
    height: '24px',
    stroke: theme.colors.textPrimary,
  },
}))

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
  padding: '0 16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
})

export const SectionTitle = styled.div(({ theme }) => ({
  width: '100%',
  textAlign: 'left',
  fontSize: '15px',
  fontWeight: 600,
  lineHeight: '20px',
  color: theme.colors.textPrimary,
}))

export const QRCard = styled.div(({ theme }) => ({
  background: theme.colors.systemElevatedBackground,
  borderRadius: '12px',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
  boxShadow: theme.semantic.shadowLight,
}))

export const AddressLabel = styled.div(({ theme }) => ({
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '16px',
  color: theme.colors.textSecondary,
  textAlign: 'center',
}))

export const AddressRow = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
})

export const Address = styled.div(({ theme }) => ({
  fontSize: '13px',
  fontWeight: 600,
  lineHeight: '18px',
  letterSpacing: '-0.08px',
  wordBreak: 'break-all',
  color: theme.colors.textPrimary,
  textAlign: 'center',
}))

export const CopyIconButton = styled.button(({ theme }) => ({
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& svg': {
    width: '16px',
    height: '16px',
    fill: theme.colors.neutral400,
  },
}))

export const AddressHint = styled.p(({ theme }) => ({
  fontSize: '12px',
  color: theme.colors.textSecondary,
  textAlign: 'center',
  margin: 0,
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
  textDecoration: 'none',
  color: 'inherit',

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

export const BottomActions = styled.div<{ $insetBottom?: number }>(
  ({ $insetBottom = 0 }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: `30px 14px calc(16px + ${$insetBottom}px)`,
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
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',

  '& svg': {
    width: '18px',
    height: '18px',
    stroke: 'currentColor',
  },
}))

export const SecondaryButton = styled.button(({ theme }) => ({
  width: '100%',
  height: '44px',
  background: theme.colors.neutral100,
  color: theme.colors.textPrimary,
  border: 'none',
  borderRadius: '10px',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '20px',
  cursor: 'pointer',
  transition: theme.transition.fast,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:active': {
    background: theme.colors.neutral300,
  },
}))

export const CopyNotification = styled.div<{ $visible?: boolean }>(
  ({ theme, $visible }) => ({
    position: 'absolute',
    top: '45px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.sm,
    background: theme.colors.systemElevatedBackground,
    padding: '8px 12px',
    borderRadius: '12px',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textPrimary,
    zIndex: 10,
    pointerEvents: $visible ? 'auto' : 'none',
    visibility: $visible ? 'visible' : 'hidden',
    opacity: $visible ? 1 : 0,
    animation: $visible ? 'fadeInOut 1.5s ease' : 'none',

    svg: {
      fill: theme.colors.success600,
      width: '16px',
      height: '16px',
    },

    '@keyframes fadeInOut': {
      '0%': { opacity: 0, transform: 'translateX(-50%) translateY(-10px)' },
      '10%': { opacity: 1, transform: 'translateX(-50%) translateY(0)' },
      '90%': { opacity: 1, transform: 'translateX(-50%) translateY(0)' },
      '100%': { opacity: 0, transform: 'translateX(-50%) translateY(-10px)' },
    },
  }),
)

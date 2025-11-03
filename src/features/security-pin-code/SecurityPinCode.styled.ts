import styled from '@emotion/styled'

export const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: '24px',
  width: '100%'
})

export const Title = styled.h2({
  fontSize: '20px',
  fontWeight: 600,
})

export const ChangePinText = styled.p(({ theme }) => ({
  marginTop: theme.spacing.lg,
  textAlign: "right",
  fontSize: "14px",
  fontWeight: 500,
  cursor: "pointer",
  userSelect: "none",
  "&:hover": {
    opacity: 0.8,
  },
}));

export const Description = styled.p(({theme}) => ({
  fontSize: '13px',
  color: theme.colors.textSecondary,
  marginBottom: '80px',
}))

export const PinContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  marginBottom: '80px',
})


export const PinWrapper = styled.div<{ shaking?: boolean }>(
  ({ shaking }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '14px',
    ...(shaking && {
      animation: 'shake 0.5s',
    }),
  })
)


export const Bullet = styled.div<{ filled: boolean, status: 'default' | 'error' | 'success'}>(
  ({ filled, status, theme }) => ({
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    display: 'inline-block',
    backgroundColor: !filled
      ? theme.colors.textQuaternary
      : status === 'error'
        ? theme.colors.error500
        : status === 'success'
          ? theme.colors.success600
          : theme.colors.neutral950
  })
)

export const HelperText = styled.div<{ status: 'default' | 'error' | 'success' }>(
  ({ status, theme }) => ({
    fontSize: '13px',
    lineHeight: '18px',
    textAlign: 'center',
    marginTop: '8px',
    color:
      status === 'error'
        ? `${theme.colors.error500} !important`
        : status === 'success'
          ? `${theme.colors.success600} !important`
          : `${theme.colors.textSecondary} !important`,
    transition: 'color 0.2s ease',
  })
)

export const Keypad = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '12px',
  maxWidth: '254px',
  width: '100%'
})

export const Key = styled.button(({theme}) => ({
  maxWidth: '75px',
  maxHeight: '75px',
  width: '100%',
  fontSize: '34px',
  lineHeight: '41px',
  padding: '17px',
  borderRadius: '50%',
  border: 'none',
  cursor: 'pointer',
  color: theme.colors.textPrimary,
  '&:focus': { outline: 'none' },
}))

export const EmptyKey = styled.div({})

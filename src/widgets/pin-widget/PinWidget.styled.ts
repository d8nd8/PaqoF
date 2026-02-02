import styled from '@emotion/styled'

export const PinWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  minHeight: '100%',
  background: theme.colors.systemBackground,
  padding: theme.spacing.lg,
}))

export const PinHeader = styled.div({
  textAlign: 'center',
  marginBottom: '32px',
})

export const PinTitle = styled.h2(({ theme }) => ({
  fontSize: '17px',
  fontWeight: theme.typography.fontWeight.semibold,
  margin: 0,
}))

export const PinSubtitle = styled.p(({ theme }) => ({
  fontSize: '13px',
  color: theme.colors.textSecondary,
  margin: '8px 0 0 0',
}))

export const ErrorText = styled.p(({ theme }) => ({
  fontSize: '13px',
  color: theme.colors.error500,
  marginTop: '8px',
}))

export const Dots = styled.div({
  display: 'flex',
  gap: '12px',
  marginBottom: '32px',
})

export const Dot = styled.div<{ $filled?: boolean; $error?: boolean }>(
  ({ theme, $filled, $error }) => ({
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: $error
      ? theme.colors.error500
      : $filled
        ? theme.colors.textPrimary
        : theme.colors.textQuaternary,
    transition: 'all 0.2s ease',
  }),
)

export const Keypad = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 60px)',
  gap: '20px',
  justifyContent: 'center',
})

export const Key = styled.button(({ theme }) => ({
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  border: 'none',
  background: theme.colors.neutral100,
  fontSize: '20px',
  fontWeight: theme.typography.fontWeight.medium,
  cursor: 'pointer',
}))

export const DeleteKey = styled(Key)({
  gridColumn: '2 / 3',
  background: 'transparent',
  fontSize: '24px',
})

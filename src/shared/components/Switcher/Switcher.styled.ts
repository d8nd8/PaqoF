import styled from '@emotion/styled'

export const SwitcherWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  background: theme.colors.textQuaternary,
  borderRadius: theme.borderRadius.lg,
  padding: '4px',
  width: '100%',
  boxSizing: 'border-box',
}))

export const SwitcherTab = styled.button<{ active: boolean; level?: number }>(
  ({ theme, active, level }) => ({
    flex: 1,
    padding: '2px 16px',
    background: active ? theme.colors.primary500 : 'transparent',
    border: 'none',
    borderRadius: theme.borderRadius.md,
    fontSize: '13px',
    fontWeight: 600,
    color: active
      ? theme.colors.textPrimary
      : level === 5
        ? '#FFFFFF'
        : theme.colors.textPrimary,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textAlign: 'center',

    '&:active': {
      transform: 'scale(0.98)',
    },
  }),
)

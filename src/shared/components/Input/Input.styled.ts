import styled from '@emotion/styled'

export const InputWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
})

export const InputLabel = styled.label(({ theme }) => ({
  fontSize: '15px',
  lineHeight: '20px',
  fontWeight: 600,
  color: theme.colors.textPrimary,
}))

export const InputContainer = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
})

export const InputField = styled.input<{ hasRightIcon?: boolean }>(
  ({ theme, hasRightIcon }) => ({
    width: '100%',
    height: '44px',
    background: theme.colors.systemBackground,
    border: 'none',
    borderRadius: theme.borderRadius.lg,
    padding: hasRightIcon ? '0 20px 0 16px' : '0 16px',
    fontFamily: 'Inter, monospace',
    fontSize: '15px',
    fontWeight: 500,
    color: theme.colors.textPrimary,
    outline: 'none',
    transition: 'all 0.2s ease',

    '&::placeholder': {
      color: theme.colors.textSecondary,
      opacity: 0.6,
    },

    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },

    '&[readonly]': {
      cursor: 'default',
    },
  }),
)

export const IconButton = styled.button({
  position: 'absolute',
  right: '0',
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0.6,
  transition: 'opacity 0.2s ease',

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.3,
  },
})

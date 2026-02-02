import styled from '@emotion/styled'

export const LanguageOptionWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  background: theme.colors.neutral100,
  borderRadius: theme.borderRadius.xl,
  overflow: 'hidden',
}))

export const LanguageOption = styled.button<{ $isSelected?: boolean }>(
  ({ theme, $isSelected }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '52px',
    width: '100%',
    padding: '0 16px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'background 0.2s ease',
    color: theme.colors.textPrimary,

    '&:active': {
      background: theme.semantic.active,
    },
  }),
)

export const LanguageText = styled.span(({ theme }) => ({
  fontSize: '15px',
  fontWeight: theme.typography.fontWeight.normal,
  color: theme.colors.textPrimary,
}))

export const IconWrapper = styled.div<{ $isSelected?: boolean }>(
  ({ theme, $isSelected }) => ({
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: $isSelected ? theme.colors.primary500 : theme.colors.textQuaternary,
    color: $isSelected ? theme.colors.textPrimary : 'transparent',
    transition: theme.transition.fast,
  }),
)

import styled from '@emotion/styled'

export const LanguageOptionWrapper = styled.div(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor:  theme.colors.systemElevatedBackground,
  borderRadius: '13px',
}));

export const LanguageOption = styled.div<{ $isSelected: boolean }>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
  width: '100%',
  transition: 'background-color 0.2s ease',
  padding: '10px',
}));

export const LanguageText = styled.span({
fontSize: '15px',
fontWeight: 400,
});

export const IconWrapper = styled.div<{ $isSelected: boolean }>(
  ({ $isSelected, theme }) => ({
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: $isSelected
      ? theme.colors.primary500
      : '#d0d0d0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.2s ease',

    '& svg': {
      width: '16px',
      height: '16px',
      opacity: $isSelected ? 1 : 0,
      color: theme.colors.textPrimary,
    },
  })
);

export const Description = styled.p(({theme}) => ({
  fontSize: '13px',
  color: theme.colors.textSecondary,
  margin: '10px 0 92px 0',
  lineHeight: '1.4'
}));
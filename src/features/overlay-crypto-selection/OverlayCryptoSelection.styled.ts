import styled from '@emotion/styled';

export const OverlayCryptoSelectionContent = styled.div({
  padding: '0',
  marginBottom: 20,
});

export const SelectionIndicator = styled.div<{ $isSelected: boolean }>(
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
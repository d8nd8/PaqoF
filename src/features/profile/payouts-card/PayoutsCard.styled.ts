import styled from '@emotion/styled';

export const PayoutsSection = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  padding: "0 14px",
}));

export const TextWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
});

export const SectionTitle = styled.div(({ theme }) => ({
  fontSize: "15px",
  fontWeight: 600,
  lineHeight: "30px",
  color: theme.colors.textPrimary,
  textAlign: "left",
}));

export const PayoutsDescription = styled.div(({ theme }) => ({
  fontSize: "13px",
  lineHeight: "18px",
  color: theme.colors.textSecondary,
  textAlign: "left",
}));

export const BalanceCard = styled.div(({ theme }) => ({
  background: theme.colors.systemElevatedBackground,
  borderRadius: theme.borderRadius.lg,
  padding: theme.spacing.lg,
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
}));

export const BalanceAmountWrapper = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  background: theme.colors.systemBackground,
  padding: "14px",
  borderRadius: "13px",
}));

export const BalanceAmount = styled.div(({ theme }) => ({
  fontFamily: "Inter, sans-serif",
  fontSize: "28px",
  lineHeight: "34px",
  fontWeight: 700,
  color: theme.colors.textPrimary,
}));

export const BalanceUSD = styled.div(({ theme }) => ({
  fontSize: "16px",
  lineHeight: "21px",
  fontWeight: 400,
  color: theme.colors.textSecondary,
}));

export const WithdrawButton = styled.button(({ theme }) => ({
  width: '100%',
  height: '48px',
  border: 'none',
  borderRadius: theme.borderRadius.lg,
  fontFamily: 'Inter, sans-serif',
  fontSize: '15px',
  fontWeight: 600,
  transition: 'all 0.2s ease',
  background: theme.colors.primary500,
  color: theme.colors.textPrimary,
  cursor: 'pointer',
  '&:hover:not(:disabled)': {
    opacity: 0.8,
  },
  '&:active:not(:disabled)': {
    transform: 'scale(0.98)',
  },
  '&:disabled': {
    background: theme.colors.neutral300,
    color: theme.colors.textSecondary,
    cursor: 'not-allowed',
    transform: 'none',
    opacity: 1,
  },
}));

// WalletDepositOverlay.styled.ts
import styled from "@emotion/styled";

export const OverlayWrapper = styled.div(({ theme }) => ({
  position: "fixed",
  inset: 0,
  zIndex: theme.zIndex.modal,
  display: "flex",
  flexDirection: "column",
  background: theme.colors.systemBackground,
}));

export const Header = styled.div({
  display: "flex",
  alignItems: "center",
  padding: "16px",
  position: "relative",
});

export const BackButton = styled.button(({ theme }) => ({
  position: "absolute",
  left: "16px",
  border: "none",
  background: "transparent",
  cursor: "pointer",
  "& svg": {
    width: "24px",
    height: "24px",
    stroke: theme.colors.textPrimary,
  },
}));

export const Title = styled.h2(({ theme }) => ({
  flex: 1,
  textAlign: "center",
  fontSize: "18px",
  fontWeight: 600,
  color: theme.colors.textPrimary,
  margin: 0,
}));

export const Content = styled.div({
  flex: 1,
  padding: "0 16px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  overflowY: "auto",
});

export const SectionTitle = styled.div(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 500,
  color: theme.colors.textSecondary,
}));

export const CryptoCard = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "14px 16px",
  borderRadius: "12px",
  background: theme.colors.neutral100,
  boxShadow: theme.semantic.shadowLight,
  "& > div": {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontWeight: 600,
    fontSize: "16px",
  },
  "& small": {
    fontSize: "13px",
    color: theme.colors.textSecondary,
  },
}));

export const NetworkOption = styled.div<{ $selected?: boolean }>(
  ({ theme, $selected }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 16px",
    borderRadius: "12px",
    background: theme.colors.neutral100,
    border: $selected
      ? `2px solid ${theme.colors.primary600}`
      : `1px solid ${theme.colors.neutral300}`,
    cursor: "pointer",
    "& small": {
      fontSize: "13px",
      color: theme.colors.textSecondary,
    },
    "& svg": {
      width: "18px",
      height: "18px",
      color: theme.colors.primary600,
    },
  })
);

export const NetworkLeft = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  fontWeight: 500,
  fontSize: "16px",
});

export const NetworkRight = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "13px",
});

export const BottomButton = styled.button(({ theme }) => ({
  margin: "16px",
  height: "52px",
  width: "calc(100% - 32px)",
  fontSize: "16px",
  fontWeight: 600,
  borderRadius: "12px",
  border: "none",
  background: theme.colors.primary600,
  color: theme.colors.systemElevatedBackground,
  cursor: "pointer",
}));

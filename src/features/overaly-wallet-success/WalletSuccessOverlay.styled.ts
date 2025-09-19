import styled from "@emotion/styled";

export const OverlayWrapper = styled.div(({ theme }) => ({
  position: "fixed",
  inset: 0,
  background: `
    radial-gradient(circle at top left, #F2FF9E 0%, transparent 50%),
    radial-gradient(circle at top right, #41D98D 0%, transparent 50%),
    #F2F2F7
  `,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  zIndex: theme.zIndex.modal,
}));

export const SuccessHeader = styled.div({
  padding: "60px 16px 24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "transparent",
});

export const SuccessTitle = styled.h2(({ theme }) => ({
  fontSize: "16px",
  lineHeight: "21px",
  fontWeight: 600,
  letterSpacing: "-0.31px",
  color: theme.colors.textPrimary,
  margin: 0,
  textAlign: "center",
}));

export const Date = styled.div(({ theme }) => ({
  fontSize: "12px",
  lineHeight: "16px",
  fontWeight: 400,
  letterSpacing: "0",
  color: theme.colors.textSecondary,
  marginTop: "4px",
  textAlign: "center",
}));

export const Amount = styled.div(({ theme }) => ({
  fontSize: "28px",
  lineHeight: "34px",
  fontWeight: theme.typography.fontWeight.bold,
  color: theme.colors.textPrimary,
  textAlign: "center",
  marginBottom: "70px"
}));

export const Content = styled.div({
  flex: 1,
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  gap: "16px",
  marginBottom: "10px",
});

export const Card = styled.div(({ theme }) => ({
  width: "100%",
  borderRadius: "13px",
  padding: "14px",
  background: theme.colors.neutral100,
  display: "flex",
  flexDirection: "column",
  gap: "12px",
}));

export const Row = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const Label = styled.div(({ theme }) => ({
  fontSize: "13px",
  lineHeight: "18px",
  color: theme.colors.textSecondary,
}));

export const Value = styled.div(({ theme }) => ({
  fontSize: "14px",
  lineHeight: "20px",
  fontWeight: theme.typography.fontWeight.medium,
  color: theme.colors.textPrimary,
  wordBreak: "break-word",
}));

export const BottomButton = styled.button(({ theme }) => ({
  margin: "0 16px 40px",
  height: "44px",
  borderRadius: "10px",
  background: theme.colors.primary500,
  color: theme.colors.textPrimary,
  fontSize: "15px",
  fontWeight: 600,
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "opacity 0.2s ease",
  "&:hover": { opacity: 0.9 },
  "&:active": { transform: "scale(0.98)" },
}));

export const RowHorizontal = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "8px",
});

export const CopyWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "6px",
});

export const CopyIcon = styled.button(({ theme }) => ({
  border: "none",
  background: "transparent",
  cursor: "pointer",
  fontSize: "16px",
  color: theme.colors.textSecondary,
  "&:hover": {
    color: theme.colors.textPrimary,
  },
}));

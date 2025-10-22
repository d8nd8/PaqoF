import styled from "@emotion/styled";

export const AccountsList = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 0,
  background: theme.colors.neutral100,
  borderRadius: theme.borderRadius.xl,
  padding: 0,
  overflow: "hidden",
}));

export const AccountItem = styled.button(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "44px",
  width: "100%",
  padding: "0 16px",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  textAlign: "left",
  transition: "background 0.2s ease",


}));

export const AccountContent = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

export const AccountIcon = styled.div(({ theme }) => ({
  width: "28px",
  height: "28px",
  minWidth: "28px",
  minHeight: "28px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: theme.colors.neutral300,
  borderRadius: "6px",

  "& svg": {
    width: "20px",
    height: "20px",
  },
}));

export const AccountTitle = styled.span(({ theme }) => ({
  fontSize: "15px",
  fontWeight: 500,
  color: theme.colors.textPrimary + " !important",
  textDecoration: "none !important",
  pointerEvents: "none",
  userSelect: "none",
}));

import styled from "@emotion/styled";

export const WidgetWrapper = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "14px",
  flex: 1,
  backgroundColor: theme.colors.systemBackground,
}));

export const SwitchableContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: '60px 14px 14px',
  background: 'linear-gradient(225deg, #C5C5C5 0%, #929292 100%)',
  borderBottomLeftRadius: '13px',
  borderBottomRightRadius: '13px',
});

export const PageHeader = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "14px",
});

export const BackButton = styled.button(({ theme }) => ({
  background: "transparent",
  border: "none",
  fontSize: "24px",
  cursor: "pointer",
  padding: "8px",
  color: theme.colors.textPrimary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "opacity 0.2s ease",
  "&:hover": {
    opacity: 0.7,
  },
}));

export const PageTitle = styled.h1(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 600,
  color: theme.colors.textPrimary,
  textAlign: "center",
  flex: 1,
}));

export const InfoButton = styled.button(({ theme }) => ({
  background: "transparent",
  border: "none",
  cursor: "pointer",
  padding: "8px",
  color: theme.colors.textSecondary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  width: "44px",
  height: "44px",
  transition: "opacity 0.2s ease",
  "&:hover": {
    opacity: 0.7,
  },
}));

export const SwitcherContainer = styled.div({
  marginBottom: "36px",
});

export const TabContent = styled.div({
  flex: 1,
});

export const PlaceholderBox = styled.div(({ theme }) => ({
  background: theme.colors.error500,
  width: "100%",
  height: "159px",
  marginBottom: "36px",
}));
import styled from "@emotion/styled";

export const InfoWrapper = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100%",
  background: theme.colors.systemBackground,
  padding: `0 ${theme.spacing.page}`,
  paddingTop: theme.spacing.header,
}));

export const Header = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  marginTop: theme.spacing.xxl,
  marginBottom: theme.spacing.xxl,
}));

export const BackButton = styled.button(({ theme }) => ({
  position: "absolute",
  left: 0,
  border: "none",
  background: "transparent",
  cursor: "pointer",
  padding: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& svg": {
    width: "24px",
    height: "24px",
    stroke: theme.colors.textPrimary,
  },
}));

export const Title = styled.h2(({ theme }) => ({
  fontFamily: "Inter, sans-serif",
  fontWeight: theme.typography.fontWeight.semibold,
  fontSize: "17px",
  lineHeight: "22px",
  letterSpacing: "-0.43px",
  color: theme.colors.textPrimary,
  margin: 0,
  textAlign: "center",
}));

export const SectionTitle = styled.p(({ theme }) => ({
  fontFamily: "Inter, sans-serif",
  fontSize: "15px",
  lineHeight: "20px",
  fontWeight: theme.typography.fontWeight.normal,
  letterSpacing: "-0.23px",
  color: theme.colors.textSecondary,
  margin: "0 0 8px 0",
  paddingLeft: "16px",
}));

export const InfoList = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 0,
  background: theme.colors.neutral100,
  borderRadius: theme.borderRadius.xl,
  padding: 0,
  overflow: "hidden",
}));

export const InfoItem = styled.button(({ theme }) => ({
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

  "&:hover": {
    background: theme.semantic.hover,
  },
  "&:active": {
    background: theme.semantic.active,
  },
}));

export const InfoText = styled.span(({ theme }) => ({
  fontSize: "15px",
  fontWeight: theme.typography.fontWeight.normal,
  color: theme.semantic.textPrimary,
}));

export const RightIcon = styled.span(({ theme }) => ({
  color: theme.colors.neutral500,
  display: "flex",
  alignItems: "center",
}));

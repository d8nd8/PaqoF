import styled from "@emotion/styled";

export const LanguageWrapper = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100%",
  background: theme.colors.systemBackground,
  paddingLeft: 14,
  paddingRight: 14,

  overflowY: "auto",
  WebkitOverflowScrolling: "touch",
  overscrollBehavior: "contain",

  "&::after": {
    content: '""',
    display: "block",
    height: "1px",
    flexShrink: 0,
  },
}));
export const Header = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  marginTop: theme.spacing.xxxl,
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

export const LanguageList = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  background: theme.colors.neutral100,
  borderRadius: theme.borderRadius.xl,
  overflow: "hidden",
}));

export const LanguageItem = styled.button(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "52px",
  width: "100%",
  padding: "0 16px",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  textAlign: "left",
  transition: "background 0.2s ease",
}));

export const LanguageText = styled.span(({ theme }) => ({
  fontSize: "15px",
  fontWeight: theme.typography.fontWeight.normal,
  color: theme.colors.textPrimary,
}));

export const RadioWrapper = styled.div<{ $active?: boolean }>(({ theme, $active }) => ({
  width: "24px",
  height: "24px",
  borderRadius: "9999px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: $active ? theme.colors.primary500 : theme.colors.textQuaternary,
  color: $active ? theme.colors.textPrimary : "transparent",
  transition: theme.transition.fast,
}));

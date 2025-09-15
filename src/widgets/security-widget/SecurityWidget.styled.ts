import styled from "@emotion/styled";

export const SecurityWrapper = styled.div(({ theme }) => ({
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
  marginTop: theme.spacing.xxl,
  marginBottom: theme.spacing.lg,
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

export const SecurityList = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  background: theme.colors.neutral100,
  borderRadius: theme.borderRadius.xl,
  overflow: "hidden",
}));

export const SecurityItem = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "44px",
  padding: "0 16px",
});

export const SecurityContent = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

export const SecurityIcon = styled.div(({ theme }) => ({
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

export const SecurityText = styled.span(({ theme }) => ({
  fontSize: "15px",
  fontWeight: theme.typography.fontWeight.normal,
  color: theme.colors.textPrimary,
}));

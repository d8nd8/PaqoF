import styled from "@emotion/styled";

export const KycWrapper = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100%",
  background: theme.colors.systemBackground,
}));

export const Header = styled.div(({ theme }) => ({
  marginTop: theme.spacing.xxl,
  marginBottom: theme.spacing.lg,
  display: "flex",
  justifyContent: "center",
}));

export const Title = styled.h2(({ theme }) => ({
  fontFamily: "Inter, sans-serif",
  fontWeight: theme.typography.fontWeight.semibold,
  fontSize: "17px",
  lineHeight: "22px",
  letterSpacing: "-0.43px",
  margin: 0,
  color: theme.colors.textPrimary,
}));

export const PlaceholderWrapper = styled.div({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const PlaceholderTitle = styled.p({
  fontFamily: "Inter, sans-serif",
  fontWeight: 600,
  fontSize: "17px",
  lineHeight: "22px",
  letterSpacing: "-0.43px",
  textAlign: "center",
  color: "#000000",
  margin: 0,
  marginBottom: "4px",
});

export const PlaceholderSubtitle = styled.p({
  fontFamily: "Inter, sans-serif",
  fontWeight: 400,
  fontSize: "15px",
  lineHeight: "20px",
  letterSpacing: "-0.23px",
  textAlign: "center",
  color: "rgba(60, 60, 67, 0.6)",
  margin: 0,
});

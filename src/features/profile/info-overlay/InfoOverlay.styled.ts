import styled from "@emotion/styled";

export const Content = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "16px 0",
}));

export const ColorCard = styled.div(({ theme }) => ({
  width: "100%",
  height: "347px",
  background: "#FF0000",
  borderRadius: "12px",
  position: "relative",
  overflow: "hidden",
  marginBottom: "14px",
}));

export const Title = styled.h3(({ theme }) => ({
  fontSize: "20px",
  lineHeight: '"25px',
  color: theme.colors.textPrimary,
  textAlign: "left",
  marginBottom: "5px",
}));

export const Description = styled.p(({ theme }) => ({
  fontSize: "15px",
  lineHeight: "20px",
  color: theme.colors.textSecondary,
  textAlign: "left",
  marginBottom: "81px",
}));
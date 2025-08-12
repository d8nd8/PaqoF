import styled from "@emotion/styled";

export const SwipeAreaLeft = styled.div({
  position: "absolute",
  top: 0,
  left: 0,
  width: "50px",
  height: "100%",
  zIndex: 5,
  cursor: "pointer"
});

export const SwipeAreaRight = styled.div({
  position: "absolute",
  top: 0,
  right: 0,
  width: "50px",
  height: "100%",
  zIndex: 5,
  cursor: "pointer"
});

export const SliderContainer = styled.div(({ theme }) => ({
  flex: 1,
  width: "100%",
  maxWidth: "100%",
  position: "relative",
  overflow: "hidden",
  background: theme.colors.systemBackground,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
}));


export const SlideCenter = styled.div({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "0 24px",
  textAlign: "center"
});

export const Title = styled.h2(({ theme }) => ({
  fontSize: "28px",
  fontWeight: 700,
  lineHeight: "34px",
  color: theme.colors.textPrimary,
}));

export const Description = styled.p(({ theme }) => ({
  fontSize: "16px",
  lineHeight: "21px",
  color: theme.colors.textSecondary,
  marginBottom: "14px",
}));

export const BottomSection = styled.div({
  padding: "34px 14px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
});

export const MainButton = styled.button(({ theme }) => ({
  width: "100%",
  background: theme.colors.primary500,
  color: theme.colors.textPrimary,
  border: "none",
  borderRadius: 8,
  padding: "12px",
  fontWeight: 600,
  fontSize: "16px",
  cursor: "pointer"
}));

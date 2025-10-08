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
  width: "100vw",
  maxWidth: "100vw",
  display: "flex",
  height: "var(--app-height)",
  flexDirection: "column",
  background: theme.colors.systemBackground,
  paddingBottom: "50px",

  ".slider-slide": {
    width: "100% !important",
    maxWidth: "100%",
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxSizing: "border-box",
  },
}));

export const SlideCenter = styled.div({
  flex: 1,
  display: "flex",
  height: "100%",
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

export const ImageWrapper = styled.div({
  flexShrink: 0,
  width: "100%",
  maxWidth: "380px",
  height: "360px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",

  img: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
  },
});

export const TextBlock = styled.div({
  marginTop: "16px",
});




import styled from "@emotion/styled";

export const HeaderWrapper = styled.div<{ insetTop: number }>(({ theme, insetTop }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  marginBottom: theme.spacing.xxl,
  paddingTop: `${insetTop}px`,
}));

export const BackButton = styled.button<{ color?: string }>(({ theme, color }) => ({
  position: "absolute",
  left: 0,
  border: "none",
  background: "transparent",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "4px",

  "& svg": {
    width: "24px",
    height: "24px",
    stroke: color || theme.colors.textPrimary,
  },
}));

export const Title = styled.h2<{ color?: string }>(({ theme, color }) => ({
  fontFamily: "Inter, sans-serif",
  fontWeight: theme.typography.fontWeight.semibold,
  fontSize: "17px",
  lineHeight: "22px",
  letterSpacing: "-0.43px",
  color: color || theme.colors.textPrimary,
  margin: 0,
  textAlign: "center",
}));

export const RightSlot = styled.div<{ color?: string }>(({ color }) => ({
  position: "absolute",
  right: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",

  "& svg": {
    width: "24px",
    height: "24px",
    stroke: color ?? "currentColor",
    fill: color ?? "currentColor",
  },
}));

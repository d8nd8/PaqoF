import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const fillAnimation = keyframes({
  from: { transform: "scaleX(0)" },
  to: { transform: "scaleX(1)" }
});

export const PaginationContainer = styled.div(({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "10px"
}));

export const Dot = styled.button(({ theme }) => ({
  width: "7px",
  height: "7px",
  borderRadius: "50%",
  border: "none",
  backgroundColor: theme.colors.textTertiary,
  cursor: "pointer",
  transition: "all 0.3s ease",
  position: "relative",
}));

interface ActiveDotProps {
  $isAnimating: boolean;
  $duration: number;
}

export const ActiveDot = styled.div<ActiveDotProps>(({ theme, $isAnimating, $duration }) => ({
  width: "35px",
  height: "7px",
  borderRadius: "360px",
  backgroundColor: theme.colors.textTertiary,
  position: "relative",
  overflow: "hidden",

  "&::before": {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: theme.colors.textPrimary,
    borderRadius: "360px",
    transform: "scaleX(0)",
    transformOrigin: "left",
    animation: $isAnimating ? `${fillAnimation} ${$duration}ms linear` : "none"
  }
}));

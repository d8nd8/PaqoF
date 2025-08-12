import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const rotation = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

interface SpinnerItemProps {
  size: number;
  thickness: number;
  color: string;
}

export const SpinnerWrapper = styled.div({
  display: "inline-block",
});

export const SpinnerItem = styled.span<SpinnerItemProps>(
  ({ size, thickness, color }) => ({
    width: size,
    height: size,
    borderWidth: thickness,
    borderStyle: "solid",
    borderColor: color,
    borderBottomColor: "transparent",
    borderRadius: "50%",
    display: "block",
    boxSizing: "border-box",
    animation: `${rotation} 1s linear infinite`,
  })
);

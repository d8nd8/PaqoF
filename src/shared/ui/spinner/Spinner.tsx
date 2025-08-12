import React from "react";
import * as S from "./Spinner.styled";

interface SpinnerProps {
  size?: number;
  thickness?: number;
  color?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
                                                  size = 24,
                                                  thickness = 1,
                                                  color = "#000",
                                                }) => {
  return (
    <S.SpinnerWrapper>
      <S.SpinnerItem size={size} thickness={thickness} color={color} />
    </S.SpinnerWrapper>
  );
};

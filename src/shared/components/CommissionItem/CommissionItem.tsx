import React from "react";
import * as S from "./CommissionItem.styled";
import ChevronRightIcon from "@icons/chevron-right.svg?react";

interface CommissionItemProps {
  text: string;
  onClick?: () => void;
}

export const CommissionItem: React.FC<CommissionItemProps> = ({ text, onClick }) => {
  return (
    <S.Wrapper onClick={onClick}>
      <S.Left>
        <span>{text}</span>
      </S.Left>
      <ChevronRightIcon />
    </S.Wrapper>
  );
};

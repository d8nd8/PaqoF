import React from "react";
import {
  PakogochiWrapper,
  PlaceholderText,
} from "./PakogochiTab.styled";

type Props = {
  // Будущие пропсы для 5 уровней прогресса
  level?: number;
  experience?: number;
  maxExperience?: number;
};

export const PakogochiTab: React.FC<Props> = ({
    level = 1,
    experience = 0,
    maxExperience = 100,
  }) => {
  return (
    <PakogochiWrapper>
      <PlaceholderText>Пакогочи - в разработке</PlaceholderText>
      <PlaceholderText>
        Здесь будет система уровней с прогрессом
      </PlaceholderText>
    </PakogochiWrapper>
  );
};

export default PakogochiTab;
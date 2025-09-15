import React from "react";
import {
  BonusWrapper,
  Header,
  Title,
  PlaceholderWrapper,
  PlaceholderTitle,
  PlaceholderSubtitle,
} from "./BonusWidget.styled";

export const BonusWidget: React.FC = () => {
  return (
    <BonusWrapper>
      <Header>
        <Title>Бонусы</Title>
      </Header>
      <PlaceholderWrapper>
        <PlaceholderTitle>Скоро тут будет красиво</PlaceholderTitle>
        <PlaceholderSubtitle>А пока тут ничего нет</PlaceholderSubtitle>
      </PlaceholderWrapper>
    </BonusWrapper>
  );
};

export default BonusWidget;

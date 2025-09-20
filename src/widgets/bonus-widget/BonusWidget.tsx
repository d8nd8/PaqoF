import React from "react";
import {
  BonusWrapper,
  Header,
  Title,
  PlaceholderWrapper,
  PlaceholderTitle,
  PlaceholderSubtitle,
} from "./BonusWidget.styled";
import { useTranslation } from "react-i18next";

export const BonusWidget: React.FC = () => {
  const { t } = useTranslation();

  return (
    <BonusWrapper>
      <Header>
        <Title>{t("bonus.title")}</Title>
      </Header>
      <PlaceholderWrapper>
        <PlaceholderTitle>{t("bonus.placeholder.title")}</PlaceholderTitle>
        <PlaceholderSubtitle>{t("bonus.placeholder.subtitle")}</PlaceholderSubtitle>
      </PlaceholderWrapper>
    </BonusWrapper>
  );
};

export default BonusWidget;

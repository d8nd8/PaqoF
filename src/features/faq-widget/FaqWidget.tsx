import React from "react";
import {
  FaqWrapper,
  Header,
  Title,
  PlaceholderWrapper,
  PlaceholderTitle,
  PlaceholderSubtitle,
} from "./FaqWidget.styled";
import { useTranslation } from "react-i18next";

export const FaqWidget: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FaqWrapper>
      <Header>
        <Title>{t("faq.title")}</Title>
      </Header>
      <PlaceholderWrapper>
        <PlaceholderTitle>{t("faq.placeholder.title")}</PlaceholderTitle>
        <PlaceholderSubtitle>{t("faq.placeholder.subtitle")}</PlaceholderSubtitle>
      </PlaceholderWrapper>
    </FaqWrapper>
  );
};

export default FaqWidget;

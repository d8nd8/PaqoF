import React from "react";
import {
  Header,
  KycWrapper, PlaceholderSubtitle,
  PlaceholderTitle,
  PlaceholderWrapper,
  Title
} from '@/widgets/kyc-widget/KycWidget.styled'
import { useTranslation } from "react-i18next";


export const KycWidget: React.FC = () => {
  const { t } = useTranslation();

  return (
    <KycWrapper>
      <Header>
        <Title>{t("kyc.title")}</Title>
      </Header>
      <PlaceholderWrapper>
        <PlaceholderTitle>{t("kyc.placeholder.title")}</PlaceholderTitle>
        <PlaceholderSubtitle>{t("kyc.placeholder.subtitle")}</PlaceholderSubtitle>
      </PlaceholderWrapper>
    </KycWrapper>
  );
};

export default KycWidget;

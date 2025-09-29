import React from "react";
import {
  KycWrapper,
  PlaceholderSubtitle,
  PlaceholderTitle,
  PlaceholderWrapper,
} from "@/widgets/kyc-widget/KycWidget.styled";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { PageHeader } from "@/shared/components/PageHeader/PageHeader";

export const KycWidget: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);

  return (
    <KycWrapper>
      <PageHeader title={t("kyc.title")} onBack={handleBack} />

      <PlaceholderWrapper>
        <PlaceholderTitle>{t("kyc.placeholder.title")}</PlaceholderTitle>
        <PlaceholderSubtitle>{t("kyc.placeholder.subtitle")}</PlaceholderSubtitle>
      </PlaceholderWrapper>
    </KycWrapper>
  );
};

export default KycWidget;

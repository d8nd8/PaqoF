import React from "react";
import {
  FaqWrapper,
  PlaceholderWrapper,
  PlaceholderTitle,
  PlaceholderSubtitle,
} from "./FaqWidget.styled";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { PageHeader } from "@/shared/components/PageHeader/PageHeader";

export const FaqWidget: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);

  return (
    <FaqWrapper>
      <PageHeader title={t("faq.title")} onBack={handleBack} />

      <PlaceholderWrapper>
        <PlaceholderTitle>{t("faq.placeholder.title")}</PlaceholderTitle>
        <PlaceholderSubtitle>{t("faq.placeholder.subtitle")}</PlaceholderSubtitle>
      </PlaceholderWrapper>
    </FaqWrapper>
  );
};

export default FaqWidget;

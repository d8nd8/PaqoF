import React from "react";
import {
  BonusWrapper,
  PlaceholderWrapper,
  PlaceholderTitle,
  PlaceholderSubtitle,
} from "./BonusWidget.styled";
import { useTranslation } from "react-i18next";
import { PageHeader } from "@/shared/components/PageHeader/PageHeader";

export const BonusWidget: React.FC = () => {
  const { t } = useTranslation();

  return (
    <BonusWrapper>
      <PageHeader title={t("bonus.title")} showBackButton={false} />

      <PlaceholderWrapper>
        <PlaceholderTitle>{t("bonus.placeholder.title")}</PlaceholderTitle>
        <PlaceholderSubtitle>{t("bonus.placeholder.subtitle")}</PlaceholderSubtitle>
      </PlaceholderWrapper>
    </BonusWrapper>
  );
};

export default BonusWidget;

import React from "react";
import {
  SecurityWrapper,
  SectionTitle,
  SecurityList,
  SecurityItem,
  SecurityText,
  SecurityIcon,
} from "./SecurityWidget.styled";

import { useTranslation } from "react-i18next";
import KeyIcon from "@/assets/icons/key-icon.svg?react";
import PinToggle from "@/features/pin-toggle/PinToggle";
import { PageHeader } from '@/shared/components/PageHeader/PageHeader'

type Props = {
  onBack?: () => void;
};

export const SecurityWidget: React.FC<Props> = ({ onBack }) => {
  const { t } = useTranslation();

  return (
    <SecurityWrapper>
      <PageHeader title={t("security.title")} onBack={onBack} />

      <SectionTitle>{t("security.sectionTitle")}</SectionTitle>

      <SecurityList>
        <SecurityItem>
          <SecurityIcon>
            <KeyIcon />
          </SecurityIcon>
          <SecurityText>{t("security.pinCode")}</SecurityText>
          <PinToggle />
        </SecurityItem>
      </SecurityList>
    </SecurityWrapper>
  );
};

export default SecurityWidget;

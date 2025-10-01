import React from "react";
import KeyIcon from "@/assets/icons/key-icon.svg?react";
import PinToggle from '@/features/pin-toggle/PinToggle'
import { PageHeader } from '@/shared/components/PageHeader/PageHeader';
import { useTranslation } from "react-i18next";



import { SectionTitle, SecurityContent, SecurityIcon, SecurityItem, SecurityList, SecurityText, SecurityWrapper } from "./SecurityWidget.styled";


type Props = {
  onBack?: () => void;
  onOverlayChange?: (open: boolean) => void;
};

export const SecurityWidget: React.FC<Props> = ({ onBack, onOverlayChange }) => {
  const { t } = useTranslation();

  return (
    <SecurityWrapper>
      <PageHeader title={t("security.title")} onBack={onBack} />

      <SectionTitle>{t("security.sectionTitle")}</SectionTitle>

      <SecurityList>
        <SecurityItem>
          <SecurityContent>
            <SecurityIcon>
              <KeyIcon />
            </SecurityIcon>
            <SecurityText>{t("security.pinCode")}</SecurityText>
          </SecurityContent>
          <PinToggle onOverlayChange={onOverlayChange} />
        </SecurityItem>
      </SecurityList>
    </SecurityWrapper>
  );
};

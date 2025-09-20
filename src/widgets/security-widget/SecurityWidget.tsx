import React from "react";
import {
  SecurityWrapper,
  Header,
  Title,
  BackButton,
  SectionTitle,
  SecurityList,
  SecurityItem,
  SecurityText,
  SecurityIcon,
} from "./SecurityWidget.styled";

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ChevronLeft from "@/assets/icons/chevron-left.svg?react";
import KeyIcon from "@/assets/icons/key-icon.svg?react";
import PinToggle from "@/features/pin-toggle/PinToggle";

type Props = {
  onBack?: () => void;
};

export const SecurityWidget: React.FC<Props> = ({ onBack }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <SecurityWrapper>
      <Header>
        <BackButton onClick={handleBack}>
          <ChevronLeft />
        </BackButton>
        <Title>{t("security.title")}</Title>
      </Header>

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

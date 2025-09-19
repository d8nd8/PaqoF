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
import ChevronLeft from "@/assets/icons/chevron-left.svg?react";
import KeyIcon from "@/assets/icons/key-icon.svg?react";
import PinToggle from "@/features/pin-toggle/PinToggle";

type Props = {
  onBack?: () => void;
};

export const SecurityWidget: React.FC<Props> = ({ onBack }) => {
  const navigate = useNavigate();

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
        <Title>Безопасность</Title>
      </Header>

      <SectionTitle>Авторизация</SectionTitle>

      <SecurityList>
        <SecurityItem>
          <SecurityIcon>
            <KeyIcon />
          </SecurityIcon>
          <SecurityText>Пин-код</SecurityText>
          <PinToggle />
        </SecurityItem>
      </SecurityList>
    </SecurityWrapper>
  );
};

export default SecurityWidget;

import React from "react";
import {
  SecurityWrapper,
  Header,
  Title,
  SectionTitle,
  SecurityList,
  SecurityItem,
  SecurityText,
  SecurityIcon,
} from "./SecurityWidget.styled";

import KeyIcon from "@/assets/icons/key-icon.svg?react";
import PinToggle from '@/features/pin-toggle/PinToggle'

export const SecurityWidget: React.FC = () => {
  return (
    <SecurityWrapper>
      <Header>
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

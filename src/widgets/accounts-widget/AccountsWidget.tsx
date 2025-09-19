import React from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import {
  InfoWrapper,
  Header,
  Title,
  BackButton,
} from "@/widgets/info/info-widget/InfoWidget.styled";

import {
  AccountsList,
  AccountItem,
  AccountContent,
  AccountIcon,
  AccountTitle,
} from "./AccountsWidget.styled";

import ChevronLeft from "@/assets/icons/chevron-left.svg?react";
import TelegramIcon from "@/assets/icons/telegram-icon.svg?react";
import VkIcon from "@/assets/icons/vk-icon.svg?react";
import InstagramIcon from "@/assets/icons/instagram-icon.svg?react";
import XIcon from "@/assets/icons/x-icon.svg?react";

const safeText = (text: string) => text.split("").join("\u200B");

const accounts = [
  { id: "telegram", title: safeText("Telegram"), icon: <TelegramIcon /> },
  { id: "vk", title: safeText("VK"), icon: <VkIcon /> },
  { id: "instagram", title: safeText("Instagram"), icon: <InstagramIcon /> },
  { id: "x", title: safeText("X"), icon: <XIcon /> },
];

type Props = {
  onBack?: () => void;
};

export const AccountsWidget: React.FC<Props> = ({ onBack }) => {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    console.log("Открыть аккаунт:", id);
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <InfoWrapper>
      <Header>
        <BackButton onClick={handleBack}>
          <ChevronLeft />
        </BackButton>
        <Title>Официальные аккаунты</Title>
      </Header>

      <AccountsList>
        {accounts.map((acc) => (
          <AccountItem key={acc.id} onClick={() => handleClick(acc.id)}>
            <AccountContent>
              <AccountIcon>{acc.icon}</AccountIcon>
              <AccountTitle>{acc.title}</AccountTitle>
            </AccountContent>
            <ChevronRight size={18} strokeWidth={1.5} />
          </AccountItem>
        ))}
      </AccountsList>
    </InfoWrapper>
  );
};

export default AccountsWidget;

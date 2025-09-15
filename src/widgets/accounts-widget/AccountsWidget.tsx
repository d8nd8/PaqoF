import React from "react";
import { ChevronRight } from "lucide-react";

import {
  InfoWrapper,
  Header,
  Title,
  SectionTitle,
} from "@/widgets/info/info-widget/InfoWidget.styled";

import {
  AccountsList,
  AccountItem,
  AccountContent,
  AccountIcon,
} from "./AccountsWidget.styled";

import TelegramIcon from "@/assets/icons/telegram-icon.svg?react";
import VkIcon from "@/assets/icons/vk-icon.svg?react";
import InstagramIcon from "@/assets/icons/instagram-icon.svg?react";
import XIcon from "@/assets/icons/x-icon.svg?react";

const accounts = [
  { id: "telegram", title: "Telegram", icon: <TelegramIcon /> },
  { id: "vk", title: "VK", icon: <VkIcon /> },
  { id: "instagram", title: "Instagram", icon: <InstagramIcon /> },
  { id: "x", title: "X", icon: <XIcon /> },
];

export const AccountsWidget: React.FC = () => {
  const handleClick = (id: string) => {
    console.log("Открыть аккаунт:", id);
  };

  return (
    <InfoWrapper>
      <Header>
        <Title>Официальные аккаунты</Title>
      </Header>

      <SectionTitle>Соцсети</SectionTitle>

      <AccountsList>
        {accounts.map((acc) => (
          <AccountItem key={acc.id} onClick={() => handleClick(acc.id)}>
            <AccountContent>
              <AccountIcon>{acc.icon}</AccountIcon>
              {acc.title}
            </AccountContent>
            <ChevronRight size={18} strokeWidth={1.5} />
          </AccountItem>
        ))}
      </AccountsList>
    </InfoWrapper>
  );
};

export default AccountsWidget;

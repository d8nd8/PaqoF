import React from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

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

const accounts = [
  { id: "telegram", icon: <TelegramIcon /> },
  { id: "vk", icon: <VkIcon /> },
  { id: "instagram", icon: <InstagramIcon /> },
  { id: "x", icon: <XIcon /> },
];

type Props = {
  onBack?: () => void;
};

export const AccountsWidget: React.FC<Props> = ({ onBack }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
        <Title>{t("accounts.title")}</Title>
      </Header>

      <AccountsList>
        {accounts.map((acc) => (
          <AccountItem key={acc.id} onClick={() => handleClick(acc.id)}>
            <AccountContent>
              <AccountIcon>{acc.icon}</AccountIcon>
              <AccountTitle>{t(`accounts.list.${acc.id}`)}</AccountTitle>
            </AccountContent>
            <ChevronRight size={18} strokeWidth={1.5} />
          </AccountItem>
        ))}
      </AccountsList>
    </InfoWrapper>
  );
};

export default AccountsWidget;

import React, { useState } from "react";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  LanguageWrapper,
  Header,
  Title,
  BackButton,
  LanguageList,
  LanguageItem,
  LanguageText,
  RadioWrapper,
} from "./LanguageWidget.styled";

import ChevronLeft from "@/assets/icons/chevron-left.svg?react";

const languages = [
  { id: "ru", token: "language.list.ru" },
  { id: "en", token: "language.list.en" },
];

type Props = {
  onBack?: () => void;
};

export const LanguageWidget: React.FC<Props> = ({ onBack }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState(i18n.language || "ru");

  const handleSelect = (id: string) => {
    setSelected(id);
    i18n.changeLanguage(id);
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <LanguageWrapper>
      <Header>
        <BackButton onClick={handleBack}>
          <ChevronLeft />
        </BackButton>
        <Title>{t("language.title")}</Title>
      </Header>

      <LanguageList>
        {languages.map((lang) => (
          <LanguageItem key={lang.id} onClick={() => handleSelect(lang.id)}>
            <LanguageText>{t(lang.token)}</LanguageText>
            <RadioWrapper $active={selected === lang.id}>
              {selected === lang.id && <Check size={16} strokeWidth={2} />}
            </RadioWrapper>
          </LanguageItem>
        ))}
      </LanguageList>
    </LanguageWrapper>
  );
};

export default LanguageWidget;

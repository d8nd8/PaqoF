import React, { useState } from "react";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
  { id: "ru", label: "Русский" },
  { id: "en", label: "English" },
];

type Props = {
  onBack?: () => void;
};

export const LanguageWidget: React.FC<Props> = ({ onBack }) => {
  const [selected, setSelected] = useState("ru");
  const navigate = useNavigate();

  const handleSelect = (id: string) => {
    setSelected(id);
    console.log("Выбран язык:", id);
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
        <Title>Язык</Title>
      </Header>

      <LanguageList>
        {languages.map((lang) => (
          <LanguageItem key={lang.id} onClick={() => handleSelect(lang.id)}>
            <LanguageText>{lang.label}</LanguageText>
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

import React, { useState } from "react";
import { Check } from "lucide-react";

import {
  LanguageWrapper,
  Header,
  Title,
  LanguageList,
  LanguageItem,
  LanguageText,
  RadioWrapper,
} from "./LanguageWidget.styled";

const languages = [
  { id: "ru", label: "Русский" },
  { id: "en", label: "English" },
];

export const LanguageWidget: React.FC = () => {
  const [selected, setSelected] = useState("ru");

  const handleSelect = (id: string) => {
    setSelected(id);
    console.log("Выбран язык:", id);
  };

  return (
    <LanguageWrapper>
      <Header>
        <Title>Язык</Title>
      </Header>

      <LanguageList>
        {languages.map((lang) => (
          <LanguageItem
            key={lang.id}
            onClick={() => handleSelect(lang.id)}
          >
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

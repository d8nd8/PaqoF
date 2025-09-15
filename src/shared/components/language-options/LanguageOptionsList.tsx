import React from "react";
import CheckIcon from "@icons/check.svg?react";
import * as S from "./LanguageOptionsList.styled";
import type { LanguageOptionsListProps } from '@/shared/components/language-options/LanguageOptionsList.types'


export const LanguageOptionsList: React.FC<LanguageOptionsListProps> = ({
                                                                          selected,
                                                                          onSelect,
                                                                          languages,
                                                                        }) => {
  return (
    <S.LanguageOptionWrapper>
      {languages.map((lang) => (
        <S.LanguageOption
          key={lang.code}
          $isSelected={selected === lang.code}
          onClick={() => onSelect(lang.code)}
        >
          <S.LanguageText>{lang.name}</S.LanguageText>
          <S.IconWrapper $isSelected={selected === lang.code}>
            {selected === lang.code && <CheckIcon />}
          </S.IconWrapper>
        </S.LanguageOption>
      ))}
    </S.LanguageOptionWrapper>
  );
};

import React, { useState } from 'react';

import CheckIcon from '@icons/check.svg?react';
import * as S from './LanguageSwitcher.styled';
import { BottomSheet } from '../../shared/components/BottomSheet/BottomSheet'

interface Language {
  code: string;
  name: string;
}

interface LanguageSwitcherProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
  languages?: Language[];
}

const defaultLanguages: Language[] = [
  { code: 'ru', name: 'Русский' },
  { code: 'en', name: 'English' }
];

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
                                                                    isOpen,
                                                                    onClose,
                                                                    selectedLanguage,
                                                                    onLanguageChange,
                                                                    languages = defaultLanguages
                                                                  }) => {
  const [tempSelected, setTempSelected] = useState(selectedLanguage);

  const handleSave = () => {
    onLanguageChange(tempSelected);
    onClose();
  };

  const handleClose = () => {
    setTempSelected(selectedLanguage);
    onClose();
  };

  const isChanged = tempSelected !== selectedLanguage;

  return (
    <BottomSheet
      isOpen={isOpen}
      onClose={handleClose}
      title="Изменить язык"
      bottomButtonText="Сохранить"
      onBottomButtonClick={handleSave}
      isBottomButtonDisabled={!isChanged}
    >
      <S.LanguageOptionWrapper>
        {languages.map((language) => (
          <S.LanguageOption
            key={language.code}
            $isSelected={tempSelected === language.code}
            onClick={() => setTempSelected(language.code)}
          >
            <S.LanguageText>{language.name}</S.LanguageText>
            <S.IconWrapper $isSelected={tempSelected === language.code}>
              <CheckIcon />
            </S.IconWrapper>
          </S.LanguageOption>
        ))}
      </S.LanguageOptionWrapper>

      <S.Description>
        Язык можно поменять в любое время в настройках
      </S.Description>
    </BottomSheet>
  );
};
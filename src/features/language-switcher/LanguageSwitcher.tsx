import React, { useState } from "react";
import { BottomSheet } from "@/shared/components/BottomSheet/BottomSheet";
import { LanguageOptionsList } from "@/shared/components/language-options/LanguageOptionsList";
import type { LanguageSwitcherProps } from '@/features/language-switcher/LanguageSwitcher.tpyes'
import type { Language } from '@/shared/components/language-options/LanguageOptionsList.types'

const defaultLanguages: Language[] = [
  { code: "ru", name: "Русский" },
  { code: "en", name: "English" },
];

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
                                                                    isOpen,
                                                                    onClose,
                                                                    selectedLanguage,
                                                                    onLanguageChange,
                                                                    languages = defaultLanguages,
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
      title="Выбор языка"
      bottomButtonText="Сохранить"
      onBottomButtonClick={handleSave}
      isBottomButtonDisabled={!isChanged}
    >
      <LanguageOptionsList
        selected={tempSelected}
        onSelect={setTempSelected}
        languages={languages}
      />
    </BottomSheet>
  );
};

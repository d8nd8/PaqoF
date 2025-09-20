import React, { useState, useEffect } from "react";
import { BottomSheet } from "@/shared/components/BottomSheet/BottomSheet";
import { LanguageOptionsList } from "@/shared/components/language-options/LanguageOptionsList";
import type { LanguageSwitcherProps } from "@/features/language-switcher/LanguageSwitcher.tpyes";
import type { Language } from "@/shared/components/language-options/LanguageOptionsList.types";
import { useTranslation } from "react-i18next";
import { i18n } from "@/i18n/config";

const defaultLanguages: Language[] = [
  { code: "ru", name: "Русский" },
  { code: "en", name: "English" },
];

export const LanguageSwitcher: React.FC<
  Omit<LanguageSwitcherProps, "selectedLanguage" | "onLanguageChange">
> = ({ isOpen, onClose, languages = defaultLanguages }) => {
  const { t } = useTranslation();
  const [tempSelected, setTempSelected] = useState(i18n.language);

  useEffect(() => {
    setTempSelected(i18n.language);
  }, [i18n.language]);

  const handleSave = () => {
    i18n.changeLanguage(tempSelected);
    localStorage.setItem("lang", tempSelected);
    onClose();
  };

  const handleClose = () => {
    setTempSelected(i18n.language);
    onClose();
  };

  const isChanged = tempSelected !== i18n.language;

  return (
    <BottomSheet
      isOpen={isOpen}
      onClose={handleClose}
      title={t("languageSwitcher.title")}
      bottomButtonText={t("languageSwitcher.save")}
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

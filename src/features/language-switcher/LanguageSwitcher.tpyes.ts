import type { Language } from '@/shared/components/language-options/LanguageOptionsList.types'

export interface LanguageSwitcherProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
  languages?: Language[];
  immediate?: boolean;
  showDescription?: boolean;
}
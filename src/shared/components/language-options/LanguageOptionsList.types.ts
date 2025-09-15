export interface Language {
  code: string;
  name: string;
}

export interface LanguageOptionsListProps {
  selected: string;
  onSelect: (code: string) => void;
  languages: Language[];
}

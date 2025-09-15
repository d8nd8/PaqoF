import React from "react";
import { BaseLayout } from "@/widgets/base-layout";
import LanguageWidget from '@/widgets/language-wiget/LanguageWidget'


export const LanguagePage: React.FC = () => {
  return (
    <BaseLayout showNavbar>
      <LanguageWidget />
    </BaseLayout>
  );
};

export default LanguagePage;

import React from "react";
import { BaseLayout } from "@/widgets/base-layout";
import FaqWidget from '@/features/faq-widget/FaqWidget'


export const FaqPage: React.FC = () => {
  return (
    <BaseLayout showNavbar>
      <FaqWidget />
    </BaseLayout>
  );
};

export default FaqPage;

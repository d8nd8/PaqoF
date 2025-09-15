import React from "react";
import { BaseLayout } from "@/widgets/base-layout";
import InfoWidget from '@/widgets/info/info-widget/InfoWidget'


export const InfoPage: React.FC = () => {
  return (
    <BaseLayout showNavbar>
      <InfoWidget />
    </BaseLayout>
  );
};

export default InfoPage;

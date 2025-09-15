import React from "react";
import { BaseLayout } from "@/widgets/base-layout";
import BonusWidget from "@/widgets/bonus-widget/BonusWidget";

export const BonusPage: React.FC = () => {
  return (
    <BaseLayout showNavbar>
      <BonusWidget />
    </BaseLayout>
  );
};

export default BonusPage;

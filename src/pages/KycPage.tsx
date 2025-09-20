import React from "react";
import { BaseLayout } from "@/widgets/base-layout";
import KycWidget from "@/widgets/kyc-widget/KycWidget";

export const KycPage: React.FC = () => {
  return (
    <BaseLayout showNavbar>
      <KycWidget />
    </BaseLayout>
  );
};

export default KycPage;

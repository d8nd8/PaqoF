import React from "react";
import { BaseLayout } from "@/widgets/base-layout";
import SecurityWidget from "@/widgets/security-widget/SecurityWidget";

export const SecurityPage: React.FC = () => {
  return (
    <BaseLayout showNavbar>
      <SecurityWidget />
    </BaseLayout>
  );
};

export default SecurityPage;

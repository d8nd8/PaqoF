import React, { useState } from "react";
import { BaseLayout } from "@/widgets/base-layout";
import { SecurityWidget } from '@/widgets/security-widget/SecurityWidget'


export const SecurityPage: React.FC = () => {
  const [overlayOpen, setOverlayOpen] = useState(false);

  return (
    <BaseLayout showNavbar={!overlayOpen}>
      <SecurityWidget onOverlayChange={setOverlayOpen} />
    </BaseLayout>
  );
};

export default SecurityPage;

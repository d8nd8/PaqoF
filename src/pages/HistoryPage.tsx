import React from "react";
import { BaseLayout } from "@/widgets/base-layout";
import HistoryWidget from '@/widgets/history-widget/HistoryWidget'

export const HistoryPage: React.FC = () => {
  return (
    <BaseLayout showNavbar>
      <HistoryWidget  />
    </BaseLayout>
  );
};

export default HistoryPage;

import React from "react";
import { useSearchParams } from "react-router-dom";
import { BaseLayout } from "@/widgets/base-layout";
import { CurrencyWidget } from "@/widgets/currency-widget/CurrencyWidget";

export const CurrencyPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const symbol = searchParams.get("symbol") || "USDT";

  return (
    <BaseLayout showNavbar={false}>
      <CurrencyWidget symbol={symbol} />
    </BaseLayout>
  );
};

export default CurrencyPage;

import React from "react";
import { BaseLayout } from "@/widgets/base-layout";
import AccountsWidget from "@/widgets/accounts-widget/AccountsWidget";

export const AccountsPage: React.FC = () => {
  return (
    <BaseLayout showNavbar>
      <AccountsWidget />
    </BaseLayout>
  );
};

export default AccountsPage;

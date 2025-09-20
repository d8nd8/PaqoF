import React from "react";
import { useTranslation } from "react-i18next";

import PayoutsCard from "@/features/profile/payouts-card";
import ReferralCodes from "@/features/profile/referral-codes";
import type { ReferralItemData } from "@/features/referral-list/ReferralItem";
import { ReferralList } from "@/features/referral-list/ReferralList";

import { RefBackWrapper } from "./RefBackTab.styled";

import avatar1 from "@/assets/images/avatar1.png";

type ReferralData = {
  id: string;
  username: string;
  avatar: string;
  earnings: string;
};

type Props = {
  progress?: number;
  balance?: number;
  balanceUSD?: number;
  referralCode?: string;
  referralLink?: string;
  referrals?: ReferralData[];
  referralsCount?: number;
  onWithdraw?: () => void;
  onCopyCode?: (text: string) => void;
  onReferralClick?: (referral: ReferralItemData) => void;
};

export const RefBackTab: React.FC<Props> = ({
                                              balance = 0,
                                              balanceUSD = 0,
                                              referralCode = "dko777ka",
                                              referralLink = "https://t.me/papagowallet",
                                              referrals = [
                                                {
                                                  id: "1",
                                                  username: "@curlyhunter",
                                                  avatar: avatar1,
                                                  earnings: "+100.00000 USDT",
                                                },
                                                {
                                                  id: "2",
                                                  username: "@curlypaster",
                                                  avatar: avatar1,
                                                  earnings: "+45 USDT",
                                                },
                                                {
                                                  id: "3",
                                                  username: "@oscar",
                                                  avatar: avatar1,
                                                  earnings: "+45 USDT",
                                                },
                                                {
                                                  id: "4",
                                                  username: "@valerysmolenka",
                                                  avatar: avatar1,
                                                  earnings: "+5 USDT",
                                                },
                                              ],
                                              referralsCount = 105,
                                              onWithdraw,
                                              onCopyCode,
                                              onReferralClick,
                                            }) => {
  const { t } = useTranslation();

  const referralItemsData: ReferralItemData[] = referrals.map((referral, index) => {
    const progressValues = [90, 50, 20, 0];
    return {
      ...referral,
      level: Math.floor(Math.random() * 20) + 1,
      progress: progressValues[index] || Math.floor(Math.random() * 100),
    };
  });

  return (
    <RefBackWrapper>
      <PayoutsCard
        title={t("referral.payouts.title")}
        description={t("referral.payouts.description")}
        balance={balance}
        balanceUSD={balanceUSD}
        currency="USDT"
        withdrawButtonText={t("referral.payouts.withdraw")}
        minWithdrawAmount={5}
        onWithdraw={onWithdraw}
      />

      <ReferralCodes
        referralCode={referralCode}
        referralLink={referralLink}
        onCopyCode={onCopyCode}
      />

      <ReferralList
        referrals={referralItemsData}
        referralsCount={referralsCount}
        title={t("referral.list.title")}
        showLevel={false}
        onReferralClick={onReferralClick}
      />
    </RefBackWrapper>
  );
};

export default RefBackTab;

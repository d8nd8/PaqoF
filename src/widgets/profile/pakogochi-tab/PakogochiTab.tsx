import React from "react";
import PayoutsCard from '@/features/profile/payouts-card';
import { ProgressStep } from "@/features/profile/progress-step";
import ReferralCodes from '@/features/profile/referral-codes';
import type { ReferralItemData } from '@/features/referral-list/ReferralItem';
import ReferralList from '@/features/referral-list/ReferralList'
import { PakogochiWrapper } from "./PakogochiTab.styled";

type ReferralData = {
  id: string;
  username: string;
  avatar: string;
  earnings: string;
};

type Props = {
  level?: number;
  experience?: number;
  maxExperience?: number;
  currentProgress?: number;
  referralsNeeded?: number;
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

export const PakogochiTab: React.FC<Props> = ({
                                                level = 5,
                                                currentProgress = 11,
                                                referralsNeeded = 5,
                                                balance = 0,
                                                balanceUSD = 0,
                                                referralCode = "pakogochi777",
                                                referralLink = "https://t.me/papagowallet",
                                                referrals = [
                                                  {
                                                    id: "1",
                                                    username: "@pakogochi_master",
                                                    avatar: "/images/avatar1.jpg",
                                                    earnings: "+50 USDT"
                                                  },
                                                  {
                                                    id: "2",
                                                    username: "@crypto_friend",
                                                    avatar: "/images/avatar2.jpg",
                                                    earnings: "+25 USDT"
                                                  },
                                                  {
                                                    id: "3",
                                                    username: "@trader_pro",
                                                    avatar: "/images/avatar3.jpg",
                                                    earnings: "+15 USDT"
                                                  }
                                                ],
                                                referralsCount = 42,
                                                onWithdraw,
                                                onCopyCode,
                                                onReferralClick,
                                              }) => {
  const referralItemsData: ReferralItemData[] = referrals.map(referral => ({
    ...referral,
    level: Math.floor(Math.random() * 15) + 1
  }));

  return (
    <PakogochiWrapper>
      <ReferralCodes
        referralCode={referralCode}
        referralLink={referralLink}
        onCopyCode={onCopyCode}
      />
      <ProgressStep
        currentProgress={currentProgress}
        level={level}
        maxLevel={5}
        referralsNeeded={referralsNeeded}
      />
      <PayoutsCard
        title="Вывод"
        description="Рефбэк автоматически поступит на ваш реферальный баланс в течение 14 дней после каждой транзакции, совершённой рефералом."
        balance={balance}
        balanceUSD={balanceUSD}
        currency="USDT"
        withdrawButtonText="Вывод"
        minWithdrawAmount={5}
        onWithdraw={onWithdraw}
      />

      <ReferralList
        referrals={referralItemsData}
        referralsCount={referralsCount}
        title="Рефералы"
        onReferralClick={onReferralClick}
      />
    </PakogochiWrapper>
  );
};
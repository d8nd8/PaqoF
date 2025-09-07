import React from "react";
import PayoutsCard from "@/features/profile/payouts-card";
import ReferralCodes from "@/features/profile/referral-codes";
import type { ReferralItemData } from '@/features/referral-list/ReferralItem';
import { ReferralList } from '@/features/referral-list/ReferralList'



import { RefBackWrapper } from './RefBackTab.styled';


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
                                                  avatar: "/images/avatar1.jpg",
                                                  earnings: "+100.00000 USDT"
                                                },
                                                {
                                                  id: "2",
                                                  username: "@curlypaster",
                                                  avatar: "/images/avatar2.jpg",
                                                  earnings: "+45 USDT"
                                                },
                                                {
                                                  id: "3",
                                                  username: "@oscar",
                                                  avatar: "/images/avatar3.jpg",
                                                  earnings: "+45 USDT"
                                                },
                                                {
                                                  id: "4",
                                                  username: "@valerysmolenka",
                                                  avatar: "/images/avatar4.jpg",
                                                  earnings: "+5 USDT"
                                                }
                                              ],
                                              referralsCount = 105,
                                              onWithdraw,
                                              onCopyCode,
                                              onReferralClick,
                                            }) => {
  const referralItemsData: ReferralItemData[] = referrals.map((referral, index) => {
    const progressValues = [90, 50, 20, 0];
    return {
      ...referral,
      level: Math.floor(Math.random() * 20) + 1,
      progress: progressValues[index] || Math.floor(Math.random() * 100)
    };
  });

  return (
    <RefBackWrapper>
      <PayoutsCard
        title="Выплаты"
        description="Рефбэк автоматически поступит на ваш реферальный баланс в течение 14 дней после каждой транзакции, совершённой рефералом."
        balance={balance}
        balanceUSD={balanceUSD}
        currency="USDT"
        withdrawButtonText="Вывод"
        minWithdrawAmount={5}
        onWithdraw={onWithdraw}
      />

      <ReferralCodes
        referralCode={referralCode}
        referralLink={referralLink}
        onCopyCode={onCopyCode}
      />


      <ReferralList
        activeReferrals={{
          title: "Рефералы",
          count: referralsCount,
          referrals: referralItemsData
        }}
        onReferralClick={onReferralClick}
      />
    </RefBackWrapper>
  );
};

export default RefBackTab;
import React, { useState } from "react";
import { BaseLayout } from '@/widgets/base-layout'
import { ReferralWidget } from '@/widgets/profile/referral-widget'

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
  level?: number;
  experience?: number;
  maxExperience?: number;
  onBack?: () => void;
  onInfo?: () => void;
  onWithdraw?: () => void;
  onCopyCode?: (text: string) => void;
  initialTab?: "pakogochi" | "refback";
};

export const ReferralProgramPage: React.FC<Props> = ({
                                                       balance = 500,
                                                       balanceUSD = 500,
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
                                                       level = 1,
                                                       experience = 0,
                                                       maxExperience = 100,
                                                       onBack,
                                                       onInfo,
                                                       onWithdraw,
                                                       onCopyCode,
                                                       initialTab = "refback",
                                                     }) => {

  const [showNavbar, setShowNavbar] = useState(true);

  const handleOverlayStateChange = (isOpen: boolean) => {
    setShowNavbar(!isOpen);
  };

  return (
    <BaseLayout showNavbar={showNavbar}>
      <ReferralWidget
        progress={30}
        balance={balance}
        balanceUSD={balanceUSD}
        referralCode={referralCode}
        referralLink={referralLink}
        referrals={referrals}
        referralsCount={referralsCount}
        level={level}
        experience={experience}
        maxExperience={maxExperience}
        onBack={onBack}
        onInfo={onInfo}
        onWithdraw={onWithdraw}
        onCopyCode={onCopyCode}
        onOverlayStateChange={handleOverlayStateChange}
        initialTab={initialTab}
      />
    </BaseLayout>
  );
};
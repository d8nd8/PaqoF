import React, { useState } from "react";
import PakogochiTab from '@/widgets/profile/pakogochi-tab/PakogochiTab';
import RefBackTab from '../refback-tab/RefBackTab'
import * as S from './ReferralWidget.styled';
import { Switcher, type SwitcherOption } from '@/shared/components/Switcher/Switcher'
import { PlaceholderText } from '@/widgets/profile/pakogochi-tab/PakogochiTab.styled'
import { BadgeProgress } from '@/features/profile/badge-progress'
import ChevronLeft from '@/assets/icons/chevron-left.svg?react';
import InfoIcon from '@/assets/icons/profile/information-circle.svg?react';

type TabType = "pakogochi" | "refback";

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
  upgradeAmount?: string;
  upgradeText?: string;
  onBack?: () => void;
  onInfo?: () => void;
  onWithdraw?: () => void;
  onCopyCode?: (text: string) => void;
  initialTab?: TabType;
};

const switcherOptions: SwitcherOption[] = [
  { key: "pakogochi", label: "Пакогочи" },
  { key: "refback", label: "Рефбэк" },
];

export const ReferralWidget: React.FC<Props> = ({
    progress = 0,
    balance,
    balanceUSD,
    referralCode,
    referralLink,
    referrals,
    referralsCount,
    level,
    experience,
    maxExperience,
    upgradeAmount,
    upgradeText,
    onBack,
    onInfo,
    onWithdraw,
    onCopyCode,
    initialTab = "refback",
  }) => {
  const [activeTab, setActiveTab] = useState<TabType>(initialTab);

  const handleTabChange = (key: string) => {
    setActiveTab(key as TabType);
  };

  return (
    <S.WidgetWrapper>
      <S.SwitchableContent>
        <S.PageHeader>
          <S.BackButton onClick={onBack}><ChevronLeft /></S.BackButton>
          <S.PageTitle>Реферальная программа</S.PageTitle>
          <S.InfoButton onClick={onInfo}><InfoIcon /></S.InfoButton>
        </S.PageHeader>

        <S.SwitcherContainer>
          <Switcher
            options={switcherOptions}
            activeKey={activeTab}
            onChange={handleTabChange}
          />
        </S.SwitcherContainer>

        {activeTab === "refback" ? (
          <>
            <S.PlaceholderBox />
            <BadgeProgress
              progress={progress}
              upgradeAmount={upgradeAmount}
              upgradeText={upgradeText}
            />
          </>
        ) : (
          <PlaceholderText>Пакогочи - в разработке</PlaceholderText>
        )}
      </S.SwitchableContent>

      <S.TabContent>
        {activeTab === "refback" ? (
          <RefBackTab
            progress={progress}
            balance={balance}
            balanceUSD={balanceUSD}
            referralCode={referralCode}
            referralLink={referralLink}
            referrals={referrals}
            referralsCount={referralsCount}
            onWithdraw={onWithdraw}
            onCopyCode={onCopyCode}
          />
        ) : (
          <PakogochiTab
            level={level}
            experience={experience}
            maxExperience={maxExperience}
          />
        )}
      </S.TabContent>
    </S.WidgetWrapper>
  );
};

export default ReferralWidget;
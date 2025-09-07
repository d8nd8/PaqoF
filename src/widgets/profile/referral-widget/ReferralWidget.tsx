import React, { useState, useEffect } from "react";
import RefBackTab from '../refback-tab/RefBackTab'
import * as S from './ReferralWidget.styled';
import { Switcher, type SwitcherOption } from '@/shared/components/Switcher/Switcher'
import { BadgeProgress } from '@/features/profile/badge-progress'
import { PakogochiDisplay } from '@/features/profile/pakogochi-display/PakogochiDisplay'
import ChevronLeft from '@/assets/icons/chevron-left.svg?react';
import InfoIcon from '@/assets/icons/profile/information-circle.svg?react';
import { PakogochiTab } from '@/widgets/profile/pakogochi-tab/PakogochiTab'
import { InfoOverlay } from '@/features/profile/info-overlay/InfoOverlay'

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
  onOverlayStateChange?: (isOpen: boolean) => void;
  initialTab?: TabType;
};

const switcherOptions: SwitcherOption[] = [
  { key: "pakogochi", label: "Пакогочи" },
  { key: "refback", label: "Рефбэк" },
];

const levelBackgrounds = {
  1: 'linear-gradient(225deg, #C5C5C5 0%, #929292 100%)',
  2: 'linear-gradient(225deg, #FFFFFF 0%, #D30066 100%), linear-gradient(225deg, #C5C5C5 0%, #929292 100%)',
  3: 'linear-gradient(225deg, #BACFFF 0%, #132F55 100%), linear-gradient(225deg, #FFFFFF 0%, #D30066 100%), linear-gradient(225deg, #C5C5C5 0%, #929292 100%)',
  4: 'linear-gradient(225deg, #FFCEBA 0%, #441355 100%)',
  5: 'linear-gradient(225deg, #5E5E5E 0%, #0B0B0B 100%)'
};

const overlayConfigs = {
  refback: {
    title: "Выгодней с Рефбэком",
    description: "Рефбэк гарантирует 150 USDT за каждые потраченные 150 USDT вашими рефералами. Ваш рефбэк автоматически зачисляется на реферальный баланс в течение 14 дней после каждой транзакции реферала.",
    cardColor: "linear-gradient(135deg, #FF4444 0%, #CC0000 100%)",
  },
  pakogochi: {
    title: "Кто такой Пакогочи?",
    description: "Пакогочи — простой способ зарабатывать вместе с друзьями. Ваши друзья совершают покупки, а вы получаете до 50 % комиссии с их транзакций. С каждым новым уровнем Пакогочи эволюционирует, гарантируя вам ещё больший доход",
    cardColor: "linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)",
  }
};

export const ReferralWidget: React.FC<Props> = ({
                                                  progress = 50,
                                                  balance,
                                                  balanceUSD,
                                                  referralCode,
                                                  referralLink,
                                                  referrals,
                                                  referralsCount,
                                                  experience,
                                                  maxExperience,
                                                  upgradeAmount,
                                                  upgradeText,
                                                  onBack,
                                                  onInfo,
                                                  onWithdraw,
                                                  onCopyCode,
                                                  onOverlayStateChange,
                                                  initialTab = "refback",
                                                }) => {
  const [activeTab, setActiveTab] = useState<TabType>(initialTab);
  const [isInfoOverlayOpen, setIsInfoOverlayOpen] = useState(false);

  useEffect(() => {
    onOverlayStateChange?.(isInfoOverlayOpen);
  }, [isInfoOverlayOpen, onOverlayStateChange]);

  const handleTabChange = (key: string) => {
    setActiveTab(key as TabType);
  };

  const getCurrentLevel = () => {
    if (progress >= 50) return 5;
    if (progress >= 40) return 4;
    if (progress >= 30) return 3;
    if (progress >= 20) return 2;
    return 1;
  };

  const handleWithdraw = () => {
    if (activeTab === "refback") {
      setIsInfoOverlayOpen(true);
    } else {
      onWithdraw?.();
    }
  };

  const handleInfoClick = () => {
    setIsInfoOverlayOpen(true);
  };

  const handleOverlayConfirm = () => {
    setIsInfoOverlayOpen(false);
    if (activeTab === "refback") {
      onWithdraw?.();
    }
  };

  const handleOverlayClose = () => {
    setIsInfoOverlayOpen(false);
  };

  const currentLevel = getCurrentLevel();
  const backgroundGradient = levelBackgrounds[currentLevel as keyof typeof levelBackgrounds];
  const currentOverlayConfig = overlayConfigs[activeTab];

  return (
    <>
      <S.WidgetWrapper>
        <S.SwitchableContent background={backgroundGradient}>
          <S.PageHeader>
            <S.BackButton onClick={onBack} level={currentLevel}>
              <ChevronLeft />
            </S.BackButton>
            <S.PageTitle level={currentLevel}>Реферальная программа</S.PageTitle>
            <S.InfoButton onClick={handleInfoClick} level={currentLevel}>
              <InfoIcon />
            </S.InfoButton>
          </S.PageHeader>

          <S.SwitcherContainer>
            <Switcher
              options={switcherOptions}
              activeKey={activeTab}
              onChange={handleTabChange}
              level={currentLevel}
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
            <PakogochiDisplay
              level={currentLevel}
              progress={progress}
            />
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
              onWithdraw={handleWithdraw}
              onCopyCode={onCopyCode}
            />
          ) : (
            <PakogochiTab
              level={currentLevel}
              experience={experience}
              maxExperience={maxExperience}
            />
          )}
        </S.TabContent>
      </S.WidgetWrapper>

      <InfoOverlay
        isOpen={isInfoOverlayOpen}
        onClose={handleOverlayClose}
        onConfirm={handleOverlayConfirm}
        title={currentOverlayConfig.title}
        description={currentOverlayConfig.description}
        buttonText={activeTab === "refback" ? "Закрыть" : "Закрыть"}
      />
    </>
  );
};
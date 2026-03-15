import React, { useEffect, useState } from 'react'
import InfoIcon from '@/assets/icons/profile/information-circle.svg?react'
import { BadgeProgress } from '@/features/profile/badge-progress'
import { InfoOverlay } from '@/features/profile/info-overlay/InfoOverlay'
import { PakogochiDisplay } from '@/features/profile/pakogochi-display/PakogochiDisplay'
import { PageHeader } from '@/shared/components/PageHeader/PageHeader'
import { Switcher } from '@/shared/components/Switcher/Switcher'
import { PakogochiTab } from '@/widgets/profile/pakogochi-tab/PakogochiTab'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import RefBackTab from '../refback-tab/RefBackTab'
import * as S from './ReferralWidget.styled'

type TabType = 'pakogochi' | 'refback'

type ReferralData = {
  id: string
  username: string
  avatar: string
  earnings: string
}

type Props = {
  progress?: number
  balance?: number
  balanceUSD?: number
  referralCode?: string
  referralLink?: string
  referrals?: ReferralData[]
  referralsCount?: number
  level?: number
  experience?: number
  maxExperience?: number
  upgradeAmount?: string
  upgradeText?: string
  onBack?: () => void
  onInfo?: () => void
  onWithdraw?: () => void
  onCopyCode?: (text: string) => void
  onOverlayStateChange?: (isOpen: boolean) => void
  initialTab?: TabType
}

const levelBackgrounds = {
  1: 'linear-gradient(225deg, #C5C5C5 0%, #929292 100%)',
  2: 'linear-gradient(225deg, #FFFFFF 0%, #D30066 100%), linear-gradient(225deg, #C5C5C5 0%, #929292 100%)',
  3: 'linear-gradient(225deg, #BACFFF 0%, #132F55 100%), linear-gradient(225deg, #FFFFFF 0%, #D30066 100%), linear-gradient(225deg, #C5C5C5 0%, #929292 100%)',
  4: 'linear-gradient(225deg, #FFCEBA 0%, #441355 100%)',
  5: 'linear-gradient(225deg, #5E5E5E 0%, #0B0B0B 100%)',
}

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
  initialTab = 'refback',
}) => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const [activeTab, setActiveTab] = useState<TabType>(initialTab)
  const [isInfoOverlayOpen, setIsInfoOverlayOpen] = useState(false)

  useEffect(() => {
    onOverlayStateChange?.(isInfoOverlayOpen)
  }, [isInfoOverlayOpen, onOverlayStateChange])

  const handleTabChange = (key: string) => setActiveTab(key as TabType)

  const getCurrentLevel = () => {
    if (progress >= 50) return 5
    if (progress >= 40) return 4
    if (progress >= 30) return 3
    if (progress >= 20) return 2
    return 1
  }

  const handleWithdraw = () => {
    if (activeTab === 'refback') {
      setIsInfoOverlayOpen(true)
    } else {
      onWithdraw?.()
    }
  }

  const handleInfoClick = () => {
    setIsInfoOverlayOpen(true)
    onInfo?.()
  }

  const handleOverlayConfirm = () => {
    setIsInfoOverlayOpen(false)
    if (activeTab === 'refback') {
      onWithdraw?.()
    }
  }

  const handleOverlayClose = () => setIsInfoOverlayOpen(false)

  const handleBackClick = () => {
    if (onBack) onBack()
    else navigate(-1)
  }

  const currentLevel = getCurrentLevel()
  const backgroundGradient =
    levelBackgrounds[currentLevel as keyof typeof levelBackgrounds]
  const headerColor = currentLevel === 3 || currentLevel === 5 ? '#FFFFFF' : undefined

  return (
    <>
      <S.WidgetWrapper style={{ overflow: isInfoOverlayOpen ? 'hidden' : 'auto' }}>
        <S.SwitchableContent background={backgroundGradient}>
          <PageHeader
            title={t('referral.title')}
            onBack={handleBackClick}
            rightSlot={
              <button
                style={{ width: 20, height: 20 }}
                onClick={handleInfoClick}
              >
                <svg
                  style={{ stroke: 'transparent' }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 9.75C0 4.365 4.365 0 9.75 0C15.135 0 19.5 4.365 19.5 9.75C19.5 15.135 15.135 19.5 9.75 19.5C4.365 19.5 0 15.135 0 9.75ZM8.706 8.308C9.852 7.735 11.143 8.771 10.832 10.014L10.123 12.85L10.165 12.83C10.3412 12.7525 10.5405 12.7458 10.7215 12.8112C10.9026 12.8765 11.0516 13.009 11.1377 13.1812C11.2237 13.3533 11.2403 13.552 11.184 13.7361C11.1277 13.9202 11.0027 14.0755 10.835 14.17L10.795 14.192C9.648 14.765 8.357 13.729 8.668 12.486L9.378 9.65L9.336 9.67C9.24754 9.71916 9.15004 9.74991 9.04938 9.7604C8.94872 9.77089 8.84697 9.76089 8.75028 9.73102C8.65358 9.70114 8.56393 9.65201 8.48673 9.58657C8.40952 9.52113 8.34636 9.44074 8.30105 9.35025C8.25573 9.25975 8.2292 9.16102 8.22305 9.06001C8.2169 8.95899 8.23126 8.85777 8.26527 8.76244C8.29927 8.66712 8.35222 8.57967 8.42092 8.50535C8.48961 8.43103 8.57264 8.37138 8.665 8.33L8.706 8.308ZM9.75 6.75C9.94891 6.75 10.1397 6.67098 10.2803 6.53033C10.421 6.38968 10.5 6.19891 10.5 6C10.5 5.80109 10.421 5.61032 10.2803 5.46967C10.1397 5.32902 9.94891 5.25 9.75 5.25C9.55109 5.25 9.36032 5.32902 9.21967 5.46967C9.07902 5.61032 9 5.80109 9 6C9 6.19891 9.07902 6.38968 9.21967 6.53033C9.36032 6.67098 9.55109 6.75 9.75 6.75Z"
                    fill="black"
                  />
                </svg>
              </button>
            }
          />

          <S.SwitcherContainer>
            <Switcher
              options={[
                { key: 'pakogochi', label: t('referral.tabs.pakogochi') },
                { key: 'refback', label: t('referral.tabs.refback') },
              ]}
              activeKey={activeTab}
              onChange={handleTabChange}
              level={currentLevel}
            />
          </S.SwitcherContainer>

          {activeTab === 'refback' ? (
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
          {activeTab === 'refback' ? (
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
        title={t(`referral.overlays.${activeTab}.title`)}
        description={t(`referral.overlays.${activeTab}.description`)}
        buttonText={t('referral.overlays.close')}
      />
    </>
  )
}

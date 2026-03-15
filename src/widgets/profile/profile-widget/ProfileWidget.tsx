import React from 'react'
import GlobeAltIcon from '@/assets/icons/profile/globe-alt.svg?react'
import LockClosedIcon from '@/assets/icons/profile/lock-closed.svg?react'
import UsersIcon from '@/assets/icons/profile/users.svg?react'
import { useAppNavigation } from '@/shared/hooks/useAppNavigation'
import useUserStore from '@/shared/stores/user'
import { useTranslation } from 'react-i18next'

import {
  AchievementIconWrap,
  AchievementItem,
  AchievementsBadge,
  Avatar,
  AvatarPlaceholder,
  AvatarWrapper,
  Chevron,
  Content,
  IconBox,
  ItemContent,
  ItemText,
  ProfileTop,
  ProfileWrapper,
  Section,
  SectionItem,
  SectionTitle,
  Username,
} from './ProfileWidget.styled'

const AchievementIconCode: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
  >
    <rect
      width="19"
      height="19"
      rx="4"
      fill="#B1E30B"
    />
    <path
      d="M6.28571 13.5349L2 9.78488L6.28571 6.03488M12.7143 13.5349L17 9.78488L12.7143 6.03488M11.1071 4.42773L7.89286 15.142"
      stroke="black"
      strokeWidth="1.07143"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const AchievementIconInfo: React.FC = () => {
  const id = React.useId()
  const strokeId = `paint0_linear_${id.replace(/:/g, '')}`
  const fillId = `paint1_linear_${id.replace(/:/g, '')}`
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
    >
      <defs>
        <linearGradient
          id={strokeId}
          x1="9.5"
          y1="0"
          x2="9.5"
          y2="19"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFBE0B" />
          <stop
            offset="1"
            stopColor="#FFB84D"
          />
        </linearGradient>
        <linearGradient
          id={fillId}
          x1="9.50012"
          y1="3.16797"
          x2="9.50012"
          y2="15.834"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFBE0B" />
          <stop
            offset="1"
            stopColor="#FFB84D"
          />
        </linearGradient>
      </defs>
      <rect
        width="19"
        height="19"
        rx="9.5"
        fill="#BF5900"
      />
      <circle
        cx="9.5"
        cy="9.5"
        r="8.44444"
        stroke={`url(#${strokeId})`}
        strokeWidth="2.11111"
      />
      <path
        d="M9.49963 3.16797C12.9974 3.16797 15.8336 6.00317 15.8336 9.50098C15.8336 12.9988 12.9974 15.834 9.49963 15.834C6.002 15.8338 3.16663 12.9987 3.16663 9.50098C3.16663 6.0033 6.002 3.16817 9.49963 3.16797Z"
        fill={`url(#${fillId})`}
      />
      <line
        x1="9.50011"
        y1="11.6124"
        x2="9.50011"
        y2="7.39019"
        stroke="#BF5900"
        strokeWidth="2.11111"
        strokeLinecap="round"
      />
    </svg>
  )
}

const ACHIEVEMENT_ICONS = [AchievementIconCode, AchievementIconInfo]

type Props = {
  onReferralClick?: () => void
  onKycClick?: () => void
  onSecurityClick?: () => void
  onLanguageClick?: () => void
  onOfficialClick?: () => void
  onFaqClick?: () => void
  onInfoClick?: () => void
  onLogout?: () => void
}

export const ProfileWidget: React.FC<Props> = ({
  onReferralClick,
  onSecurityClick,
  onLanguageClick,
}) => {
  const { goToReferral } = useAppNavigation()
  const { t } = useTranslation()
  const user = useUserStore((s) => s.user)

  const handleReferralClick = () => {
    if (onReferralClick) {
      onReferralClick()
      return
    }
    goToReferral()
  }

  const getInitials = (username: string) => {
    const cleanUsername = username.replace('@', '')
    return cleanUsername.slice(0, 2).toUpperCase()
  }

  const displayUsername = user?.username ? `@${user.username}` : '@anonymous'
  const displayInitials = user?.firstName
    ? user.firstName.slice(0, 2).toUpperCase()
    : getInitials(displayUsername)

  return (
    <ProfileWrapper>
      <ProfileTop>
        <Username>{displayUsername}</Username>

        <AvatarWrapper>
          {user?.photoUrl ? (
            <Avatar
              src={user.photoUrl}
              alt="Avatar"
            />
          ) : (
            <AvatarPlaceholder>{displayInitials}</AvatarPlaceholder>
          )}
        </AvatarWrapper>

        <AchievementsBadge>
          {ACHIEVEMENT_ICONS.map((IconComponent, index) => (
            <AchievementItem key={index}>
              <AchievementIconWrap>
                <IconComponent />
              </AchievementIconWrap>
            </AchievementItem>
          ))}
        </AchievementsBadge>
      </ProfileTop>

      <Content>
        <Section>
          <SectionItem onClick={handleReferralClick}>
            <ItemContent>
              <IconBox>
                <UsersIcon
                  width={16}
                  height={16}
                />
              </IconBox>
              <ItemText>{t('profile.referral')}</ItemText>
            </ItemContent>
            <Chevron>›</Chevron>
          </SectionItem>
        </Section>

        <Section>
          <SectionTitle>{t('profile.settings')}</SectionTitle>

          {/*<SectionItem onClick={onKycClick}>*/}
          {/*  <ItemContent>*/}
          {/*    <IconBox>*/}
          {/*      <ShieldIcon width={16} height={16} />*/}
          {/*    </IconBox>*/}
          {/*    <ItemText>{t('profile.kyc')}</ItemText>*/}
          {/*  </ItemContent>*/}
          {/*  <Chevron>›</Chevron>*/}
          {/*</SectionItem>*/}

          <SectionItem onClick={onSecurityClick}>
            <ItemContent>
              <IconBox>
                <LockClosedIcon
                  width={16}
                  height={16}
                />
              </IconBox>
              <ItemText>{t('profile.security')}</ItemText>
            </ItemContent>
            <Chevron>›</Chevron>
          </SectionItem>

          <SectionItem onClick={onLanguageClick}>
            <ItemContent>
              <IconBox>
                <GlobeAltIcon
                  width={16}
                  height={16}
                />
              </IconBox>
              <ItemText>{t('profile.language')}</ItemText>
            </ItemContent>
            <Chevron>›</Chevron>
          </SectionItem>
        </Section>

        {/*<Section>*/}
        {/*  <SectionTitle>{t('profile.about')}</SectionTitle>*/}

        {/*  <SectionItem onClick={onOfficialClick}>*/}
        {/*    <ItemContent>*/}
        {/*      <IconBox>*/}
        {/*        <SendIcon width={16} height={16} />*/}
        {/*      </IconBox>*/}
        {/*      <ItemText>{t('profile.official')}</ItemText>*/}
        {/*    </ItemContent>*/}
        {/*    <Chevron>›</Chevron>*/}
        {/*  </SectionItem>*/}

        {/*  <SectionItem onClick={onFaqClick}>*/}
        {/*    <ItemContent>*/}
        {/*      <IconBox>*/}
        {/*        <QuestionIcon width={16} height={16} />*/}
        {/*      </IconBox>*/}
        {/*      <ItemText>{t('profile.faq')}</ItemText>*/}
        {/*    </ItemContent>*/}
        {/*    <Chevron>›</Chevron>*/}
        {/*  </SectionItem>*/}

        {/*  <SectionItem onClick={onInfoClick}>*/}
        {/*    <ItemContent>*/}
        {/*      <IconBox>*/}
        {/*        <InfoIcon width={16} height={16} />*/}
        {/*      </IconBox>*/}
        {/*      <ItemText>{t('profile.info')}</ItemText>*/}
        {/*    </ItemContent>*/}
        {/*    <Chevron>›</Chevron>*/}
        {/*  </SectionItem>*/}
        {/*</Section>*/}
      </Content>
    </ProfileWrapper>
  )
}

export default ProfileWidget

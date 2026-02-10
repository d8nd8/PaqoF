import React from 'react'
import GlobeAltIcon from '@/assets/icons/profile/globe-alt.svg?react'
import InfoIcon from '@/assets/icons/profile/information-circle.svg?react'
import LockClosedIcon from '@/assets/icons/profile/lock-closed.svg?react'
import QuestionIcon from '@/assets/icons/profile/question-mark-circle.svg?react'
import SendIcon from '@/assets/icons/profile/send.svg?react'
import ShieldIcon from '@/assets/icons/profile/shield.svg?react'
import UsersIcon from '@/assets/icons/profile/users.svg?react'
import { useAppNavigation } from '@/shared/hooks/useAppNavigation'
import useUserStore from '@/shared/stores/user'
import { useTranslation } from 'react-i18next'

import {
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
  onKycClick,
  onSecurityClick,
  onLanguageClick,
  onOfficialClick,
  onFaqClick,
  onInfoClick,
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

        <div></div>
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

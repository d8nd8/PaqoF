import React from 'react';
import {
  ProfileWrapper,
  ProfileTop,
  Username,
  AvatarWrapper,
  Avatar,
  AvatarPlaceholder,
  Content,
  Section,
  SectionTitle,
  SectionItem,
  IconBox,
  ItemText,
  ItemContent,
  Chevron,
  LogoutButton,
} from './ProfileWidget.styled';

import UsersIcon from '@/assets/icons/profile/users.svg?react';
import ShieldIcon from '@/assets/icons/profile/shield.svg?react';
import LockClosedIcon from '@/assets/icons/profile/lock-closed.svg?react';
import GlobeAltIcon from '@/assets/icons/profile/globe-alt.svg?react';
import InfoIcon from '@/assets/icons/profile/information-circle.svg?react';
import QuestionIcon from '@/assets/icons/profile/question-mark-circle.svg?react';
import SendIcon from '@/assets/icons/profile/send.svg?react';
import { useAppNavigation } from '@/shared/hooks/useAppNavigation'

type Props = {
  username?: string;
  avatarSrc?: string;
  onReferralClick?: () => void;
  onKycClick?: () => void;
  onSecurityClick?: () => void;
  onLanguageClick?: () => void;
  onOfficialClick?: () => void;
  onFaqClick?: () => void;
  onInfoClick?: () => void;
  onLogout?: () => void;
};

export const ProfileWidget: React.FC<Props> = ({
                                                 username = '@twixmaster',
                                                 avatarSrc,
                                                 onReferralClick,
                                                 onKycClick,
                                                 onSecurityClick,
                                                 onLanguageClick,
                                                 onOfficialClick,
                                                 onFaqClick,
                                                 onInfoClick,
                                                 onLogout,
                                               }) => {
  const { goToReferral } = useAppNavigation();

  const handleReferralClick = () => {
    if (onReferralClick) {
      onReferralClick();
      return;
    }
    goToReferral();
  };

  const getInitials = (username: string) => {
    const cleanUsername = username.replace('@', '');
    return cleanUsername.slice(0, 2).toUpperCase();
  };

  return (
    <ProfileWrapper>
      <ProfileTop>
        <Username>{username}</Username>
      </ProfileTop>

      <AvatarWrapper>
        {avatarSrc ? (
          <Avatar src={avatarSrc} alt="Аватар" />
        ) : (
          <AvatarPlaceholder>
            {getInitials(username)}
          </AvatarPlaceholder>
        )}
      </AvatarWrapper>

      <Content>
        <Section>
          <SectionItem onClick={handleReferralClick}>
            <ItemContent>
              <IconBox>
                <UsersIcon width={16} height={16} />
              </IconBox>
              <ItemText>Реферальная программа</ItemText>
            </ItemContent>
            <Chevron>›</Chevron>
          </SectionItem>
        </Section>

        <Section>
          <SectionTitle>Параметры</SectionTitle>

          <SectionItem onClick={onKycClick}>
            <ItemContent>
              <IconBox>
                <ShieldIcon width={16} height={16} />
              </IconBox>
              <ItemText>KYC</ItemText>
            </ItemContent>
            <Chevron>›</Chevron>
          </SectionItem>

          <SectionItem onClick={onSecurityClick}>
            <ItemContent>
              <IconBox>
                <LockClosedIcon width={16} height={16} />
              </IconBox>
              <ItemText>Безопасность</ItemText>
            </ItemContent>
            <Chevron>›</Chevron>
          </SectionItem>

          <SectionItem onClick={onLanguageClick}>
            <ItemContent>
              <IconBox>
                <GlobeAltIcon width={16} height={16} />
              </IconBox>
              <ItemText>Язык</ItemText>
            </ItemContent>
            <Chevron>›</Chevron>
          </SectionItem>
        </Section>

        <Section>
          <SectionTitle>О нас</SectionTitle>

          <SectionItem onClick={onOfficialClick}>
            <ItemContent>
              <IconBox>
                <SendIcon width={16} height={16} />
              </IconBox>
              <ItemText>Официальные аккаунты</ItemText>
            </ItemContent>
            <Chevron>›</Chevron>
          </SectionItem>

          <SectionItem onClick={onFaqClick}>
            <ItemContent>
              <IconBox>
                <QuestionIcon width={16} height={16} />
              </IconBox>
              <ItemText>Часто задаваемые вопросы</ItemText>
            </ItemContent>
            <Chevron>›</Chevron>
          </SectionItem>

          <SectionItem onClick={onInfoClick}>
            <ItemContent>
              <IconBox>
                <InfoIcon width={16} height={16} />
              </IconBox>
              <ItemText>Информация</ItemText>
            </ItemContent>
            <Chevron>›</Chevron>
          </SectionItem>
        </Section>

        <LogoutButton onClick={onLogout}>Выйти из аккаунта</LogoutButton>
      </Content>
    </ProfileWrapper>
  );
};

export default ProfileWidget;
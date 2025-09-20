import React from 'react';
import {
  BannerContainer,
  BannerContent,
  BannerTitleWrapper,
  BannerTitle,
  LevelBadge,
  BannerSubtitle,
  BannerImage,
} from './AdBanner.styled';

import { Trans, useTranslation } from 'react-i18next';

import lvl1Img from '@images/pagogoch-lvl-1.webp';
import lvl2Img from '@images/pagogoch-lvl-2.webp';
import lvl3Img from '@images/pagogoch-lvl-3.webp';
import lvl4Img from '@images/pagogoch-lvl-4.webp';
import lvl5Img from '@images/pagogoch-lvl-5.webp';

export interface AdBannerProps {
  level: 1 | 2 | 3 | 4 | 5;
  onClick?: () => void;
}

export const AdBanner: React.FC<AdBannerProps> = ({ level, onClick }) => {
  const { t } = useTranslation();

  const images: Record<AdBannerProps['level'], string> = {
    1: lvl1Img,
    2: lvl2Img,
    3: lvl3Img,
    4: lvl4Img,
    5: lvl5Img,
  };

  return (
    <BannerContainer onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
      <BannerContent>
        <BannerTitleWrapper>
          <BannerTitle>{t('referral.banner.title')}</BannerTitle>
          <LevelBadge>Lvl {level}</LevelBadge>
        </BannerTitleWrapper>
        <BannerSubtitle>
          <Trans i18nKey={`referral.banner.levels.${level}`} components={{ strong: <strong /> }} />
        </BannerSubtitle>
      </BannerContent>
      <BannerImage src={images[level]} alt={`${t('referral.banner.title')} lvl ${level}`} />
    </BannerContainer>
  );
};

export default AdBanner;

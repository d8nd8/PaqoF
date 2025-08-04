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

import lvl1Img from '@images/pagogoch-lvl-1.webp';
import lvl2Img from '@images/pagogoch-lvl-2.webp';
import lvl3Img from '@images/pagogoch-lvl-3.webp';
import lvl4Img from '@images/pagogoch-lvl-4.webp';
import lvl5Img from '@images/pagogoch-lvl-5.webp';

export interface AdBannerProps {
  level: 1 | 2 | 3 | 4 | 5;
}

export const AdBanner: React.FC<AdBannerProps> = ({ level }) => {
  const images: Record<AdBannerProps['level'], string> = {
    1: lvl1Img,
    2: lvl2Img,
    3: lvl3Img,
    4: lvl4Img,
    5: lvl5Img,
  };

  const descriptions: Record<AdBannerProps['level'], React.ReactNode> = {
    1: (
      <>
        Улучшай своего Пакогочи<br />
        и <strong>зарабатывай USDT</strong>
      </>
    ),
    2: (
      <>
        Улучшай своего Пакогочи<br />
        и <strong>зарабатывай USDT</strong>
      </>
    ),
    3: (
      <>
        Улучшай своего Пакогочи<br />
        и <strong>зарабатывай USDT</strong>
      </>
    ),
    4: (
      <>
        Улучшай своего Пакогочи<br />
        и <strong>зарабатывай USDT</strong>
      </>
    ),
    5: (
      <>
        Пакогочи на максимуме,<br />
        получай еще <strong>больше USDT</strong>
      </>
    ),
  };

  return (
    <BannerContainer>
      <BannerContent>
        <BannerTitleWrapper>
          <BannerTitle>Пакогочи</BannerTitle>
          <LevelBadge>Lvl {level}</LevelBadge>
        </BannerTitleWrapper>
        <BannerSubtitle>{descriptions[level]}</BannerSubtitle>
      </BannerContent>
      <BannerImage src={images[level]} alt={`Пакогочи lvl ${level}`} />
    </BannerContainer>
  );
};

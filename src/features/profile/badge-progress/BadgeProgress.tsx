import React from 'react';
import ChevronRight from '@/assets/icons/chevron-right.svg?react';
import * as S from './BadgeProgress.styled';
import { useTranslation } from 'react-i18next';

type Props = {
  progress: number;
  upgradeAmount?: string;
  upgradeText?: string;
};

export const BadgeProgress: React.FC<Props> = ({
                                                 progress,
                                                 upgradeAmount = '50$',
                                                 upgradeText,
                                               }) => {
  const { t } = useTranslation();

  return (
    <S.ProgressCard>
      <S.ProgressHeader>
        <S.ProgressLabel>{t('referral.badge.progress.label')}</S.ProgressLabel>
        <S.UpgradeInfo>
          <S.UpgradeText>
            {upgradeText || t('referral.badge.progress.upgradeText')}
          </S.UpgradeText>
          <S.UpgradeAmount>
            {t('referral.badge.progress.upgradeAmount', { amount: upgradeAmount })}
          </S.UpgradeAmount>
          <ChevronRight />
        </S.UpgradeInfo>
      </S.ProgressHeader>

      <S.ProgressBarContainer>
        <S.ProgressBar>
          <S.ProgressFill progress={progress} />
        </S.ProgressBar>
      </S.ProgressBarContainer>
    </S.ProgressCard>
  );
};

export default BadgeProgress;

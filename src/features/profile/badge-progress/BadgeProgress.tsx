import React from 'react';
import ChevronRight from '@/assets/icons/chevron-right.svg?react';
import * as S from './BadgeProgress.styled';

type Props = {
  progress: number;
  upgradeAmount?: string;
  upgradeText?: string;
};

export const BadgeProgress: React.FC<Props> = ({
                                                 progress,
                                                 upgradeAmount = "50$",
                                                 upgradeText = "До апгрейда"
                                               }) => {
  return (
    <S.ProgressCard>
      <S.ProgressHeader>
        <S.ProgressLabel>Прогресс бейджа</S.ProgressLabel>
        <S.UpgradeInfo>
          <S.UpgradeText>{upgradeText}</S.UpgradeText>
          <S.UpgradeAmount> {upgradeAmount}</S.UpgradeAmount>
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
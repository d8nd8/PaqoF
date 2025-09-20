import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './ProgressStep.styled';
import type { PakogochiProgressProps } from '@/features/profile/progress-step/ProgressStep.types';

export const ProgressStep: React.FC<PakogochiProgressProps> = ({
                                                                 currentProgress,
                                                                 level = 1,
                                                                 maxLevel = 5,
                                                                 referralsNeeded,
                                                                 className,
                                                               }) => {
  const { t } = useTranslation();
  const progressSteps = [0, 20, 30, 40, 50];
  const isMaxLevel = level >= maxLevel || currentProgress >= 50;

  const getCurrentStepIndex = () => {
    for (let i = progressSteps.length - 1; i >= 0; i--) {
      if (currentProgress >= progressSteps[i]) {
        return i;
      }
    }
    return 0;
  };

  const currentStepIndex = getCurrentStepIndex();

  return (
    <S.ProgressContainer className={className}>
      <S.ProgressTitle>{t('referral.progress.title')}</S.ProgressTitle>
      <S.ProgressDescription>{t('referral.progress.description')}</S.ProgressDescription>

      <S.ProgressTrack>
        <S.ProgressLine progress={currentProgress} />
        <S.ProgressSteps>
          {progressSteps.map((stepValue) => (
            <S.ProgressStep
              key={stepValue}
              active={currentStepIndex === stepValue}
              completed={currentProgress >= stepValue}
            >
              {stepValue}%
            </S.ProgressStep>
          ))}
        </S.ProgressSteps>
      </S.ProgressTrack>

      {isMaxLevel ? (
        <S.MaxLevelBadge>{t('referral.progress.maxLevel')}</S.MaxLevelBadge>
      ) : (
        <S.NextLevelInfo>
          <S.NextLevelText>{t('referral.progress.nextLevel')}</S.NextLevelText>
          <S.NextLevelValue>
            {referralsNeeded
              ? t('referral.progress.referralsNeeded', { count: referralsNeeded })
              : t('referral.progress.loading')}
          </S.NextLevelValue>
        </S.NextLevelInfo>
      )}
    </S.ProgressContainer>
  );
};

export default ProgressStep;

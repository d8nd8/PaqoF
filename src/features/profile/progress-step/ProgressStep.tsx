import React from 'react';
import * as S from './ProgressStep.styled';
import type { PakogochiProgressProps } from '@/features/profile/progress-step/ProgressStep.types'

export const ProgressStep: React.FC<PakogochiProgressProps> = ({
                                                                 currentProgress,
                                                                 level = 1,
                                                                 maxLevel = 5,
                                                                 referralsNeeded,
                                                                 className
                                                               }) => {
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
      <S.ProgressTitle>Прогресс</S.ProgressTitle>
      <S.ProgressDescription>
        Пригласи друзей и получай кешбэк с их покупок:
        чем больше приглашённых — тем выше процент
        возврата комиссии и уровень Пакогочи!
      </S.ProgressDescription>

      <S.ProgressTrack>
        <S.ProgressLine progress={currentProgress} />
        <S.ProgressSteps>
          {progressSteps.map((stepValue, index) => (
            <S.ProgressStep
              key={stepValue}
              active={false}
              completed={currentProgress >= stepValue}
            >
              {stepValue}%
            </S.ProgressStep>
          ))}
        </S.ProgressSteps>
      </S.ProgressTrack>

      {isMaxLevel ? (
        <S.MaxLevelBadge>
          Максимальный уровень!
        </S.MaxLevelBadge>
      ) : (
        <S.NextLevelInfo>
          <S.NextLevelText>До следующего уровня:</S.NextLevelText>
          <S.NextLevelValue>
            {referralsNeeded ? `${referralsNeeded} рефералов` : 'Загрузка...'}
          </S.NextLevelValue>
        </S.NextLevelInfo>
      )}
    </S.ProgressContainer>
  );
};

export default ProgressStep;
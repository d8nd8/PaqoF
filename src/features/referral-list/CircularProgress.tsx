import React from 'react';
import * as S from './ReferralList.styled';

type Props = {
  progress: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  backgroundColor?: string;
  showPercentage?: boolean;
  className?: string;
  visible?: boolean;
};

export const CircularProgress: React.FC<Props> = ({
                                                    progress,
                                                    size = 40,
                                                    strokeWidth = 3,
                                                    color = '#00B347',
                                                    backgroundColor = '#E5E5E7',
                                                    showPercentage = true,
                                                    visible = true,
                                                    className
                                                  }) => {
  if (!visible) return null;

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <S.ProgressContainer size={size} className={className}>
      <S.ProgressSvg size={size}>
        <S.ProgressCircleBackground
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke={backgroundColor}
        />
        <S.ProgressCircle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke={color}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
        />
      </S.ProgressSvg>
      {showPercentage && (
        <S.ProgressText size={size}>
          {Math.round(progress)}%
        </S.ProgressText>
      )}
    </S.ProgressContainer>
  );
};

export default CircularProgress;
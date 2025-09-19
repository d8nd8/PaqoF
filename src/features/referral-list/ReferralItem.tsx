import React from 'react';
import * as S from './ReferralList.styled';
import CircularProgress from '@/features/referral-list/CircularProgress'

export interface ReferralItemData {
  id: string;
  username: string;
  avatar: string;
  level: number;
  earnings: string;
  progress?: number;
}

interface ReferralItemProps {
  data: ReferralItemData;
  onClick?: (referral: ReferralItemData) => void;
  showProgress?: boolean;
  showLevel?: boolean;
}

export const ReferralItem: React.FC<ReferralItemProps> = ({
                                                            data,
                                                            onClick,
                                                            showProgress = true,
                                                            showLevel = true,
                                                          }) => {
  const handleClick = () => {
    onClick?.(data);
  };

  return (
    <S.ReferralItem onClick={handleClick}>
      <S.UserInfo>
        <S.Avatar src={data.avatar} alt={data.username} />
        <S.UserDetails>
          <S.Username>{data.username}</S.Username>
          {showLevel && <S.Level>Lvl {data.level}</S.Level>}
        </S.UserDetails>
      </S.UserInfo>
      <S.EarningsContainer>
        <S.Earnings>{data.earnings}</S.Earnings>
        {showProgress && data.progress !== undefined && (
          <CircularProgress
            progress={data.progress}
            size={40}
            strokeWidth={3}
            color="#00B347"
          />
        )}
      </S.EarningsContainer>
    </S.ReferralItem>
  );
};
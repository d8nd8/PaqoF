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
}

export const ReferralItem: React.FC<ReferralItemProps> = ({
                                                            data,
                                                            onClick
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
          <S.Level>Lvl {data.level}</S.Level>
        </S.UserDetails>
      </S.UserInfo>
      <S.EarningsContainer>
        <S.Earnings>{data.earnings}</S.Earnings>
        {data.progress !== undefined && (
          <CircularProgress
            progress={data.progress}
            size={30}
            strokeWidth={3}
            color="#00D4AA"
          />
        )}
      </S.EarningsContainer>
    </S.ReferralItem>
  );
};
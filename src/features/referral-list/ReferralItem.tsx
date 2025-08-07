
import React from 'react';
import * as S from './ReferralList.styled';

export interface ReferralItemData {
  id: string;
  username: string;
  avatar: string;
  level: number;
  earnings: string;
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
      <S.Earnings>{data.earnings}</S.Earnings>
    </S.ReferralItem>
  );
};
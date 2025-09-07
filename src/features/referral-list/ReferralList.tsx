import React from 'react';
import { ReferralItem, type ReferralItemData } from './ReferralItem';
import * as S from './ReferralList.styled';

type Props = {
  referrals: ReferralItemData[];
  referralsCount: number;
  title?: string;
  onReferralClick?: (referral: ReferralItemData) => void;
  className?: string;
};

export const ReferralList: React.FC<Props> = ({
                                                referrals,
                                                referralsCount,
                                                title = "Рефералы",
                                                onReferralClick,
                                                className
                                              }) => {
  const isEmpty = referrals.length === 0;

  return (
    <S.ReferralListContainer className={className}>
      <S.ReferralCard>
        <S.CardHeader>
          <S.CardTitle>{title}</S.CardTitle>
          <S.CountBadge isEmpty={isEmpty}>{referralsCount}</S.CountBadge>
        </S.CardHeader>

        {isEmpty ? (
          <S.EmptyState>
            <S.EmptyText>У вас пока нет рефералов</S.EmptyText>
          </S.EmptyState>
        ) : (
          <S.ReferralsList>
            {referrals.map((referral) => (
              <ReferralItem
                key={referral.id}
                data={referral}
                onClick={onReferralClick}
              />
            ))}
          </S.ReferralsList>
        )}
      </S.ReferralCard>
    </S.ReferralListContainer>
  );
};

export default ReferralList;
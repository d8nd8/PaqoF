import React from 'react';
import { ReferralItem, type ReferralItemData } from './ReferralItem';
import * as S from './ReferralList.styled';

interface ReferralCardProps {
  title: string;
  count: number;
  referrals?: ReferralItemData[];
  isEmpty?: boolean;
  emptyText?: string;
  onReferralClick?: (referral: ReferralItemData) => void;
}

const ReferralCard: React.FC<ReferralCardProps> = ({
                                                     title,
                                                     count,
                                                     referrals = [],
                                                     isEmpty = false,
                                                     emptyText = 'У вас пока нет рефералов',
                                                     onReferralClick
                                                   }) => {
  return (
    <S.ReferralCard>
      <S.CardHeader>
        <S.CardTitle>{title}</S.CardTitle>
        <S.CountBadge isEmpty={count === 0}>{count}</S.CountBadge>
      </S.CardHeader>

      {isEmpty || referrals.length === 0 ? (
        <S.EmptyState>
          <S.EmptyText>{emptyText}</S.EmptyText>
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
  );
};

export interface ReferralListProps {
  emptyReferrals?: {
    title: string;
    count: number;
    emptyText?: string;
  };
  activeReferrals?: {
    title: string;
    count: number;
    referrals: ReferralItemData[];
  };
  onReferralClick?: (referral: ReferralItemData) => void;
}

export const ReferralList: React.FC<ReferralListProps> = ({
                                                            emptyReferrals,
                                                            activeReferrals,
                                                            onReferralClick
                                                          }) => {
  return (
    <S.ReferralListContainer>
      {emptyReferrals && (
        <ReferralCard
          title={emptyReferrals.title}
          count={emptyReferrals.count}
          isEmpty={true}
          emptyText={emptyReferrals.emptyText}
          onReferralClick={onReferralClick}
        />
      )}

      {activeReferrals && (
        <ReferralCard
          title={activeReferrals.title}
          count={activeReferrals.count}
          referrals={activeReferrals.referrals}
          onReferralClick={onReferralClick}
        />
      )}
    </S.ReferralListContainer>
  );
};
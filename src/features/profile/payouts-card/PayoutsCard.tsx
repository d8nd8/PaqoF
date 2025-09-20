import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './PayoutsCard.styled';

type Props = {
  title?: string;
  description?: string;
  balance?: number;
  balanceUSD?: number;
  currency?: string;
  withdrawButtonText?: string;
  minWithdrawAmount?: number;
  onWithdraw?: () => void;
  className?: string;
};

export const PayoutsCard: React.FC<Props> = ({
                                               title,
                                               description,
                                               balance = 0,
                                               balanceUSD = 0,
                                               currency = 'USDT',
                                               withdrawButtonText,
                                               minWithdrawAmount = 5,
                                               onWithdraw,
                                               className,
                                             }) => {
  const { t } = useTranslation();

  const isWithdrawDisabled = balanceUSD < minWithdrawAmount;
  const buttonText = isWithdrawDisabled
    ? t('referral.payouts.minWithdraw', { amount: minWithdrawAmount, currency })
    : withdrawButtonText || t('referral.payouts.withdrawButton');

  return (
    <S.PayoutsSection className={className}>
      <S.BalanceCard>
        <S.TextWrapper>
          <S.SectionTitle>{title || t('referral.payouts.title')}</S.SectionTitle>
          <S.PayoutsDescription>
            {description || t('referral.payouts.description')}
          </S.PayoutsDescription>
        </S.TextWrapper>

        <S.BalanceAmountWrapper>
          <S.BalanceAmount>
            {balance} {currency}
          </S.BalanceAmount>
          <S.BalanceUSD>${balanceUSD.toFixed(2)}</S.BalanceUSD>
        </S.BalanceAmountWrapper>

        <S.WithdrawButton
          onClick={isWithdrawDisabled ? undefined : onWithdraw}
          disabled={isWithdrawDisabled}
        >
          {buttonText}
        </S.WithdrawButton>
      </S.BalanceCard>
    </S.PayoutsSection>
  );
};

export default PayoutsCard;

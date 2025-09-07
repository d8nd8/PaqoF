import React from 'react';
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
                                               title = "Вывод",
                                               description = "Прибыль начисляется ежемесячно при еще совершившим бонус в течение 14 дней после каждой транзакции, реферальной программы.",
                                               balance = 0,
                                               balanceUSD = 0,
                                               currency = "USDT",
                                               withdrawButtonText = "Вывести",
                                               minWithdrawAmount = 5,
                                               onWithdraw,
                                               className
                                             }) => {
  const isWithdrawDisabled = balanceUSD < minWithdrawAmount;
  const buttonText = isWithdrawDisabled
    ? `Вывод от ${minWithdrawAmount} ${currency}`
    : withdrawButtonText;
  return (
    <S.PayoutsSection className={className}>

      <S.BalanceCard>
        <S.TextWrapper>
          <S.SectionTitle>{title}</S.SectionTitle>
          <S.PayoutsDescription>
            {description}
          </S.PayoutsDescription>
        </S.TextWrapper>
        <S.BalanceAmountWrapper>
          <S.BalanceAmount>{balance} {currency}</S.BalanceAmount>
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
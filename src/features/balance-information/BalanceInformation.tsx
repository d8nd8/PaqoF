import React, { useState } from 'react';
import * as S from './BalanceInformation.styled';

import EyeOpenIcon from '@icons/eye.svg?react'
import EyeClosedIcon from '@icons/close-eye.svg?react'
import PlusCircleIcon from '@icons/plus-circle.svg?react'
import SendIcon from '@icons/send.svg?react'
import QRIcon from '@icons/qr.svg?react'

interface ActionIconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
}

const ActionIconButton: React.FC<ActionIconButtonProps> = ({ icon, onClick }) => (
  <S.ActionButton onClick={onClick}>
    <S.ActionIcon>
      {icon}
    </S.ActionIcon>
  </S.ActionButton>
);

interface ActionLabelProps {
  label: string;
}

const ActionLabel: React.FC<ActionLabelProps> = ({ label }) => (
  <S.ActionLabel>{label}</S.ActionLabel>
);

interface ActionItemProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const ActionItem: React.FC<ActionItemProps> = ({ icon, label, onClick }) => (
  <S.ActionItemContainer>
    <ActionIconButton icon={icon} onClick={onClick} />
    <ActionLabel label={label} />
  </S.ActionItemContainer>
);

interface BalanceCardProps {
  balance: number;
  currency?: string;
  isVisible?: boolean;
  onTopUp?: () => void;
  onSend?: () => void;
  onPay?: () => void;
  topUpLabel?: string;
  sendLabel?: string;
  payLabel?: string;
}

export const BalanceCard: React.FC<BalanceCardProps> = ({
    balance,
    currency = '₽',
    isVisible: initialVisibility = true,
    onTopUp,
    onSend,
    onPay,
    topUpLabel = 'Пополнить',
    sendLabel = 'Отправить',
    payLabel = 'Оплатить'
  }) => {
  const [isVisible, setIsVisible] = useState(initialVisibility);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const formatBalance = (amount: number) => {
    const parts = amount.toFixed(1).split('.');
    const integerPart = new Intl.NumberFormat('ru-RU').format(parseInt(parts[0]));
    const decimalPart = parts[1];

    return {
      integer: integerPart,
      decimal: decimalPart
    };
  };

  const formattedBalance = formatBalance(balance);

  return (
    <S.BalanceCardContainer>
      <S.BalanceHeader>
        <S.BalanceTitle>Доступный баланс</S.BalanceTitle>
        <S.EyeButton onClick={toggleVisibility}>
          {isVisible ? <EyeOpenIcon /> : <EyeClosedIcon />}
        </S.EyeButton>
      </S.BalanceHeader>

      {isVisible ? (
        <S.BalanceAmount>
          {currency} {formattedBalance.integer}
          <S.BalanceDecimal>.{formattedBalance.decimal}</S.BalanceDecimal>
        </S.BalanceAmount>
      ) : (
        <S.HiddenBalance>
          {Array.from({ length: 8 }, (_, index) => (
            <S.BalanceDot key={index} />
          ))}
        </S.HiddenBalance>
      )}

      <S.ActionButtons>
        <ActionItem
          icon={<PlusCircleIcon />}
          label={topUpLabel}
          onClick={onTopUp}
        />
        <ActionItem
          icon={<SendIcon />}
          label={sendLabel}
          onClick={onSend}
        />
        <ActionItem
          icon={<QRIcon />}
          label={payLabel}
          onClick={onPay}
        />
      </S.ActionButtons>
    </S.BalanceCardContainer>
  );
};
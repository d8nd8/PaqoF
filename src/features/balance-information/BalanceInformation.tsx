import React, { useState } from 'react';
import * as S from './BalanceInformation.styled';

import EyeOpenIcon from '@icons/eye.svg?react'
import EyeClosedIcon from '@icons/close-eye.svg?react'
import PlusCircleIcon from '@icons/plus-circle.svg?react'
import SendIcon from '@icons/send.svg?react'
import QRIcon from '@icons/qr.svg?react'
import NotificationIcon from '@icons/notification.svg?react'
import { ActionItem } from '@/shared/components/ActionItem/ActionItem'


interface BalanceCardProps {
  avatarUrl?: string;
  username?: string;
  greeting?: string;
  hasNotifications?: boolean;
  balance: number;
  currency?: string;
  isVisible?: boolean;
  onTopUp?: () => void;
  onSend?: () => void;
  onPay?: () => void;
  onNotificationsClick?: () => void;
}

export const BalanceCard: React.FC<BalanceCardProps> = ({
                                                          avatarUrl = '',
                                                          username = '',
                                                          greeting = 'Добрый день!',
                                                          hasNotifications = false,
                                                          balance,
                                                          currency = '₽',
                                                          isVisible: initialVisibility = true,
                                                          onTopUp,
                                                          onSend,
                                                          onPay,
                                                          onNotificationsClick
                                                        }) => {
  const [isVisible, setIsVisible] = useState(initialVisibility);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const formatBalance = (amount: number) => {
    const parts = amount.toFixed(2).split('.');
    const integerPart = new Intl.NumberFormat('ru-RU').format(parseInt(parts[0]));
    return { integer: integerPart, decimal: parts[1] };
  };

  const formattedBalance = formatBalance(balance);

  return (
    <S.BalanceCardContainer>
      <S.TopRow>
        <S.UserInfo>
          <S.Avatar src={avatarUrl} alt={username} />
          <S.UserText>
            <S.Greeting>{greeting}</S.Greeting>
            <S.Username>@{username}</S.Username>
          </S.UserText>
        </S.UserInfo>
        <S.NotificationButton onClick={onNotificationsClick}>
          <NotificationIcon />
          {hasNotifications && <S.NotificationDot />}
        </S.NotificationButton>
      </S.TopRow>

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
        <ActionItem icon={<PlusCircleIcon />} label="Пополнить" onClick={onTopUp} />
        <ActionItem icon={<SendIcon />} label="Отправить" onClick={onSend} />
        <ActionItem icon={<QRIcon />} label="Оплатить" onClick={onPay} />
      </S.ActionButtons>
    </S.BalanceCardContainer>
  );
};

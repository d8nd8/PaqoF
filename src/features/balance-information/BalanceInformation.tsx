import React, { useState } from 'react';
import * as S from './BalanceInformation.styled';

import EyeOpenIcon from '@icons/eye.svg?react';
import EyeClosedIcon from '@icons/close-eye.svg?react';
import PlusCircleIcon from '@icons/plus-circle.svg?react';
import SendIcon from '@icons/send.svg?react';
import QRIcon from '@icons/qr.svg?react';
import NotificationIcon from '@icons/notification.svg?react';
import { ActionItem } from '@/shared/components/ActionItem/ActionItem';
import { useTranslation } from 'react-i18next';
import useUserStore from '@/shared/stores/user';

interface BalanceCardProps {
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
                                                          hasNotifications = false,
                                                          balance,
                                                          currency = '₽',
                                                          isVisible: initialVisibility = true,
                                                          onTopUp,
                                                          onSend,
                                                          onPay,
                                                          onNotificationsClick,
                                                        }) => {
  const [isVisible, setIsVisible] = useState(initialVisibility);
  const { t } = useTranslation();
  const user = useUserStore((s) => s.user);

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
          <S.Avatar src={user?.photoUrl || ''} alt={user?.username || 'user'} />
          <S.UserText>
            <S.Greeting>
              {t('main.greeting')}
            </S.Greeting>
            <S.Username>@{user?.username || 'anonymous'}</S.Username>
          </S.UserText>
        </S.UserInfo>
        <S.NotificationButton onClick={onNotificationsClick}>
          <NotificationIcon />
          {hasNotifications && <S.NotificationDot />}
        </S.NotificationButton>
      </S.TopRow>

      <S.BalanceHeader>
        <S.BalanceTitle>{t('main.balanceTitle')}</S.BalanceTitle>
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
          label={t('main.actions.topUp')}
          onClick={onTopUp}
        />
        <ActionItem
          icon={<SendIcon />}
          label={t('main.actions.send')}
          onClick={onSend}
        />
        <ActionItem
          icon={<QRIcon />}
          label={t('main.actions.pay')}
          onClick={onPay}
        />
      </S.ActionButtons>
    </S.BalanceCardContainer>
  );
};

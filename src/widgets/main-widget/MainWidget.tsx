import React, { useState } from 'react';

import { BalanceCard } from '@/features/balance-information/BalanceInformation';
import { AdBanner } from '@/features/ad-banner/AdBanner';
import { type CryptoItemData, CryptoList } from '@/features/crypto-list/CryptoList';
import * as S from './MainWidget.styled';
import { NotificationsModal } from '@/features/notifications'

const usdtData: CryptoItemData[] = [
  {
    id: 'usdt-1',
    name: 'USDT',
    symbol: 'USDT',
    amount: '1 290.49 USDT',
    amountInRubles: '110 323.99 ₽',
    iconColor: '#4CAF50',
  },
  {
    id: 'usdt-2',
    name: 'USDT',
    symbol: 'USDT',
    amount: '850.00 USDT',
    amountInRubles: '72 675.00 ₽',
    iconColor: '#4CAF50',
  },
  {
    id: 'usdt-3',
    name: 'USDT',
    symbol: 'USDT',
    amount: '2 500.75 USDT',
    amountInRubles: '213 814.13 ₽',
    iconColor: '#4CAF50',
  },
];

export const MainWidget: React.FC = () => {
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <S.Wrapper>
      <BalanceCard
        balance={12500.5}
        currency="₽"
        hasNotifications={true}
        onTopUp={() => console.log('Пополнить')}
        onSend={() => console.log('Отправить')}
        onPay={() => console.log('Оплатить')}
        onNotificationsClick={() => setNotificationsOpen(true)} // ✅ открываем модалку
      />

      <S.CryptoWrapper>
        <AdBanner level={3} />

        <CryptoList
          cryptos={usdtData}
          onCryptoClick={(crypto) => console.log('Clicked:', crypto)}
        />
      </S.CryptoWrapper>

      <NotificationsModal
        isOpen={isNotificationsOpen}
        onClose={() => setNotificationsOpen(false)}
      />
    </S.Wrapper>
  );
};

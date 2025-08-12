import React from 'react';

import { BalanceCard } from '@/features/balance-information/BalanceInformation';
import { AdBanner } from '@/features/ad-banner/AdBanner';
import { type CryptoItemData, CryptoList } from '@/features/crypto-list/CryptoList'
import * as S from './MainWidget.styled';

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
  return (
    <S.Wrapper>
      <BalanceCard
        balance={12500.5}
        currency="₽"
        onTopUp={() => console.log('Пополнить')}
        onSend={() => console.log('Отправить')}
        onPay={() => console.log('Оплатить')}
      />

      <AdBanner level={3} />

      <CryptoList
        cryptos={usdtData}
        onCryptoClick={(crypto) => console.log('Clicked:', crypto)}
      />
    </S.Wrapper>
  );
};

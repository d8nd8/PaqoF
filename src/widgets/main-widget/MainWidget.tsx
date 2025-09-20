import React from 'react';
import * as S from './MainWidget.styled';

import { BalanceCard } from '@/features/balance-information/BalanceInformation';
import { AdBanner } from '@/features/ad-banner/AdBanner';
import { type CryptoItemData, CryptoList } from '@/features/crypto-list/CryptoList';
import { useNavigate } from 'react-router-dom';

const cryptoData: CryptoItemData[] = [
  {
    id: "usdt-1",
    name: "USDT",
    symbol: "USDT",
    amount: "1 290.49 USDT",
    amountInRubles: "110 323.99 ₽",
    iconColor: "#26A17B",
  },
  {
    id: "ton-1",
    name: "Toncoin",
    symbol: "TON",
    amount: "580.00 TON",
    amountInRubles: "144 426.19 ₽",
    iconColor: "#0088CC",
  },
  {
    id: "btc-1",
    name: "Bitcoin",
    symbol: "BTC",
    amount: "0.0041 BTC",
    amountInRubles: "34 880.61 ₽",
    iconColor: "#F7931A",
  },
];

interface MainWidgetProps {
  onTopUp: () => void;
  onSend: () => void;
  onPay: () => void;
  onNotifications: () => void;
}

export const MainWidget: React.FC<MainWidgetProps> = ({
                                                        onTopUp,
                                                        onSend,
                                                        onPay,
                                                        onNotifications,
                                                      }) => {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <BalanceCard
        balance={12500.5}
        currency="₽"
        hasNotifications
        onTopUp={onTopUp}
        onSend={onSend}
        onPay={onPay}
        onNotificationsClick={onNotifications}
      />

      <S.CryptoWrapper>
        <AdBanner level={3} onClick={() => navigate('/referral')} />
        <CryptoList
          cryptos={cryptoData}
          onCryptoClick={(crypto) => console.log('Clicked:', crypto)}
        />
      </S.CryptoWrapper>
    </S.Wrapper>
  );
};

export default MainWidget;

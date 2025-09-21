import React, { useEffect, useMemo } from 'react';
import * as S from './MainWidget.styled';

import { BalanceCard } from '@/features/balance-information/BalanceInformation';
import { AdBanner } from '@/features/ad-banner/AdBanner';
import { CryptoList, type CryptoItemData } from '@/features/crypto-list/CryptoList';
import { useNavigate } from 'react-router-dom';
import useWalletStore from '@/shared/stores/wallet';

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
  const { wallets, fetchWallets, fetchRates, getRateToRub, loading } = useWalletStore();

  useEffect(() => {
    fetchWallets();
    fetchRates();
  }, [fetchWallets, fetchRates]);

  const cryptos: CryptoItemData[] = useMemo(() => {
    return wallets.map((w) => {
      const rate = getRateToRub(w.currency);

      if (!rate) {
        return {
          id: w.walletId,
          name: w.currency,
          symbol: w.currency,
          amount: `${w.balance} ${w.currency}`,
          amountInRubles: '-',
          priceInRubles: '-',
          iconColor:
            w.currency === 'USDT'
              ? '#26A17B'
              : w.currency === 'TON'
                ? '#0088CC'
                : '#F7931A',
        };
      }

      const formatter = new Intl.NumberFormat('ru-RU', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

      const priceRub = formatter.format(rate);
      const totalRub = formatter.format(parseFloat(w.balance) * rate);

      return {
        id: w.walletId,
        name: w.currency,
        symbol: w.currency,
        amount: `${w.balance} ${w.currency}`,
        amountInRubles: `${totalRub} ₽`,
        priceInRubles: `${priceRub} ₽`,
        iconColor:
          w.currency === 'USDT'
            ? '#26A17B'
            : w.currency === 'TON'
              ? '#0088CC'
              : '#F7931A',
      };
    });
  }, [wallets, getRateToRub]);

  const totalBalanceRub = useMemo(() => {
    return wallets.reduce((sum, w) => {
      const rate = getRateToRub(w.currency);
      if (!rate) return sum;
      return sum + parseFloat(w.balance) * rate;
    }, 0);
  }, [wallets, getRateToRub]);

  return (
    <S.Wrapper>
      <BalanceCard
        balance={totalBalanceRub}
        currency="₽"
        hasNotifications
        onTopUp={onTopUp}
        onSend={onSend}
        onPay={onPay}
        onNotificationsClick={onNotifications}
      />

      <S.CryptoWrapper>
        <AdBanner level={3} onClick={() => navigate('/referral')} />
        {loading ? (
          <div>-</div>
        ) : (
          <CryptoList
            cryptos={cryptos}
            onCryptoClick={(crypto) => console.log('Clicked:', crypto)}
          />
        )}
      </S.CryptoWrapper>
    </S.Wrapper>
  );
};

export default MainWidget;

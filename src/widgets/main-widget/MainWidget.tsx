import React, { useEffect, useMemo, useRef } from 'react'
import { AdBanner } from '@/features/ad-banner/AdBanner'
import { BalanceCard } from '@/features/balance-information/BalanceInformation'
import { CryptoList, type CryptoItemData } from '@/features/crypto-list/CryptoList'
import useWalletStore from '@/shared/stores/wallet'
import { useNavigate } from 'react-router-dom'

import * as S from './MainWidget.styled'

interface MainWidgetProps {
  onTopUp: () => void
  onSend: () => void
  onPay: () => void
  onNotifications: () => void
}

export const MainWidget: React.FC<MainWidgetProps> = ({
  onTopUp,
  onSend,
  onPay,
  onNotifications,
}) => {
  const navigate = useNavigate()
  const { wallets, fetchWallets, fetchRates, loading, rates } = useWalletStore()
  const hasLoadedRef = useRef(false)

  useEffect(() => {
    // Предотвращаем повторную загрузку данных
    if (hasLoadedRef.current) return

    const loadData = async () => {
      hasLoadedRef.current = true
      const walletsList = await fetchWallets()
      const uniqueCurrencies = Array.from(new Set(walletsList.map((w) => w.currency)))

      for (const cur of uniqueCurrencies) {
        await fetchRates(cur)
      }
    }

    loadData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getRateToRubSync = useMemo(() => {
    return (currency: string) => {
      if (!rates.length) return 0
      if (currency === 'RUB') return 1
      const direct = rates.find((r) => r.symbol === `${currency}/RUB`)
      if (direct) return direct.close
    }
  }, [rates])

  const cryptos: CryptoItemData[] = useMemo(() => {
    return wallets.map((w) => {
      const rate = getRateToRubSync(w.currency) ?? 0

      const formatter = new Intl.NumberFormat('ru-RU', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })

      const priceRub = formatter.format(rate)
      const totalRub = formatter.format(parseFloat(w.balance) * rate)

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
      }
    })
  }, [wallets, getRateToRubSync])

  console.log(cryptos)

  const totalBalanceRub = useMemo(() => {
    return wallets.reduce((sum, w) => {
      const rate = getRateToRubSync(w.currency)
      if (!rate) return sum
      return sum + parseFloat(w.balance) * rate
    }, 0)
  }, [wallets, getRateToRubSync])

  return (
    <S.Wrapper style={{ minHeight: 'auto' }}>
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
        <AdBanner
          level={3}
          onClick={() => navigate('/referral')}
        />
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
  )
}

export default MainWidget

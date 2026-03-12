import React, { useEffect, useState } from 'react'
import { type Wallet } from '@/api/services/wallet/schemes/wallet.schemas'
import BtcIcon from '@/assets/icons/bitcoin-icon.svg?react'
import CopyIcon from '@/assets/icons/copy.svg?react'
import QrIcon from '@/assets/icons/qr.svg?react'
import TonIcon from '@/assets/icons/ton-icon.svg?react'
import TetherIcon from '@/assets/icons/usdt-icon.svg?react'
import { ActionItem } from '@/shared/components/ActionItem/ActionItem'
import { PageHeader } from '@/shared/components/PageHeader/PageHeader'
import useWalletStore from '@/shared/stores/wallet'
import { theme } from '@/styles/theme'
import HistoryWidget from '@/widgets/history-widget/HistoryWidget'
import CheckIcon from '@icons/check.svg?react'
import PlusCircleIcon from '@icons/plus-circle.svg?react'
import QRPayIcon from '@icons/qr.svg?react'
import SendIcon from '@icons/send.svg?react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import {
  ActionsRow,
  BalanceAmount,
  BalanceFiat,
  BalanceSection,
  BalanceWrapper,
  ChainActions,
  ChainAddress,
  ChainBadge,
  ChainButton,
  ChainContent,
  ChainFee,
  ChainHeader,
  ChainIcon,
  ChainList,
  ChainRow,
  ChainTitle,
  ChainTypeCard,
  CopyNotification,
  CurrencyWrapper,
} from './CurrencyWidget.styled'

interface CurrencyWidgetProps {
  wallet: Wallet
  onShowScanner?: () => void
  onTopUp?: () => void
  onSend?: () => void
}

export const CurrencyWidget: React.FC<CurrencyWidgetProps> = ({
  wallet,
  onShowScanner,
  onTopUp,
  onSend,
}) => {
  const [copied, setCopied] = useState(false)
  const [rate, setRate] = useState<number | null>(null)
  const navigate = useNavigate()
  const { t } = useTranslation()

  const { fetchRates } = useWalletStore()

  useEffect(() => {
    if (!wallet?.currency) return

    const loadRate = async () => {
      const r = await fetchRates(wallet.currency)
      setRate(r)
    }
    loadRate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallet?.currency])

  const balanceRub = rate ? parseFloat(wallet.balance) * rate : null

  const formatter = {
    format: (n: number) =>
      new Intl.NumberFormat('ru-RU', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
        .format(n)
        .replace('.', ','),
  }

  const handleCopy = (address: string) => {
    navigator.clipboard.writeText(address)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const shortenAddress = (address: string, start = 8, end = 9) => {
    if (!address) return ''
    if (address.length <= start + end) return address
    return `${address.slice(0, start)}...${address.slice(-end)}`
  }

  const iconSize = { width: 64, height: 64 }
  const chainIconSize = { width: 38, height: 38 }

  const renderIcon = (size = iconSize) => {
    switch (wallet.currency) {
      case 'USDT':
        return <TetherIcon {...size} />
      case 'TON':
        return <TonIcon {...size} />
      case 'BTC':
        return <BtcIcon {...size} />
      default:
        return <TetherIcon {...size} />
    }
  }

  return (
    <>
      <CurrencyWrapper>
        <PageHeader
          title={wallet.currency}
          onBack={() => navigate(-1)}
          style={{ marginBottom: 0 }}
        />

        <BalanceWrapper>
          {copied && (
            <CopyNotification>
              <CheckIcon />
              {t('currency.copyNotification')}
            </CopyNotification>
          )}
          <BalanceSection>
            {renderIcon(iconSize)}
            <div
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <BalanceAmount>
                {wallet.balance} {wallet.currency}
              </BalanceAmount>
              <BalanceFiat>
                {balanceRub !== null ? `${formatter.format(balanceRub)} ₽` : '-'}
              </BalanceFiat>
            </div>
          </BalanceSection>
        </BalanceWrapper>

        <ActionsRow>
          <ActionItem
            icon={<PlusCircleIcon />}
            label={t('currency.actions.topUp')}
            onClick={onTopUp}
            variant="secondary"
          />
          <ActionItem
            icon={<SendIcon />}
            label={t('currency.actions.send')}
            onClick={onSend}
            variant="secondary"
          />
          <ActionItem
            icon={<QRPayIcon />}
            label={t('currency.actions.pay')}
            onClick={onShowScanner}
            variant="secondary"
          />
        </ActionsRow>

        <ChainList>
          {wallet.addresses.map((addr, index) => (
            <ChainTypeCard key={`${addr.address}-${index}`}>
              <ChainRow>
                <ChainIcon>{renderIcon(chainIconSize)}</ChainIcon>
                <ChainContent>
                  <ChainHeader>
                    <ChainTitle>{wallet.currency}</ChainTitle>
                    <ChainBadge>{addr.network}</ChainBadge>
                  </ChainHeader>
                  <ChainAddress>{shortenAddress(addr.address)}</ChainAddress>
                </ChainContent>
                <ChainActions>
                  <ChainButton
                    type="button"
                    onClick={onShowScanner}
                    aria-label={t('currency.actions.pay')}
                  >
                    <QrIcon
                      width={22}
                      height={22}
                    />
                  </ChainButton>
                  <ChainButton
                    type="button"
                    onClick={() => handleCopy(addr.address)}
                    aria-label={t('currency.copyNotification')}
                  >
                    <CopyIcon
                      width={22}
                      height={22}
                    />
                  </ChainButton>
                </ChainActions>
              </ChainRow>
              <ChainFee>{t('currency.fee', { value: '2,75 USDT' })}</ChainFee>
            </ChainTypeCard>
          ))}
        </ChainList>
      </CurrencyWrapper>

      <HistoryWidget
        variant="card"
        walletId={wallet.walletId}
      />
    </>
  )
}

export default CurrencyWidget

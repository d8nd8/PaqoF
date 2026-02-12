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
  ChainAddress,
  ChainBadge,
  ChainContent,
  ChainFee,
  ChainHeader,
  ChainIcon,
  ChainList,
  ChainRow,
  ChainTitle,
  ChainTypeCard,
  CopyButton,
  CopyGroup,
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

  const formatter = new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  const handleCopy = (address: string) => {
    navigator.clipboard.writeText(address)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const shortenAddress = (address: string, start = 6, end = 6) => {
    if (!address) return ''
    if (address.length <= start + end) return address
    return `${address.slice(0, start)}...${address.slice(-end)}`
  }

  const renderIcon = () => {
    switch (wallet.currency) {
      case 'USDT':
        return (
          <TetherIcon
            width={64}
            height={64}
          />
        )
      case 'TON':
        return (
          <TonIcon
            width={64}
            height={64}
          />
        )
      case 'BTC':
        return (
          <BtcIcon
            width={64}
            height={64}
          />
        )
      default:
        return (
          <TetherIcon
            width={64}
            height={64}
          />
        )
    }
  }

  return (
    <>
      <CurrencyWrapper>
        <PageHeader
          title={wallet.currency}
          onBack={() => navigate(-1)}
        />

        <BalanceWrapper>
          {copied && (
            <CopyNotification>
              <CheckIcon />
              {t('currency.copyNotification')}
            </CopyNotification>
          )}
          <BalanceSection>
            {renderIcon()}
            <BalanceAmount>
              {wallet.balance} {wallet.currency}
            </BalanceAmount>
            <BalanceFiat>
              {balanceRub !== null ? `${formatter.format(balanceRub)} ₽` : '-'}
            </BalanceFiat>
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
              <ChainIcon>{renderIcon()}</ChainIcon>
              <ChainContent>
                <ChainRow>
                  <ChainHeader>
                    <ChainTitle>{wallet.currency}</ChainTitle>
                    <ChainBadge>{addr.network}</ChainBadge>
                  </ChainHeader>
                  <CopyGroup>
                    <CopyButton onClick={onShowScanner}>
                      <QrIcon
                        width={20}
                        height={20}
                      />
                    </CopyButton>
                    <CopyButton onClick={() => handleCopy(addr.address)}>
                      <CopyIcon
                        width={20}
                        height={20}
                      />
                    </CopyButton>
                  </CopyGroup>
                </ChainRow>
                <ChainAddress>{shortenAddress(addr.address)}</ChainAddress>
                <ChainFee>{t('currency.fee', { value: '2.75 USDT' })}</ChainFee>
              </ChainContent>
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

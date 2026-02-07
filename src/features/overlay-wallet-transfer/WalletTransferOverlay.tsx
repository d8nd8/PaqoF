import React, { useEffect, useMemo, useState } from 'react'
import { CryptoItem, type CryptoItemData } from '@/features/crypto-list/CryptoList'
import { WalletConfirmOverlay } from '@/features/overlay-wallet-confirm/WalletConfirmOverlay'
import { QRScanner } from '@/features/qr-scanner/QRScanner'
import { PageHeader } from '@/shared/components/PageHeader/PageHeader'
import { useSafeAreaInsets } from '@/shared/hooks/useSafeAreaInsets'
import useApplicationStore from '@/shared/stores/application'
import useWalletStore from '@/shared/stores/wallet'
import ChevronRightIcon from '@icons/chevron-right.svg?react'
import ExclamationIcon from '@icons/exclamation-circle.svg?react'
import QrIcon from '@icons/qr.svg?react'
import SwapIcon from '@icons/swap-icon.svg?react'
import { useTranslation } from 'react-i18next'

import * as S from './WalletTransferOverlay.styled'

interface WalletTransferOverlayProps {
  isOpen: boolean
  onClose: () => void
  crypto: CryptoItemData
  commission: string
  onCommissionClick?: () => void
  onTopUpClick?: () => void
}

type ErrorType = 'none' | 'insufficient' | 'invalidAmount' | 'invalidAddress'

export const WalletTransferOverlay: React.FC<WalletTransferOverlayProps> = ({
  isOpen,
  onClose,
  crypto,
  commission,
  onCommissionClick,
  onTopUpClick,
}) => {
  const { t } = useTranslation()
  const { fullscreen } = useApplicationStore()
  const { wallets, getRateToRub, fetchWallets, fetchRates } = useWalletStore()

  const [selectedCrypto, setSelectedCrypto] = useState<CryptoItemData>(crypto)
  const [amount, setAmount] = useState('0')
  const [rubPreset, setRubPreset] = useState<number | null>(null)
  const [address, setAddress] = useState('')
  const [showScanner, setShowScanner] = useState(false)
  const [errorType, setErrorType] = useState<ErrorType>('none')
  const [showConfirm, setShowConfirm] = useState(false)
  const [rate, setRate] = useState<number | null>(null)

  const [isFiatMode, setIsFiatMode] = useState(false)

  const { bottom, top } = useSafeAreaInsets()

  useEffect(() => {
    if (!isOpen || !selectedCrypto?.symbol) return

    const loadRate = async () => {
      const r = await fetchRates(selectedCrypto.symbol)
      setRate(r)
    }
    loadRate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, selectedCrypto?.symbol])

  useEffect(() => {
    if (!isOpen) return
    fetchWallets()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  const cryptoOptions: CryptoItemData[] = wallets.map((wallet) => {
    const rateToRub = getRateToRub(wallet.currency) ?? 0
    return {
      id: wallet.walletId,
      name: wallet.currency,
      symbol: wallet.currency,
      amount: `${wallet.balance} ${wallet.currency}`,
      amountInRubles: `${(Number(wallet.balance) * rateToRub).toFixed(2)} ₽`,
      iconColor:
        wallet.currency === 'USDT'
          ? '#26A17B'
          : wallet.currency === 'TON'
            ? '#0088CC'
            : wallet.currency === 'BTC'
              ? '#F7931A'
              : '#999999',
    }
  })

  if (!isOpen) return null

  const balance = parseFloat(selectedCrypto.amount.replace(/[^\d.]/g, '')) || 0
  const sendAmount = parseFloat(amount.replace(',', '.')) || 0

  const handleContinue = () => {
    if (sendAmount <= 0) {
      setErrorType('invalidAmount')
    } else if (!address.trim()) {
      setErrorType('invalidAddress')
    } else if (!isFiatMode && sendAmount > balance) {
      setErrorType('insufficient')
    } else {
      setErrorType('none')
      setShowConfirm(true)
    }
  }

  const hasError = errorType !== 'none'

  const formatter = new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  const fiatValue = useMemo(() => {
    if (!rate) return 0
    return isFiatMode ? sendAmount / rate : sendAmount * rate
  }, [rate, sendAmount, isFiatMode])

  const handleAmountChange = (val: string) => {
    let sanitized = val.replace(/[^0-9.,]/g, '')
    if (sanitized.length > 10) sanitized = sanitized.slice(0, 10)
    setAmount(sanitized)
    setRubPreset(null)
  }

  const handleSwapMode = () => {
    if (!rate) return

    const numericValue = parseFloat(amount.replace(',', '.')) || 0

    if (isFiatMode) {
      const cryptoVal = numericValue / rate
      setAmount(cryptoVal.toFixed(2))
    } else {
      const fiatVal = numericValue * rate
      setAmount(fiatVal.toFixed(2))
    }

    setIsFiatMode(!isFiatMode)
  }

  return (
    <>
      <S.OverlayWrapper insetTop={fullscreen ? top + 50 : top}>
        <PageHeader
          customTopInset={60}
          title={t('currency.overlays.transfer.title')}
          onBack={onClose}
          rightSlot={null}
        />

        <S.Content>
          <S.Card style={{ overflow: 'hidden' }}>
            <S.CardTitle>{t('currency.overlays.transfer.amount.title')}</S.CardTitle>

            <S.AmountRow>
              <S.AmountValue $hasError={hasError}>
                <S.AmountInput
                  type="text"
                  value={amount}
                  onChange={(e) => handleAmountChange(e.target.value)}
                  placeholder="0"
                  $length={amount.length}
                  $hasError={hasError}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      e.currentTarget.blur()
                    }
                  }}
                />
                <S.CurrencySymbol $hasError={hasError}>
                  {isFiatMode ? '₽' : selectedCrypto.symbol}
                </S.CurrencySymbol>
              </S.AmountValue>

              <S.SwapButton onClick={handleSwapMode}>
                <SwapIcon />
              </S.SwapButton>
            </S.AmountRow>

            {errorType === 'insufficient' && (
              <S.ErrorSub>
                {t('currency.overlays.transfer.amount.insufficient')}{' '}
                <span onClick={onTopUpClick}>
                  {t('currency.overlays.transfer.amount.topUp')}
                </span>
              </S.ErrorSub>
            )}

            {errorType === 'invalidAmount' && (
              <S.ErrorSub>
                {t('currency.overlays.transfer.amount.enterAmount')}
              </S.ErrorSub>
            )}

            {errorType === 'none' && (
              <S.AmountSub>
                {rate === null
                  ? '≈ -'
                  : isFiatMode
                    ? `≈ ${formatter.format(fiatValue)} ${selectedCrypto.symbol}`
                    : `≈ ${formatter.format(fiatValue)} ₽`}
              </S.AmountSub>
            )}

            <S.PresetRow>
              {!isFiatMode && (
                <>
                  <S.PresetButton onClick={() => setAmount(balance.toString())}>
                    {t('currency.overlays.transfer.amount.presets.all')}
                  </S.PresetButton>
                  <S.PresetButton
                    onClick={() => setAmount((1000 / (rate ?? 1) || 0).toFixed(2))}
                  >
                    1 000 ₽
                  </S.PresetButton>
                  <S.PresetButton
                    onClick={() => setAmount((5000 / (rate ?? 1) || 0).toFixed(2))}
                  >
                    5 000 ₽
                  </S.PresetButton>
                  <S.PresetButton
                    onClick={() => setAmount((10000 / (rate ?? 1) || 0).toFixed(2))}
                  >
                    10 000 ₽
                  </S.PresetButton>
                </>
              )}
              {isFiatMode && (
                <>
                  <S.PresetButton onClick={() => setAmount('1000')}>
                    1 000 ₽
                  </S.PresetButton>
                  <S.PresetButton onClick={() => setAmount('5000')}>
                    5 000 ₽
                  </S.PresetButton>
                  <S.PresetButton onClick={() => setAmount('10000')}>
                    10 000 ₽
                  </S.PresetButton>
                </>
              )}
            </S.PresetRow>
          </S.Card>

          <S.SectionTitle>{t('currency.overlays.transfer.balance')}</S.SectionTitle>
          <CryptoItem
            data={selectedCrypto}
            showRightSection={false}
            infoVariant="amount"
          />

          <S.SectionTitle>{t('currency.overlays.transfer.address.title')}</S.SectionTitle>

          <S.InputWrapper hasError={errorType === 'invalidAddress'}>
            <S.AddressInput
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder={t('currency.overlays.transfer.address.placeholder')}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  e.currentTarget.blur()
                }
              }}
            />
            <S.IconButton onClick={() => setShowScanner(true)}>
              <QrIcon />
            </S.IconButton>
          </S.InputWrapper>

          {errorType === 'invalidAddress' && (
            <S.ErrorMessage>
              {t('currency.overlays.transfer.address.error')}
            </S.ErrorMessage>
          )}

          <S.CommissionButton onClick={onCommissionClick}>
            <div className="left">
              <ExclamationIcon className="icon" />
              <span
                dangerouslySetInnerHTML={{
                  __html: t('currency.overlays.transfer.commission', {
                    value: commission,
                  }),
                }}
              />
            </div>
            <ChevronRightIcon className="chevron" />
          </S.CommissionButton>
        </S.Content>

        <S.BottomSection $insetBottom={bottom}>
          <S.MainButton onClick={handleContinue}>
            {t('currency.overlays.transfer.continue')}
          </S.MainButton>
        </S.BottomSection>

        <QRScanner
          isVisible={showScanner}
          onScan={(result) => {
            setAddress(result)
            setShowScanner(false)
          }}
          onClose={() => setShowScanner(false)}
          title={t('currency.overlays.transfer.address.title')}
        />
      </S.OverlayWrapper>

      <WalletConfirmOverlay
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        crypto={selectedCrypto}
        amount={isFiatMode && rate ? (parseFloat(amount) / rate).toFixed(2) : amount}
        amountFiat={
          isFiatMode ? `${amount} ₽` : `≈ ${formatter.format(sendAmount * (rate ?? 0))} ₽`
        }
        address={address}
        commission={commission}
        total={`${amount} ${isFiatMode ? '₽' : selectedCrypto.symbol}`}
        balanceAfter={`${(balance - sendAmount).toFixed(2)} ${selectedCrypto.symbol}`}
      />
    </>
  )
}

export default WalletTransferOverlay

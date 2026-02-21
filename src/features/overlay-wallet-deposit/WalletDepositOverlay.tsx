import React, { useEffect, useState, type JSX } from 'react'
import type { Wallet } from '@/api/services/wallet/schemes/wallet.schemas'
import BtcIcon from '@/assets/icons/bitcoin-icon.svg?react'
import TonIcon from '@/assets/icons/ton-icon.svg?react'
import TronIcon from '@/assets/icons/tron-icon.svg?react'
import TetherIcon from '@/assets/icons/usdt-icon.svg?react'
import { type CryptoItemData } from '@/features/crypto-list/CryptoList'
import { OverlayCryptoSelection } from '@/features/overlay-crypto-selection/OverlayCryptoSelection'
import { PageHeader } from '@/shared/components/PageHeader/PageHeader'
import { useSafeAreaInsets } from '@/shared/hooks/useSafeAreaInsets'
import useApplicationStore from '@/shared/stores/application'
import useWalletStore from '@/shared/stores/wallet'
import ChevronRightIcon from '@icons/chevron-right.svg?react'
import { Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import * as S from './WalletDepositOverlay.styled'

export type WalletDepositMode = 'deposit' | 'transfer'

interface WalletDepositOverlayProps {
  isOpen: boolean
  onClose: () => void
  onContinue?: (
    crypto: CryptoItemData,
    network: string,
    mode: WalletDepositMode,
    address: string,
  ) => void
  title?: string
  mode?: WalletDepositMode
  preselectedCrypto?: CryptoItemData | null
}

const ICON_MAP: Record<string, JSX.Element> = {
  USDT: (
    <TetherIcon
      width={38}
      height={38}
    />
  ),
  TON: (
    <TonIcon
      width={38}
      height={38}
    />
  ),
  BTC: (
    <BtcIcon
      width={38}
      height={38}
    />
  ),
}

export const WalletDepositOverlay: React.FC<WalletDepositOverlayProps> = ({
  isOpen,
  onClose,
  onContinue,
  title,
  mode = 'deposit',
  preselectedCrypto,
}) => {
  const { t } = useTranslation()
  const { fullscreen } = useApplicationStore()
  const { wallets, fetchWallets, getRateToRub, loading } = useWalletStore()
  const { bottom, top } = useSafeAreaInsets()

  const [selectedWallet, setSelectedWallet] = useState<Wallet | null>(null)
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoItemData | null>(
    preselectedCrypto || null,
  )
  const [selectedNetwork, setSelectedNetwork] = useState<string>('')
  const [selectedAddress, setSelectedAddress] = useState<string>('')
  const [showCryptoSelection, setShowCryptoSelection] = useState(false)

  useEffect(() => {
    if (isOpen) {
      // Принудительно обновляем данные при открытии оверлея
      fetchWallets(true, { skipLoading: true }).catch((error) => {
        console.error('Error fetching wallets:', error)
      })
    }
  }, [isOpen, fetchWallets])

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

  useEffect(() => {
    if (!selectedCrypto && cryptoOptions.length > 0) {
      setSelectedCrypto(cryptoOptions[0])
    }
  }, [cryptoOptions, selectedCrypto])

  useEffect(() => {
    if (selectedCrypto) {
      const wallet = wallets.find((w) => w.currency === selectedCrypto.symbol)
      console.log('🔍 Selected crypto:', selectedCrypto.symbol)
      console.log('💼 Found wallet:', wallet)
      console.log('🌐 Wallet addresses:', wallet?.addresses)
      setSelectedWallet(wallet || null)

      if (wallet?.addresses?.length) {
        setSelectedNetwork(wallet.addresses[0].network)
        setSelectedAddress(wallet.addresses[0].address)
        console.log('✅ Selected network:', wallet.addresses[0].network)
      } else {
        console.warn('⚠️ No addresses found for wallet:', wallet)
      }
    }
  }, [selectedCrypto, wallets])

  const handleSelectNetwork = (network: string) => {
    if (!selectedWallet) return
    const addrObj = selectedWallet.addresses.find((a) => a.network === network)
    if (addrObj) {
      setSelectedNetwork(addrObj.network)
      setSelectedAddress(addrObj.address)
    }
  }

  if (!isOpen) return null

  const handleContinue = () => {
    if (onContinue && selectedCrypto && selectedNetwork && selectedAddress) {
      onContinue(selectedCrypto, selectedNetwork, mode, selectedAddress)
    }
  }

  const renderIcon = (symbol: string) =>
    ICON_MAP[symbol] || (
      <TetherIcon
        width={38}
        height={38}
      />
    )

  return (
    <>
      <S.OverlayWrapper insetTop={fullscreen ? top + 50 : top}>
        <PageHeader
          // customTopInset={fullscreen ? top + 50 : top + 30}
          title={
            title ||
            (mode === 'deposit'
              ? t('walletDepositOverlay.titleDeposit')
              : t('walletDepositOverlay.titleTransfer'))
          }
          onBack={onClose}
          rightSlot={null}
        />

        <S.ContentWrapper>
          <S.Content>
            {selectedCrypto && (
              <>
                <S.SectionTitle>{t('walletDepositOverlay.selectCrypto')}</S.SectionTitle>
                <S.CryptoCard onClick={() => setShowCryptoSelection(true)}>
                  <div className="left">
                    {renderIcon(selectedCrypto.symbol)}
                    <div className="info">
                      <span className="name">{selectedCrypto.name}</span>
                      <span className="amount">{selectedCrypto.amount}</span>
                    </div>
                  </div>
                  <div className="right">
                    <ChevronRightIcon />
                  </div>
                </S.CryptoCard>
              </>
            )}

            <S.SectionTitle>{t('walletDepositOverlay.selectNetwork')}</S.SectionTitle>

            {(!selectedWallet || loading) && (
              <S.NetworkOption
                $selected={false}
                disabled
              >
                <div className="left">
                  <div className="info">
                    <span className="name">
                      {loading
                        ? t('walletDepositOverlay.loading') || 'Загрузка...'
                        : t('walletDepositOverlay.selectCryptoFirst') ||
                          'Выберите криптовалюту'}
                    </span>
                  </div>
                </div>
              </S.NetworkOption>
            )}

            {selectedWallet &&
              (!selectedWallet.addresses || selectedWallet.addresses.length === 0) && (
                <S.NetworkOption
                  $selected={false}
                  disabled
                >
                  <div className="left">
                    <div className="info">
                      <span className="name">
                        {t('walletDepositOverlay.noNetworks') || 'Сети не доступны'}
                      </span>
                    </div>
                  </div>
                </S.NetworkOption>
              )}

            {selectedWallet?.addresses?.map((addr) => (
              <S.NetworkOption
                key={addr.network}
                $selected={selectedNetwork === addr.network}
                onClick={() => handleSelectNetwork(addr.network)}
              >
                <div className="left">
                  {addr.network === 'TRC20' && (
                    <TronIcon
                      width={28}
                      height={28}
                    />
                  )}
                  {addr.network === 'TON' && (
                    <TonIcon
                      width={28}
                      height={28}
                    />
                  )}
                  {addr.network === 'BEP20' && (
                    <BtcIcon
                      width={28}
                      height={28}
                    />
                  )}
                  <div className="info">
                    <span className="name">{addr.network}</span>
                    <span className="commission">
                      {t('walletDepositOverlay.commission', {
                        value: '2.75 USDT',
                      })}
                    </span>
                  </div>
                </div>
                <S.RadioWrapper $active={selectedNetwork === addr.network}>
                  {selectedNetwork === addr.network && <Check size={14} />}
                </S.RadioWrapper>
              </S.NetworkOption>
            ))}
          </S.Content>
        </S.ContentWrapper>

        <S.BottomSection $insetBottom={bottom}>
          <S.MainButton onClick={handleContinue}>
            {t('walletDepositOverlay.continue')}
          </S.MainButton>
        </S.BottomSection>
      </S.OverlayWrapper>

      {!preselectedCrypto && selectedCrypto && (
        <OverlayCryptoSelection
          isOpen={showCryptoSelection}
          onClose={() => setShowCryptoSelection(false)}
          cryptos={cryptoOptions}
          selectedCryptoId={selectedCrypto.id}
          onCryptoSelect={(crypto) => setSelectedCrypto(crypto)}
          title={t('walletDepositOverlay.selectCrypto')}
        />
      )}
    </>
  )
}

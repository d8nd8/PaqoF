import React, { useEffect, useState } from 'react'
import { type CryptoItemData } from '@/features/crypto-list/CryptoList'
import { DepositOverlay } from '@/features/deposit-overlay/DepositOverlay'
import { OverlayCommission } from '@/features/overlay-commission/OverlayCommission'
import { WalletAddressOverlay } from '@/features/overlay-wallet-address/WalletAddressOverlay'
import {
  WalletDepositOverlay,
  type WalletDepositMode,
} from '@/features/overlay-wallet-deposit/WalletDepositOverlay'
import { WalletTransferOverlay } from '@/features/overlay-wallet-transfer/WalletTransferOverlay'
import QRScanner from '@/features/qr-scanner/QRScanner'
import useWalletStore from '@/shared/stores/wallet'
import { BaseLayout } from '@/widgets/base-layout'
import { CurrencyWidget } from '@/widgets/currency-widget/CurrencyWidget'
import { useSearchParams } from 'react-router-dom'

export const CurrencyPage: React.FC = () => {
  const [searchParams] = useSearchParams()
  const walletId = searchParams.get('walletId')

  const { selectedWallet, fetchWalletById } = useWalletStore()

  const [showDeposit, setShowDeposit] = useState(false)
  const [showWalletDeposit, setShowWalletDeposit] = useState<WalletDepositMode | null>(
    null,
  )
  const [showWalletAddress, setShowWalletAddress] = useState(false)
  const [showWalletTransfer, setShowWalletTransfer] = useState(false)
  const [showCommission, setShowCommission] = useState(false)
  const [showScanner, setShowScanner] = useState(false)

  const [selectedCrypto, setSelectedCrypto] = useState<CryptoItemData | null>(null)
  const [selectedNetwork, setSelectedNetwork] = useState<string>('')

  const hideNavbar =
    showDeposit ||
    !!showWalletDeposit ||
    showWalletAddress ||
    showWalletTransfer ||
    showCommission ||
    showScanner

  useEffect(() => {
    if (walletId) {
      fetchWalletById(walletId)
    }
  }, [walletId, fetchWalletById])

  const handlePay = () => {
    setShowScanner(false)
  }

  if (!selectedWallet) {
    return <div></div>
  }

  return (
    <BaseLayout showNavbar={!hideNavbar}>
      <CurrencyWidget
        wallet={selectedWallet}
        onShowScanner={() => setShowScanner(true)}
        onTopUp={() => setShowDeposit(true)}
        onSend={() => setShowWalletDeposit('transfer')}
      />

      {showDeposit && (
        <DepositOverlay
          onClose={() => setShowDeposit(false)}
          onSelectWallet={() => {
            setShowDeposit(false)
            setShowWalletDeposit('deposit')
          }}
        />
      )}

      {showWalletDeposit && (
        <WalletDepositOverlay
          isOpen={!!showWalletDeposit}
          onClose={() => setShowWalletDeposit(null)}
          mode={showWalletDeposit}
          preselectedCrypto={{
            id: selectedWallet.walletId,
            name: selectedWallet.currency,
            symbol: selectedWallet.currency,
            amount: `${selectedWallet.balance} ${selectedWallet.currency}`,
            amountInRubles: '',
            iconColor:
              selectedWallet.currency === 'USDT'
                ? '#26A17B'
                : selectedWallet.currency === 'TON'
                  ? '#0088CC'
                  : '#F7931A',
          }}
          onContinue={(crypto, network, mode) => {
            setSelectedCrypto(crypto)
            setSelectedNetwork(network)
            setShowWalletDeposit(null)

            if (mode === 'deposit') {
              setShowWalletAddress(true)
            } else if (mode === 'transfer') {
              setShowWalletTransfer(true)
            }
          }}
        />
      )}

      {selectedCrypto && (
        <WalletAddressOverlay
          isOpen={showWalletAddress}
          onClose={() => setShowWalletAddress(false)}
          cryptoName={selectedCrypto.name}
          network={selectedNetwork}
          address={
            selectedWallet.addresses.find((a) => a.network === selectedNetwork)
              ?.address || ''
          }
          commission="2.75 USDT"
          onCommissionClick={() => setShowCommission(true)}
        />
      )}

      {selectedCrypto && (
        <WalletTransferOverlay
          isOpen={showWalletTransfer}
          onClose={() => setShowWalletTransfer(false)}
          crypto={selectedCrypto}
          commission="2.75 USDT"
          onCommissionClick={() => setShowCommission(true)}
        />
      )}

      <OverlayCommission
        isOpen={showCommission}
        onClose={() => setShowCommission(false)}
        titleKey="commission.title"
        descriptionKey="commission.description"
        buttonTextKey="common.ok"
      />

      <QRScanner
        isVisible={showScanner}
        onScan={handlePay}
        onClose={() => setShowScanner(false)}
      />
    </BaseLayout>
  )
}

export default CurrencyPage

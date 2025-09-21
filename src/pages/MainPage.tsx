import React, { useState } from 'react'
import { MainWidget } from '@/widgets/main-widget/MainWidget'
import { BaseLayout } from '@/widgets/base-layout'

import { NotificationsModal } from '@/features/notifications'
import { DepositOverlay } from '@/features/deposit-overlay/DepositOverlay'
import { WalletDepositOverlay, type WalletDepositMode } from '@/features/overlay-wallet-deposit/WalletDepositOverlay'
import { WalletAddressOverlay } from '@/features/overlay-wallet-address/WalletAddressOverlay'
import { WalletTransferOverlay } from '@/features/overlay-wallet-transfer/WalletTransferOverlay'
import { OverlayCommission } from '@/features/overlay-commission/OverlayCommission'
import QRScanner from '@/features/qr-scanner/QRScanner'

import useApplicationStore from '@/shared/stores/application'
import { type CryptoItemData } from '@/features/crypto-list/CryptoList'

export const MainPage: React.FC = () => {
  const { modal, openModal, closeModal } = useApplicationStore()

  const [showDeposit, setShowDeposit] = useState(false)
  const [showWalletDeposit, setShowWalletDeposit] = useState<WalletDepositMode | null>(null)
  const [showWalletAddress, setShowWalletAddress] = useState(false)
  const [showWalletTransfer, setShowWalletTransfer] = useState(false)
  const [showCommission, setShowCommission] = useState(false)
  const [showScanner, setShowScanner] = useState(false)

  const [selectedCrypto, setSelectedCrypto] = useState<CryptoItemData | null>(null)
  const [selectedNetwork, setSelectedNetwork] = useState<string>('')
  const [selectedAddress, setSelectedAddress] = useState<string>('')

  const hideNavbar =
    showDeposit ||
    !!showWalletDeposit ||
    showWalletAddress ||
    showWalletTransfer ||
    showCommission ||
    showScanner

  const handlePay = () => {
    setShowScanner(false)
  }

  return (
    <BaseLayout showNavbar={!hideNavbar}>
      <MainWidget
        onTopUp={() => setShowDeposit(true)}
        onSend={() => setShowWalletDeposit('transfer')}
        onPay={() => setShowScanner(true)}
        onNotifications={() => openModal('notifications')}
      />

      <NotificationsModal isOpen={modal === 'notifications'} onClose={closeModal} />

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
          onContinue={(crypto, network, mode, address) => {
            setSelectedCrypto(crypto)
            setSelectedNetwork(network)
            setSelectedAddress(address)
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
          address={selectedAddress}
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
      />

      <QRScanner
        isVisible={showScanner}
        onScan={handlePay}
        onClose={() => setShowScanner(false)}
      />
    </BaseLayout>
  )
}

export default MainPage

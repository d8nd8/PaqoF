import React, { useState } from 'react'
import { type CryptoItemData } from '@/features/crypto-list/CryptoList'
import { DepositOverlay } from '@/features/deposit-overlay/DepositOverlay'
import { NotificationsModal } from '@/features/notifications'
import { OverlayCommission } from '@/features/overlay-commission/OverlayCommission'
import { WalletAddressOverlay } from '@/features/overlay-wallet-address/WalletAddressOverlay'
import {
  WalletDepositOverlay,
  type WalletDepositMode,
} from '@/features/overlay-wallet-deposit/WalletDepositOverlay'
import { WalletTransferOverlay } from '@/features/overlay-wallet-transfer/WalletTransferOverlay'
import QRScanner from '@/features/qr-scanner/QRScanner'
import useApplicationStore from '@/shared/stores/application'
import { BaseLayout } from '@/widgets/base-layout'
import { MainWidget } from '@/widgets/main-widget/MainWidget'

export const MainPage: React.FC = () => {
  const { modal, openModal, closeModal, currentOverlay, openOverlay, goBack } =
    useApplicationStore()

  const [depositMode, setDepositMode] = useState<WalletDepositMode>('deposit')
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoItemData | null>(null)
  const [selectedNetwork, setSelectedNetwork] = useState<string>('')
  const [selectedAddress, setSelectedAddress] = useState<string>('')

  const handleDepositStart = () => {
    setDepositMode('deposit')
    openOverlay('deposit')
  }

  const handleTransferStart = () => {
    setDepositMode('transfer')
    openOverlay('walletDeposit')
  }

  const handleDepositContinue = (
    crypto: CryptoItemData,
    network: string,
    mode: WalletDepositMode,
    address: string,
  ) => {
    setSelectedCrypto(crypto)
    setSelectedNetwork(network)
    setSelectedAddress(address)

    if (mode === 'deposit') {
      openOverlay('walletAddress')
    } else if (mode === 'transfer') {
      openOverlay('walletTransfer')
    }
  }

  const hideNavbar = currentOverlay !== null || modal === 'notifications'
  const handlePay = () => goBack()

  return (
    <BaseLayout showNavbar={!hideNavbar}>
      <MainWidget
        onTopUp={handleDepositStart}
        onSend={handleTransferStart}
        onPay={() => openOverlay('scanner')}
        onNotifications={() => openModal('notifications')}
      />

      <NotificationsModal
        isOpen={modal === 'notifications'}
        onClose={closeModal}
      />

      {currentOverlay === 'deposit' && (
        <DepositOverlay
          onClose={goBack}
          onSelectWallet={() => openOverlay('walletDeposit')}
        />
      )}

      {currentOverlay === 'walletDeposit' && (
        <WalletDepositOverlay
          isOpen
          onClose={goBack}
          mode={depositMode}
          onContinue={handleDepositContinue}
        />
      )}

      {currentOverlay === 'walletAddress' && selectedCrypto && (
        <WalletAddressOverlay
          isOpen
          onClose={goBack}
          cryptoName={selectedCrypto.name}
          network={selectedNetwork}
          address={selectedAddress}
          commission="2.75 USDT"
          onCommissionClick={() => openOverlay('commission')}
        />
      )}

      {currentOverlay === 'walletTransfer' && selectedCrypto && (
        <WalletTransferOverlay
          isOpen
          onClose={goBack}
          crypto={selectedCrypto}
          commission="2.75 USDT"
          onCommissionClick={() => openOverlay('commission')}
        />
      )}

      {currentOverlay === 'commission' && (
        <OverlayCommission
          isOpen
          onClose={goBack}
        />
      )}

      {currentOverlay === 'scanner' && (
        <QRScanner
          isVisible
          onScan={handlePay}
          onClose={goBack}
        />
      )}
    </BaseLayout>
  )
}

export default MainPage

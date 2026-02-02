import React, { useEffect, useState } from 'react'
import type { CryptoItemData } from '@/features/crypto-list/CryptoList'
import { PaymentOverlay } from '@/features/payment-overlay/PaymentOverlay'
import { PaymentInfoOverlay } from '@/features/qr-scanner/payment-info-overlay'
import { useQRScanner } from '@/features/qr-scanner/useQRScanner'
import { useSafeAreaInsets } from '@/shared/hooks/useSafeAreaInsets'
import AttachmentIcon from '@icons/scanner/attachment.svg?react'
import TorchlightIcon from '@icons/scanner/torchlight.svg?react'
import { useTranslation } from 'react-i18next'

import {
  ActionButton,
  BottomActions,
  CameraContainer,
  CameraFeed,
  CloseButton,
  Footer,
  FooterHint,
  Header,
  Overlay,
  ScanButton,
  ScannerOverlay,
  Title,
} from './QrScanner.styled'
import type { QRScannerProps } from './QRScanner.types'

const AVAILABLE_CURRENCIES: CryptoItemData[] = [
  {
    id: 'usdt-1',
    name: 'USDT',
    symbol: 'USDT',
    amount: '1 290.53 USDT',
    amountInRubles: '110 323.99 ₽',
    priceInRubles: '85.50 ₽',
    iconColor: '#4CAF50',
  },
  {
    id: 'toncoin-1',
    name: 'Toncoin',
    symbol: 'TON',
    amount: '590.00 TON',
    amountInRubles: '144 426.19 ₽',
    priceInRubles: '244.80 ₽',
    icon: '◆',
    iconColor: '#0088CC',
  },
  {
    id: 'bitcoin-1',
    name: 'Bitcoin',
    symbol: 'BTC',
    amount: '1.18234 BTC',
    amountInRubles: '34 880.61 ₽',
    priceInRubles: '29 500.00 ₽',
    icon: '₿',
    iconColor: '#F7931A',
  },
  {
    id: 'usdc-1',
    name: 'USDC',
    symbol: 'USDC',
    amount: '850.00 USDC',
    amountInRubles: '77 650.00 ₽',
    priceInRubles: '91.35 ₽',
    icon: 'U',
    iconColor: '#2775CA',
  },
]

export const QRScanner: React.FC<QRScannerProps> = ({
  isVisible,
  onScan,
  onClose,
  title,
}) => {
  const { t } = useTranslation()
  const { top, bottom } = useSafeAreaInsets()
  const [isPaymentInfoOpen, setIsPaymentInfoOpen] = useState(false)
  const [isPaymentOverlayOpen, setIsPaymentOverlayOpen] = useState(false)
  const [selectedCurrency, setSelectedCurrency] = useState<CryptoItemData | undefined>(
    AVAILABLE_CURRENCIES[0],
  )

  useEffect(() => {
    if (!isVisible) return
    const timeout = setTimeout(() => {
      const shaded = document.querySelector('.qr-shaded-region') as HTMLElement
      if (shaded) {
        shaded.style.background = 'transparent'
      }

      const video = document.querySelector('video')
      if (video) {
        video.style.filter = 'brightness(1.2) contrast(1.1)'
        video.style.opacity = '1'
        video.style.background = 'transparent'
      }

      const canvases = document.querySelectorAll('canvas')
      canvases.forEach((c) => {
        c.style.opacity = '0'
        c.style.background = 'transparent'
      })
    }, 800)

    return () => clearTimeout(timeout)
  }, [isVisible])

  const { closeScanner, retryScanner, toggleTorch, containerId } = useQRScanner(
    isVisible,
    onScan,
  )

  const handleClose = async (): Promise<void> => {
    try {
      await closeScanner()
    } catch (e) {
      console.warn('Ошибка при остановке камеры:', e)
    } finally {
      onClose?.()
    }
  }

  const handleGalleryOpen = async (): Promise<void> => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'

    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (!file) return

      try {
        const { Html5Qrcode } = await import('html5-qrcode')
        const scanner = new Html5Qrcode('gallery-scan-temp')
        const result = await scanner.scanFile(file, true)
        await scanner.clear()

        if (result) {
          onScan(result)
          await handleClose()
        } else {
          retryScanner()
        }
      } catch (err) {
        console.warn('Ошибка при сканировании из галереи:', err)
        retryScanner()
      }
    }

    input.click()
  }

  const handlePayment = async (currency: CryptoItemData, amount: string) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.3) resolve()
        else reject(new Error('Payment failed'))
      }, 1500)
    })
  }

  if (!isVisible) return null

  return (
    <>
      <Overlay>
        <CameraContainer
          $insetTop={top}
          $insetBottom={bottom}
        >
          <CameraFeed id={containerId} />

          <Header>
            <Title>{title || t('qrScanner.title')}</Title>
            <CloseButton
              $insetTop={top}
              onClick={handleClose}
            >
              ✕
            </CloseButton>
          </Header>

          <ScannerOverlay />
          <div
            id="gallery-scan-temp"
            style={{ display: 'none' }}
          />

          <BottomActions>
            <ActionButton
              onClick={toggleTorch}
              title={t('qrScanner.torch')}
            >
              <TorchlightIcon />
            </ActionButton>

            <ScanButton onClick={() => setIsPaymentOverlayOpen(true)} />

            <ActionButton
              onClick={handleGalleryOpen}
              title={t('qrScanner.gallery')}
            >
              <AttachmentIcon />
            </ActionButton>
          </BottomActions>

          <Footer $insetBottom={bottom}>
            <FooterHint onClick={() => setIsPaymentInfoOpen(true)}>
              {t('qrScanner.footerHint')}
            </FooterHint>
          </Footer>
        </CameraContainer>
      </Overlay>

      <PaymentInfoOverlay
        isOpen={isPaymentInfoOpen}
        onClose={() => setIsPaymentInfoOpen(false)}
      />

      <PaymentOverlay
        isOpen={isPaymentOverlayOpen}
        onClose={() => setIsPaymentOverlayOpen(false)}
        selectedCurrency={selectedCurrency}
        availableCurrencies={AVAILABLE_CURRENCIES}
        onCurrencySelect={setSelectedCurrency}
        amount="15.095 USDT"
        exchangeRate="85.49 ₽"
        commission={t('qrScanner.commissionSeconds', { value: 20 })}
        onPayment={handlePayment}
      />
    </>
  )
}

export default QRScanner

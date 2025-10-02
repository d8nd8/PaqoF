import React, { useState } from 'react';
import TorchlightIcon from '@icons/scanner/torchlight.svg?react';
import AttachmentIcon from '@icons/scanner/attachment.svg?react';
import type { QRScannerProps } from './QRScanner.types';
import { useTranslation } from 'react-i18next';

import {
  Overlay,
  Header,
  Title,
  CloseButton,
  CameraContainer,
  ScannerOverlay,
  BottomActions,
  ActionButton,
  ScanButton,
  Footer,
  FooterHint,
  CameraFeed,
} from './QrScanner.styled';

import { useQRScanner } from '@/features/qr-scanner/useQRScanner';
import { PaymentInfoOverlay } from '@/features/qr-scanner/payment-info-overlay';
import { PaymentOverlay } from '@/features/payment-overlay/PaymentOverlay';
import type { CryptoItemData } from '@/features/crypto-list/CryptoList';
import { useSafeAreaInsets } from '@/shared/hooks/useSafeAreaInsets'

const AVAILABLE_CURRENCIES: CryptoItemData[] = [
  {
    id: 'usdt-1',
    name: 'USDT',
    symbol: 'USDT',
    amount: '1 290.53 USDT',
    amountInRubles: '110 323.99 ₽',
    priceInRubles: '85.50 ₽', // добавлено
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
];


export const QRScanner: React.FC<QRScannerProps> = ({
                                                      isVisible,
                                                      onScan,
                                                      onClose,
                                                      title,
                                                    }) => {
  const { t } = useTranslation();
  const { bottom } = useSafeAreaInsets();
  const [isPaymentInfoOpen, setIsPaymentInfoOpen] = useState(false);
  const [isPaymentOverlayOpen, setIsPaymentOverlayOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<CryptoItemData | undefined>(
    AVAILABLE_CURRENCIES[0],
  );

  const { closeScanner, retryScanner, toggleTorch, containerId } = useQRScanner(
    isVisible,
    onScan,
  );

  const handleClose = (): void => {
    closeScanner();
    onClose?.();
  };

  const handleGalleryOpen = async (): Promise<void> => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      try {
        const { Html5Qrcode } = await import('html5-qrcode');
        const scanner = new Html5Qrcode('gallery-scan-temp');
        const result = await scanner.scanFile(file, true);
        await scanner.clear();

        if (result) {
          onScan(result);
          handleClose();
        } else {
          retryScanner();
        }
      } catch {
        retryScanner();
      }
    };

    input.click();
  };

  const handlePayment = async (currency: CryptoItemData, amount: string) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.3) resolve();
        else reject(new Error('Payment failed'));
      }, 1500);
    });
  };

  if (!isVisible) return null;

  return (
    <>
      <Overlay>
        <CameraContainer>
          <CameraFeed id={containerId} />

          <Header>
            <Title>{title || t('qrScanner.title')}</Title>
            <CloseButton onClick={handleClose}>✕</CloseButton>
          </Header>

          <ScannerOverlay />
          <div id="gallery-scan-temp" style={{ display: 'none' }} />

          <BottomActions>
            <ActionButton onClick={toggleTorch} title={t('qrScanner.torch')}>
              <TorchlightIcon />
            </ActionButton>

            <ScanButton onClick={() => setIsPaymentOverlayOpen(true)} />

            <ActionButton onClick={handleGalleryOpen} title={t('qrScanner.gallery')}>
              <AttachmentIcon />
            </ActionButton>
          </BottomActions>

          <Footer style={{ paddingBottom: bottom }}>
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
        exchangeRate="85.49 USDT"
        commission={t('qrScanner.commissionSeconds', { value: 20 })}
        onPayment={handlePayment}
      />
    </>
  );
};

export default QRScanner;

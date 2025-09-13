import React from 'react';
import TorchlightIcon from '@icons/scanner/torchlight.svg?react';
import AttachmentIcon from '@icons/scanner/attachment.svg?react';
import type { QRScannerProps } from './QRScanner.types';
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
  FooterHint, CameraFeed
} from './QrScanner.styled'
import { useQRScanner } from '@/features/qr-scanner/useQRScanner';

export const QRScanner: React.FC<QRScannerProps> = ({
                                               isVisible,
                                               onScan,
                                               onClose,
                                               title = 'Оплата по QR',
                                             }) => {
  const {
    closeScanner,
    retryScanner,
    toggleTorch,
    containerId,
  } = useQRScanner(isVisible, onScan);

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

  if (!isVisible) return null;

  return (
    <Overlay>
      <CameraContainer>
        <CameraFeed id={containerId} />

        <Header>
          <Title>{title}</Title>
          <CloseButton onClick={handleClose}>✕</CloseButton>
        </Header>

        <ScannerOverlay />
        <div id="gallery-scan-temp" style={{ display: 'none' }} />

        <BottomActions>
          <ActionButton onClick={toggleTorch} title="Фонарик">
            <TorchlightIcon />
          </ActionButton>

          <ScanButton onClick={() => {}} />

          <ActionButton onClick={handleGalleryOpen} title="Из галереи">
            <AttachmentIcon />
          </ActionButton>
        </BottomActions>
        <Footer>
          <FooterHint>Что можно оплатить?</FooterHint>
        </Footer>
      </CameraContainer>
    </Overlay>
  );
};

export default QRScanner;

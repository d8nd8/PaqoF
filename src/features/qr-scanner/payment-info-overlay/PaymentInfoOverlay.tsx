
import React from 'react';
import { BottomSheet } from '@/shared/components/BottomSheet/BottomSheet';
import QrCodeScannerImage from '@images/scanner/qr-code-scanner.png';
import * as S from './PaymentInfoOverlay.styled';

export interface OverlayScannerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  image?: string;
  isInStorybook?: boolean;
}

export const PaymentInfoOverlay: React.FC<OverlayScannerProps> = ({
                                                                isOpen,
                                                                onClose,
                                                                title = 'По СБП в любом месте',
                                                                description = 'На кассе или на сайте наведите камеру на СБП QR-код и произведите оплату в считанные секунды',
                                                                buttonText = 'Приступить к сканированию',
                                                                onButtonClick,
                                                                image = QrCodeScannerImage,
                                                              }) => {
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      onClose();
    }
  };

  return (
    <BottomSheet
      isOpen={isOpen}
      onClose={onClose}
      showBottomButton={true}
      bottomButtonText={buttonText}
      onBottomButtonClick={handleButtonClick}
      closeButtonText="Закрыть"
      showHeader
      background={'#121218'}
      closeButtonColor={'#FFFFFF'}
    >
      <S.OverlayScannerContent>
        <S.ImageContainer>
          <S.ScannerImage src={image} alt={title} />
        </S.ImageContainer>

        <S.TextSection>
          <S.ScannerTitle>{title}</S.ScannerTitle>
          <S.ScannerDescription>{description}</S.ScannerDescription>
        </S.TextSection>
      </S.OverlayScannerContent>
    </BottomSheet>
  );
};
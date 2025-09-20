import React from 'react';
import { BottomSheet } from '@/shared/components/BottomSheet/BottomSheet';
import QrCodeScannerImage from '@images/scanner/qr-code-scanner.png';
import * as S from './PaymentInfoOverlay.styled';
import { useTranslation } from 'react-i18next';

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
                                                                    title,
                                                                    description,
                                                                    buttonText,
                                                                    onButtonClick,
                                                                    image = QrCodeScannerImage,
                                                                  }) => {
  const { t } = useTranslation();

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
      bottomButtonText={buttonText || t('qrScanner.info.button')}
      onBottomButtonClick={handleButtonClick}
      closeButtonText={t('qrScanner.info.close')}
      showHeader
      background={'#121218'}
      closeButtonColor={'#FFFFFF'}
    >
      <S.OverlayScannerContent>
        <S.ImageContainer>
          <S.ScannerImage
            src={image}
            alt={title || t('qrScanner.info.title')}
          />
        </S.ImageContainer>

        <S.TextSection>
          <S.ScannerTitle>
            {title || t('qrScanner.info.title')}
          </S.ScannerTitle>
          <S.ScannerDescription>
            {description || t('qrScanner.info.description')}
          </S.ScannerDescription>
        </S.TextSection>
      </S.OverlayScannerContent>
    </BottomSheet>
  );
};

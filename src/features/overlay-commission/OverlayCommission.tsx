import React from 'react';
import { BottomSheet } from '@/shared/components/BottomSheet/BottomSheet';
import WhyCommissionImage from '@images/why-comission.webp';
import * as S from './OverlayCommission.styled';
import { useTranslation } from 'react-i18next';

export interface OverlayCommissionProps {
  isOpen: boolean;
  onClose: () => void;
  titleKey?: string;
  descriptionKey?: string;
  buttonTextKey?: string;
  onButtonClick?: () => void;
  image?: string;
  isInStorybook?: boolean;
}

export const OverlayCommission: React.FC<OverlayCommissionProps> = ({
                                                                      isOpen,
                                                                      onClose,
                                                                      titleKey = 'commission.title',
                                                                      descriptionKey = 'commission.description',
                                                                      buttonTextKey = 'common.ok',
                                                                      onButtonClick,
                                                                      image = WhyCommissionImage,
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
      bottomButtonText={t(buttonTextKey)}
      onBottomButtonClick={handleButtonClick}
      closeButtonText={t('common.close')}
    >
      <S.OverlayCommissionContent>
        <S.ImageContainer>
          <S.InfoImage src={image} alt={t(titleKey)} />
        </S.ImageContainer>

        <S.TextSection>
          <S.InfoTitle>{t(titleKey)}</S.InfoTitle>
          <S.InfoDescription>{t(descriptionKey)}</S.InfoDescription>
        </S.TextSection>
      </S.OverlayCommissionContent>
    </BottomSheet>
  );
};

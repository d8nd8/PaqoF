import React from 'react';
import { BottomSheet } from '@/shared/components/BottomSheet/BottomSheet';
import WhyCommissionImage from '@images/why-comission.webp';
import * as S from './OverlayCommission.styled';

export interface OverlayCommissionProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
  image?: string;
  isInStorybook?: boolean
}

export const OverlayCommission: React.FC<OverlayCommissionProps> = ({
                                                                      isOpen,
                                                                      onClose,
                                                                      title,
                                                                      description,
                                                                      buttonText = 'Вернуться',
                                                                      onButtonClick,
                                                                      image = WhyCommissionImage,
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
    >
      <S.OverlayCommissionContent>
        <S.ImageContainer>
          <S.InfoImage src={image} alt={title} />
        </S.ImageContainer>

        <S.TextSection>
          <S.InfoTitle>{title}</S.InfoTitle>
          <S.InfoDescription>{description}</S.InfoDescription>
        </S.TextSection>
      </S.OverlayCommissionContent>
    </BottomSheet>
  );
};
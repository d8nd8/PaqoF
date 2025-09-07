import React from 'react';
import * as S from './InfoOverlay.styled';
import { BottomSheet } from '@/shared/components/BottomSheet/BottomSheet'

interface InfoOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  buttonText?: string;
}

export const InfoOverlay: React.FC<InfoOverlayProps> = ({
                                                          isOpen,
                                                          onClose,
                                                          onConfirm,
                                                          title,
                                                          description,
                                                          buttonText = "Закрыть",
                                                        }) => {
  return (
    <BottomSheet
      isOpen={isOpen}
      onClose={onClose}
      bottomButtonText={buttonText}
      onBottomButtonClick={onConfirm}
      closeButtonType="icon"
      status="default"
    >
      <S.Content>
        <S.ColorCard />
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Content>
    </BottomSheet>
  );
};
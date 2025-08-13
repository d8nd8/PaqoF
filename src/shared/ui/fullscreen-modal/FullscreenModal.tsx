import React from 'react';
import * as S from './FullscreenModal.styled';
import CloseIcon from '@icons/close.svg?react';
import { HeaderOverlay } from '@/features/header-overlay'

interface FullscreenModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

export const FullscreenModal: React.FC<FullscreenModalProps> = ({
                                                                  isOpen,
                                                                  title,
                                                                  onClose,
                                                                  children,
                                                                }) => {
  if (!isOpen) return null;

  return (
    <S.Overlay>
      <S.ModalContent>
        <HeaderOverlay
          title={title}
          showLeftChevron
          onLeftChevronClick={onClose}
        />
        <S.ContentArea>{children}</S.ContentArea>
      </S.ModalContent>
    </S.Overlay>
  );
};

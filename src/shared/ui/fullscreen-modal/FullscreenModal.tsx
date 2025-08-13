import React from 'react';
import * as S from './FullscreenModal.styled';
import { HeaderOverlay } from '@/features/header-overlay';
import { useSafeAreaInsets } from '@/shared/hooks/useSafeAreaInsets';

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
  const { top, bottom } = useSafeAreaInsets();

  if (!isOpen) return null;

  return (
    <S.Overlay $top={top} $bottom={bottom}>
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

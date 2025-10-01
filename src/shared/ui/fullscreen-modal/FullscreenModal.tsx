import React from 'react';
import * as S from './FullscreenModal.styled';
import { useSafeAreaInsets } from '@/shared/hooks/useSafeAreaInsets';
import { PageHeader } from '@/shared/components/PageHeader/PageHeader';

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
        <PageHeader
          customTopInset={20}
          title={title}
          onBack={onClose}
        />
        <S.ContentArea>{children}</S.ContentArea>
      </S.ModalContent>
    </S.Overlay>
  );
};

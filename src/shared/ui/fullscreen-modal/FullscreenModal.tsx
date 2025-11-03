import React from 'react';
import * as S from './FullscreenModal.styled';
import { useSafeAreaInsets } from '@/shared/hooks/useSafeAreaInsets';
import { PageHeader } from '@/shared/components/PageHeader/PageHeader';
import useApplicationStore from '@/shared/stores/application'

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
  const { fullscreen } = useApplicationStore();

  if (!isOpen) return null;

  return (
    <S.Overlay $top={top} $bottom={bottom}>
      <S.ModalContent>
        <PageHeader
          customTopInset={fullscreen ? top + 40 : top + 20 || 0}
          title={title}
          onBack={onClose}
        />
        <S.ContentArea>{children}</S.ContentArea>
      </S.ModalContent>
    </S.Overlay>
  );
};

import React, { useState, useEffect } from 'react';
import * as S from './BottomSheet.styled';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  bottomButtonText?: string;
  onBottomButtonClick?: () => void;
  isBottomButtonDisabled?: boolean;
  closeButtonText?: string;
  showBottomButton?: boolean;
}

export const BottomSheet: React.FC<BottomSheetProps> = ({
                                                          isOpen,
                                                          onClose,
                                                          title,
                                                          children,
                                                          bottomButtonText = 'Сохранить',
                                                          onBottomButtonClick,
                                                          isBottomButtonDisabled = false,
                                                          closeButtonText = 'Закрыть',
                                                          showBottomButton = true
                                                        }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsClosing(false);
      document.body.style.overflow = 'hidden';
    } else if (isVisible) {
      handleClose();
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
      document.body.style.overflow = 'unset';
      onClose();
    }, 300);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleBottomButtonClick = () => {
    if (onBottomButtonClick) {
      onBottomButtonClick();
    } else {
      handleClose();
    }
  };

  if (!isVisible && !isOpen) {
    return null;
  }

  return (
    <>
      <S.Overlay
        $isVisible={isVisible}
        $isClosing={isClosing}
        onClick={handleOverlayClick}
      />
      <S.Sheet $isVisible={isVisible && !isClosing} $isClosing={isClosing}>
        <S.Handle onClick={handleClose} />
        <S.Header>
          <S.Title>{title}</S.Title>
          <S.CloseButton onClick={handleClose}>{closeButtonText}</S.CloseButton>
        </S.Header>
        <S.Content>
          {children}

        </S.Content>
        {showBottomButton && (
        <S.Footer>
          <S.BottomButton
            onClick={handleBottomButtonClick}
            disabled={isBottomButtonDisabled}
          >
            {bottomButtonText}
          </S.BottomButton>
        </S.Footer>
        )}
      </S.Sheet>
    </>
  );
};
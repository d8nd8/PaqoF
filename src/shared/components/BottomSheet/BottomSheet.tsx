import React, { useState, useEffect } from "react";
import CloseIcon from "@icons/close.svg?react";
import { useTranslation } from "react-i18next";
import * as S from "./BottomSheet.styled";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  bottomButtonText?: string;
  onBottomButtonClick?: () => void;
  isBottomButtonDisabled?: boolean;
  closeButtonText?: string;
  showBottomButton?: boolean;
  status?: "default" | "success";
  showCloseButton?: boolean;
  showHeader?: boolean;
  closeButtonType?: "text" | "icon";
  background?: string;
  closeButtonColor?: string;
}

export const BottomSheet: React.FC<BottomSheetProps> = ({
                                                          isOpen,
                                                          onClose,
                                                          title,
                                                          children,
                                                          bottomButtonText,
                                                          onBottomButtonClick,
                                                          isBottomButtonDisabled = false,
                                                          closeButtonText,
                                                          showBottomButton = true,
                                                          showCloseButton = true,
                                                          status = "default",
                                                          showHeader = true,
                                                          closeButtonType = "text",
                                                          background,
                                                          closeButtonColor,
                                                        }) => {
  const { t } = useTranslation();

  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const [startY, setStartY] = useState<number | null>(null);
  const [swipeDistance, setSwipeDistance] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const preventTouch = (e: TouchEvent) => e.preventDefault();
      const preventScroll = (e: WheelEvent) => e.preventDefault();

      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", preventTouch, { passive: false });
      document.addEventListener("wheel", preventScroll, { passive: false });

      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("touchmove", preventTouch);
        document.removeEventListener("wheel", preventScroll);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsClosing(false);
    } else if (isVisible) {
      handleClose();
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
      document.body.style.overflow = "unset";
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

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (startY === null) return;
    const currentY = e.touches[0].clientY;
    const distance = currentY - startY;
    if (distance > 0) {
      setSwipeDistance(distance);
      e.stopPropagation();
    }
  };

  const handleTouchEnd = () => {
    if (swipeDistance > 100) {
      handleClose();
    }
    setStartY(null);
    setSwipeDistance(0);
  };

  if (!isVisible && !isOpen) return null;

  const customCloseColor = background ? closeButtonColor : undefined;

  return (
    <>
      <S.Overlay
        $isVisible={isVisible}
        $isClosing={isClosing}
        onClick={handleOverlayClick}
      />
      <S.Sheet
        $isVisible={isVisible && !isClosing}
        $isClosing={isClosing}
        $status={status}
        $customBackground={background}
        style={{
          transform: swipeDistance > 0 ? `translateY(${swipeDistance}px)` : undefined,
          transition: startY ? "none" : "transform 0.3s ease",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onScroll={(e) => e.stopPropagation()}
      >
        <S.TopWrapper>
          {showHeader && (
            <S.Header>
              <S.Title>{title}</S.Title>
              {showCloseButton &&
                (closeButtonType === "icon" ? (
                  <S.CloseIconButton
                    onClick={handleClose}
                    $customCloseColor={customCloseColor}
                  >
                    <CloseIcon />
                  </S.CloseIconButton>
                ) : (
                  <S.CloseButton
                    onClick={handleClose}
                    $customCloseColor={customCloseColor}
                  >
                    {closeButtonText || t("common.close")}
                  </S.CloseButton>
                ))}
            </S.Header>
          )}
          <S.Content>{children}</S.Content>
        </S.TopWrapper>

        {showBottomButton && (
          <S.Footer>
            <S.BottomButton
              onClick={handleBottomButtonClick}
              disabled={isBottomButtonDisabled}
            >
              {t(bottomButtonText || "common.save")}
            </S.BottomButton>
          </S.Footer>
        )}
      </S.Sheet>
    </>
  );
};

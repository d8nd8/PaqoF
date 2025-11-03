import React from "react";
import { AnimatePresence } from "framer-motion";
import * as S from "./FullOverlay.styled";
import { useSafeAreaInsets } from '@/shared/hooks/useSafeAreaInsets'

interface FullOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const FullOverlay: React.FC<FullOverlayProps> = ({
                                                          isOpen,
                                                          onClose,
                                                          children,
                                                        }) => {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <AnimatePresence>
      {isOpen && (
        <S.Backdrop
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <S.Content
            $top={top}
            $bottom={bottom}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <S.CloseButton $top={top} onClick={onClose}>
              ✕
            </S.CloseButton>
            {children}
          </S.Content>
        </S.Backdrop>
      )}
    </AnimatePresence>
  );
};

export default FullOverlay;

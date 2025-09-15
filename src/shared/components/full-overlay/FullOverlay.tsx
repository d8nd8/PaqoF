import React from "react";
import { AnimatePresence } from "framer-motion";
import * as S from "./FullOverlay.styled";

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
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <S.CloseButton onClick={onClose}>✕</S.CloseButton>
            {children}
          </S.Content>
        </S.Backdrop>
      )}
    </AnimatePresence>
  );
};

export default FullOverlay;

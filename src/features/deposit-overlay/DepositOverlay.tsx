import React, { useEffect, useState } from "react";
import {
  OverlayBackground,
  OverlayContainer,
  OverlayHeaderTop,
  OverlayHeader,
  OverlayTitle,
  CloseButton,
  Option,
  OptionIcon,
  OptionText,
  OptionTitle,
  OptionSubtitle,
  OptionRight,
  Description,
} from "./DepositOverlay.styled";

import WalletIcon from "@/assets/icons/wallet-icon.svg?react";
import ChevronRightIcon from "@icons/chevron-right.svg?react";
import { useTranslation } from "react-i18next";

interface Props {
  onClose: () => void;
  onSelectWallet?: () => void;
}

export const DepositOverlay: React.FC<Props> = ({ onClose, onSelectWallet }) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setIsVisible(true));
    return () => setIsVisible(false);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
      onClose();
    }, 350); 
  };

  return (
    <OverlayBackground
      $isVisible={isVisible}
      $isClosing={isClosing}
      onClick={handleClose}
    >
      <OverlayContainer
        $isVisible={isVisible}
        onClick={(e) => e.stopPropagation()}
      >
        <OverlayHeaderTop>
          <CloseButton onClick={handleClose}>
            {t("currency.overlays.deposit.close")}
          </CloseButton>
        </OverlayHeaderTop>

        <OverlayHeader>
          <OverlayTitle>{t("currency.overlays.deposit.title")}</OverlayTitle>
        </OverlayHeader>

        <Description>{t("currency.overlays.deposit.description")}</Description>

        <Option onClick={onSelectWallet}>
          <OptionIcon>
            <WalletIcon />
          </OptionIcon>
          <OptionText>
            <OptionTitle>
              {t("currency.overlays.deposit.wallet.title")}
            </OptionTitle>
            <OptionSubtitle>
              {t("currency.overlays.deposit.wallet.subtitle")}
            </OptionSubtitle>
          </OptionText>
          <OptionRight>
            <ChevronRightIcon />
          </OptionRight>
        </Option>
      </OverlayContainer>
    </OverlayBackground>
  );
};

export default DepositOverlay;

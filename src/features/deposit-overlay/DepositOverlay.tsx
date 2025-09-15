import React from "react";
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

interface Props {
  onClose: () => void;
  onSelectWallet?: () => void;
}

export const DepositOverlay: React.FC<Props> = ({ onClose, onSelectWallet }) => {
  return (
    <OverlayBackground onClick={onClose}>
      <OverlayContainer onClick={(e) => e.stopPropagation()}>
        <OverlayHeaderTop>
          <CloseButton onClick={onClose}>Закрыть</CloseButton>
        </OverlayHeaderTop>

        <OverlayHeader>
          <OverlayTitle>Пополнить</OverlayTitle>
        </OverlayHeader>

        <Description>
          Выберите способ внесения криптовалюты на <br /> Paqo Wallet
        </Description>

        <Option onClick={onSelectWallet}>
          <OptionIcon>
            <WalletIcon />
          </OptionIcon>
          <OptionText>
            <OptionTitle>Внешний кошелёк</OptionTitle>
            <OptionSubtitle>Перевод с другого кошелька</OptionSubtitle>
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

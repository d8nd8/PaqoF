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
  Description,
} from "./DepositOverlay.styled";

import WalletIcon from "@/assets/icons/deposit.svg?react";

interface Props {
  onClose: () => void;
  onSelectWallet?: () => void;
};

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
          Выберите способ внесения криптовалюты на Paqo Wallet
        </Description>

        <Option onClick={onSelectWallet}>
          <OptionIcon>
            <WalletIcon width={24} height={24} />
          </OptionIcon>
          <OptionText>
            <div>Внешний кошелёк</div>
            <small>Перевод с другого кошелька</small>
          </OptionText>
        </Option>
      </OverlayContainer>
    </OverlayBackground>
  );
};

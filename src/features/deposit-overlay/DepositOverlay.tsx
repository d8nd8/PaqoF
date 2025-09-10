import React from "react";
import {
  OverlayBackground,
  OverlayContainer,
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
        <OverlayHeader>
          <OverlayTitle>Пополнить</OverlayTitle>
          <CloseButton onClick={onClose}>Закрыть</CloseButton>
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

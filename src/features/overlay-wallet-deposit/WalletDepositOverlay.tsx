import React, { useState } from "react";
import * as S from "./WalletDepositOverlay.styled";

import BackIcon from "@icons/chevron-left.svg?react";
import CheckIcon from "@icons/check.svg?react";
import ChevronRightIcon from "@icons/chevron-right.svg?react";

import TetherIcon from "@/assets/icons/usdt-icon.svg?react";
import TonIcon from "@/assets/icons/ton-icon.svg?react";
import BtcIcon from "@/assets/icons/bitcoin-icon.svg?react";

import { OverlayCryptoSelection } from "@/features/overlay-crypto-selection/OverlayCryptoSelection";
import { type CryptoItemData } from "@/features/crypto-list/CryptoList";

export type WalletDepositMode = "deposit" | "transfer";

interface WalletDepositOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue?: (crypto: CryptoItemData, network: string, mode: WalletDepositMode) => void;
  title?: string;
  mode?: WalletDepositMode;
}

export const WalletDepositOverlay: React.FC<WalletDepositOverlayProps> = ({
                                                                            isOpen,
                                                                            onClose,
                                                                            onContinue,
                                                                            title,
                                                                            mode = "deposit",
                                                                          }) => {
  const [selectedNetwork, setSelectedNetwork] = useState("TRC20");

  const [selectedCrypto, setSelectedCrypto] = useState<CryptoItemData>({
    id: "usdt-1",
    name: "USDT",
    symbol: "USDT",
    amount: "1 290.53 USDT",
    amountInRubles: "110 323.99 ₽",
    iconColor: "#26A17B",
  });

  const [showCryptoSelection, setShowCryptoSelection] = useState(false);

  const cryptoOptions: CryptoItemData[] = [
    {
      id: "usdt-1",
      name: "USDT",
      symbol: "USDT",
      amount: "1 290.53 USDT",
      amountInRubles: "110 323.99 ₽",
      iconColor: "#26A17B",
    },
    {
      id: "ton-1",
      name: "Toncoin",
      symbol: "TON",
      amount: "590.00 TON",
      amountInRubles: "144 426.19 ₽",
      iconColor: "#0088CC",
    },
    {
      id: "btc-1",
      name: "Bitcoin",
      symbol: "BTC",
      amount: "0.18234 BTC",
      amountInRubles: "34 880.61 ₽",
      iconColor: "#F7931A",
    },
  ];

  if (!isOpen) return null;

  const handleContinue = () => {
    if (onContinue) {
      onContinue(selectedCrypto, selectedNetwork, mode);
    }
  };

  return (
    <>
      <S.OverlayWrapper>
        <S.Header>
          <S.BackButton onClick={onClose}>
            <BackIcon />
          </S.BackButton>
          <S.Title>
            {title || (mode === "deposit" ? "Пополнить с кошелька" : "Перевод")}
          </S.Title>
        </S.Header>

        <S.Content>
          <S.SectionTitle>Выберите криптовалюту</S.SectionTitle>
          <S.CryptoCard onClick={() => setShowCryptoSelection(true)}>
            <div className="left">
              <TetherIcon width={28} height={28} />
              <span>{selectedCrypto.name}</span>
            </div>
            <div className="right">
              <small>{selectedCrypto.amount}</small>
              <ChevronRightIcon />
            </div>
          </S.CryptoCard>

          <S.SectionTitle>Выберите сеть</S.SectionTitle>

          <S.NetworkOption
            $selected={selectedNetwork === "TRC20"}
            onClick={() => setSelectedNetwork("TRC20")}
          >
            <S.NetworkLeft>
              <TetherIcon width={28} height={28} />
              <span>TRC20</span>
            </S.NetworkLeft>
            <S.NetworkRight>
              <small>Комиссия 2.75 USDT</small>
              {selectedNetwork === "TRC20" && <CheckIcon />}
            </S.NetworkRight>
          </S.NetworkOption>

          <S.NetworkOption
            $selected={selectedNetwork === "TON"}
            onClick={() => setSelectedNetwork("TON")}
          >
            <S.NetworkLeft>
              <TonIcon width={28} height={28} />
              <span>TON</span>
            </S.NetworkLeft>
            <S.NetworkRight>
              <small>Комиссия 0.5 USDT</small>
              {selectedNetwork === "TON" && <CheckIcon />}
            </S.NetworkRight>
          </S.NetworkOption>

          <S.NetworkOption
            $selected={selectedNetwork === "BEP20"}
            onClick={() => setSelectedNetwork("BEP20")}
          >
            <S.NetworkLeft>
              <BtcIcon width={28} height={28} />
              <span>BEP20</span>
            </S.NetworkLeft>
            <S.NetworkRight>
              <small>Комиссия 2.75 USDT</small>
              {selectedNetwork === "BEP20" && <CheckIcon />}
            </S.NetworkRight>
          </S.NetworkOption>
        </S.Content>

        <S.BottomButton onClick={handleContinue}>Продолжить</S.BottomButton>
      </S.OverlayWrapper>

      <OverlayCryptoSelection
        isOpen={showCryptoSelection}
        onClose={() => setShowCryptoSelection(false)}
        cryptos={cryptoOptions}
        selectedCryptoId={selectedCrypto.id}
        onCryptoSelect={(crypto) => setSelectedCrypto(crypto)}
        title="Выберите криптовалюту"
      />
    </>
  );
};

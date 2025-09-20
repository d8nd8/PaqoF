import React, { type JSX, useState } from 'react';
import * as S from "./WalletDepositOverlay.styled";

import BackIcon from "@icons/chevron-left.svg?react";
import ChevronRightIcon from "@icons/chevron-right.svg?react";
import { Check } from "lucide-react";

import TetherIcon from "@/assets/icons/usdt-icon.svg?react";
import TronIcon from "@/assets/icons/tron-icon.svg?react";
import TonIcon from "@/assets/icons/ton-icon.svg?react";
import BtcIcon from "@/assets/icons/bitcoin-icon.svg?react";

import { OverlayCryptoSelection } from "@/features/overlay-crypto-selection/OverlayCryptoSelection";
import { type CryptoItemData } from "@/features/crypto-list/CryptoList";
import { useTranslation } from "react-i18next";

export type WalletDepositMode = "deposit" | "transfer";

interface WalletDepositOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue?: (
    crypto: CryptoItemData,
    network: string,
    mode: WalletDepositMode
  ) => void;
  title?: string;
  mode?: WalletDepositMode;
  preselectedCrypto?: CryptoItemData | null;
}

const ICON_MAP: Record<string, JSX.Element> = {
  USDT: <TetherIcon width={38} height={38} />,
  TON: <TonIcon width={38} height={38} />,
  BTC: <BtcIcon width={38} height={38} />,
};

export const WalletDepositOverlay: React.FC<WalletDepositOverlayProps> = ({
                                                                            isOpen,
                                                                            onClose,
                                                                            onContinue,
                                                                            title,
                                                                            mode = "deposit",
                                                                            preselectedCrypto,
                                                                          }) => {
  const { t } = useTranslation();

  const [selectedNetwork, setSelectedNetwork] = useState("TRC20");
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoItemData>(
    preselectedCrypto || {
      id: "usdt-1",
      name: "USDT",
      symbol: "USDT",
      amount: "1 290.53 USDT",
      amountInRubles: "110 323.99 ₽",
      iconColor: "#26A17B",
    }
  );
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

  const renderIcon = (symbol: string) =>
    ICON_MAP[symbol] || <TetherIcon width={38} height={38} />;

  return (
    <>
      <S.OverlayWrapper>
        <S.Header>
          <S.BackButton onClick={onClose}>
            <BackIcon />
          </S.BackButton>
          <S.Title>
            {title ||
              (mode === "deposit"
                ? t("currency.overlays.walletDeposit.titleDeposit")
                : t("currency.overlays.walletDeposit.titleTransfer"))}
          </S.Title>
        </S.Header>

        <S.Content>
          {preselectedCrypto ? (
            <>
              <S.SectionTitle>{t("currency.overlays.walletDeposit.crypto")}</S.SectionTitle>
              <S.CryptoCard $disabled>
                <div className="left">
                  {renderIcon(preselectedCrypto.symbol)}
                  <div className="info">
                    <span className="name">{preselectedCrypto.name}</span>
                    <span className="amount">{preselectedCrypto.amount}</span>
                  </div>
                </div>
              </S.CryptoCard>
            </>
          ) : (
            <>
              <S.SectionTitle>{t("currency.overlays.walletDeposit.selectCrypto")}</S.SectionTitle>
              <S.CryptoCard onClick={() => setShowCryptoSelection(true)}>
                <div className="left">
                  {renderIcon(selectedCrypto.symbol)}
                  <div className="info">
                    <span className="name">{selectedCrypto.name}</span>
                    <span className="amount">{selectedCrypto.amount}</span>
                  </div>
                </div>
                <div className="right">
                  <ChevronRightIcon />
                </div>
              </S.CryptoCard>
            </>
          )}

          <S.SectionTitle>{t("currency.overlays.walletDeposit.selectNetwork")}</S.SectionTitle>

          <S.NetworkOption
            $selected={selectedNetwork === "TRC20"}
            onClick={() => setSelectedNetwork("TRC20")}
          >
            <div className="left">
              <TronIcon width={28} height={28} />
              <div className="info">
                <span className="name">TRC20</span>
                <span className="commission">{t("currency.overlays.walletDeposit.networks.trc20")}</span>
              </div>
            </div>
            <S.RadioWrapper $active={selectedNetwork === "TRC20"}>
              {selectedNetwork === "TRC20" && <Check size={14} />}
            </S.RadioWrapper>
          </S.NetworkOption>

          <S.NetworkOption
            $selected={selectedNetwork === "TON"}
            onClick={() => setSelectedNetwork("TON")}
          >
            <div className="left">
              <TonIcon width={28} height={28} />
              <div className="info">
                <span className="name">TON</span>
                <span className="commission">{t("currency.overlays.walletDeposit.networks.ton")}</span>
              </div>
            </div>
            <S.RadioWrapper $active={selectedNetwork === "TON"}>
              {selectedNetwork === "TON" && <Check size={14} />}
            </S.RadioWrapper>
          </S.NetworkOption>

          <S.NetworkOption
            $selected={selectedNetwork === "BEP20"}
            onClick={() => setSelectedNetwork("BEP20")}
          >
            <div className="left">
              <BtcIcon width={28} height={28} />
              <div className="info">
                <span className="name">BEP20</span>
                <span className="commission">{t("currency.overlays.walletDeposit.networks.bep20")}</span>
              </div>
            </div>
            <S.RadioWrapper $active={selectedNetwork === "BEP20"}>
              {selectedNetwork === "BEP20" && <Check size={14} />}
            </S.RadioWrapper>
          </S.NetworkOption>
        </S.Content>

        <S.BottomSection>
          <S.MainButton onClick={handleContinue}>
            {t("currency.overlays.walletDeposit.continue")}
          </S.MainButton>
        </S.BottomSection>
      </S.OverlayWrapper>

      {!preselectedCrypto && (
        <OverlayCryptoSelection
          isOpen={showCryptoSelection}
          onClose={() => setShowCryptoSelection(false)}
          cryptos={cryptoOptions}
          selectedCryptoId={selectedCrypto.id}
          onCryptoSelect={(crypto) => setSelectedCrypto(crypto)}
          title={t("currency.overlays.walletDeposit.selectCrypto")}
        />
      )}
    </>
  );
};

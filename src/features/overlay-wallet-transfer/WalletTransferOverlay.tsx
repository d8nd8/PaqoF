import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import * as S from "./WalletTransferOverlay.styled";

import BackIcon from "@icons/chevron-left.svg?react";
import QrIcon from "@icons/qr.svg?react";
import ExclamationIcon from "@icons/exclamation-circle.svg?react";
import ChevronRightIcon from "@icons/chevron-right.svg?react";
import SwapIcon from "@icons/swap-icon.svg?react";

import {
  CryptoItem,
  type CryptoItemData,
} from "@/features/crypto-list/CryptoList";
import { QRScanner } from "@/features/qr-scanner/QRScanner";
import { WalletConfirmOverlay } from "@/features/overlay-wallet-confirm/WalletConfirmOverlay";

interface WalletTransferOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  crypto: CryptoItemData;
  commission: string;
  onCommissionClick?: () => void;
  onTopUpClick?: () => void;
}

type ErrorType = "none" | "insufficient" | "invalidAmount" | "invalidAddress";

export const WalletTransferOverlay: React.FC<WalletTransferOverlayProps> = ({
                                                                              isOpen,
                                                                              onClose,
                                                                              crypto,
                                                                              commission,
                                                                              onCommissionClick,
                                                                              onTopUpClick,
                                                                            }) => {
  const { t } = useTranslation();
  const [amount, setAmount] = useState("0");
  const [address, setAddress] = useState("");
  const [showScanner, setShowScanner] = useState(false);
  const [errorType, setErrorType] = useState<ErrorType>("none");
  const [showConfirm, setShowConfirm] = useState(false);

  if (!isOpen) return null;

  const balance = parseFloat(crypto.amount.replace(/[^\d.]/g, ""));
  const sendAmount = parseFloat(amount.replace(",", ".")) || 0;

  const handleContinue = () => {
    if (sendAmount <= 0) {
      setErrorType("invalidAmount");
    } else if (sendAmount > balance) {
      setErrorType("insufficient");
    } else if (!address.trim()) {
      setErrorType("invalidAddress");
    } else {
      setErrorType("none");
      setShowConfirm(true);
    }
  };

  const hasError = errorType !== "none";

  return (
    <>
      <S.OverlayWrapper>
        <S.Header>
          <S.BackButton onClick={onClose}>
            <BackIcon />
          </S.BackButton>
          <S.Title>{t("currency.overlays.transfer.title")}</S.Title>
        </S.Header>

        <S.Content>
          <S.Card>
            <S.CardTitle>{t("currency.overlays.transfer.amount.title")}</S.CardTitle>

            <S.AmountRow>
              <S.AmountValue $hasError={hasError}>
                <S.AmountInput
                  type="text"
                  value={amount}
                  onChange={(e) => {
                    let val = e.target.value.replace(/[^0-9.,]/g, "");
                    if (val.length > 7) {
                      val = val.slice(0, 7);
                    }
                    setAmount(val);
                  }}
                  placeholder="0"
                  $length={amount.length}
                  $hasError={hasError}
                />
                <S.CurrencySymbol $hasError={hasError}>
                  {crypto.symbol}
                </S.CurrencySymbol>
              </S.AmountValue>

              <S.SwapButton>
                <SwapIcon />
              </S.SwapButton>
            </S.AmountRow>

            {errorType === "insufficient" && (
              <S.ErrorSub>
                {t("currency.overlays.transfer.amount.insufficient")}{" "}
                <span onClick={onTopUpClick}>
                  {t("currency.overlays.transfer.amount.topUp")}
                </span>
              </S.ErrorSub>
            )}

            {errorType === "invalidAmount" && (
              <S.ErrorSub>
                {t("currency.overlays.transfer.amount.enterAmount")}
              </S.ErrorSub>
            )}

            {errorType === "none" && (
              <S.AmountSub>
                {t("currency.overlays.transfer.amount.subApprox", {
                  value: "1 390 ₽",
                })}
              </S.AmountSub>
            )}

            <S.PresetRow>
              <S.PresetButton>
                {t("currency.overlays.transfer.amount.presets.all")}
              </S.PresetButton>
              <S.PresetButton>
                {t("currency.overlays.transfer.amount.presets.1000")}
              </S.PresetButton>
              <S.PresetButton>
                {t("currency.overlays.transfer.amount.presets.5000")}
              </S.PresetButton>
              <S.PresetButton>
                {t("currency.overlays.transfer.amount.presets.10000")}
              </S.PresetButton>
            </S.PresetRow>
          </S.Card>

          <S.SectionTitle>{t("currency.overlays.transfer.balance")}</S.SectionTitle>
          <CryptoItem data={crypto} showRightSection={false} infoVariant="amount" />

          <S.SectionTitle>{t("currency.overlays.transfer.address.title")}</S.SectionTitle>
          <S.InputWrapper hasError={errorType === "invalidAddress"}>
            <S.AddressInput
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder={t("currency.overlays.transfer.address.placeholder")}
            />
            <S.IconButton onClick={() => setShowScanner(true)}>
              <QrIcon />
            </S.IconButton>
          </S.InputWrapper>
          {errorType === "invalidAddress" && (
            <S.ErrorMessage>{t("currency.overlays.transfer.address.error")}</S.ErrorMessage>
          )}

          <S.CommissionButton onClick={onCommissionClick}>
            <div className="left">
              <ExclamationIcon className="icon" />
              <span
                dangerouslySetInnerHTML={{
                  __html: t("currency.overlays.transfer.commission", {
                    value: commission,
                  }),
                }}
              />
            </div>
            <ChevronRightIcon className="chevron" />
          </S.CommissionButton>
        </S.Content>

        <S.BottomSection>
          <S.MainButton onClick={handleContinue}>
            {t("currency.overlays.transfer.continue")}
          </S.MainButton>
        </S.BottomSection>

        <QRScanner
          isVisible={showScanner}
          onScan={(result) => {
            setAddress(result);
            setShowScanner(false);
          }}
          onClose={() => setShowScanner(false)}
          title={t("currency.overlays.transfer.address.title")}
        />
      </S.OverlayWrapper>

      <WalletConfirmOverlay
        isOpen={showConfirm}
        amountFiat="≈ 1 390 ₽"
        onClose={() => setShowConfirm(false)}
        crypto={crypto}
        amount={amount}
        address={address}
        commission={commission}
        total={`${amount} ${crypto.symbol} ≈ 1 390 ₽`}
        balanceAfter={`${(balance - sendAmount).toFixed(2)} ${crypto.symbol}`}
      />
    </>
  );
};

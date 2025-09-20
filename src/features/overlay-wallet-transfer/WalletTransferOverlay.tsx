import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import * as S from "./WalletTransferOverlay.styled";

import BackIcon from "@icons/chevron-left.svg?react";
import QrIcon from "@icons/qr.svg?react";
import ExclamationIcon from "@icons/exclamation-circle.svg?react";
import ChevronRightIcon from "@icons/chevron-right.svg?react";
import SwapIcon from "@icons/swap-icon.svg?react";

import { CryptoItem, type CryptoItemData } from "@/features/crypto-list/CryptoList";
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

export const WalletTransferOverlay: React.FC<WalletTransferOverlayProps> = ({
                                                                              isOpen,
                                                                              onClose,
                                                                              crypto,
                                                                              commission,
                                                                              onCommissionClick,
                                                                              onTopUpClick,
                                                                            }) => {
  const { t } = useTranslation();
  const [amount, setAmount] = useState("17.42");
  const [address, setAddress] = useState("");
  const [showScanner, setShowScanner] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hasAddressError, setHasAddressError] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  if (!isOpen) return null;

  const balance = parseFloat(crypto.amount.replace(/[^\d.]/g, ""));
  const sendAmount = parseFloat(amount.replace(",", "."));

  const handleContinue = () => {
    if (sendAmount > balance) {
      setHasError(true);
      setHasAddressError(false);
    } else if (!address.trim()) {
      setHasError(false);
      setHasAddressError(true);
    } else {
      setHasError(false);
      setHasAddressError(false);
      setShowConfirm(true);
    }
  };

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
              <S.AmountValue insufficient={hasError}>
                {amount} {crypto.symbol}
              </S.AmountValue>
              <S.SwapButton>
                <SwapIcon />
              </S.SwapButton>
            </S.AmountRow>

            {hasError ? (
              <S.ErrorSub>
                {t("currency.overlays.transfer.amount.insufficient")}{" "}
                <span onClick={onTopUpClick}>
                  {t("currency.overlays.transfer.amount.topUp")}
                </span>
              </S.ErrorSub>
            ) : (
              <S.AmountSub>
                {t("currency.overlays.transfer.amount.subApprox", { value: "1 390 ₽" })}
              </S.AmountSub>
            )}

            <S.PresetRow>
              <S.PresetButton>{t("currency.overlays.transfer.amount.presets.all")}</S.PresetButton>
              <S.PresetButton>{t("currency.overlays.transfer.amount.presets.1000")}</S.PresetButton>
              <S.PresetButton>{t("currency.overlays.transfer.amount.presets.5000")}</S.PresetButton>
              <S.PresetButton>{t("currency.overlays.transfer.amount.presets.10000")}</S.PresetButton>
            </S.PresetRow>
          </S.Card>

          <S.SectionTitle>{t("currency.overlays.transfer.balance")}</S.SectionTitle>
          <CryptoItem data={crypto} showRightSection={false} />

          <S.SectionTitle>{t("currency.overlays.transfer.address.title")}</S.SectionTitle>
          <S.InputWrapper hasError={hasAddressError}>
            <S.AddressInput
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder={t("currency.overlays.transfer.address.placeholder")}
            />
            <S.IconButton onClick={() => setShowScanner(true)}>
              <QrIcon />
            </S.IconButton>
          </S.InputWrapper>
          {hasAddressError && (
            <S.ErrorMessage>{t("currency.overlays.transfer.address.error")}</S.ErrorMessage>
          )}

          <S.CommissionButton onClick={onCommissionClick}>
            <div className="left">
              <ExclamationIcon className="icon" />
              <span
                dangerouslySetInnerHTML={{
                  __html: t("currency.overlays.transfer.commission", { value: commission }),
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
        total="17.42 USDT ≈ 1 390 ₽"
        balanceAfter="1 273.21 USDT"
      />
    </>
  );
};

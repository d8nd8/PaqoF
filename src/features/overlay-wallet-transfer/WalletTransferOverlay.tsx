import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import * as S from "./WalletTransferOverlay.styled";

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
import useWalletStore from "@/shared/stores/wallet";
import { PageHeader } from '@/shared/components/PageHeader/PageHeader'

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
  const [rubPreset, setRubPreset] = useState<number | null>(null);
  const [address, setAddress] = useState("");
  const [showScanner, setShowScanner] = useState(false);
  const [errorType, setErrorType] = useState<ErrorType>("none");
  const [showConfirm, setShowConfirm] = useState(false);
  const [rate, setRate] = useState<number | null>(null);

  const { fetchRates } = useWalletStore();

  useEffect(() => {
    const loadRate = async () => {
      if (!crypto?.symbol) return;
      const r = await fetchRates(crypto.symbol);
      console.log("Загружен курс:", r);
      setRate(r);
    };
    loadRate();
  }, [crypto.symbol, fetchRates]);

  if (!isOpen) return null;

  const balance = parseFloat(crypto.amount.replace(/[^\d.]/g, "")) || 0;
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


  const fiatValue = useMemo(() => {
    if (rubPreset !== null) return rubPreset;
    if (rate === null) return null;
    return sendAmount * rate;
  }, [rate, sendAmount, rubPreset]);

  const formatter = new Intl.NumberFormat("ru-RU", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const setByRub = (rubAmount: number) => {
    if (!rate || rate <= 0) return;
    const usdt = rubAmount / rate;
    setAmount(usdt.toFixed(2));
    setRubPreset(rubAmount);
  };

  const handleAmountChange = (val: string) => {
    let sanitized = val.replace(/[^0-9.,]/g, "");
    if (sanitized.length > 7) sanitized = sanitized.slice(0, 7);
    setAmount(sanitized);
    setRubPreset(null);
  };

  return (
    <>
      <S.OverlayWrapper>
        <PageHeader
          customTopInset={20}
          title={t("currency.overlays.transfer.title")}
          onBack={onClose}
          rightSlot={null}
        />

        <S.Content>
          <S.Card>
            <S.CardTitle>
              {t("currency.overlays.transfer.amount.title")}
            </S.CardTitle>

            <S.AmountRow>
              <S.AmountValue $hasError={hasError}>
                <S.AmountInput
                  type="text"
                  value={amount}
                  onChange={(e) => handleAmountChange(e.target.value)}
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
                {rate === null
                  ? "≈ -"
                  : `≈ ${formatter.format(fiatValue ?? 0)} ₽`}
              </S.AmountSub>
            )}

            <S.PresetRow>
              <S.PresetButton onClick={() => setAmount(balance.toString())}>
                {t("currency.overlays.transfer.amount.presets.all")}
              </S.PresetButton>
              <S.PresetButton onClick={() => setByRub(1000)}>
                {t("currency.overlays.transfer.amount.presets.1000")}
              </S.PresetButton>
              <S.PresetButton onClick={() => setByRub(5000)}>
                {t("currency.overlays.transfer.amount.presets.5000")}
              </S.PresetButton>
              <S.PresetButton onClick={() => setByRub(10000)}>
                {t("currency.overlays.transfer.amount.presets.10000")}
              </S.PresetButton>
            </S.PresetRow>
          </S.Card>

          <S.SectionTitle>
            {t("currency.overlays.transfer.balance")}
          </S.SectionTitle>
          <CryptoItem
            data={crypto}
            showRightSection={false}
            infoVariant="amount"
          />

          <S.SectionTitle>
            {t("currency.overlays.transfer.address.title")}
          </S.SectionTitle>
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
            <S.ErrorMessage>
              {t("currency.overlays.transfer.address.error")}
            </S.ErrorMessage>
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
        amountFiat={
          rate !== null ? `≈ ${formatter.format(fiatValue ?? 0)} ₽` : "≈ -"
        }
        onClose={() => setShowConfirm(false)}
        crypto={crypto}
        amount={amount}
        address={address}
        commission={commission}
        total={`${amount} ${crypto.symbol}${
          rate !== null ? ` ≈ ${formatter.format(fiatValue ?? 0)} ₽` : ""
        }`}
        balanceAfter={`${(balance - sendAmount).toFixed(2)} ${crypto.symbol}`}
      />
    </>
  );
};

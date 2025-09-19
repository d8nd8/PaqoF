import React, { useState } from "react";
import * as S from "./WalletTransferOverlay.styled";

import BackIcon from "@icons/chevron-left.svg?react";
import QrIcon from "@icons/qr.svg?react";
import ExclamationIcon from "@icons/exclamation-circle.svg?react";
import ChevronRightIcon from "@icons/chevron-right.svg?react";
import SwapIcon from "@icons/swap-icon.svg?react";

import { CryptoItem, type CryptoItemData } from "@/features/crypto-list/CryptoList";
import { QRScanner } from "@/features/qr-scanner/QRScanner";
import { WalletConfirmOverlay } from '@/features/overlay-wallet-confirm/WalletConfirmOverlay'

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
  const [amount, setAmount] = useState("17.42");
  const [address, setAddress] = useState("");
  const [showScanner, setShowScanner] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hasAddressError, setHasAddressError] = useState(false);

  // 👉 новый стейт для подтверждения
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
      // вместо onContinue → открываем confirm
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
          <S.Title>Перевод</S.Title>
        </S.Header>

        <S.Content>
          <S.Card>
            <S.CardTitle>Сумма к отправке</S.CardTitle>

            <S.AmountRow>
              <S.AmountValue insufficient={hasError}>
                {amount} USDT
              </S.AmountValue>
              <S.SwapButton>
                <SwapIcon />
              </S.SwapButton>
            </S.AmountRow>

            {hasError ? (
              <S.ErrorSub>
                Недостаточно средств.{" "}
                <span onClick={onTopUpClick}>Пополнить баланс.</span>
              </S.ErrorSub>
            ) : (
              <S.AmountSub>≈ 1 390 ₽</S.AmountSub>
            )}

            <S.PresetRow>
              <S.PresetButton>Отправить всё</S.PresetButton>
              <S.PresetButton>1 000 ₽</S.PresetButton>
              <S.PresetButton>5 000 ₽</S.PresetButton>
              <S.PresetButton>10 000</S.PresetButton>
            </S.PresetRow>
          </S.Card>

          <S.SectionTitle>Баланс</S.SectionTitle>
          <CryptoItem data={crypto} showRightSection={false} />

          <S.SectionTitle>Адрес</S.SectionTitle>
          <S.InputWrapper hasError={hasAddressError}>
            <S.AddressInput
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Адрес в сети TRC20"
            />
            <S.IconButton onClick={() => setShowScanner(true)}>
              <QrIcon />
            </S.IconButton>
          </S.InputWrapper>
          {hasAddressError && <S.ErrorMessage>Введите адрес</S.ErrorMessage>}

          <S.CommissionButton onClick={onCommissionClick}>
            <div className="left">
              <ExclamationIcon className="icon" />
              <span>
                Фиксированная комиссия <strong>{commission}</strong>
              </span>
            </div>
            <ChevronRightIcon className="chevron" />
          </S.CommissionButton>
        </S.Content>

        <S.BottomButton onClick={handleContinue}>Продолжить</S.BottomButton>

        <QRScanner
          isVisible={showScanner}
          onScan={(result) => {
            setAddress(result);
            setShowScanner(false);
          }}
          onClose={() => setShowScanner(false)}
          title="Адрес кошелька"
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

import React, { useState } from "react";
import * as S from "./WalletTransferOverlay.styled";

import BackIcon from "@icons/chevron-left.svg?react";
import QrIcon from "@icons/qr.svg?react";

import { CryptoItem, type CryptoItemData } from '@/features/crypto-list/CryptoList'
import { CommissionItem } from '@/shared/components/CommissionItem/CommissionItem'


interface WalletTransferOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  crypto: CryptoItemData;
  commission: string;
  onCommissionClick?: () => void;
  onContinue?: () => void;
}

export const WalletTransferOverlay: React.FC<WalletTransferOverlayProps> = ({
                                                                              isOpen,
                                                                              onClose,
                                                                              crypto,
                                                                              commission,
                                                                              onCommissionClick,
                                                                              onContinue,
                                                                            }) => {
  const [amount, setAmount] = useState("17.42");
  const [address, setAddress] = useState("");

  if (!isOpen) return null;

  return (
    <S.OverlayWrapper>
      <S.Header>
        <S.BackButton onClick={onClose}>
          <BackIcon />
        </S.BackButton>
        <S.Title>Перевод</S.Title>
      </S.Header>

      <S.Content>
        <S.Card>
          <S.AmountRow>
            <S.AmountValue>{amount} USDT</S.AmountValue>
            <S.IconButton>
            </S.IconButton>
          </S.AmountRow>
          <S.AmountSub>≈ 1 390 ₽</S.AmountSub>

          <S.PresetRow>
            <S.PresetButton>Отправить всё</S.PresetButton>
            <S.PresetButton>1 000 ₽</S.PresetButton>
            <S.PresetButton>5 000 ₽</S.PresetButton>
            <S.PresetButton>10 000</S.PresetButton>
          </S.PresetRow>
        </S.Card>

        <S.SectionTitle>Баланс</S.SectionTitle>
        <CryptoItem
          data={crypto}
          showRightSection={false}
        />

        <S.SectionTitle>Адрес</S.SectionTitle>
        <S.InputWrapper>
          <S.AddressInput
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder={`Адрес в сети TRC20`}
          />
          <S.IconButton>
            <QrIcon />
          </S.IconButton>
        </S.InputWrapper>

        <CommissionItem
          text={`Фиксированная комиссия ${commission}`}
          onClick={onCommissionClick}
        />
      </S.Content>

      <S.BottomButton onClick={onContinue}>Продолжить</S.BottomButton>
    </S.OverlayWrapper>
  );
};

import React, { useState } from "react";
import * as S from "./WalletAddressOverlay.styled";

import BackIcon from "@icons/chevron-left.svg?react";
import CopyIcon from "@icons/copy.svg?react";
import ChevronRightIcon from "@icons/chevron-right.svg?react";

import { QRCodeSVG } from "qrcode.react";

interface WalletAddressOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  cryptoName: string;
  network: string;
  address: string;
  commission: string;
  onCommissionClick?: () => void;
}

export const WalletAddressOverlay: React.FC<WalletAddressOverlayProps> = ({
                                                                            isOpen,
                                                                            onClose,
                                                                            cryptoName,
                                                                            network,
                                                                            address,
                                                                            commission,
                                                                            onCommissionClick,
                                                                          }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Ошибка копирования:", err);
    }
  };

  return (
    <S.OverlayWrapper>
      <S.Header>
        <S.BackButton onClick={onClose}>
          <BackIcon />
        </S.BackButton>
        <S.Title>Пополнение {cryptoName}</S.Title>
      </S.Header>

      <S.Content>
        <S.SectionTitle>Выберите криптовалюту</S.SectionTitle>

        <S.QRCard>
          <QRCodeSVG value={address} size={180} />
          <S.Address>{address}</S.Address>
          <S.AddressHint>
            Данный адрес предназначен только для получения {cryptoName} в сети{" "}
            {network}. Отправка через другие сети приведёт к потере активов!
          </S.AddressHint>

          <S.CommissionButton onClick={onCommissionClick}>
            <div className="left">
              <span>Фиксированная комиссия {commission}</span>
            </div>
            <ChevronRightIcon />
          </S.CommissionButton>
        </S.QRCard>
      </S.Content>

      {copied && <S.Toast>Адрес скопирован</S.Toast>}

      <S.BottomActions>
        <S.CopyButton onClick={handleCopy}>
          <CopyIcon />
          Копировать адрес
        </S.CopyButton>
        <S.HomeButton onClick={onClose}>На главную</S.HomeButton>
      </S.BottomActions>
    </S.OverlayWrapper>
  );
};

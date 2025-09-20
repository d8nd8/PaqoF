import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./WalletSuccessOverlay.styled";

import CopyIconSvg from "@icons/copy.svg?react";
import { miniApp } from "@telegram-apps/sdk-react";
import { useTranslation } from "react-i18next";

interface WalletSuccessOverlayProps {
  isOpen: boolean;
  amount: string;
  address: string;
  txHash: string;
  txId: string;
  network: string;
  receivedAmount: string;
}

export const WalletSuccessOverlay: React.FC<WalletSuccessOverlayProps> = ({
                                                                            isOpen,
                                                                            amount,
                                                                            address,
                                                                            txHash,
                                                                            txId,
                                                                            network,
                                                                            receivedAmount,
                                                                          }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  if (!isOpen) return null;

  const handleGoHome = () => {
    window.location.href = "/main";
  };

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
  };

  return (
    <S.OverlayWrapper>
      <S.SuccessHeader>
        <S.SuccessTitle>
          {t("currency.overlays.success.title", { crypto: "USDT" })}
        </S.SuccessTitle>
        <S.Date>
          {t("currency.overlays.success.date", {
            date: "20.05.2024, 17:20",
          })}
        </S.Date>
      </S.SuccessHeader>

      <S.Content>
        <S.Amount>
          {t("currency.overlays.success.amount", {
            amount,
            crypto: "USDT",
          })}
        </S.Amount>

        <S.Card>
          <S.RowHorizontal>
            <S.Label>{t("currency.overlays.success.transactionHash")}</S.Label>
            <S.CopyWrapper>
              <S.Value>{txHash}</S.Value>
              <S.CopyIcon onClick={() => handleCopy(txHash)}>
                <CopyIconSvg />
              </S.CopyIcon>
            </S.CopyWrapper>
          </S.RowHorizontal>

          <S.RowHorizontal>
            <S.Label>{t("currency.overlays.success.transactionId")}</S.Label>
            <S.CopyWrapper>
              <S.Value>{txId}</S.Value>
              <S.CopyIcon onClick={() => handleCopy(txId)}>
                <CopyIconSvg />
              </S.CopyIcon>
            </S.CopyWrapper>
          </S.RowHorizontal>

          <S.RowHorizontal>
            <S.Label>{t("currency.overlays.success.network")}</S.Label>
            <S.Value>{network}</S.Value>
          </S.RowHorizontal>

          <S.RowHorizontal>
            <S.Label>{t("currency.overlays.success.receivedAmount")}</S.Label>
            <S.Value>{receivedAmount}</S.Value>
          </S.RowHorizontal>
        </S.Card>

        <S.Card>
          <S.Row>
            <S.Label>{t("currency.overlays.success.recipientAddress")}</S.Label>
            <S.Value>{address}</S.Value>
          </S.Row>
          <S.Row>
            <S.Label>{t("currency.overlays.success.comment")}</S.Label>
            <S.Value>{t("currency.overlays.success.commentMissing")}</S.Value>
          </S.Row>
        </S.Card>
      </S.Content>

      <S.BottomButton onClick={handleGoHome}>
        {t("currency.overlays.success.button")}
      </S.BottomButton>
    </S.OverlayWrapper>
  );
};

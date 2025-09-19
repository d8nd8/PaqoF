import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./WalletSuccessOverlay.styled";

import CopyIconSvg from "@icons/copy.svg?react";


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
  const navigate = useNavigate();
  if (!isOpen) return null;

  const handleGoHome = () => {
    navigate(0); // перезагружает текущую страницу
  };

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
  };

  return (
    <S.OverlayWrapper>
      <S.SuccessHeader>
        <S.SuccessTitle>Перевод USDT</S.SuccessTitle>
        <S.Date>20.05.2024, 17:20</S.Date>
      </S.SuccessHeader>

      <S.Content>
        <S.Amount>- {amount} USDT</S.Amount>

        <S.Card>
          <S.RowHorizontal>
            <S.Label>Хэш транзакции</S.Label>
            <S.CopyWrapper>
              <S.Value>{txHash}</S.Value>
              <S.CopyIcon onClick={() => handleCopy(txHash)}>
                <CopyIconSvg />
              </S.CopyIcon>
            </S.CopyWrapper>
          </S.RowHorizontal>

          <S.RowHorizontal>
            <S.Label>ID транзакции</S.Label>
            <S.CopyWrapper>
              <S.Value>{txId}</S.Value>
              <S.CopyIcon onClick={() => handleCopy(txId)}>
                <CopyIconSvg />
              </S.CopyIcon>
            </S.CopyWrapper>
          </S.RowHorizontal>

          <S.RowHorizontal>
            <S.Label>Сеть</S.Label>
            <S.Value>{network}</S.Value>
          </S.RowHorizontal>

          <S.RowHorizontal>
            <S.Label>Сумма к поступлению</S.Label>
            <S.Value>{receivedAmount}</S.Value>
          </S.RowHorizontal>
        </S.Card>

        <S.Card>
          <S.Row>
            <S.Label>Адрес получателя</S.Label>
            <S.Value>{address}</S.Value>
          </S.Row>
          <S.Row>
            <S.Label>Комментарий, тег или memo</S.Label>
            <S.Value>Отсутствует</S.Value>
          </S.Row>
        </S.Card>
      </S.Content>

      <S.BottomButton onClick={handleGoHome}>На главную</S.BottomButton>
    </S.OverlayWrapper>
  );
};

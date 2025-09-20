import React from "react";
import { useTranslation } from "react-i18next";
import * as S from "./WalletConfirmOverlay.styled";

import BackIcon from "@icons/chevron-left.svg?react";
import { CryptoItem, type CryptoItemData } from "@/features/crypto-list/CryptoList";
import { WalletSuccessOverlay } from "@/features/overaly-wallet-success/WalletSuccessOverlay";

interface WalletConfirmOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  crypto: CryptoItemData;
  amount: string;
  amountFiat: string;
  address: string;
  commission: string;
  total: string;
  balanceAfter: string;
}

export const WalletConfirmOverlay: React.FC<WalletConfirmOverlayProps> = ({
                                                                            isOpen,
                                                                            onClose,
                                                                            crypto,
                                                                            amount,
                                                                            amountFiat,
                                                                            address,
                                                                            commission,
                                                                            total,
                                                                            balanceAfter,
                                                                          }) => {
  const { t } = useTranslation();
  const [comment, setComment] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);

  if (!isOpen) return null;

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setComment(text);
      }
    } catch (err) {
      console.error("Clipboard read error:", err);
    }
  };

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
    }, 2000);
  };

  return (
    <>
      <S.OverlayWrapper>
        <S.Header>
          <S.BackButton onClick={onClose}>
            <BackIcon />
          </S.BackButton>
          <S.Title>{t("currency.overlays.confirm.title")}</S.Title>
        </S.Header>

        <S.Content>
          <S.Card>
            <S.CardTitle>{t("currency.overlays.confirm.amount.title")}</S.CardTitle>
            <S.AmountRow>
              <S.AmountValue>
                {amount} {crypto.symbol}
              </S.AmountValue>
            </S.AmountRow>
            <S.AmountSub>{amountFiat}</S.AmountSub>
          </S.Card>

          <S.InputWrapper>
            <S.AddressInput
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder={t("currency.overlays.confirm.comment.placeholder")}
            />
            <S.InsertButton onClick={handlePaste}>
              {t("currency.overlays.confirm.comment.paste")}
            </S.InsertButton>
          </S.InputWrapper>

          <S.Card>
            <div>
              <S.CardLabel>{t("currency.overlays.confirm.recipient")}</S.CardLabel>
              <S.AddressValue>{address}</S.AddressValue>
            </div>

            <div>
              <S.CardLabel>{t("currency.overlays.confirm.commission.label")}</S.CardLabel>
              <S.InfoText>{commission}</S.InfoText>
            </div>

            <div>
              <S.CardLabel>{t("currency.overlays.confirm.total.label")}</S.CardLabel>
              <S.InfoText isTotal>{total}</S.InfoText>
            </div>
          </S.Card>

          <S.SectionTitle>{t("currency.overlays.confirm.balanceAfter")}</S.SectionTitle>
          <CryptoItem
            data={{ ...crypto, amount: balanceAfter }}
            showRightSection={false}
          />
        </S.Content>

        <S.BottomSection>
          <S.MainButton onClick={handleConfirm} disabled={loading}>
            {loading ? <S.Spinner /> : t("currency.overlays.confirm.confirmButton")}
          </S.MainButton>
        </S.BottomSection>
      </S.OverlayWrapper>

      <WalletSuccessOverlay
        isOpen={showSuccess}
        amount={amount}
        address={address}
        txHash="Zafa74A...FqfQv123"
        txId="TxID1234567890"
        network="TRC 20"
        receivedAmount="14.67 USDT"
      />
    </>
  );
};

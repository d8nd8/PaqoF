import React from "react";
import { useTranslation } from "react-i18next";
import * as S from "./WalletConfirmOverlay.styled";

import { CryptoItem, type CryptoItemData } from "@/features/crypto-list/CryptoList";
import { WalletSuccessOverlay } from "@/features/overaly-wallet-success/WalletSuccessOverlay";
import useWalletStore from "@/shared/stores/wallet";
import { PageHeader } from "@/shared/components/PageHeader/PageHeader";
import useApplicationStore from "@/shared/stores/application";
import type { Operation } from '@/api/services/operation/schemes/operation.schemas'


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
  const { withdraw } = useWalletStore();
  const { fullscreen } = useApplicationStore();

  const [comment, setComment] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [operation, setOperation] = React.useState<Operation | null>(null);

  if (!isOpen) return null;

  const handlePaste = async () => {
    const text = await navigator.clipboard.readText();
    if (text) setComment(text);
  };

  const handleConfirm = async () => {
    try {
      setLoading(true);

      const walletId = crypto.id;
      const payload = {
        address,
        amount: parseFloat(amount),
      };

      // запрос в API
      const op = await withdraw(walletId, payload);

      // сохраняем данные операции
      setOperation(op);
      setShowSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <S.OverlayWrapper>
        <PageHeader
          customTopInset={fullscreen ? 80 : 20}
          title={t("currency.overlays.confirm.title")}
          onBack={onClose}
          rightSlot={null}
        />

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
            infoVariant="amount"
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

      {operation && (
        <WalletSuccessOverlay
          isOpen={showSuccess}
          amount={operation.amount}
          address={address}
          txHash={operation.operationId}
          txId={operation.walletId}
          network={operation.operationType}
          receivedAmount={`${operation.totalAmount} ${crypto.symbol}`}
          crypto={crypto.symbol}
          createdAt={operation.createdAt}
        />
      )}
    </>
  );
};

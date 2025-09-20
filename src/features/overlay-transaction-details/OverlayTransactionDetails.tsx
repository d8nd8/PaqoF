import React from "react";
import { BottomSheet } from "@/shared/components/BottomSheet/BottomSheet";
import {
  TransactionDetails,
  type TransactionData,
} from "@/features/overlay-transaction-details/transaction-details/TransactionDetails";
import * as S from "./OverlayTransactionDetails.styled";
import { useTranslation } from "react-i18next";

export interface OverlayTransactionDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  transaction: TransactionData;
  onCopyClick?: (value: string) => void;
  onAMLClick?: () => void;
  bottomButtonText?: string;
  onBottomButtonClick?: () => void;
  showBottomButton?: boolean;
}

export const OverlayTransactionDetails: React.FC<
  OverlayTransactionDetailsProps
> = ({
       isOpen,
       onClose,
       transaction,
       onCopyClick,
       onAMLClick,
       bottomButtonText = "currency.openInExplorer",
       onBottomButtonClick,
       showBottomButton = true,
     }) => {
  const { i18n, t } = useTranslation();

  const handleBottomButtonClick = () => {
    if (onBottomButtonClick) {
      onBottomButtonClick();
    } else {
      onClose();
    }
  };

  const formattedDate = new Intl.DateTimeFormat(i18n.language, {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
    .format(new Date(transaction.timestamp))
    .replace(",", " •");

  return (
    <BottomSheet
      isOpen={isOpen}
      onClose={onClose}
      showBottomButton={showBottomButton}
      bottomButtonText={t(bottomButtonText)}
      onBottomButtonClick={handleBottomButtonClick}
      closeButtonType="icon"
      showCloseButton={true}
      showHeader={true}
      title={formattedDate}
    >
      <S.TransactionDetailsWrapper>
        <TransactionDetails
          transaction={transaction}
          onCopyClick={onCopyClick}
          onAMLClick={onAMLClick}
        />
      </S.TransactionDetailsWrapper>
    </BottomSheet>
  );
};

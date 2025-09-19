import React from 'react';
import { BottomSheet } from '@/shared/components/BottomSheet/BottomSheet';
import { TransactionDetails,type TransactionData } from '@/features/overlay-transaction-details/transaction-details/TransactionDetails';
import * as S from './OverlayTransactionDetails.styled';

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

export const OverlayTransactionDetails: React.FC<OverlayTransactionDetailsProps> = ({
                                                                                      isOpen,
                                                                                      onClose,
                                                                                      transaction,
                                                                                      onCopyClick,
                                                                                      onAMLClick,
                                                                                      bottomButtonText = 'Открыть в обозревателе',
                                                                                      onBottomButtonClick,
                                                                                      showBottomButton = true,
                                                                                    }) => {
  const handleBottomButtonClick = () => {
    if (onBottomButtonClick) {
      onBottomButtonClick();
    } else {
      onClose();
    }
  };




  return (
    <BottomSheet
      isOpen={isOpen}
      onClose={onClose}
      showBottomButton={showBottomButton}
      bottomButtonText={bottomButtonText}
      onBottomButtonClick={handleBottomButtonClick}
      closeButtonType="icon"
      showCloseButton={true}
      showHeader={true}
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
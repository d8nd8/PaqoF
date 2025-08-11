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

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const day = date.getDate();
    const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня',
      'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    const month = months[date.getMonth()];
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day} ${month} • ${hours}:${minutes}`;
  };

  const title = transaction.timestamp ? formatDate(transaction.timestamp) : '';

  return (
    <BottomSheet
      isOpen={isOpen}
      onClose={onClose}
      title={title}
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
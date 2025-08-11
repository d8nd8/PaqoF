import ReplenishmentHistoryICon from '@icons/replenishment-history.svg?react';
import CopyIcon from '@icons/copy.svg?react';
import React from 'react';
import * as S from './TransactionDetails.styled';
import { type AMLStatusItem, AmlStatusList } from '@/features/overlay-transaction-details/aml-status-list/AmlStatusList'

export interface TransactionData {
  id: string;
  type: 'withdraw' | 'deposit';
  amount: string;
  amountUSD: string;
  status: 'success' | 'pending' | 'failed' | 'problem';
  timestamp: string;
  exchangeRate?: string;
  creditAmount?: string;
  receivedAmount?: string;
  commission?: string;
  hash?: string;
  transactionId?: string;
  network?: string;
  sender?: string;
  hasAMLIssue?: boolean;
  amlStatus?: 'completed' | 'pending' | 'failed';
}

export interface TransactionDetailsProps {
  transaction: TransactionData;
  onCopyClick?: (value: string) => void;
  onAMLClick?: () => void;
}

export const TransactionDetails: React.FC<TransactionDetailsProps> = ({
                                                                        transaction,
                                                                        onCopyClick,
                                                                        onAMLClick,
                                                                      }) => {
  const getStatusText = (status: string) => {
    switch (status) {
      case 'success': return 'Успешно';
      case 'pending': return 'В процессе';
      case 'failed':  return 'Отменено';
      case 'problem': return 'Возникла проблема';
      default:        return status;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return '✓';
      case 'pending': return '•';
      case 'failed':  return '✕';
      case 'problem': return '!';
      default:        return '?';
    }
  };

  const formatHash = (hash: string) =>
    hash.length > 20
      ? `${hash.slice(0, 8)}...${hash.slice(-8)}`
      : hash;

  const handleCopy = (value: string) => {
    if (onCopyClick) {
      onCopyClick(value);
    } else {
      navigator.clipboard.writeText(value);
    }
  };

  const getAMLStatusItems = (): AMLStatusItem[] => {
    const items: AMLStatusItem[] = [];

    if (transaction.amlStatus === 'completed') {
      items.push({
        id: 'aml-completed',
        status: 'completed',
        title: 'AML проверка успешно завершена',
        onClick: onAMLClick,
      });
    }

    if (transaction.hasAMLIssue) {
      items.push({
        id: 'aml-suspicious',
        status: 'suspicious',
        title: 'Подозрительный платёж. Напишите в поддержку чтобы завершить',
      });
    }

    if (transaction.amlStatus === 'pending') {
      items.push({
        id: 'aml-pending',
        status: 'pending',
        title: 'AML проверка в процессе',
      });
    }

    if (transaction.amlStatus === 'failed') {
      items.push({
        id: 'aml-failed',
        status: 'failed',
        title: 'AML проверка не пройдена',
      });
    }

    return items;
  };

  const amlStatusItems = getAMLStatusItems();

  return (
    <S.Container>
      <S.Header>
        {transaction.type === 'withdraw' ?
          <S.TransactionIcon $type={transaction.type} $status={transaction.status}>
            ВВ
          </S.TransactionIcon> : <ReplenishmentHistoryICon />
        }

        <S.TransactionTitle>
          {transaction.type === 'withdraw' ? 'ВкусВилл' : 'Пополнение'}
        </S.TransactionTitle>
        <S.TransactionAmount $type={transaction.type}>
          {transaction.type === 'withdraw' ? '−' : '+'} {transaction.amount}
        </S.TransactionAmount>
        <S.TransactionAmountUSD>
          {transaction.type === 'withdraw' ? '−' : ''} {transaction.amountUSD}
        </S.TransactionAmountUSD>
        <S.StatusBadge $status={transaction.status}>
          <S.StatusIcon $status={transaction.status}>
            {getStatusIcon(transaction.status)}
          </S.StatusIcon>
          <S.StatusText $status={transaction.status}>
            {getStatusText(transaction.status)}
          </S.StatusText>
        </S.StatusBadge>
      </S.Header>

      <S.DetailsSection>
        {transaction.type === 'withdraw' && (
          <S.Block>
            {transaction.transactionId && (
              <S.DetailRow>
                <S.DetailLabel>ID транзакции</S.DetailLabel>
                <S.DetailValueWithCopy>
                  <S.HashValue>{formatHash(transaction.transactionId)}</S.HashValue>
                  <S.CopyButton onClick={() => handleCopy(transaction.transactionId!)}>
                    <CopyIcon />
                  </S.CopyButton>
                </S.DetailValueWithCopy>
              </S.DetailRow>
            )}
            {transaction.exchangeRate && (
              <S.DetailRow>
                <S.DetailLabel>Курс обмена</S.DetailLabel>
                <S.DetailValue>{transaction.exchangeRate}</S.DetailValue>
              </S.DetailRow>
            )}
          </S.Block>
        )}

        <S.Block>
          {transaction.creditAmount && (
            <S.DetailRow>
              <S.DetailLabel>Сумма к зачислению</S.DetailLabel>
              <S.DetailValue>{transaction.creditAmount}</S.DetailValue>
            </S.DetailRow>
          )}
          {transaction.receivedAmount && (
            <S.DetailRow>
              <S.DetailLabel>Полученная сумма</S.DetailLabel>
              <S.DetailValue>{transaction.receivedAmount}</S.DetailValue>
            </S.DetailRow>
          )}
          {transaction.commission && (
            <S.DetailRow>
              <S.DetailLabel>Комиссия</S.DetailLabel>
              <S.DetailValue>{transaction.commission}</S.DetailValue>
            </S.DetailRow>
          )}
        </S.Block>

        <S.Block>
          {transaction.hash && (
            <S.DetailRow>
              <S.DetailLabel>Хэш транзакции</S.DetailLabel>
              <S.DetailValueWithCopy>
                <S.HashValue>{formatHash(transaction.hash)}</S.HashValue>
                <S.CopyButton onClick={() => handleCopy(transaction.hash!)}>
                  <CopyIcon />
                </S.CopyButton>
              </S.DetailValueWithCopy>
            </S.DetailRow>
          )}
          {transaction.network && (
            <S.DetailRow>
              <S.DetailLabel>Сеть</S.DetailLabel>
              <S.DetailValue>{transaction.network}</S.DetailValue>
            </S.DetailRow>
          )}
        </S.Block>

        {transaction.sender && (
          <S.Block>
            <S.DetailRow>
              <S.DetailLabel>Отправитель</S.DetailLabel>
              <S.DetailValueWithCopy>
                <S.HashValue>{formatHash(transaction.sender)}</S.HashValue>
                <S.CopyButton onClick={() => handleCopy(transaction.sender!)}>
                  <CopyIcon />
                </S.CopyButton>
              </S.DetailValueWithCopy>
            </S.DetailRow>
          </S.Block>
        )}
      </S.DetailsSection>

      {amlStatusItems.length > 0 && (
        <AmlStatusList items={amlStatusItems} />
      )}
    </S.Container>
  );
};
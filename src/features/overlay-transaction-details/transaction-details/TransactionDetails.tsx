import ReplenishmentHistoryICon from "@icons/replenishment-history.svg?react";
import CopyIcon from "@icons/copy.svg?react";
import React from "react";
import * as S from "./TransactionDetails.styled";
import {
  type AMLStatusItem,
  AmlStatusList,
} from "@/features/overlay-transaction-details/aml-status-list/AmlStatusList";
import { useTranslation } from "react-i18next";

export interface TransactionData {
  id: string;
  type: "withdraw" | "deposit";
  amount: string;
  amountUSD: string;
  status: "success" | "pending" | "failed" | "problem";
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
  amlStatus?: "completed" | "pending" | "failed";
}

export interface TransactionDetailsProps {
  transaction: TransactionData;
  onCopyClick?: (value: string) => void;
  onAMLClick?: () => void;
}

const formatAmount = (value: string): string => {
  if (!value) return "";
  const parts = value.trim().split(" ");
  const num = parseFloat(parts[0].replace(/,/g, "").replace(/\s/g, ""));
  if (isNaN(num)) return value;

  const formatted = new Intl.NumberFormat("ru-RU", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 8,
  }).format(num);

  return parts.length > 1
    ? `${formatted} ${parts.slice(1).join(" ")}`
    : formatted;
};

export const TransactionDetails: React.FC<TransactionDetailsProps> = ({
                                                                        transaction,
                                                                        onCopyClick,
                                                                        onAMLClick,
                                                                      }) => {
  const { t } = useTranslation();

  const getStatusText = (status: string) => {
    switch (status) {
      case "success":
        return t("currency.transactions.status.success");
      case "pending":
        return t("currency.transactions.status.pending");
      case "failed":
        return t("currency.transactions.status.failed");
      case "problem":
        return t("currency.transactions.status.problem");
      default:
        return status;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return "✓";
      case "pending":
        return "•";
      case "failed":
        return "✕";
      case "problem":
        return "!";
      default:
        return "?";
    }
  };

  const formatHash = (hash: string) =>
    hash.length > 20 ? `${hash.slice(0, 8)}...${hash.slice(-8)}` : hash;

  const handleCopy = (value: string) => {
    if (onCopyClick) {
      onCopyClick(value);
    } else {
      navigator.clipboard.writeText(value);
    }
  };

  const getAMLStatusItems = (): AMLStatusItem[] => {
    const items: AMLStatusItem[] = [];

    if (transaction.amlStatus === "completed") {
      items.push({
        id: "aml-completed",
        status: "completed",
        title: t("currency.transactions.aml.completed"),
        onClick: onAMLClick,
      });
    }

    if (transaction.hasAMLIssue) {
      items.push({
        id: "aml-suspicious",
        status: "suspicious",
        title: t("currency.transactions.aml.suspicious"),
      });
    }

    if (transaction.amlStatus === "pending") {
      items.push({
        id: "aml-pending",
        status: "pending",
        title: t("currency.transactions.aml.pending"),
      });
    }

    if (transaction.amlStatus === "failed") {
      items.push({
        id: "aml-failed",
        status: "failed",
        title: t("currency.transactions.aml.failed"),
      });
    }

    return items;
  };

  const amlStatusItems = getAMLStatusItems();

  return (
    <S.Container>
      <S.Header>
        {transaction.type === "withdraw" ? (
          <S.TransactionIcon
            $type={transaction.type}
            $status={transaction.status}
          >
            ВВ
          </S.TransactionIcon>
        ) : (
          <ReplenishmentHistoryICon />
        )}

        <S.TransactionTitle>
          {transaction.type === "withdraw"
            ? t("currency.transactions.withdrawTitle")
            : t("currency.transactions.depositTitle")}
        </S.TransactionTitle>

        <S.TransactionAmount $type={transaction.type}>
          {transaction.type === "withdraw" ? "−" : "+"}{" "}
          {transaction.type === "withdraw"
            ? `${formatAmount(transaction.amount)} ₽`
            : `${formatAmount(transaction.amount)} USDT`}
        </S.TransactionAmount>

        {transaction.type === "withdraw" && transaction.amountUSD && (
          <S.TransactionAmountUSD>
            {transaction.amountUSD}
          </S.TransactionAmountUSD>
        )}

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
        {transaction.type === "withdraw" && transaction.exchangeRate && (
          <S.Block>
            <S.DetailRow>
              <S.DetailLabel>
                {t("currency.transactions.exchangeRate")}
              </S.DetailLabel>
              <S.DetailValue>{transaction.exchangeRate}</S.DetailValue>
            </S.DetailRow>
          </S.Block>
        )}

        <S.Block>
          {transaction.creditAmount && (
            <S.DetailRow>
              <S.DetailLabel>
                {t("currency.transactions.creditAmount")}
              </S.DetailLabel>
              <S.DetailValue>
                {formatAmount(transaction.creditAmount)}
              </S.DetailValue>
            </S.DetailRow>
          )}
          {transaction.receivedAmount && (
            <S.DetailRow>
              <S.DetailLabel>
                {t("currency.transactions.receivedAmount")}
              </S.DetailLabel>
              <S.DetailValue>
                {formatAmount(transaction.receivedAmount)}
              </S.DetailValue>
            </S.DetailRow>
          )}
          {transaction.commission && (
            <S.DetailRow>
              <S.DetailLabel>{t("currency.transactions.commission")}</S.DetailLabel>
              <S.DetailValue>{formatAmount(transaction.commission)}</S.DetailValue>
            </S.DetailRow>
          )}
        </S.Block>

        <S.Block>
          {transaction.hash && (
            <S.DetailRow>
              <S.DetailLabel>{t("currency.transactions.hash")}</S.DetailLabel>
              <S.DetailValueWithCopy>
                <S.HashValue>{formatHash(transaction.hash)}</S.HashValue>
                <S.CopyButton onClick={() => handleCopy(transaction.hash!)}>
                  <CopyIcon />
                </S.CopyButton>
              </S.DetailValueWithCopy>
            </S.DetailRow>
          )}

          {transaction.transactionId && (
            <S.DetailRow>
              <S.DetailLabel>{t("currency.transactions.txId")}</S.DetailLabel>
              <S.DetailValueWithCopy>
                <S.HashValue>
                  {formatHash(transaction.transactionId)}
                </S.HashValue>
                <S.CopyButton
                  onClick={() => handleCopy(transaction.transactionId!)}
                >
                  <CopyIcon />
                </S.CopyButton>
              </S.DetailValueWithCopy>
            </S.DetailRow>
          )}

          {transaction.network && (
            <S.DetailRow>
              <S.DetailLabel>{t("currency.transactions.network")}</S.DetailLabel>
              <S.DetailValue>{transaction.network}</S.DetailValue>
            </S.DetailRow>
          )}
        </S.Block>

        {transaction.sender && (
          <S.Block>
            <S.DetailRow>
              <S.DetailLabel>{t("currency.transactions.sender")}</S.DetailLabel>
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

      {amlStatusItems.length > 0 && <AmlStatusList items={amlStatusItems} />}
    </S.Container>
  );
};

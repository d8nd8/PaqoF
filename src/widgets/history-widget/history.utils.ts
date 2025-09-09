import type { Transaction } from '@/widgets/history-widget/history.types'
import type { TransactionData } from '@/features/overlay-transaction-details/transaction-details'

export const mapTransactionToDetails = (tx: Transaction): TransactionData => {
  return {
    id: String(tx.id),
    type: tx.type === "income" ? "deposit" : "withdraw",
    amount: tx.amount.replace(/[^\d.,]/g, ""),
    amountUSD: tx.amountUsd || "—",
    status: tx.type === "income" ? "success" : "problem",
    timestamp: new Date().toISOString(),

    creditAmount: tx.amount,
    receivedAmount: tx.amountUsd,
    commission: tx.type === "income" ? "10.5 USDT" : undefined,

    transactionId: "Zafa74A...FqfQv123",
    hash: "Zafa74A...FqfQv123",
    network: "TRC 20",
    sender: "Zafa74A...FqfQv123",

    hasAMLIssue: tx.type !== "income",
    amlStatus: tx.type === "income" ? "completed" : "pending",
  };
};

export const truncateText = (text: string, maxLength: number): string => {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "…" : text;
};
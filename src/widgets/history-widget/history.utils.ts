import dayjs from "@/shared/config/dayjs.config";
import type { Transaction } from "@/widgets/history-widget/history.types";
import type { TransactionData } from "@/features/overlay-transaction-details/transaction-details";


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


interface Operation {
  operationId: string;
  operationType: string;
  status: string;
  amount: string;
  totalAmount: string;
  createdAt: string;
}

interface GroupedOperations {
  date: string;
  items: Operation[];
}


export const groupOperationsByDate = (
  operations: Operation[],
  t: (key: string) => string
): GroupedOperations[] => {
  const groups: Record<string, Operation[]> = {};

  operations.forEach((op) => {
    const date = dayjs(op.createdAt).format("YYYY-MM-DD");
    if (!groups[date]) groups[date] = [];
    groups[date].push(op);
  });

  const sortedDates = Object.keys(groups).sort((a, b) => (a < b ? 1 : -1));

  return sortedDates.map((date) => {
    const isToday = dayjs(date).isSame(dayjs(), "day");
    const isYesterday = dayjs(date).isSame(dayjs().subtract(1, "day"), "day");

    let translatedDate = dayjs(date).format("D MMMM");
    if (isToday) translatedDate = t("dates.today");
    else if (isYesterday) translatedDate = t("dates.yesterday");

    return {
      date: translatedDate,
      items: groups[date].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ),
    };
  });
};

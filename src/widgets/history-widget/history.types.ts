import React from "react";

export type TransactionType = "income" | "expense";
export type TransactionStatus = "pending" | "warning" | "completed";

export interface Transaction {
  id: number;
  icon?: React.ReactNode;
  title: string;
  category: string;
  amount: string;
  amountUsd?: string;
  type: TransactionType;
  status?: TransactionStatus;
}

export interface TransactionGroup {
  id: number;
  date: string;
  items: Transaction[];
}
import React from "react";

export type TransactionType = "income" | "expense";

export interface Transaction {
  id: number;
  icon?: React.ReactNode;
  title: string;
  category: string;
  amount: string;
  amountUsd?: string;
  type: TransactionType;
}

export interface TransactionGroup {
  id: number;
  date: string;
  items: Transaction[];
}

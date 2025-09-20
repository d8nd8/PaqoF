import type { TransactionGroup } from "@/widgets/history-widget/history.types";

import ShopIcon from "@/assets/icons/shop.svg?react";
import VkusvillIcon from "@/assets/icons/vkusvill.svg?react";
import MvideoIcon from "@/assets/icons/mvideo.svg?react";
import DepositIcon from "@/assets/icons/deposit.svg?react";
import TransferIcon from "@/assets/icons/transfer.svg?react";

export const MOCK_TRANSACTIONS: TransactionGroup[] = [
  {
    id: 1,
    date: "history.dates.oct26",
    items: [
      {
        id: 101,
        icon: <VkusvillIcon />,
        title: "history.transactions.vkusvill",
        category: "history.categories.groceries",
        amount: "-110 323.99 ₽",
        amountUsd: "-1 290.49 USDT",
        type: "expense",
        status: "completed",
      },
      {
        id: 102,
        icon: <ShopIcon />,
        title: "history.transactions.unknownShop",
        category: "history.categories.purchase",
        amount: "-110 323.99 ₽",
        amountUsd: "-1 290.49 USDT",
        type: "expense",
        status: "completed",
      },
      {
        id: 103,
        icon: <DepositIcon />,
        title: "history.transactions.depositCard",
        category: "history.categories.deposit",
        amount: "+110 323.99 ₽",
        type: "income",
        status: "pending",
      },
    ],
  },
  {
    id: 2,
    date: "history.dates.oct25",
    items: [
      {
        id: 201,
        icon: <MvideoIcon />,
        title: "history.transactions.mvideo",
        category: "history.categories.electronics",
        amount: "-110 323.99 ₽",
        amountUsd: "-1 290.49 USDT",
        type: "expense",
        status: "completed",
      },
      {
        id: 202,
        icon: <DepositIcon />,
        title: "history.transactions.walletDeposit",
        category: "history.categories.deposit",
        amount: "+110 323.99 USDT",
        type: "income",
        status: "warning",
      },
      {
        id: 203,
        icon: <TransferIcon />,
        title: "history.transactions.usdtTransfer",
        category: "history.categories.transfer",
        amount: "-1 290.99 USDT",
        type: "expense",
        status: "completed",
      },
    ],
  },
];

export type TransactionStatus = "pending" | "warning" | "completed";
export type TransactionType = "income" | "expense";

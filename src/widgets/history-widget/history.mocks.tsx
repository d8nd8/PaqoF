import type { TransactionGroup } from "@/widgets/history-widget/history.types";
import ShopIcon from "@/assets/icons/shop.svg?react";

export const MOCK_TRANSACTIONS: TransactionGroup[] = [
  {
    id: 1,
    date: "26 Октября",
    items: [
      {
        id: 101,
        icon: <ShopIcon />,
        title: "ВкусВилл",
        category: "Продукты",
        amount: "-110 323.99 ₽",
        amountUsd: "-1 290.49 USDT",
        type: "expense",
        status: "completed",
      },
      {
        id: 102,
        icon: <ShopIcon />,
        title: "Неопознанный магазин",
        category: "Покупка",
        amount: "-110 323.99 ₽",
        amountUsd: "-1 290.49 USDT",
        type: "expense",
        status: "completed",
      },
      {
        id: 103,
        icon: <ShopIcon />,
        title: "Пополнение с карты",
        category: "Пополнение",
        amount: "+110 323.99 ₽",
        type: "income",
        status: "pending",
      },
    ],
  },
  {
    id: 2,
    date: "25 Октября",
    items: [
      {
        id: 201,
        icon: <ShopIcon />,
        title: "М.Видео",
        category: "Электроника",
        amount: "-110 323.99 ₽",
        amountUsd: "-1 290.49 USDT",
        type: "expense",
        status: "completed",
      },
      {
        id: 202,
        icon: <ShopIcon />,
        title: "Поступление на кошелек",
        category: "Пополнение",
        amount: "+110 323.99 USDT",
        type: "income",
        status: "warning",
      },
      {
        id: 203,
        icon: <ShopIcon />,
        title: "Перевод USDT TRC20",
        category: "Перевод",
        amount: "-1 290.99 USDT",
        type: "expense",
        status: "completed",
      },
    ],
  },
];

export type TransactionStatus = "pending" | "warning" | "completed";
export type TransactionType = "income" | "expense";
import type { TransactionGroup } from "@/widgets/history-widget/history.types";
import ShopIcon from "@/assets/icons/shop.svg?react"; // ⚡ для Vite

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
      },
      {
        id: 102,
        icon: <ShopIcon />,
        title: "Неопознанный магазин",
        category: "Покупка",
        amount: "-110 323.99 ₽",
        amountUsd: "-1 290.49 USDT",
        type: "expense",
      },
      {
        id: 103,
        icon: <ShopIcon />,
        title: "Пополнение с карты",
        category: "Пополнение",
        amount: "+110 323.99 ₽",
        type: "income",
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
      },
      {
        id: 202,
        icon: <ShopIcon />,
        title: "Поступление на кошелек",
        category: "Пополнение",
        amount: "+110 323.99 USDT",
        type: "income",
      },
      {
        id: 203,
        icon: <ShopIcon />,
        title: "Перевод USDT TRC20",
        category: "Перевод",
        amount: "-1 290.99 USDT",
        type: "expense",
      },
    ],
  },
];

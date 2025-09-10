import React, { useState } from "react";
import {
  HistoryWrapper,
  Header,
  Title,
  Tabs,
  TabButton,
  DateHeader,
  DateTitle,
  DateTotalWrapper,
  DateTotalMain,
  DateTotalSecondary,
  TransactionList,
  TransactionItem,
  TransactionLeft,
  IconCircle,
  TransactionInfo,
  TransactionTitle,
  TransactionCategory,
  TransactionRight,
  Amount,
  StatusIcon,
} from "./HistoryWidget.styled";

import { MOCK_TRANSACTIONS } from "./history.mocks";
import { mapTransactionToDetails, truncateText } from "./history.utils";
import type { TransactionData } from "@/features/overlay-transaction-details/transaction-details/TransactionDetails";
import { OverlayTransactionDetails } from "@/features/overlay-transaction-details/OverlayTransactionDetails";
import useApplicationStore from "@/shared/stores/application";

import ClockIcon from '@/assets/icons/clock.svg?react';
import ExclamationCircleIcon from '@/assets/icons/exclamation-circle.svg?react';

const TABS = [
  { id: "all", label: "Все" },
  { id: "payment", label: "Оплата" },
  { id: "deposit", label: "Пополнения" },
];

export const HistoryWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTx, setSelectedTx] = useState<TransactionData | null>(null);

  const { openModal, closeModal } = useApplicationStore();

  const handleCardClick = (tx: any) => {
    const mapped = mapTransactionToDetails(tx);
    setSelectedTx(mapped);
    setIsOpen(true);
    openModal("transaction-details");
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedTx(null);
    closeModal();
  };

  const filterTransactions = (type: string) => {
    if (type === "all") return MOCK_TRANSACTIONS;
    return MOCK_TRANSACTIONS.map((group) => ({
      ...group,
      items: group.items.filter((tx) =>
        type === "payment" ? tx.type === "expense" : tx.type === "income"
      ),
    })).filter((group) => group.items.length > 0);
  };

  const filtered = filterTransactions(activeTab);

  const renderStatusIcon = (tx: any) => {
    if (tx.type !== "income" || !tx.status) return null;

    switch (tx.status) {
      case "pending":
        return (
          <StatusIcon status="pending">
            <ClockIcon width={18} height={18} />
          </StatusIcon>
        );
      case "warning":
        return (
          <StatusIcon status="warning">
            <ExclamationCircleIcon width={18} height={18} />
          </StatusIcon>
        );
      default:
        return null;
    }
  };

  return (
    <HistoryWrapper>
      <Header>
        <Title>История транзакций</Title>
        <Tabs>
          {TABS.map((tab) => (
            <TabButton
              key={tab.id}
              $active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </TabButton>
          ))}
        </Tabs>
      </Header>

      {filtered.map((group) => {
        const total = group.items.reduce((acc, tx) => {
          const value = parseFloat(tx.amount.replace(/[^0-9.-]+/g, ""));
          return acc + (tx.type === "income" ? value : -value);
        }, 0);

        const totalUsd = total / 85;

        return (
          <div key={group.id}>
            <DateHeader>
              <DateTitle>{group.date}</DateTitle>
              <DateTotalWrapper>
                <DateTotalMain>
                  {total >= 0 ? "+" : "−"}{" "}
                  {Math.abs(total).toLocaleString("ru-RU")} ₽
                </DateTotalMain>
                <DateTotalSecondary>
                  {totalUsd >= 0 ? "+" : "−"}{" "}
                  {Math.abs(totalUsd).toFixed(2)} USDT
                </DateTotalSecondary>
              </DateTotalWrapper>
            </DateHeader>

            <TransactionList>
              {group.items.map((tx) => (
                <TransactionItem
                  key={tx.id}
                  onClick={() => handleCardClick(tx)}
                >
                  <TransactionLeft>
                    <IconCircle>{tx.icon}</IconCircle>
                    <TransactionInfo>
                      <TransactionTitle>{truncateText(tx.title, 20)}</TransactionTitle>
                      <TransactionCategory>{tx.category}</TransactionCategory>
                    </TransactionInfo>
                  </TransactionLeft>
                  <TransactionRight>
                    <Amount type={tx.type} >
                      {renderStatusIcon(tx)}
                      {tx.amount}

                    </Amount>
                    {tx.amountUsd && (
                      <Amount type={tx.type} secondary >
                        {tx.amountUsd}
                      </Amount>
                    )}
                  </TransactionRight>
                </TransactionItem>
              ))}
            </TransactionList>
          </div>
        );
      })}

      {selectedTx && (
        <OverlayTransactionDetails
          isOpen={isOpen}
          onClose={handleClose}
          transaction={selectedTx}
        />
      )}
    </HistoryWrapper>
  );
};

export default HistoryWidget;
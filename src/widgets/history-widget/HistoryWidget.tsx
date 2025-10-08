import React, { useState } from "react";
import {
  HistoryWrapper,
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
  StatusIcon, AmountSecondary
} from './HistoryWidget.styled'

import { MOCK_TRANSACTIONS } from "./history.mocks";
import { mapTransactionToDetails, truncateText } from "./history.utils";
import type { TransactionData } from "@/features/overlay-transaction-details/transaction-details/TransactionDetails";
import { OverlayTransactionDetails } from "@/features/overlay-transaction-details/OverlayTransactionDetails";
import useApplicationStore from "@/shared/stores/application";

import ClockIcon from "@/assets/icons/clock.svg?react";
import ExclamationCircleIcon from "@/assets/icons/exclamation-circle.svg?react";
import { useTranslation } from "react-i18next";
import { PageHeader } from "@/shared/components/PageHeader/PageHeader";

const TABS = [
  { id: "all", token: "history.tabs.all" },
  { id: "payment", token: "history.tabs.payment" },
  { id: "deposit", token: "history.tabs.deposit" },
];

interface HistoryWidgetProps {
  variant?: "default" | "card";
}

export const HistoryWidget: React.FC<HistoryWidgetProps> = ({ variant = "default" }) => {
  const [activeTab, setActiveTab] = useState("all");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTx, setSelectedTx] = useState<TransactionData | null>(null);

  const { openModal, closeModal } = useApplicationStore();
  const { t } = useTranslation();

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
    <HistoryWrapper $variant={variant}>
      <PageHeader title={t("history.title")}   showBackButton={false}/>

      <Tabs>
        {TABS.map((tab) => (
          <TabButton
            key={tab.id}
            $active={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {t(tab.token)}
          </TabButton>
        ))}
      </Tabs>

      {filtered.map((group) => {
        const total = group.items.reduce((acc, tx) => {
          const value = parseFloat(tx.amount.replace(/[^0-9.-]+/g, ""));
          return acc + (tx.type === "income" ? value : -value);
        }, 0);

        const totalUsd = total / 85;

        return (
          <div key={group.id}>
            <DateHeader>
              <DateTitle>{t(group.date)}</DateTitle>
              <DateTotalWrapper>
                <DateTotalMain>
                  {total >= 0 ? "+" : "−"} {Math.abs(total).toLocaleString("ru-RU")} ₽
                </DateTotalMain>
                <DateTotalSecondary>
                  {totalUsd >= 0 ? "+" : "−"} {Math.abs(totalUsd).toFixed(2)} USDT
                </DateTotalSecondary>
              </DateTotalWrapper>
            </DateHeader>

            <TransactionList>
              {group.items.map((tx) => (
                <TransactionItem key={tx.id} onClick={() => handleCardClick(tx)}>
                  <TransactionLeft>
                    <IconCircle>{tx.icon}</IconCircle>
                    <TransactionInfo>
                      <TransactionTitle>
                        {truncateText(t(tx.title), 20)}
                      </TransactionTitle>
                      <TransactionCategory>{t(tx.category)}</TransactionCategory>
                    </TransactionInfo>
                  </TransactionLeft>
                  <TransactionRight>
                    <Amount type={tx.type}>
                      {renderStatusIcon(tx)} {tx.amount}
                    </Amount>
                    {tx.amountUsd && (
                      <AmountSecondary type={tx.type}>
                        {tx.amountUsd}
                      </AmountSecondary>
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

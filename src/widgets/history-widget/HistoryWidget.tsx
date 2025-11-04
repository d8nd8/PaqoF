import React, { useEffect, useState, useRef, useCallback } from "react";
import { getOperationById } from '@/api/services/operation/operation.service';
import ClockIcon from "@/assets/icons/clock.svg?react";
import DepositIcon from "@/assets/icons/deposit.svg?react";
import ExclamationCircleIcon from "@/assets/icons/exclamation-circle.svg?react";
import TransferIcon from "@/assets/icons/transfer.svg?react";
import { OverlayTransactionDetails } from '@/features/overlay-transaction-details/OverlayTransactionDetails';
import type { TransactionData } from "@/features/overlay-transaction-details/transaction-details/TransactionDetails";
import { PageHeader } from "@/shared/components/PageHeader/PageHeader";
import useApplicationStore from "@/shared/stores/application";
import useUserStore from "@/shared/stores/user";
import useWalletStore from "@/shared/stores/wallet";
import { useTranslation } from "react-i18next";

import { mapOperationToTransactionData, truncateText } from "./history.utils";
import {
  Amount,
  AmountSecondary,
  DateHeader,
  DateTitle,
  DateTotalMain,
  DateTotalSecondary,
  DateTotalWrapper,
  HistoryWrapper,
  IconCircle,
  StatusIcon,
  TabButton,
  Tabs,
  TransactionCategory,
  TransactionInfo,
  TransactionItem,
  TransactionLeft,
  TransactionList,
  TransactionRight,
  TransactionTitle,
} from "./HistoryWidget.styled";
import type { Operation } from '@/api/services/operation/schemes/operation.schemas';

const TABS = [
  { id: "all", token: "history.tabs.all" },
  { id: "payment", token: "history.tabs.payment" },
  { id: "deposit", token: "history.tabs.deposit" },
];

const PAGE_SIZE = 20;

interface HistoryWidgetProps {
  variant?: "default" | "card";
  walletId?: string;
}

export const HistoryWidget: React.FC<HistoryWidgetProps> = ({
                                                              variant = "default",
                                                              walletId,
                                                            }) => {
  const [activeTab, setActiveTab] = useState("all");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTx, setSelectedTx] = useState<TransactionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const loaderRef = useRef<HTMLDivElement | null>(null);

  const { openModal, closeModal } = useApplicationStore();
  const { fetchUserOperations, operations: userOps } = useUserStore();
  const { fetchWalletOperations, operations: walletOps } = useWalletStore();
  const { t } = useTranslation();

  const currentOperations =
    variant === "card" && walletId
      ? walletOps[walletId] || []
      : userOps || [];


  const loadPage = useCallback(async () => {
    setIsLoading(true);
    try {
      if (variant === "card" && walletId) {
        const newOps = await fetchWalletOperations(walletId, PAGE_SIZE, page * PAGE_SIZE);
        if (!newOps.length) setHasMore(false);
      } else {
        const newOps = await fetchUserOperations(PAGE_SIZE, page * PAGE_SIZE);
        if (!newOps.length) setHasMore(false);
      }
    } catch (e) {
      console.error("Ошибка при загрузке операций:", e);
    } finally {
      setIsLoading(false);
    }
  }, [variant, walletId, page, fetchUserOperations, fetchWalletOperations]);

  useEffect(() => {
    loadPage();
  }, [loadPage]);


  useEffect(() => {
    if (!hasMore || isLoading) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1.0 }
    );
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [hasMore, isLoading]);


  const handleCardClick = async (tx: Operation) => {
    try {
      setIsLoading(true);
      const fullOp = await getOperationById(tx.operationId);
      const mapped = mapOperationToTransactionData(fullOp);
      setSelectedTx(mapped);
      setIsOpen(true);
      openModal("transaction-details");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedTx(null);
    closeModal();
  };


  const mapOperationType = (type: string) => {
    switch (type) {
      case "DEPOSIT":
        return {
          icon: <DepositIcon />,
          title: t("history.transactions.walletDeposit"),
          category: t("history.categories.deposit"),
          txType: "income" as const,
        };
      case "WITHDRAW":
        return {
          icon: <TransferIcon />,
          title: t("history.transactions.usdtTransfer"),
          category: t("history.categories.transfer"),
          txType: "expense" as const,
        };
      case "TRANSFER":
        return {
          icon: <TransferIcon />,
          title: t("history.transactions.transfer"),
          category: t("history.categories.transfer"),
          txType: "expense" as const,
        };
      default:
        return {
          icon: <TransferIcon />,
          title: type,
          category: "",
          txType: "expense" as const,
        };
    }
  };


  const renderStatusIcon = (apiStatus: string, txType: "income" | "expense") => {
    if (txType !== "income") return null;

    const statusMap: Record<string, "pending" | "warning" | "completed" | undefined> = {
      PENDING: "pending",
      PROCESSING: "pending",
      WARNING: "warning",
      FAILED: "warning",
      CONFIRMED: "completed",
      COMPLETED: "completed",
    };

    const mapped = statusMap[apiStatus];
    if (!mapped) return null;

    switch (mapped) {
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

  if (isLoading && !currentOperations.length) {
    return (
      <HistoryWrapper $variant={variant}>
        <PageHeader title={t("history.title")} showBackButton={false} />
        <p style={{ textAlign: "center", marginTop: 40 }}>
          {t("common.loading")}
        </p>
      </HistoryWrapper>
    );
  }

  if (!currentOperations?.length) {
    return (
      <HistoryWrapper $variant={variant}>
        <PageHeader title={t("history.title")} showBackButton={false} />
        <p style={{ textAlign: "center", marginTop: 40 }}>
          {t("history.empty")}
        </p>
      </HistoryWrapper>
    );
  }


  const filteredOps =
    activeTab === "all"
      ? currentOperations
      : currentOperations.filter((op) =>
        activeTab === "deposit"
          ? op.operationType === "DEPOSIT"
          : op.operationType === "WITHDRAW"
      );

  const groupedByDate = filteredOps.reduce<Record<string, typeof filteredOps>>(
    (acc, op) => {
      const date = new Date(op.createdAt).toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
      });
      if (!acc[date]) acc[date] = [];
      acc[date].push(op);
      return acc;
    },
    {}
  );

  return (
    <HistoryWrapper $variant={variant}>
      <PageHeader title={t("history.title")} showBackButton={false} />

      <Tabs>
        {TABS.map((tab) => (
          <TabButton
            key={tab.id}
            $active={activeTab === tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setPage(0);
              setHasMore(true);
            }}
          >
            {t(tab.token)}
          </TabButton>
        ))}
      </Tabs>

      {Object.entries(groupedByDate).map(([date, ops]) => {
        const total = ops.reduce((sum, op) => sum + parseFloat(op.amount), 0);
        const totalUsd = total / 85;

        return (
          <div key={date}>
            <DateHeader>
              <DateTitle>{date}</DateTitle>
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
              {ops.map((op) => {
                const { icon, title, category, txType } = mapOperationType(op.operationType);
                return (
                  <TransactionItem
                    key={op.operationId}
                    onClick={() => handleCardClick(op)}
                  >
                    <TransactionLeft>
                      <IconCircle>{icon}</IconCircle>
                      <TransactionInfo>
                        <TransactionTitle>{truncateText(title, 24)}</TransactionTitle>
                        <TransactionCategory>{category}</TransactionCategory>
                      </TransactionInfo>
                    </TransactionLeft>
                    <TransactionRight>
                      <Amount type={txType}>
                        {renderStatusIcon(op.status, txType)} {op.amount}
                      </Amount>
                      <AmountSecondary type={txType}>
                        {op.totalAmount} USDT
                      </AmountSecondary>
                    </TransactionRight>
                  </TransactionItem>
                );
              })}
            </TransactionList>
          </div>
        );
      })}

      {hasMore && (
        <div ref={loaderRef} style={{ height: 40, textAlign: "center", marginTop: 10 }}>
          {isLoading ? t("common.loading") : ""}
        </div>
      )}

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

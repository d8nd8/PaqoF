import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CurrencyWrapper,
  Header,
  Title,
  BackButton,
  BalanceWrapper,
  BalanceSection,
  BalanceAmount,
  BalanceFiat,
  ActionsRow,
  ChainList,
  ChainTypeCard,
  ChainIcon,
  ChainContent,
  ChainRow,
  ChainHeader,
  ChainTitle,
  ChainBadge,
  ChainAddress,
  ChainFee,
  CopyButton,
  CopyNotification,
  CopyGroup,
} from "./CurrencyWidget.styled";

import TetherIcon from "@/assets/icons/usdt-icon.svg?react";
import TonIcon from "@/assets/icons/ton-icon.svg?react";
import BtcIcon from "@/assets/icons/bitcoin-icon.svg?react";
import CopyIcon from "@/assets/icons/copy.svg?react";
import QrIcon from "@/assets/icons/qr.svg?react";
import CheckIcon from "@icons/check.svg?react";
import ChevronLeftIcon from "@icons/chevron-left.svg?react";

import PlusCircleIcon from "@icons/plus-circle.svg?react";
import SendIcon from "@icons/send.svg?react";
import QRPayIcon from "@icons/qr.svg?react";

import HistoryWidget from "@/widgets/history-widget/HistoryWidget";
import { ActionItem } from "@/shared/components/ActionItem/ActionItem";
import { useTranslation } from "react-i18next";

interface CurrencyWidgetProps {
  symbol: string;
  onShowScanner?: () => void;
  onTopUp?: () => void;
  onSend?: () => void;
}

const NETWORK_BADGE = "TRC20";

const CURRENCY_DATA: Record<
  string,
  {
    name: string;
    amount: string;
    fiat: string;
    chains: {
      address: string;
      icon: React.ReactNode;
      chainTitle: string;
      badge: string;
      fee: string;
    }[];
  }
> = {
  USDT: {
    name: "USDT",
    amount: "1 290.49 USDT",
    fiat: "110 323.99 ₽",
    chains: [
      {
        address: "Zafa74A...FqfQv123",
        icon: <TetherIcon width={64} height={64} />,
        chainTitle: "USDT",
        badge: NETWORK_BADGE,
        fee: "2.75 USDT",
      },
    ],
  },
  TON: {
    name: "TON",
    amount: "580.00 TON",
    fiat: "144 426.19 ₽",
    chains: [
      {
        address: "Ton123...abcd567",
        icon: <TonIcon width={64} height={64} />,
        chainTitle: "TON",
        badge: NETWORK_BADGE,
        fee: "0.5 TON",
      },
    ],
  },
  BTC: {
    name: "Bitcoin",
    amount: "0.0041 BTC",
    fiat: "34 880.61 ₽",
    chains: [
      {
        address: "bc1qxy2...ncsw354",
        icon: <BtcIcon width={64} height={64} />,
        chainTitle: "BTC",
        badge: NETWORK_BADGE,
        fee: "0.0001 BTC",
      },
    ],
  },
};

export const CurrencyWidget: React.FC<CurrencyWidgetProps> = ({
                                                                symbol,
                                                                onShowScanner,
                                                                onTopUp,
                                                                onSend,
                                                              }) => {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const data = CURRENCY_DATA[symbol] || CURRENCY_DATA["USDT"];

  const handleCopy = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const chainsToRender =
    data.chains.length === 1 ? [...data.chains, ...data.chains] : data.chains;

  return (
    <>
      <CurrencyWrapper>
        <Header>
          <BackButton onClick={() => navigate(-1)}>
            <ChevronLeftIcon />
          </BackButton>
          <Title>{data.name}</Title>
        </Header>

        <BalanceWrapper>
          {copied && (
            <CopyNotification>
              <CheckIcon />
              {t("currency.copyNotification")}
            </CopyNotification>
          )}
          <BalanceSection>
            {data.chains[0].icon}
            <BalanceAmount>{data.amount}</BalanceAmount>
            <BalanceFiat>{data.fiat}</BalanceFiat>
          </BalanceSection>
        </BalanceWrapper>

        <ActionsRow>
          <ActionItem
            icon={<PlusCircleIcon />}
            label={t("currency.actions.topUp")}
            onClick={onTopUp}
            variant="secondary"
          />
          <ActionItem
            icon={<SendIcon />}
            label={t("currency.actions.send")}
            onClick={onSend}
            variant="secondary"
          />
          <ActionItem
            icon={<QRPayIcon />}
            label={t("currency.actions.pay")}
            onClick={onShowScanner}
            variant="secondary"
          />
        </ActionsRow>

        <ChainList>
          {chainsToRender.map((chain, index) => (
            <ChainTypeCard key={`${chain.address}-${index}`}>
              <ChainIcon>{chain.icon}</ChainIcon>
              <ChainContent>
                <ChainRow>
                  <ChainHeader>
                    <ChainTitle>{chain.chainTitle}</ChainTitle>
                    <ChainBadge>{NETWORK_BADGE}</ChainBadge>
                  </ChainHeader>
                  <CopyGroup>
                    <CopyButton onClick={onShowScanner}>
                      <QrIcon width={20} height={20} />
                    </CopyButton>
                    <CopyButton onClick={() => handleCopy(chain.address)}>
                      <CopyIcon width={20} height={20} />
                    </CopyButton>
                  </CopyGroup>
                </ChainRow>
                <ChainAddress>{chain.address}</ChainAddress>
                <ChainFee>{t("currency.fee", { value: chain.fee })}</ChainFee>
              </ChainContent>
            </ChainTypeCard>
          ))}
        </ChainList>
      </CurrencyWrapper>
      <HistoryWidget variant="card" />
    </>
  );
};

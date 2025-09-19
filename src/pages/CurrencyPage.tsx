import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BaseLayout } from "@/widgets/base-layout";
import { CurrencyWidget } from "@/widgets/currency-widget/CurrencyWidget";
import { DepositOverlay } from "@/features/deposit-overlay/DepositOverlay";
import {
  WalletDepositOverlay,
  type WalletDepositMode,
} from "@/features/overlay-wallet-deposit/WalletDepositOverlay";
import { WalletAddressOverlay } from "@/features/overlay-wallet-address/WalletAddressOverlay";
import { WalletTransferOverlay } from "@/features/overlay-wallet-transfer/WalletTransferOverlay";
import { OverlayCommission } from "@/features/overlay-commission/OverlayCommission";
import QRScanner from "@/features/qr-scanner/QRScanner";
import { type CryptoItemData } from "@/features/crypto-list/CryptoList";

const CURRENCY_MAP: Record<string, CryptoItemData> = {
  USDT: {
    id: "usdt-1",
    name: "USDT",
    symbol: "USDT",
    amount: "1 290.53 USDT",
    amountInRubles: "110 323.99 ₽",
    iconColor: "#26A17B",
  },
  TON: {
    id: "ton-1",
    name: "Toncoin",
    symbol: "TON",
    amount: "590.00 TON",
    amountInRubles: "144 426.19 ₽",
    iconColor: "#0088CC",
  },
  BTC: {
    id: "btc-1",
    name: "Bitcoin",
    symbol: "BTC",
    amount: "0.0041 BTC",
    amountInRubles: "34 880.61 ₽",
    iconColor: "#F7931A",
  },
};

export const CurrencyPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const symbol = searchParams.get("symbol") || "USDT";

  const preselectedCrypto = CURRENCY_MAP[symbol] || CURRENCY_MAP["USDT"];

  const [showDeposit, setShowDeposit] = useState(false);
  const [showWalletDeposit, setShowWalletDeposit] =
    useState<WalletDepositMode | null>(null);
  const [showWalletAddress, setShowWalletAddress] = useState(false);
  const [showWalletTransfer, setShowWalletTransfer] = useState(false);
  const [showCommission, setShowCommission] = useState(false);
  const [showScanner, setShowScanner] = useState(false);

  const [selectedCrypto, setSelectedCrypto] =
    useState<CryptoItemData | null>(null);
  const [selectedNetwork, setSelectedNetwork] = useState<string>("");

  const hideNavbar =
    showDeposit ||
    !!showWalletDeposit ||
    showWalletAddress ||
    showWalletTransfer ||
    showCommission ||
    showScanner;

  const handlePay = () => {
    setShowScanner(false);
  };

  return (
    <BaseLayout showNavbar={!hideNavbar}>
      <CurrencyWidget
        symbol={symbol}
        onShowScanner={() => setShowScanner(true)}
        onTopUp={() => setShowDeposit(true)}
        onSend={() => setShowWalletDeposit("transfer")}
      />

      {showDeposit && (
        <DepositOverlay
          onClose={() => setShowDeposit(false)}
          onSelectWallet={() => {
            setShowDeposit(false);
            setShowWalletDeposit("deposit");
          }}
        />
      )}

      {showWalletDeposit && (
        <WalletDepositOverlay
          isOpen={!!showWalletDeposit}
          onClose={() => setShowWalletDeposit(null)}
          mode={showWalletDeposit}
          preselectedCrypto={preselectedCrypto}
          onContinue={(crypto, network, mode) => {
            setSelectedCrypto(crypto);
            setSelectedNetwork(network);
            setShowWalletDeposit(null);

            if (mode === "deposit") {
              setShowWalletAddress(true);
            } else if (mode === "transfer") {
              setShowWalletTransfer(true);
            }
          }}
        />
      )}

      {selectedCrypto && (
        <WalletAddressOverlay
          isOpen={showWalletAddress}
          onClose={() => setShowWalletAddress(false)}
          cryptoName={selectedCrypto.name}
          network={selectedNetwork}
          address="TQK32pDx2EkZrNWbi8dFSNTjS87FV2uH4"
          commission="2.75 USDT"
          onCommissionClick={() => setShowCommission(true)}
        />
      )}

      {selectedCrypto && (
        <WalletTransferOverlay
          isOpen={showWalletTransfer}
          onClose={() => setShowWalletTransfer(false)}
          crypto={selectedCrypto}
          commission="2.75 USDT"
          onCommissionClick={() => setShowCommission(true)}
        />
      )}

      <OverlayCommission
        isOpen={showCommission}
        onClose={() => setShowCommission(false)}
        title="Почему комиссия?"
        description="Комиссия списывается для покрытия расходов на сеть. Она фиксирована и отображается перед отправкой."
        buttonText="Понятно"
      />

      <QRScanner
        isVisible={showScanner}
        onScan={handlePay}
        onClose={() => setShowScanner(false)}
      />
    </BaseLayout>
  );
};

export default CurrencyPage;

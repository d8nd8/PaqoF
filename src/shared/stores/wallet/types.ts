import type { Operation, OperationList } from '@/api/services/operation/schemes/operation.schemas';
import type { Rate } from '@/api/services/rapira/schemes/rates.schema';
import type { WalletCurrencyList } from '@/api/services/wallet/schemes/currency.schema';
import type { Wallet, WalletList } from '@/api/services/wallet/schemes/wallet.schemas';
import type { WithdrawRequest } from '@/api/services/wallet/schemes/withdraw.schemas';
import type { SbpPaymentCreateRequest, SbpPaymentResponse } from '@/api/services/wallet/schemes/payment.schema';

export default interface IWalletStore {
  wallets: Wallet[];
  currencies: WalletCurrencyList | null;
  operations: Record<string, Operation[]>;
  loading: boolean;
  rates: Rate[];
  selectedWallet: Wallet | null;

  fetchWallets: () => Promise<WalletList>;
  fetchWalletById: (walletId: string) => Promise<Wallet>;
  fetchWalletCurrencies: () => Promise<WalletCurrencyList>;
  withdraw: (walletId: string, payload: WithdrawRequest) => Promise<Operation>;
  fetchWalletOperations: (walletId: string, limit?: number, offset?: number) => Promise<OperationList>;
  createPayment: (walletId: string, payload: SbpPaymentCreateRequest) => Promise<SbpPaymentResponse>;

  fetchRates: () => Promise<Rate[]>;
  getRateToRub: (currency: string) => number | null;
}

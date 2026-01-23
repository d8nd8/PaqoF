import { create } from 'zustand';
import * as walletApi from '@/api/services/wallet/wallet.service';
import * as rapiraApi from '@/api/services/rapira/rapira.service';
import type IWalletStore from './types';
import type { Wallet } from '@/api/services/wallet/schemes/wallet.schemas';

const useWalletStore = create<IWalletStore>((set, get) => ({
  wallets: [],
  currencies: null,
  operations: {},
  loading: false,
  rates: [],
  selectedWallet: null,

  fetchWallets: async (force = false) => {
    const { wallets } = get();
    if (wallets.length > 0 && !force) {
      return wallets;
    }

    set({ loading: true });
    try {
      console.log('🔄 Fetching wallets from API...');
      const wallets = await walletApi.getWallets();
      console.log('✅ Wallets fetched successfully:', wallets);
      console.log('📊 Wallets data:', wallets.map(w => ({
        currency: w.currency,
        addressesCount: w.addresses?.length || 0,
        addresses: w.addresses
      })));
      set({ wallets });
      return wallets;
    } catch (error) {
      console.error('❌ Failed to fetch wallets:', error);
      if (error instanceof Error) {
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
      }
      // Не очищаем существующие кошельки при ошибке, чтобы UI не сломался
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  fetchWalletById: async (walletId: string) => {
    set({ loading: true });
    try {
      const wallet: Wallet = await walletApi.getWalletById(walletId);
      set({ selectedWallet: wallet });
      return wallet;
    } finally {
      set({ loading: false });
    }
  },

  fetchWalletCurrencies: async () => {
    const { currencies } = get();
    if (currencies) {
      return currencies;
    }

    const currenciesResp = await walletApi.getWalletCurrencies();
    set({ currencies: currenciesResp });
    return currenciesResp;
  },

  withdraw: async (walletId, payload) => {
    return await walletApi.withdrawFromWallet(walletId, payload);
  },

  fetchWalletOperations: async (walletId, limit, offset) => {
    const ops = await walletApi.getWalletOperations(walletId, { limit, offset });

    set((state) => {
      const prevOps = state.operations[walletId] || [];
      const newOps = [...prevOps];

      ops.forEach((op) => {
        if (!prevOps.some((prev) => prev.operationId === op.operationId)) {
          newOps.push(op);
        }
      });

      return {
        operations: {
          ...state.operations,
          [walletId]: newOps,
        },
      };
    });

    return ops;
  },

  createPayment: async (walletId, payload) => {
    return await walletApi.createSbpPayment(walletId, payload);
  },

  fetchRates: async (currency: string): Promise<number | null> => {
    try {
      const rate = await rapiraApi.getRates({ currency });
      set((state) => {
        const filtered = state.rates.filter((r) => r.symbol !== rate.symbol);
        return { rates: [...filtered, rate] };
      });

      if (
        rate.baseCurrency.toUpperCase() === 'RUB' &&
        rate.quoteCurrency.toUpperCase() === currency.toUpperCase()
      ) {
        return rate.close;
      }

      return null;
    } catch  {
      return null;
    }
  },


  getRateToRub: (currency: string): number | null => {
    const { rates } = get();
    if (!rates.length) return null;

    if (currency === 'RUB') return 1;

    const direct = rates.find((r) => r.symbol === `${currency}/RUB`);
    if (direct) return direct.close;

    const viaUsdt = rates.find((r) => r.symbol === `${currency}/USDT`);
    const usdtRub = rates.find((r) => r.symbol === 'USDT/RUB');
    if (viaUsdt && usdtRub) {
      return viaUsdt.close * usdtRub.close;
    }

    return null;
  },
}));

export default useWalletStore;

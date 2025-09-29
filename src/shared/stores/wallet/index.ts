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

  fetchWallets: async () => {
    const { wallets } = get();
    if (wallets.length > 0) {
      return wallets;
    }

    set({ loading: true });
    try {
      const wallets = await walletApi.getWallets();
      set({ wallets });
      return wallets;
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
    set((state) => ({
      operations: {
        ...state.operations,
        [walletId]: ops,
      },
    }));
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

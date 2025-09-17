import { create } from 'zustand';
import * as walletApi from '@/api/services/wallet/wallet.service';
import type IWalletStore from './types';

const useWalletStore = create<IWalletStore>((set, get) => ({
  wallets: [],
  currencies: null,
  operations: {},
  loading: false,

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

  fetchWalletById: async (walletId) => {
    return await walletApi.getWalletById(walletId);
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
}));

export default useWalletStore;

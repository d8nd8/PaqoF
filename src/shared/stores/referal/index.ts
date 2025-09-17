import { create } from 'zustand';
import * as referralApi from '@/api/services/referal/referral.service';
import type IReferralStore from './types';

const useReferralStore = create<IReferralStore>((set, get) => ({
  info: null,
  operations: null,
  loading: false,

  fetchReferralInfo: async () => {
    const { info } = get();
    if (info) return info;

    set({ loading: true });
    try {
      const data = await referralApi.getReferralInfo();
      set({ info: data });
      return data;
    } finally {
      set({ loading: false });
    }
  },

  fetchReferralOperations: async (limit, offset) => {
    set({ loading: true });
    try {
      const data = await referralApi.getReferralOperations({ limit, offset });
      set({ operations: data });
      return data;
    } finally {
      set({ loading: false });
    }
  },

  updateReferralType: async (payload) => {
    set({ loading: true });
    try {
      await referralApi.setReferralType(payload);
      const updatedInfo = await referralApi.getReferralInfo();
      set({ info: updatedInfo });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useReferralStore;

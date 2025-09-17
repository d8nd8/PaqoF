import { create } from 'zustand';
import * as userApi from '@/api/services/user/user.service';
import type IUserStore from './types';

const useUserStore = create<IUserStore>((set) => ({
  isAuthenticated: !!localStorage.getItem('access-token'),
  loading: false,
  operations: null,

  login: async (payload) => {
    set({ loading: true });
    try {
      await userApi.login(payload);

      localStorage.setItem('access-token', 'FAKE_TOKEN');
      localStorage.setItem('authentication-method', 'Bearer');

      set({ isAuthenticated: true });
    } finally {
      set({ loading: false });
    }
  },

  changeEntryCode: async (payload) => {
    set({ loading: true });
    try {
      await userApi.changeEntryCode(payload);
    } finally {
      set({ loading: false });
    }
  },

  fetchUserOperations: async (limit, offset) => {
    set({ loading: true });
    try {
      const ops = await userApi.getUserOperations({ limit, offset });
      set({ operations: ops });
      return ops;
    } finally {
      set({ loading: false });
    }
  },

  logout: () => {
    localStorage.removeItem('access-token');
    localStorage.removeItem('authentication-method');
    set({ isAuthenticated: false, operations: null });
  },
}));

export default useUserStore;

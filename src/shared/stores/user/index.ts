import { create } from 'zustand';
import * as userApi from '@/api/services/user/user.service';
import type IUserStore from './types';
import type { TelegramUser } from '@/shared/types/user'

function parseTelegramUser(initData: string): TelegramUser | null {
  try {
    const params = new URLSearchParams(initData);
    const rawUser = params.get('user');
    if (!rawUser) return null;

    const parsed = JSON.parse(rawUser);
    return {
      id: parsed.id,
      firstName: parsed.first_name,
      lastName: parsed.last_name,
      username: parsed.username,
      languageCode: parsed.language_code,
      isPremium: parsed.is_premium,
      photoUrl: parsed.photo_url,
    } as TelegramUser;
  } catch {
    return null;
  }
}

const useUserStore = create<IUserStore>((set) => ({
  isAuthenticated: !!localStorage.getItem('access-token'),
  loading: false,
  operations: null,
  token: localStorage.getItem('access-token'),
  user: localStorage.getItem('telegram-user')
    ? JSON.parse(localStorage.getItem('telegram-user')!)
    : null,

  setUserData: (initData: string) => {
    const user = parseTelegramUser(initData);
    localStorage.setItem('access-token', initData);
    localStorage.setItem('authentication-method', 'Bearer');
    if (user) {
      localStorage.setItem('telegram-user', JSON.stringify(user));
    }
    set({
      isAuthenticated: true,
      token: initData,
      user,
    });
  },

  login: async (payload) => {
    set({ loading: true });
    try {
      await userApi.login(payload);
      set({ isAuthenticated: true });
    } finally {
      set({ loading: false });
    }
  },

  setEntryCode: async (payload) => {
    set({ loading: true });
    try {
      await userApi.setEntryCode(payload);
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
    localStorage.removeItem('telegram-user');
    set({
      isAuthenticated: false,
      operations: null,
      token: null,
      user: null,
    });
  },
}));

export default useUserStore;

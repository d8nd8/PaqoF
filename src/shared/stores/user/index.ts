import { create } from 'zustand';
import * as userApi from '@/api/services/user/user.service';
import type IUserStore from './types';
import type { TelegramUser } from '@/shared/types/user';

function parseTelegramUser(initData: string): TelegramUser | null {
  try {
    console.log('[parseTelegramUser] initData:', initData);
    const params = new URLSearchParams(initData);
    const rawUser = params.get('user');
    console.log('[parseTelegramUser] rawUser:', rawUser);
    
    if (!rawUser) {
      console.warn('[parseTelegramUser] user parameter not found in initData');
      return null;
    }

    const parsed = JSON.parse(rawUser);
    console.log('[parseTelegramUser] parsed user:', parsed);
    
    const user = {
      id: parsed.id,
      firstName: parsed.first_name,
      lastName: parsed.last_name,
      username: parsed.username,
      languageCode: parsed.language_code,
      isPremium: parsed.is_premium,
      photoUrl: parsed.photo_url,
    } as TelegramUser;
    
    console.log('[parseTelegramUser] final user:', user);
    return user;
  } catch (error) {
    console.error('[parseTelegramUser] error:', error);
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
    console.log('[setUserData] received initData:', initData);
    const params = new URLSearchParams(initData);
    // Не удаляем query_id - возможно, сервер его ожидает для проверки подписи
    // params.delete("query_id");

    const filteredInitData = params.toString();
    console.log('[setUserData] filteredInitData (with query_id):', filteredInitData);
    
    const user = parseTelegramUser(filteredInitData);
    console.log('[setUserData] parsed user:', user);

    localStorage.setItem("access-token", filteredInitData);
    localStorage.setItem("authentication-method", "Bearer");

    if (user) {
      localStorage.setItem("telegram-user", JSON.stringify(user));
      console.log('[setUserData] user saved to localStorage');
    } else {
      console.warn('[setUserData] user is null, not saving to localStorage');
    }

    set({
      isAuthenticated: true,
      token: filteredInitData,
      user,
    });
    
    console.log('[setUserData] store updated, user:', user);
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

  // relogin: async (pin) => {
  //   const user = get().user;
  //   if (!user?.id) return false;
  //   try {
  //     const data = await userApi.login({ telegramId: user.id, entryCode: pin });
  //     localStorage.setItem('access-token', data.accessToken);
  //     localStorage.setItem('authentication-method', 'Bearer');
  //     set({ isAuthenticated: true });
  //     return true;
  //   } catch {
  //     return false;
  //   }
  // },

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

  deleteEntryCode: async (payload) => {
    set({ loading: true });
    try {
      await userApi.deleteEntryCode(payload);
    } finally {
      set({ loading: false });
    }
  },

  fetchUserOperations: async (limit, offset) => {
    set({ loading: true });
    try {
      const ops = await userApi.getUserOperations({ limit, offset });

      set((state) => ({
        operations: state.operations
          ? [
            ...state.operations,
            ...ops.filter(
              (op) =>
                !state.operations!.some(
                  (existing) => existing.operationId === op.operationId
                )
            ),
          ]
          : ops,
      }));

      return ops;
    } finally {
      set({ loading: false });
    }
  },
}));

export default useUserStore;

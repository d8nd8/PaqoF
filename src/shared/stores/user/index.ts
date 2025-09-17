import { create } from 'zustand';
import * as userApi from '@/api/services/user/user.service';
import type IUserStore from './types';

const TELEGRAM_INIT_DATA =
  'user=%7B%22id%22%3A1888095988%2C%22first_name%22%3A%22Andrey%22%2C%22last_name%22%3A%22Rays%22%2C%22username%22%3A%22RaysRU%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2F0hS8FCr_WPj1HTJsXxly8-Evow22PKuuy2kMarWbVB4.svg%22%7D&chat_instance=-211613851202680421&chat_type=private&auth_date=1758118778&signature=-qX9VSJ5RfT4NEXE1rwUMsmaDf-QQKVlQ9O-hrQNrM7WBaOHKKK-ypC_M8I90fnpT2uYEzCzhwvKLWpRgB1YDw&hash=b6a392c7503c7b3cb41772a5175d5eb7938fb560fae3d28cbfd3e68e8596917a';

const useUserStore = create<IUserStore>((set) => ({
  isAuthenticated: !!localStorage.getItem('access-token'),
  loading: false,
  operations: null,

  login: async (payload) => {
    set({ loading: true });
    try {
      await userApi.login(payload);

      localStorage.setItem('access-token', TELEGRAM_INIT_DATA);
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

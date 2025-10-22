import type { OperationList } from '@/api/services/operation/schemes/operation.schemas';
import type { LoginRequest } from '@/api/services/user/schemas/login.schema';
import type { ChangeEntryCodeRequest, SetEntryCodeRequest } from '@/api/services/user/schemas/change-code.schema'
import type { TelegramUser } from '@/shared/types/user'
import type { DeleteEntryCodeRequest } from '@/api/services/user/schemas/delete-code.schema'

export default interface IUserStore {
  isAuthenticated: boolean;
  loading: boolean;
  operations: OperationList | null;
  token: string | null;
  user: TelegramUser | null;

  setUserData: (initData: string) => void;
  login: (payload: LoginRequest) => Promise<void>;
  setEntryCode: (payload: SetEntryCodeRequest) => Promise<void>;
  changeEntryCode: (payload: ChangeEntryCodeRequest) => Promise<void>;
  deleteEntryCode: (payload: DeleteEntryCodeRequest) => Promise<void>;
  fetchUserOperations: (limit?: number, offset?: number) => Promise<OperationList>;
  logout: () => void;
  relogin: (pin: string) => Promise<boolean>;
}
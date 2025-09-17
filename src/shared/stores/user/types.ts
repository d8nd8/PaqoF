import type { OperationList } from '@/api/services/operation/schemes/operation.schemas';
import type { LoginRequest } from '@/api/services/user/schemas/login.schema';
import type { ChangeEntryCodeRequest } from '@/api/services/user/schemas/change-code.schema';

export default interface IUserStore {
  isAuthenticated: boolean;
  loading: boolean;
  operations: OperationList | null;

  login: (payload: LoginRequest) => Promise<void>;
  changeEntryCode: (payload: ChangeEntryCodeRequest) => Promise<void>;
  fetchUserOperations: (limit?: number, offset?: number) => Promise<OperationList>;
  logout: () => void;
}

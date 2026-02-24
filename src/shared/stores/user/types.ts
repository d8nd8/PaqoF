import type { OperationList } from '@/api/services/operation/schemes/operation.schemas'
import type {
  ChangeEntryCodeRequest,
  SetEntryCodeRequest,
} from '@/api/services/user/schemas/change-code.schema'
import type { DeleteEntryCodeRequest } from '@/api/services/user/schemas/delete-code.schema'
import type { LoginRequest } from '@/api/services/user/schemas/login.schema'
import type { TelegramUser } from '@/shared/types/user'

export default interface IUserStore {
  isAuthenticated: boolean
  isPinVerified: boolean
  isPinRequired: boolean
  loading: boolean
  operations: OperationList | null
  token: string | null
  user: TelegramUser | null
  userFromServer: { isNewUser: boolean } | null

  setUserData: (initData: string) => void
  setIsPinVerified: (value: boolean) => void
  login: (payload: LoginRequest) => Promise<void>
  auth: () => Promise<void>
  setEntryCode: (payload: SetEntryCodeRequest) => Promise<void>
  changeEntryCode: (payload: ChangeEntryCodeRequest) => Promise<void>
  deleteEntryCode: (payload: DeleteEntryCodeRequest) => Promise<void>
  fetchUserOperations: (limit?: number, offset?: number) => Promise<OperationList>
  // relogin: (pin: string) => Promise<boolean>;
}

import type { ReferralInfo, ReferralOperationsResponse, SetReferralTypeRequest } from '@/api/services/referal/schemes/referal.schemas';

export default interface IReferralStore {
  info: ReferralInfo | null;
  operations: ReferralOperationsResponse | null;
  loading: boolean;

  fetchReferralInfo: () => Promise<ReferralInfo>;
  fetchReferralOperations: (limit?: number, offset?: number) => Promise<ReferralOperationsResponse>;
  updateReferralType: (payload: SetReferralTypeRequest) => Promise<void>;
}

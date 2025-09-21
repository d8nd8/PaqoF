import { useEffect, useState } from "react";
import useWalletStore from "@/shared/stores/wallet";
import type { Operation } from '@/api/services/operation/schemes/operation.schemas'


const useOperations = (walletId: string) => {
  const { fetchWalletOperations, operations, loading } = useWalletStore();
  const [offset, setOffset] = useState(0);
  const [limit] = useState(20);
  const [hasMore, setHasMore] = useState(true);

  const walletOps: Operation[] = operations[walletId] || [];

  useEffect(() => {
    const load = async () => {
      const result = await fetchWalletOperations(walletId, limit, offset);


      if (!result || result.length < limit) {
        setHasMore(false);
      }
    };

    load();
  }, [walletId, offset]);

  const fetchNext = () => {
    if (hasMore && !loading) {
      setOffset((prev) => prev + limit);
    }
  };

  return { walletOps, loading, fetchNext, hasMore };
};

export default useOperations;

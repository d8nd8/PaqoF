import { useRawInitData } from "@telegram-apps/sdk-react";

export function useSafeInitData() {
  try {
    const data = useRawInitData();
    return data;
  } catch {
    return null;
  }
}

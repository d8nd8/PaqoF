import { useEffect, useState } from "react";
import { viewport } from "@telegram-apps/sdk-react";

export function useSafeAreaInsets() {
  const [insets, setInsets] = useState({ top: 0, bottom: 0 });

  useEffect(() => {
    if (!viewport.safeAreaInsets) return;

    setInsets(viewport.safeAreaInsets());

    const unsubscribe = viewport.safeAreaInsets.sub((value) => {
      setInsets(value);
    });

    return unsubscribe;
  }, []);

  return insets;
}

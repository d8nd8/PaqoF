import { useEffect, useState } from "react";
import { viewport } from "@telegram-apps/sdk-react";

export function useSafeAreaInsets() {
  const [insets, setInsets] = useState({ top: 0, bottom: 0 });

  useEffect(() => {
    if (!viewport.safeAreaInsets) return;

    const updateInsets = () => {
      const safe = viewport.safeAreaInsets();
      const isFullscreen = window.Telegram?.WebApp?.isExpanded ?? false;

      setInsets({
        top: isFullscreen ? safe.top || 20 : safe.top,
        bottom: isFullscreen ? safe.bottom || 20 : safe.bottom,
      });
    };

    updateInsets();

    const unsubscribe = viewport.safeAreaInsets.sub((value) => {
      const isFullscreen = window.Telegram?.WebApp?.isExpanded ?? false;

      setInsets({
        top: isFullscreen ? value.top || 20 : value.top,
        bottom: isFullscreen ? value.bottom || 20 : value.bottom,
      });
    });

    return unsubscribe;
  }, []);

  return insets;
}

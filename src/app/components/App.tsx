import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import {
  miniApp,
  viewport,
  mainButton,
  secondaryButton,
} from "@telegram-apps/sdk-react";

import { router } from "@/app/router";
import useApplicationStore from "@/shared/stores/application";
import useUserStore from "@/shared/stores/user";
import Preloader from "@/shared/components/Preloader/Preloader";
import { Wrapper, WrapperRoot } from "@/app/components/App.styled";
import { useSafeInitData } from "@/shared/hooks/useSafeInitData";
import { SecurityPinCode } from "@/features/security-pin-code";
import FullOverlay from "@/shared/components/full-overlay/FullOverlay";

const App = () => {
  const { headerOffset, fullscreen, fullscreenCentered, setFullscreen } =
    useApplicationStore();
  const { setUserData, login, user } = useUserStore();

  const [safeAreaBottom, setSafeAreaBottom] = useState(0);
  const [isPinVerified, setIsPinVerified] = useState(false);
  const [isPinRequired, setIsPinRequired] = useState(false);
  const [pinError, setPinError] = useState<string | null>(null);

  const rawInitData = useSafeInitData();

  useEffect(() => {
    if (mainButton.mount.isAvailable()) mainButton.mount();
    if (secondaryButton.mount.isAvailable()) secondaryButton.mount();

    if (miniApp.mountSync.isAvailable()) {
      miniApp.mountSync();
      miniApp.setBackgroundColor("#F2F3F4");
      miniApp.setBottomBarColor("#FFFFFF");
      miniApp.setHeaderColor("#000000");
    }

    if (viewport.mount.isAvailable()) {
      viewport.mount();
      setFullscreen(viewport.isFullscreen());
    }

    if (rawInitData) {
      setUserData(rawInitData);
    }

    const bottom = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue("--safe-area-bottom"),
      10
    );
    setSafeAreaBottom(bottom);
  }, [setFullscreen, setUserData, rawInitData]);

  useEffect(() => {
    const savedPin = localStorage.getItem("pin-code");
    if (savedPin) setIsPinRequired(true);
  }, []);
  const handlePinComplete = async (enteredPin: string) => {
    if (!user?.id) return;

    try {
       await login({
        entryCode: enteredPin,
        telegramId: user.id,
      });

      setIsPinVerified(true);
      setPinError(null);
    } catch  {
      setPinError("Неверный PIN-код");
    }
  };

  if (isPinRequired && !isPinVerified) {
    return (
      <FullOverlay isOpen={true} onClose={() => null}>
        <SecurityPinCode
          mode="confirm"
          onComplete={handlePinComplete}
          error={pinError}
        />
      </FullOverlay>
    );
  }

  return (
    <Wrapper
      fullscreen={fullscreen}
      fullscreenCentered={fullscreenCentered}
      noHeaderOffset={!headerOffset}
      style={{ paddingBottom: safeAreaBottom }}
    >
      <WrapperRoot>
        <RouterProvider router={router} />
      </WrapperRoot>
      <Preloader />
    </Wrapper>
  );
};

export default App;

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
// import { SecurityPinCode } from "@/features/security-pin-code";
// import FullOverlay from "@/shared/components/full-overlay/FullOverlay";

const App = () => {
  const { headerOffset, fullscreen, fullscreenCentered, setFullscreen } =
    useApplicationStore();

  const { login, setUserData } = useUserStore();
  const [safeAreaBottom, setSafeAreaBottom] = useState(0);

  const rawInitData = useSafeInitData();

  useEffect(() => {
    if (mainButton.mount.isAvailable()) mainButton.mount();
    if (secondaryButton.mount.isAvailable()) secondaryButton.mount();

    if (miniApp.mountSync.isAvailable()) {
      miniApp.mountSync();
      miniApp.setBackgroundColor("#F2F3F4");
      miniApp.setBottomBarColor("#FFFFFF");
      miniApp.setHeaderColor("#F2F3F4");
    }

    if (viewport.mount.isAvailable()) {
      viewport.mount();
      setFullscreen(viewport.isFullscreen());
    }

    if (rawInitData) {
      setUserData(rawInitData);
    }

    const bottom = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--safe-area-bottom"
      ),
      10
    );
    setSafeAreaBottom(bottom);
  }, [setFullscreen, setUserData, rawInitData]);

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

      {/* Пин-код временно отключен */}
      {/*
      <FullOverlay isOpen={lockOpen} onClose={() => null}>
        <SecurityPinCode mode="confirm" onComplete={handlePinComplete} />
      </FullOverlay>
      */}

      <Preloader />
    </Wrapper>
  );
};

export default App;

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

const App = () => {
  const { headerOffset, fullscreen, fullscreenCentered, setFullscreen } =
    useApplicationStore();

  const setUserData = useUserStore((s) => s.setUserData);
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

    setUserData(rawInitData);

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
      <Preloader />
    </Wrapper>
  );
};

export default App;

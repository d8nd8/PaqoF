import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import {
  miniApp,
  viewport,
  mainButton,
  secondaryButton
} from "@telegram-apps/sdk-react";

import { router } from "@/app/router";
import useApplicationStore from "@/shared/stores/application";
import Preloader from "@/shared/components/Preloader/Preloader";
import { Wrapper, WrapperRoot } from "./App.styled";

const App = () => {
  const {
    headerOffset,
    fullscreen,
    fullscreenCentered,
    setFullscreen,
  } = useApplicationStore();

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
  }, [setFullscreen]);

  return (
    <Wrapper
      fullscreen={fullscreen}
      fullscreenCentered={fullscreenCentered}
      noHeaderOffset={!headerOffset}
    >
      <WrapperRoot>
        <RouterProvider router={router} />
      </WrapperRoot>
      <Preloader />
    </Wrapper>
  );
};

export default App;

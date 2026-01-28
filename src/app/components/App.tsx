import { useEffect, useState, useRef } from "react";
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
    if (viewport.mount.isAvailable()) {
      viewport.mount();
      viewport.expand();
    }
  }, []);


  useEffect(() => {
    const preventPullToClose = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch.clientY < window.innerHeight / 3 && window.scrollY <= 0) {
        e.preventDefault();
      }
    };

    document.addEventListener("touchmove", preventPullToClose, { passive: false });
    return () => {
      document.removeEventListener("touchmove", preventPullToClose);
    };
  }, []);


  useEffect(() => {
    if (mainButton.mount.isAvailable()) mainButton.mount();
    if (secondaryButton.mount.isAvailable()) secondaryButton.mount();

    if (miniApp.mountSync.isAvailable()) {
      miniApp.mountSync();

      const theme = window.Telegram?.WebApp?.themeParams?.colorScheme || "light";

      const applyTelegramTheme = (scheme: string) => {
        if (scheme === "dark") {
          try {
            miniApp.setHeaderColor("#1C1C1E");
          } catch {
            miniApp.setHeaderColor("secondary_bg_color");
          }
          miniApp.setBackgroundColor("#1C1C1E");
          miniApp.setBottomBarColor("#1C1C1E");
        } else {
          try {
            miniApp.setHeaderColor("#F2F3F4");
          } catch {
            miniApp.setHeaderColor("bg_color");
          }
          miniApp.setBackgroundColor("#F2F3F4");
          miniApp.setBottomBarColor("#FFFFFF");
        }
      };

      applyTelegramTheme(theme);

      const onThemeChange = () => {
        const scheme =
          window.Telegram?.WebApp?.themeParams?.colorScheme || "light";
        applyTelegramTheme(scheme);
      };

      window.Telegram?.WebApp?.onEvent("themeChanged", onThemeChange);
      return () => {
        window.Telegram?.WebApp?.offEvent("themeChanged", onThemeChange);
      };
    }

    if (viewport.mount.isAvailable()) {
      viewport.mount();
      setFullscreen(viewport.isFullscreen());
    }

    const bottom = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue("--safe-area-bottom"),
      10
    );
    setSafeAreaBottom(bottom);
  }, [setFullscreen]);

  const prevInitDataRef = useRef<string | null>(null);

  useEffect(() => {
    // Предотвращаем повторные вызовы с теми же данными
    if (rawInitData && rawInitData !== prevInitDataRef.current) {
      prevInitDataRef.current = rawInitData;
      console.log("[App] Обновляем access-token из initData");
      setUserData(rawInitData);
    } else if (!rawInitData) {
      console.warn("[App] rawInitData is null or empty");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rawInitData]);

  // Проверяем PIN после загрузки пользователя (объединенная логика)
  useEffect(() => {
    if (!user?.id) {
      // Если нет пользователя, очищаем PIN из localStorage
      const savedPin = localStorage.getItem("pin-code");
      if (savedPin) {
        console.log('[App] Clearing saved PIN (no user data)');
        localStorage.removeItem("pin-code");
      }
      setIsPinRequired(false);
      setIsPinVerified(false);
      return;
    }

    const savedPin = localStorage.getItem("pin-code");
    console.log('[App] Checking PIN requirement:', { 
      userId: user.id, 
      savedPin: !!savedPin 
    });
    
    // Требуем PIN только если есть сохраненный PIN
    if (savedPin) {
      console.log('[App] PIN required: user has saved PIN');
      setIsPinRequired(true);
      setIsPinVerified(false);
    } else {
      console.log('[App] No PIN required - no saved PIN in localStorage');
      setIsPinRequired(false);
      setIsPinVerified(true); // Разрешаем доступ, если нет PIN
    }
  }, [user]);

  useEffect(() => {
    const handleUnauthorized = () => {
      // При ошибке аутентификации проверяем, есть ли сохраненный PIN
      const savedPin = localStorage.getItem("pin-code");
      const user = useUserStore.getState().user;
      
      console.log('[App] Unauthorized event:', { savedPin: !!savedPin, hasUser: !!user });
      
      // Требуем PIN только если:
      // 1. Есть сохраненный PIN
      // 2. И есть информация о пользователе (значит это не новый пользователь)
      if (savedPin && user?.id) {
        console.log('[App] PIN required after unauthorized: user has PIN and user data');
        setIsPinRequired(true);
        setIsPinVerified(false);
      } else {
        console.log('[App] PIN not required after unauthorized: no saved PIN or no user data');
        // Если нет PIN или пользователя, очищаем PIN из localStorage
        if (savedPin) {
          console.log('[App] Clearing saved PIN (no user or PIN not in DB)');
          localStorage.removeItem("pin-code");
        }
      }
    };

    window.addEventListener("unauthorized", handleUnauthorized);
    return () => window.removeEventListener("unauthorized", handleUnauthorized);
  }, []);


  const handlePinComplete = async (enteredPin: string) => {
    if (!user?.id) return;

    try {
      await login({
        entryCode: enteredPin,
        telegramId: user.id,
      });

      localStorage.setItem("pin-code", enteredPin);

      setIsPinVerified(true);
      setIsPinRequired(false);
      setPinError(null);
    } catch (error: any) {
      console.error('[App] PIN login error:', error);
      
      // Если ошибка связана с тем, что пользователя нет в БД или PIN не установлен,
      // очищаем PIN из localStorage и разрешаем доступ
      const errorMessage = error?.response?.data?.detail || error?.message || '';
      const isUserNotFound = errorMessage.includes('not found') || 
                            errorMessage.includes('does not exist') ||
                            error?.response?.status === 404;
      
      if (isUserNotFound) {
        console.log('[App] User not found in DB, clearing PIN and allowing access');
        localStorage.removeItem("pin-code");
        setIsPinVerified(true);
        setIsPinRequired(false);
        setPinError(null);
      } else {
        setPinError("Неверный PIN-код");
      }
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

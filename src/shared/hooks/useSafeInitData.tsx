import { useState, useEffect, useRef } from "react";

const FALLBACK_INIT_DATA = 'query_id=AAEa9lQjAAAAABr2VCPU-hRN&user=%7B%22id%22%3A592770586%2C%22first_name%22%3A%22%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22d8nd8%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2F6shFI2PmEuB85DH5CoLXK-wxwyuaB__6vtuG9eLqRic.svg%22%7D&auth_date=1769434705&signature=EFQ88hCIh-iQ0iSutyOAogllsyeWRO9a5DCO_rGPih-9eLIn7q8v9lXE5djuzhptF6jwBgveHv-MPaAoLNGVBw&hash=59ca6e33a451653addd10382488b58157da3ce12e3c3cf474c5e2d62a780237e';

export function useSafeInitData() {
  const [initData, setInitData] = useState<string | null>(() => {
    // Пытаемся получить init data сразу при инициализации
    if (typeof window !== "undefined" && window.Telegram?.WebApp?.initData) {
      const data = window.Telegram.WebApp.initData;
      if (data && data.trim() !== '') {
        console.log('[useSafeInitData] Initial state: got initData from Telegram WebApp');
        return data;
      }
    }
    console.log('[useSafeInitData] Initial state: no Telegram WebApp, will use fallback');
    return null;
  });

  const hasSetInitDataRef = useRef(false);

  useEffect(() => {
    // Если уже установили данные, не делаем ничего
    if (hasSetInitDataRef.current && initData) {
      return;
    }

    // Получаем init data напрямую из Telegram WebApp
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      const webApp = window.Telegram.WebApp;
      
      // Если данные уже есть, используем их
      if (webApp.initData && webApp.initData.trim() !== '') {
        if (!hasSetInitDataRef.current) {
          console.log('[useSafeInitData] useEffect: got initData from Telegram WebApp');
          setInitData(webApp.initData);
          hasSetInitDataRef.current = true;
        }
        return;
      }

      console.log('[useSafeInitData] useEffect: Telegram WebApp exists but initData is empty, checking periodically...');
      // Если данных нет, проверяем периодически
      const interval = setInterval(() => {
        if (webApp.initData && webApp.initData.trim() !== '' && !hasSetInitDataRef.current) {
          console.log('[useSafeInitData] useEffect: got initData after polling');
          setInitData(webApp.initData);
          hasSetInitDataRef.current = true;
          clearInterval(interval);
        }
      }, 100);

      // Очищаем интервал через 5 секунд, чтобы не проверять бесконечно
      const timeout = setTimeout(() => {
        clearInterval(interval);
        if (!hasSetInitDataRef.current) {
          console.log('[useSafeInitData] useEffect: timeout reached, will use fallback');
        }
      }, 5000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    } else {
      console.log('[useSafeInitData] useEffect: no Telegram WebApp, will use fallback');
    }
  }, [initData]);

  // Fallback для разработки (если initData пустой)
  const result = (!initData || initData.trim() === '') ? FALLBACK_INIT_DATA : initData;
  
  return result;
}

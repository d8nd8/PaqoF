import { useState, useEffect } from "react";

export function useSafeInitData() {
  const [initData, setInitData] = useState<string | null>(() => {
    // Пытаемся получить init data сразу при инициализации
    if (typeof window !== "undefined" && window.Telegram?.WebApp?.initData) {
      return window.Telegram.WebApp.initData;
    }
    return null;
  });

  useEffect(() => {
    // Получаем init data напрямую из Telegram WebApp
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      const webApp = window.Telegram.WebApp;
      
      // Если данные уже есть, используем их
      if (webApp.initData) {
        setInitData(webApp.initData);
        return;
      }

      // Если данных нет, проверяем периодически
      const interval = setInterval(() => {
        if (webApp.initData) {
          setInitData(webApp.initData);
          clearInterval(interval);
        }
      }, 100);

      // Очищаем интервал через 5 секунд, чтобы не проверять бесконечно
      setTimeout(() => clearInterval(interval), 5000);

      return () => clearInterval(interval);
    }
  }, []);

  // Fallback для разработки (если нет Telegram WebApp)
  if (!initData && typeof window !== "undefined" && !window.Telegram?.WebApp) {
    return 'user=%7B%22id%22%3A1888095988%2C%22first_name%22%3A%22Andrey%22%2C%22last_name%22%3A%22Rays%22%2C%22username%22%3A%22RaysRU%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2F0hS8FCr_WPj1HTJsXxly8-Evow22PKuuy2kMarWbVB4.svg%22%7D&chat_instance=6735992117656406736&chat_type=sender&auth_date=1762451127&signature=eyMd5jD9cBs01RQQqIy4gNBcRdJc5rac-kVeNC00Arg6tWemQqWoSiuLWItLceWJZ6XuNves9aTkfStNkSsXCQ&hash=83e961821e785bf3e998479ccc45bc797729c351e1029604ec1951241844b8a3';
  }

  return initData;
}

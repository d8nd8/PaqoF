import { useEffect, useRef, useState } from 'react'

const FALLBACK_INIT_DATA =
  'query_id=AAFtOD0iAAAAAG04PSK2Zije&user=%7B%22id%22%3A574437485%2C%22first_name%22%3A%22Andre%22%2C%22last_name%22%3A%22Spez%22%2C%22username%22%3A%22dreymandinn%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FnXBdoQt4Ono9G8mxHnz1BKKyEVGF9uHsR8DAyjaTN1Y.svg%22%7D&auth_date=1769608565&signature=igSunZ2q0hc6PlSxQuZs1tziAlwbk5Win4ZEwxZmrbEsV7N9HfcaV3Z-0EG39Lb26-CCoyBsMHZ7jRXRlT5LBA&hash=7492370f48a9cd3c67beb5b864e617aee488e803f7c3cf7dde7cca2dbec8ffcc'

export function useSafeInitData() {
  const [initData, setInitData] = useState<string | null>(() => {
    // Пытаемся получить init data сразу при инициализации
    if (typeof window !== 'undefined' && window.Telegram?.WebApp?.initData) {
      const data = window.Telegram.WebApp.initData
      if (data && data.trim() !== '') {
        console.log('[useSafeInitData] Initial state: got initData from Telegram WebApp')
        return data
      }
    }
    console.log('[useSafeInitData] Initial state: no Telegram WebApp, will use fallback')
    return null
  })

  const hasSetInitDataRef = useRef(false)

  useEffect(() => {
    // Если уже установили данные, не делаем ничего
    if (hasSetInitDataRef.current && initData) {
      return
    }

    // Получаем init data напрямую из Telegram WebApp
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      const webApp = window.Telegram.WebApp

      // Если данные уже есть, используем их
      if (webApp.initData && webApp.initData.trim() !== '') {
        if (!hasSetInitDataRef.current) {
          console.log('[useSafeInitData] useEffect: got initData from Telegram WebApp')
          setInitData(webApp.initData)
          hasSetInitDataRef.current = true
        }
        return
      }

      console.log(
        '[useSafeInitData] useEffect: Telegram WebApp exists but initData is empty, checking periodically...',
      )
      // Если данных нет, проверяем периодически
      const interval = setInterval(() => {
        if (
          webApp.initData &&
          webApp.initData.trim() !== '' &&
          !hasSetInitDataRef.current
        ) {
          console.log('[useSafeInitData] useEffect: got initData after polling')
          setInitData(webApp.initData)
          hasSetInitDataRef.current = true
          clearInterval(interval)
        }
      }, 100)

      // Очищаем интервал через 5 секунд, чтобы не проверять бесконечно
      const timeout = setTimeout(() => {
        clearInterval(interval)
        if (!hasSetInitDataRef.current) {
          console.log('[useSafeInitData] useEffect: timeout reached, will use fallback')
        }
      }, 5000)

      return () => {
        clearInterval(interval)
        clearTimeout(timeout)
      }
    } else {
      console.log('[useSafeInitData] useEffect: no Telegram WebApp, will use fallback')
    }
  }, [initData])

  // Fallback для разработки (если initData пустой)
  const result = !initData || initData.trim() === '' ? FALLBACK_INIT_DATA : initData

  return result
}

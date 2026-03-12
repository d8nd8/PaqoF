import { useEffect, useRef, useState } from 'react'
import { Wrapper, WrapperRoot } from '@/app/components/App.styled'
import { router } from '@/app/router'
import { SecurityPinCode } from '@/features/security-pin-code'
import { retryQueuedRequests } from '@/shared/api'
import FullOverlay from '@/shared/components/full-overlay/FullOverlay'
import Loader from '@/shared/components/Loader/Loader'
import Preloader from '@/shared/components/Preloader/Preloader'
import { useSafeInitData } from '@/shared/hooks/useSafeInitData'
import useApplicationStore from '@/shared/stores/application'
import useUserStore from '@/shared/stores/user'
import useWalletStore from '@/shared/stores/wallet'
import { mainButton, miniApp, secondaryButton, viewport } from '@telegram-apps/sdk-react'
import { AnimatePresence, motion } from 'framer-motion'
import { RouterProvider } from 'react-router-dom'

const App = () => {
  const { headerOffset, fullscreen, fullscreenCentered, setFullscreen } =
    useApplicationStore()
  const { setUserData, login, user, auth, isPinVerified, isPinRequired } = useUserStore()
  const { fetchInitialWalletsAndRates, initialLoading } = useWalletStore()

  const [safeAreaBottom, setSafeAreaBottom] = useState(0)
  const [pinError, setPinError] = useState<string | null>(null)

  const rawInitData = useSafeInitData()

  useEffect(() => {
    fetchInitialWalletsAndRates()
  }, [])

  useEffect(() => {
    auth()
  }, [])

  useEffect(() => {
    if (viewport.mount.isAvailable()) {
      viewport.mount()
      viewport.expand()
    }
  }, [])

  useEffect(() => {
    const preventPullToClose = (e: TouchEvent) => {
      const touch = e.touches[0]
      if (touch.clientY < window.innerHeight / 3 && window.scrollY <= 0) {
        e.preventDefault()
      }
    }

    document.addEventListener('touchmove', preventPullToClose, { passive: false })
    return () => {
      document.removeEventListener('touchmove', preventPullToClose)
    }
  }, [])

  useEffect(() => {
    if (mainButton.mount.isAvailable()) mainButton.mount()
    if (secondaryButton.mount.isAvailable()) secondaryButton.mount()

    if (miniApp.mountSync.isAvailable()) {
      miniApp.mountSync()

      const theme = window.Telegram?.WebApp?.themeParams?.colorScheme || 'light'

      const applyTelegramTheme = (scheme: string) => {
        if (scheme === 'dark') {
          try {
            miniApp.setHeaderColor('#1C1C1E')
          } catch {
            miniApp.setHeaderColor('secondary_bg_color')
          }
          miniApp.setBackgroundColor('#1C1C1E')
          miniApp.setBottomBarColor('#1C1C1E')
        } else {
          try {
            miniApp.setHeaderColor('#F2F3F4')
          } catch {
            miniApp.setHeaderColor('bg_color')
          }
          miniApp.setBackgroundColor('#F2F3F4')
          miniApp.setBottomBarColor('#FFFFFF')
        }
      }

      applyTelegramTheme(theme)

      const onThemeChange = () => {
        const scheme = window.Telegram?.WebApp?.themeParams?.colorScheme || 'light'
        applyTelegramTheme(scheme)
      }

      window.Telegram?.WebApp?.onEvent('themeChanged', onThemeChange)
      return () => {
        window.Telegram?.WebApp?.offEvent('themeChanged', onThemeChange)
      }
    }

    if (viewport.mount.isAvailable()) {
      viewport.mount()
      setFullscreen(viewport.isFullscreen())
    }

    const bottom = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--safe-area-bottom'),
      10,
    )
    setSafeAreaBottom(bottom)
  }, [setFullscreen])

  const prevInitDataRef = useRef<string | null>(null)

  useEffect(() => {
    // Предотвращаем повторные вызовы с теми же данными
    if (rawInitData && rawInitData !== prevInitDataRef.current) {
      prevInitDataRef.current = rawInitData
      console.log('[App] Обновляем access-token из initData')
      setUserData(rawInitData)
    } else if (!rawInitData) {
      console.warn('[App] rawInitData is null or empty')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rawInitData])

  useEffect(() => {
    const handleUnauthorized = () => {
      // При ошибке аутентификации проверяем, есть ли сохраненный PIN
      const savedPin = localStorage.getItem('pin-code')
      const user = useUserStore.getState().user

      console.log('[App] Unauthorized event:', { savedPin: !!savedPin, hasUser: !!user })

      // Требуем PIN только если:
      // 1. Есть сохраненный PIN
      // 2. И есть информация о пользователе (значит это не новый пользователь)
      if (savedPin && user?.id) {
        console.log('[App] PIN required after unauthorized: user has PIN and user data')
      } else {
        console.log(
          '[App] PIN not required after unauthorized: no saved PIN or no user data',
        )
        // Если нет PIN или пользователя, очищаем PIN из localStorage
        if (savedPin) {
          console.log('[App] Clearing saved PIN (no user or PIN not in DB)')
          localStorage.removeItem('pin-code')
        }
      }
    }

    window.addEventListener('unauthorized', handleUnauthorized)
    return () => window.removeEventListener('unauthorized', handleUnauthorized)
  }, [])

  useEffect(() => {
    const onAuthSuccess = () => {
      retryQueuedRequests()
    }
    window.addEventListener('auth-success', onAuthSuccess)
    return () => window.removeEventListener('auth-success', onAuthSuccess)
  }, [])

  const handlePinComplete = async (enteredPin: string) => {
    if (!user?.id) return

    try {
      await login({
        entryCode: enteredPin,
        telegramId: user.id,
      })
    } catch (error: any) {
      console.error('[App] PIN login error:', error)

      // Если ошибка связана с тем, что пользователя нет в БД или PIN не установлен,
      // очищаем PIN из localStorage и разрешаем доступ
      const errorMessage = error?.response?.data?.detail || error?.message || ''
      const isUserNotFound =
        errorMessage.includes('not found') ||
        errorMessage.includes('does not exist') ||
        error?.response?.status === 404

      if (isUserNotFound) {
        console.log('[App] User not found in DB, clearing PIN and allowing access')
        localStorage.removeItem('pin-code')

        setPinError(null)
      } else {
        setPinError('Неверный PIN-код')
      }
    }
  }

  return (
    <>
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
      {isPinRequired && (
        <FullOverlay
          isOpen={!isPinVerified}
          onClose={() => null}
        >
          <SecurityPinCode
            mode="confirm"
            onComplete={handlePinComplete}
            error={pinError}
          />
        </FullOverlay>
      )}

      <AnimatePresence mode="wait">
        {initialLoading && isPinVerified && (
          <motion.div
            key="modal"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0 }}
            style={{
              zIndex: 10000,
              position: 'fixed',
              inset: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'auto',
            }}
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App

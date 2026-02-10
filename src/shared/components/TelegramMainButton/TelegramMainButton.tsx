import { useEffect, useRef } from 'react'
import useApplicationStore from '@/shared/stores/application'
import { mainButton, viewport } from '@telegram-apps/sdk-react'
import WebApp from '@twa-dev/sdk'

import type ITelegramMainButtonProps from './TelegramMainButton.types'

const TelegramMainButton = ({
  showButton = true,
  text,
  callback,
  loading = false,
  disabled = false,
}: ITelegramMainButtonProps) => {
  const { modal } = useApplicationStore()
  const prevLoadingRef = useRef(false)

  const getLoadingValue = () =>
    typeof loading === 'object' && 'current' in loading ? loading.current : !!loading

  useEffect(() => {
    if (!viewport.mount.isAvailable()) return

    if (!mainButton.isMounted()) {
      mainButton.mount()
    }

    if (modal) {
      mainButton.setParams({ isVisible: false })
      return
    }

    mainButton.onClick(callback)

    mainButton.setParams({
      text,
      backgroundColor: '#CFFD0F',
      textColor: '#000000',

      isVisible: showButton,
      isEnabled: !disabled,
      isLoaderVisible: getLoadingValue(),
    })

    WebApp.setBackgroundColor('#F2F2F7')

    return () => {
      mainButton.offClick(callback)
      mainButton.setParams({ isVisible: false })
    }
  }, [text, callback, modal, loading, disabled, showButton])

  useEffect(() => {
    const checkRefInterval = setInterval(() => {
      const currentLoading = getLoadingValue()

      if (currentLoading !== prevLoadingRef.current) {
        prevLoadingRef.current = currentLoading

        if (mainButton.isMounted()) {
          mainButton.setParams({ isLoaderVisible: currentLoading })
        }
      }
    }, 100)

    return () => clearInterval(checkRefInterval)
  }, [loading])

  return null
}

export default TelegramMainButton

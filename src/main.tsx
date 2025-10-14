import '@src/app/styles/index.scss'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { viewport, init as initTelegramSdk } from '@telegram-apps/sdk-react'
import App from '@/app/components/App'
import { ThemeProvider } from '@emotion/react'
import { theme } from '@/styles/theme'
import { disableHoverOnTouchDevices } from '@/shared/utils/disableHover'

import { i18n } from '@/i18n/config'
import { I18nextProvider } from 'react-i18next'

const initApp = async () => {
  try {
    initTelegramSdk()

    if (!viewport.mount.isAvailable()) {
      throw new Error('Failed to initialize Telegram SDK: viewport.mount.isAvailable() is false')
    } else {
      await viewport.mount()
      viewport.expand()
    }
  } catch (error) {
    console.error(error)
  }
}

initApp()


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </ThemeProvider>
  </StrictMode>
)

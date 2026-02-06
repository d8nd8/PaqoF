import '@src/app/styles/index.scss'

import { StrictMode } from 'react'
import App from '@/app/components/App'
import { i18n } from '@/i18n/config'
import { theme } from '@/styles/theme'
import { ThemeProvider } from '@emotion/react'
import {
  init as initTelegramSdk,
  swipeBehavior,
  viewport,
} from '@telegram-apps/sdk-react'
import { createRoot } from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'

const initApp = async () => {
  try {
    initTelegramSdk()

    if (!viewport.mount.isAvailable()) {
      throw new Error(
        'Failed to initialize Telegram SDK: viewport.mount.isAvailable() is false',
      )
    } else {
      await viewport.mount()
      viewport.expand()

      if (swipeBehavior.mount.isAvailable()) {
        swipeBehavior.mount()
        if (swipeBehavior.disableVertical.isAvailable()) {
          swipeBehavior.disableVertical()
        }
      }
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
  </StrictMode>,
)

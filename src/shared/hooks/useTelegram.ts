import { useEffect, useState } from 'react'

export const useTelegram = () => {
    const [webApp, setWebApp] = useState<any>(null)
    const [user, setUser] = useState<any>(null)

    useEffect(() => {
        if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
            const tg = window.Telegram.WebApp

            tg.ready()
            tg.expand()

            tg.setHeaderColor('#ffffff')
            tg.setBackgroundColor('#ffffff')

            setWebApp(tg)
            setUser(tg.initDataUnsafe?.user)

            console.log('Telegram WebApp initialized:', tg)
            console.log('User data:', tg.initDataUnsafe?.user)
        }
    }, [])

    const closeApp = () => {
        webApp?.close()
    }

    const showMainButton = (text: string, onClick: () => void) => {
        if (webApp?.MainButton) {
            webApp.MainButton.setText(text)
            webApp.MainButton.onClick(onClick)
            webApp.MainButton.show()
        }
    }

    const hideMainButton = () => {
        webApp?.MainButton.hide()
    }

    return {
        webApp,
        user,
        closeApp,
        showMainButton,
        hideMainButton,
        isReady: !!webApp,
        platform: webApp?.platform,
        version: webApp?.version,
        colorScheme: webApp?.colorScheme
    }
}
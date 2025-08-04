import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import WebApp from '@twa-dev/sdk'
import { router } from "../router"

const useTelegram = () => {
    useEffect(() => {
        WebApp.ready()

        WebApp.expand()

        WebApp.enableClosingConfirmation()

        WebApp.setHeaderColor('#ffffff')
        WebApp.setBackgroundColor('#ffffff')

        const handleMainButtonClick = () => {
            console.log('Main button clicked')
        }
        WebApp.onEvent('mainButtonClicked', handleMainButtonClick)

        return () => {
            WebApp.offEvent('mainButtonClicked', handleMainButtonClick)
        }
    }, [])
}

export const App = () => {
    useTelegram()

    return (
        <>
            <RouterProvider router={router} />
            <Toaster
                position="bottom-right"
                richColors
            />
        </>
    )
}
import { useState, useEffect } from 'react'
import WebApp from '@twa-dev/sdk'
import {telegramBot} from "../api/telegram.ts";

export const useTelegramBot = () => {
    const [botInfo, setBotInfo] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    // Получить информацию о боте
    const getBotInfo = async () => {
        setIsLoading(true)
        setError(null)
        try {
            const info = await telegramBot.getMe()
            if (info.ok) {
                setBotInfo(info.result)
                console.log('Bot info:', info.result)
            } else {
                setError(info.description || 'Failed to get bot info')
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error')
            console.error('Error getting bot info:', err)
        } finally {
            setIsLoading(false)
        }
    }

    // Отправить сообщение текущему пользователю
    const sendMessageToUser = async (message: string) => {
        const user = WebApp.initDataUnsafe?.user
        if (!user?.id) {
            setError('User ID not available')
            return
        }

        setIsLoading(true)
        setError(null)
        try {
            const result = await telegramBot.sendMessage(user.id, message)
            if (result.ok) {
                console.log('Message sent successfully:', result.result)
                return result.result
            } else {
                setError(result.description || 'Failed to send message')
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error')
            console.error('Error sending message:', err)
        } finally {
            setIsLoading(false)
        }
    }

    // Установить команды бота
    const setupBotCommands = async () => {
        const commands = [
            { command: 'start', description: 'Запустить бота' },
            { command: 'help', description: 'Показать справку' },
            { command: 'app', description: 'Открыть Mini App' },
            { command: 'info', description: 'Информация о боте' }
        ]

        setIsLoading(true)
        setError(null)
        try {
            const result = await telegramBot.setMyCommands(commands)
            if (result.ok) {
                console.log('Commands set successfully')
                return true
            } else {
                setError(result.description || 'Failed to set commands')
                return false
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error')
            console.error('Error setting commands:', err)
            return false
        } finally {
            setIsLoading(false)
        }
    }

    // Отправить уведомление через Web App
    const sendWebAppNotification = (message: string) => {
        if (WebApp.showAlert) {
            WebApp.showAlert(message)
        }
    }

    // Отправить данные боту через Web App
    const sendDataToBot = (data: any) => {
        if (WebApp.sendData) {
            WebApp.sendData(JSON.stringify(data))
        }
    }

    // Получить данные пользователя из Web App
    const getUserData = () => {
        return {
            user: WebApp.initDataUnsafe?.user,
            startParam: WebApp.initDataUnsafe?.start_param,
            chatType: WebApp.initDataUnsafe?.chat_type,
            chatInstance: WebApp.initDataUnsafe?.chat_instance,
            authDate: WebApp.initDataUnsafe?.auth_date,
            hash: WebApp.initDataUnsafe?.hash
        }
    }

    useEffect(() => {
        // Автоматически получаем информацию о боте при загрузке
        getBotInfo()
    }, [])

    return {
        botInfo,
        isLoading,
        error,
        getBotInfo,
        sendMessageToUser,
        setupBotCommands,
        sendWebAppNotification,
        sendDataToBot,
        getUserData,
        // Прямой доступ к сервису для дополнительных методов
        telegramBot
    }
}
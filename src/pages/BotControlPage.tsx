import { useState } from 'react'
import {useTelegramBot} from "../shared/hooks/useTelegramBot.ts";

export const BotControlPage = () => {
    const {
        botInfo,
        isLoading,
        error,
        sendMessageToUser,
        setupBotCommands,
        sendWebAppNotification,
        sendDataToBot,
        getUserData
    } = useTelegramBot()

    const [messageText, setMessageText] = useState('')
    const [customData, setCustomData] = useState('')

    const userData = getUserData()

    const handleSendMessage = async () => {
        if (messageText.trim()) {
            await sendMessageToUser(messageText)
            setMessageText('')
        }
    }

    const handleSendCustomData = () => {
        try {
            const data = JSON.parse(customData || '{}')
            sendDataToBot({
                ...data,
                timestamp: new Date().toISOString(),
                source: 'mini_app'
            })
            sendWebAppNotification('Данные отправлены боту!')
            setCustomData('')
        } catch (err) {
            sendWebAppNotification('Ошибка в формате JSON')
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-4">
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">

                {/* Заголовок */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        🤖 Bot Control Panel
                    </h1>
                    <p className="text-gray-600">Управление @ereon_test_bot</p>
                </div>

                {/* Информация о боте */}
                {botInfo && (
                    <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200">
                        <h2 className="font-semibold text-green-800 mb-2">✅ Бот подключен</h2>
                        <div className="text-sm text-green-700 space-y-1">
                            <p><strong>Имя:</strong> {botInfo.first_name}</p>
                            <p><strong>Username:</strong> @{botInfo.username}</p>
                            <p><strong>ID:</strong> {botInfo.id}</p>
                            <p><strong>Can join groups:</strong> {botInfo.can_join_groups ? 'Да' : 'Нет'}</p>
                            <p><strong>Can read messages:</strong> {botInfo.can_read_all_group_messages ? 'Да' : 'Нет'}</p>
                        </div>
                    </div>
                )}

                {/* Информация о пользователе */}
                {userData.user && (
                    <div className="mb-6 p-4 rounded-lg bg-blue-50 border border-blue-200">
                        <h2 className="font-semibold text-blue-800 mb-2">👤 Текущий пользователь</h2>
                        <div className="text-sm text-blue-700 space-y-1">
                            <p><strong>ID:</strong> {userData.user.id}</p>
                            <p><strong>Имя:</strong> {userData.user.first_name}</p>
                            {userData.user.username && <p><strong>Username:</strong> @{userData.user.username}</p>}
                            {userData.startParam && <p><strong>Start Param:</strong> {userData.startParam}</p>}
                        </div>
                    </div>
                )}

                {/* Ошибки */}
                {error && (
                    <div className="mb-4 p-4 rounded-lg bg-red-50 border border-red-200">
                        <p className="text-red-800">❌ Ошибка: {error}</p>
                    </div>
                )}

                {/* Управление командами */}
                <div className="mb-6 p-4 rounded-lg bg-purple-50 border border-purple-200">
                    <h2 className="font-semibold text-purple-800 mb-3">⚙️ Настройка бота</h2>
                    <button
                        onClick={setupBotCommands}
                        disabled={isLoading}
                        className="w-full bg-purple-500 hover:bg-purple-600 disabled:bg-purple-300 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                        {isLoading ? 'Настройка...' : 'Установить команды бота'}
                    </button>
                </div>

                {/* Отправка сообщений */}
                <div className="mb-6 p-4 rounded-lg bg-yellow-50 border border-yellow-200">
                    <h2 className="font-semibold text-yellow-800 mb-3">💬 Отправить сообщение</h2>
                    <div className="space-y-3">
            <textarea
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder="Введите сообщение для отправки пользователю..."
                className="w-full p-3 border border-yellow-300 rounded-lg resize-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                rows={3}
            />
                        <button
                            onClick={handleSendMessage}
                            disabled={isLoading || !messageText.trim() || !userData.user}
                            className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-300 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                        >
                            {isLoading ? 'Отправка...' : 'Отправить сообщение'}
                        </button>
                    </div>
                </div>

                {/* Отправка данных боту */}
                <div className="mb-6 p-4 rounded-lg bg-indigo-50 border border-indigo-200">
                    <h2 className="font-semibold text-indigo-800 mb-3">📤 Отправить данные боту</h2>
                    <div className="space-y-3">
            <textarea
                value={customData}
                onChange={(e) => setCustomData(e.target.value)}
                placeholder='{"action": "test", "data": "example"}'
                className="w-full p-3 border border-indigo-300 rounded-lg resize-none font-mono text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                rows={3}
            />
                        <button
                            onClick={handleSendCustomData}
                            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                        >
                            Отправить данные
                        </button>
                    </div>
                </div>

                {/* Быстрые действия */}
                <div className="grid grid-cols-2 gap-3">
                    <button
                        onClick={() => sendWebAppNotification('Тест уведомления!')}
                        className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                        Тест уведомления
                    </button>

                    <button
                        onClick={() => sendDataToBot({ action: 'ping', timestamp: Date.now() })}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                        Ping боту
                    </button>
                </div>

                {/* Загрузка */}
                {isLoading && (
                    <div className="mt-4 text-center">
                        <div className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Загрузка...
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
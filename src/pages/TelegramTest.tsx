import { useTelegram } from "../shared/hooks/useTelegram"

export const TelegramTest = () => {
    const {
        user,
        isReady,
        platform,
        version,
        colorScheme,
        closeApp,
        showMainButton,
        hideMainButton
    } = useTelegram()

    const handleShowButton = () => {
        showMainButton('Тест кнопки', () => {
            alert('Главная кнопка нажата!')
        })
    }

    // Отладочная информация
    const debugInfo = {
        windowTelegram: typeof window !== 'undefined' ? !!window.Telegram : false,
        webApp: typeof window !== 'undefined' ? !!window.Telegram?.WebApp : false,
        initData: typeof window !== 'undefined' ? window.Telegram?.WebApp?.initDataUnsafe : null,
        userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'server',
        isReady,
        user
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold mb-6 text-center">
                    Telegram Mini App Test
                </h1>

                {/* Статус подключения */}
                <div className="mb-4 p-3 rounded-lg bg-blue-50">
                    <h2 className="font-semibold text-blue-800">Статус:</h2>
                    <p className={`${isReady ? 'text-green-600' : 'text-red-600'}`}>
                        {isReady ? '✅ Telegram WebApp подключен' : '❌ Не подключен к Telegram'}
                    </p>
                </div>

                {/* Информация о пользователе */}
                {user ? (
                    <div className="mb-4 p-3 rounded-lg bg-green-50">
                        <h2 className="font-semibold text-green-800 mb-2">Пользователь:</h2>
                        <p><strong>Имя:</strong> {user.first_name}</p>
                        {user.last_name && <p><strong>Фамилия:</strong> {user.last_name}</p>}
                        {user.username && <p><strong>Username:</strong> @{user.username}</p>}
                        <p><strong>ID:</strong> {user.id}</p>
                        {user.language_code && <p><strong>Язык:</strong> {user.language_code}</p>}
                    </div>
                ) : (
                    <div className="mb-4 p-3 rounded-lg bg-yellow-50">
                        <h2 className="font-semibold text-yellow-800 mb-2">⚠️ Пользователь:</h2>
                        <p>Данные пользователя не найдены</p>
                    </div>
                )}

                {/* Информация о WebApp */}
                {isReady && (
                    <div className="mb-4 p-3 rounded-lg bg-purple-50">
                        <h2 className="font-semibold text-purple-800 mb-2">WebApp Info:</h2>
                        <p><strong>Платформа:</strong> {platform}</p>
                        <p><strong>Версия:</strong> {version}</p>
                        <p><strong>Тема:</strong> {colorScheme}</p>
                    </div>
                )}

                {/* Кнопки для тестирования */}
                <div className="space-y-3">
                    <button
                        onClick={handleShowButton}
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Показать главную кнопку
                    </button>

                    <button
                        onClick={hideMainButton}
                        className="w-full bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                        Скрыть главную кнопку
                    </button>

                    <button
                        onClick={closeApp}
                        className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
                    >
                        Закрыть приложение
                    </button>
                </div>

                {/* Расширенная отладочная информация */}
                <div className="mt-6 p-3 rounded-lg bg-gray-100 text-sm">
                    <h3 className="font-semibold mb-2">🔧 Debug Info:</h3>
                    <div className="space-y-1 text-xs">
                        <p><strong>Window.Telegram:</strong> {debugInfo.windowTelegram ? '✅' : '❌'}</p>
                        <p><strong>WebApp:</strong> {debugInfo.webApp ? '✅' : '❌'}</p>
                        <p><strong>User Agent:</strong> {debugInfo.userAgent.substring(0, 50)}...</p>
                        <p><strong>URL:</strong> {window.location.href}</p>
                    </div>

                    <details className="mt-2">
                        <summary className="cursor-pointer font-medium">Raw Debug Data</summary>
                        <pre className="mt-2 text-xs bg-gray-200 p-2 rounded overflow-auto">
                            {JSON.stringify(debugInfo, null, 2)}
                        </pre>
                    </details>
                </div>
            </div>
        </div>
    )
}
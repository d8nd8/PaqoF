class TelegramBotService {
    private readonly apiUrl: string
    private botUsername: string | null = null

    constructor(botToken: string) {
        this.apiUrl = `https://api.telegram.org/bot${botToken}`
    }

    async getMe() {
        try {
            const response = await fetch(`${this.apiUrl}/getMe`)
            const data = await response.json()

            // Сохраняем username бота для дальнейшего использования
            if (data.ok && data.result?.username) {
                this.botUsername = data.result.username
            }

            return data
        } catch (error) {
            console.error('Error getting bot info:', error)
            throw error
        }
    }

    async sendMessage(chatId: number | string, text: string, options?: any) {
        try {
            const response = await fetch(`${this.apiUrl}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: text,
                    parse_mode: 'HTML',
                    ...options
                })
            })
            const data = await response.json()
            return data
        } catch (error) {
            console.error('Error sending message:', error)
            throw error
        }
    }

    async sendPhoto(chatId: number | string, photo: string, caption?: string) {
        try {
            const response = await fetch(`${this.apiUrl}/sendPhoto`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    photo: photo,
                    caption: caption,
                    parse_mode: 'HTML'
                })
            })
            const data = await response.json()
            return data
        } catch (error) {
            console.error('Error sending photo:', error)
            throw error
        }
    }

    async setMyCommands(commands: Array<{command: string, description: string}>) {
        try {
            const response = await fetch(`${this.apiUrl}/setMyCommands`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    commands: commands
                })
            })
            const data = await response.json()
            return data
        } catch (error) {
            console.error('Error setting commands:', error)
            throw error
        }
    }

    createWebAppUrl(webAppUrl: string) {
        const username = this.getBotUsername()
        return `https://t.me/${username}/app?startapp=${encodeURIComponent(webAppUrl)}`
    }

    private getBotUsername(): string {
        return this.botUsername || 'ereon_test_bot'
    }

    async setMyDescription(description: string) {
        try {
            const response = await fetch(`${this.apiUrl}/setMyDescription`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    description: description
                })
            })
            const data = await response.json()
            return data
        } catch (error) {
            console.error('Error setting description:', error)
            throw error
        }
    }

    async getUpdates(offset?: number) {
        try {
            const response = await fetch(`${this.apiUrl}/getUpdates${offset ? `?offset=${offset}` : ''}`)
            const data = await response.json()
            return data
        } catch (error) {
            console.error('Error getting updates:', error)
            throw error
        }
    }

    async answerInlineQuery(inlineQueryId: string, results: any[]) {
        try {
            const response = await fetch(`${this.apiUrl}/answerInlineQuery`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    inline_query_id: inlineQueryId,
                    results: results
                })
            })
            const data = await response.json()
            return data
        } catch (error) {
            console.error('Error answering inline query:', error)
            throw error
        }
    }
}

const BOT_TOKEN = import.meta.env.VITE_BOT_TOKEN || 'YOUR_BOT_TOKEN_HERE'
export const telegramBot = new TelegramBotService(BOT_TOKEN)

export default TelegramBotService
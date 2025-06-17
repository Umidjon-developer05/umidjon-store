import { type NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
	try {
		const { name, email, telegram, message } = await request.json()

		// Telegram bot configuration
		const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
		const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID

		if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
			console.error('Telegram configuration missing')
			return NextResponse.json(
				{ error: 'Server configuration error' },
				{ status: 500 }
			)
		}

		// Format message for Telegram
		const telegramMessage = `
✅ Yangi so'rov!

👤 Ism: ${name}
📧 Email: ${email}
${telegram ? `💬 Telegram: ${telegram}` : ''}

📝 Xabar:
${message}

⏰ Vaqt: ${new Date().toLocaleString('uz-UZ')}
    `.trim()

		// Send message to Telegram bot
		const telegramResponse = await fetch(
			`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					chat_id: TELEGRAM_CHAT_ID,
					text: telegramMessage,
					parse_mode: 'HTML',
				}),
			}
		)

		if (!telegramResponse.ok) {
			throw new Error('Failed to send message to Telegram')
		}

		return NextResponse.json({ success: true })
	} catch (error) {
		console.error('Error sending message:', error)
		return NextResponse.json(
			{ error: 'Failed to send message' },
			{ status: 500 }
		)
	}
}

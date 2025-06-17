// 👇 ESLATMA: filename — app/layout.tsx bo'lishi kerak, yoki app/[locale]/layout.tsx bo‘lsa, uni app/layout.tsx qilib qo‘y
import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
	return {
		title:
			'Umidjon - Freelance Developer | Telegram Bot, Admin Panel, Mobile App',
		description:
			'Professional freelance developer. I create Telegram bots, web admin panels, mobile applications. 3+ years experience, 50+ successful projects.',
		keywords:
			'freelancer, developer, telegram bot, admin panel, mobile app, react, next.js, node.js',
		openGraph: {
			title:
				'Umidjon - Freelance Developer | Telegram Bot, Admin Panel, Mobile App',
			description:
				'Professional freelance developer. I create Telegram bots, web admin panels, mobile applications. 3+ years experience, 50+ successful projects.',
			images: [
				{
					url: '/umidjon-work.png',
					width: 800,
					height: 600,
					alt: 'Umidjon - Freelance Developer | Telegram Bot, Admin Panel, Mobile App',
				},
			],
		},
		metadataBase: new URL('https://umidjon.store'),
	}
}

// ✅ endi faqat 'en' uchun ishlaydi
export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	let messages
	try {
		messages = await getMessages({ locale: 'en' })
	} catch (error) {
		console.error('Failed to load messages:', error)
		messages = {} // fallback
	}

	return (
		<html lang='en'>
			<body className={inter.className}>
				<NextIntlClientProvider messages={messages} locale='en'>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	)
}

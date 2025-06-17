import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export function generateStaticParams() {
	return routing.locales.map(locale => ({ locale }))
}

export async function generateMetadata({
	params: { locale },
}: {
	params: { locale: string }
}): Promise<Metadata> {
	const titles = {
		uz: 'Umidjon - Freelancer Dasturchi | Telegram Bot, Admin Panel, Mobil Ilova',
		en: 'Umidjon - Freelance Developer | Telegram Bot, Admin Panel, Mobile App',
		ru: 'Umidjon - Фриланс Разработчик | Telegram Бот, Админ Панель, Мобильное Приложение',
	}

	const descriptions = {
		uz: 'Professional freelancer dasturchi. Telegram botlar, veb admin panellar, mobil ilovalar yarataman. 3+ yillik tajriba, 50+ muvaffaqiyatli loyiha.',
		en: 'Professional freelance developer. I create Telegram bots, web admin panels, mobile applications. 3+ years experience, 50+ successful projects.',
		ru: 'Профессиональный фриланс разработчик. Создаю Telegram боты, веб админ панели, мобильные приложения. 3+ года опыта, 50+ успешных проектов.',
	}

	return {
		title: titles[locale as keyof typeof titles] || titles.uz,
		description:
			descriptions[locale as keyof typeof descriptions] || descriptions.uz,
		keywords:
			'freelancer, developer, telegram bot, admin panel, mobile app, react, next.js, node.js',
		openGraph: {
			title: titles[locale as keyof typeof titles] || titles.uz,
			description:
				descriptions[locale as keyof typeof descriptions] || descriptions.uz,
			images: [
				{
					url: '/umidjon-work.png',
					width: 800,
					height: 600,
					alt: titles[locale as keyof typeof titles] || titles.uz,
				},
			],
		},
	}
}

export default async function LocaleLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode
	params: { locale: string }
}) {
	const messages = await getMessages({ locale })

	return (
		<html lang={locale}>
			<body className={inter.className}>
				<NextIntlClientProvider messages={messages} locale={locale}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	)
}

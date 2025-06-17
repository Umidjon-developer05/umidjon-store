import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title:
		'Umidjon - Freelancer Dasturchi | Telegram Bot, Admin Panel, Mobil Ilova',
	description:
		'Professional freelancer dasturchi. Telegram botlar, veb admin panellar, mobil ilovalar yarataman. 3+ yillik tajriba, 50+ muvaffaqiyatli loyiha.',
	keywords:
		'freelancer, dasturchi, telegram bot, admin panel, mobil ilova, react, next.js, node.js',
	icons: {
		icon: '/logo.svg',
	},
	openGraph: {
		title:
			'Umidjon - Freelancer Dasturchi | Telegram Bot, Admin Panel, Mobil Ilova',
		description:
			'Professional freelancer dasturchi. Telegram botlar, veb admin panellar, mobil ilovalar yarataman. 3+ yillik tajriba, 50+ muvaffaqiyatli loyiha.',
		images: [
			{
				url: '/umidjon-work.png',
				width: 800,
				height: 600,
				alt: 'Umidjon - Freelancer Dasturchi | Telegram Bot, Admin Panel, Mobil Ilova',
			},
		],
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='uz'>
			<body className={inter.className}>{children}</body>
		</html>
	)
}

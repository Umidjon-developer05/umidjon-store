import { getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: { locale: string }
}) {
	let messages = {}
	try {
		messages = await getMessages({ locale: params.locale })
	} catch (error) {
		console.error('❌ Failed to load messages:', error)
	}

	return (
		<html lang={params.locale}>
			<body className={inter.className}>
				<NextIntlClientProvider messages={messages} locale={params.locale}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	)
}

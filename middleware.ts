import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
	matcher: [
		// Root route uchun redirect
		'/',

		// Lokal prefikslar bilan barcha sahifalar
		'/(uz|en|ru)/:path*',

		// Boshqa barcha route'lar, ammo API, next, static fayllarsiz
		'/((?!api|_next|_vercel|.*\\..*).*)',
	],
}

import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
	matcher: [
		'/',
		'/(uz|en|ru)/:path*',

		// Bu yerda API, _next, favicon, va boshqa texnik yo‘llarni chiqarib tashlaymiz
		'/((?!api|_next|_vercel|.*\\..*).*)',
	],
}

import { getRequestConfig } from 'next-intl/server'

const locales = ['uz', 'en', 'ru']

export default getRequestConfig(async ({ locale }) => {
	const selectedLocale = locale ?? 'ru' // fallback to 'ru' if locale is undefined
	return {
		locale: selectedLocale,
		messages: (await import(`../messages/${selectedLocale}.json`)).default,
	}
})

import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async ({ locale }) => {
	const selectedLocale = locale ?? 'ru'

	let messages
	if (selectedLocale === 'uz') {
		messages = (await import('../messages/uz.json')).default
	} else if (selectedLocale === 'en') {
		messages = (await import('../messages/en.json')).default
	} else {
		messages = (await import('../messages/ru.json')).default
	}

	return {
		locale: selectedLocale,
		messages,
	}
})

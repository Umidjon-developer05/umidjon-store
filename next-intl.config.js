// next-intl.config.js
module.exports = {
	locales: ['en', 'uz', 'ru'],
	defaultLocale: 'en',
	messages: {
		en: require('./messages/en.json'),
		uz: require('./messages/uz.json'),
		ru: require('./messages/ru.json'),
	},
}

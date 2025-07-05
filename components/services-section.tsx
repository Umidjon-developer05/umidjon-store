'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Bot, Monitor, Smartphone, Database, Zap, Shield } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function ServicesSection() {
	const t = useTranslations('services')

	const services = [
		{
			title: t('items.telegramBots.title'),
			description: t('items.telegramBots.description'),
			technologies: ['Node.js', 'Telegram API', 'MongoDB', 'Express'],
			icon: Bot,
			color: 'bg-blue-500',
		},
		{
			title: t('items.adminPanels.title'),
			description: t('items.adminPanels.description'),
			technologies: ['React', 'Next.js', 'Tailwind', 'Prisma'],
			icon: Monitor,
			color: 'bg-green-500',
		},
		{
			title: t('items.mobileApps.title'),
			description: t('items.mobileApps.description'),
			technologies: ['React Native', 'Expo', 'Firebase', 'Zustand'],
			icon: Smartphone,
			color: 'bg-purple-500',
		},
		{
			title: t('items.database.title'),
			description: t('items.database.description'),
			technologies: ['MongoDB', 'PostgreSQL', 'Redis', 'Mongoose'],
			icon: Database,
			color: 'bg-orange-500',
		},
		{
			title: t('items.apiIntegration.title'),
			description: t('items.apiIntegration.description'),
			technologies: ['REST API', 'GraphQL', 'Webhook', 'OAuth'],
			icon: Zap,
			color: 'bg-yellow-500',
		},
		{
			title: t('items.security.title'),
			description: t('items.security.description'),
			technologies: ['JWT', 'bcrypt', 'HTTPS', '2FA'],
			icon: Shield,
			color: 'bg-red-500',
		},
	]

	return (
		<section id='services' className='py-20 px-4 '>
			<div className='container max-w-6xl mx-auto'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold  mb-4'>{t('title')}</h2>
					<p className='text-xl text-gray-600 max-w-2xl mx-auto'>
						{t('subtitle')}
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{services.map((service, index) => {
						const Icon = service.icon
						return (
							<Card
								key={index}
								className='group  hover:shadow-xl transition-all duration-300 border shadow-lg hover:-translate-y-2'
							>
								<CardHeader className='pb-4'>
									<div
										className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
									>
										<Icon className='h-6 w-6 text-white' />
									</div>
									<CardTitle className='text-xl font-bold '>
										{service.title}
									</CardTitle>
								</CardHeader>
								<CardContent className='space-y-4'>
									<p className='text-gray-600 leading-relaxed'>
										{service.description}
									</p>
									<div className='flex flex-wrap gap-2'>
										{service.technologies.map((tech, techIndex) => (
											<span
												key={techIndex}
												className='px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium'
											>
												{tech}
											</span>
										))}
									</div>
									<Button
										variant='outline'
										className='w-full mt-4 group-hover:bg-blue-600 group-hover:text-white transition-colors'
										onClick={() =>
											document
												.getElementById('projects')
												?.scrollIntoView({ behavior: 'smooth' })
										}
									>
										{t('viewExample')}
									</Button>
								</CardContent>
							</Card>
						)
					})}
				</div>
			</div>
		</section>
	)
}

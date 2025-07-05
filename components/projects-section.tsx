'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github, Play } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function ProjectsSection() {
	const t = useTranslations('projects')

	const projects = [
		{
			title: t('items.restaurantBot.title'),
			description: t('items.restaurantBot.description'),
			image: '/project/telegram-bot.png',
			technologies: ['Node.js', 'Telegram API', 'MongoDB', 'Stripe'],
			demoUrl: '#',
			githubUrl: '#',
			category: t('items.restaurantBot.category'),
		},
		{
			title: t('items.ecommerceAdmin.title'),
			description: t('items.ecommerceAdmin.description'),
			image: '/project/Ecommerce.png',
			technologies: ['React', 'Next.js', 'Tailwind', 'PostgreSQL'],
			demoUrl: '#',
			githubUrl: '#',
			category: t('items.ecommerceAdmin.category'),
		},
		{
			title: t('items.deliveryApp.title'),
			description: t('items.deliveryApp.description'),
			image: '/project/go.png',
			technologies: ['React Native', 'Expo', 'Firebase', 'Maps API'],
			demoUrl: '#',
			githubUrl: '#',
			category: t('items.deliveryApp.category'),
		},
		{
			title: t('items.crmSystem.title'),
			description: t('items.crmSystem.description'),
			image: '/project/crm.png',
			technologies: ['Vue.js', 'Laravel', 'MySQL', 'Chart.js'],
			demoUrl: '#',
			githubUrl: '#',
			category: t('items.crmSystem.category'),
		},
		{
			title: t('items.learningPlatform.title'),
			description: t('items.learningPlatform.description'),
			image: '/project/talim.png',
			technologies: ['Next.js', 'Prisma', 'Stripe', 'AWS S3'],
			demoUrl: '#',
			githubUrl: '#',
			category: t('items.learningPlatform.category'),
		},
		{
			title: t('items.inventoryBot.title'),
			description: t('items.inventoryBot.description'),
			image: '/project/image.png',
			technologies: ['Python', 'Telegram API', 'SQLite', 'Pandas'],
			demoUrl: '#',
			githubUrl: '#',
			category: t('items.inventoryBot.category'),
		},
	]

	return (
		<section id='projects' className='py-20 px-4 '>
			<div className='container max-w-6xl mx-auto'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold  mb-4'>{t('title')}</h2>
					<p className='text-xl text-gray-600 max-w-2xl mx-auto'>
						{t('subtitle')}
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{projects.map((project, index) => (
						<Card
							key={index}
							className='group overflow-hidden border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2'
						>
							<div className='relative overflow-hidden'>
								<Image
									src={project.image || '/placeholder.svg'}
									alt={project.title}
									width={300}
									height={200}
									className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300'
								/>
								<div className='absolute top-4 left-4'>
									<span className='px-3 py-1 bg-blue-600 text-white text-sm rounded-full font-medium'>
										{project.category}
									</span>
								</div>
							</div>

							<CardContent className='p-6'>
								<h3 className='text-xl font-bold  mb-2'>{project.title}</h3>
								<p className='text-gray-600 mb-4 leading-relaxed'>
									{project.description}
								</p>

								<div className='flex flex-wrap gap-2 mb-4'>
									{project.technologies.map((tech, techIndex) => (
										<span
											key={techIndex}
											className='px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded font-medium'
										>
											{tech}
										</span>
									))}
								</div>

								{/* <div className='flex gap-2'>
									<Button
										size='sm'
										className='flex-1 bg-blue-600 hover:bg-blue-700'
									>
										<Play className='mr-2 h-4 w-4' />
										{t('demo')}
									</Button>
									<Button size='sm' variant='outline' className='flex-1'>
										<Github className='mr-2 h-4 w-4' />
										{t('github')}
									</Button>
								</div> */}
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}

'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowDown, MessageCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function HeroSection() {
	const t = useTranslations('hero')

	const scrollToContact = () => {
		document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<section className='min-h-screen flex items-center justify-center px-4 py-20'>
			<div className='container max-w-4xl mx-auto text-center'>
				<div className='mb-8'>
					<div className='relative w-32 h-32 mx-auto mb-6'>
						<Image
							src='/umidjon.jpeg'
							alt='Shamshod - Freelancer Dasturchi'
							width={128}
							height={128}
							className='rounded-full border-4 border-white shadow-xl'
						/>
						<div className='absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white'></div>
					</div>
				</div>

				<h1 className='text-4xl md:text-6xl font-bold mb-6'>
					{t('greeting')} <span className='text-blue-600'>{t('name')}</span>
					<br />
					<span className='text-2xl md:text-4xl text-gray-600'>
						{t('title')}
					</span>
				</h1>

				<p className='text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed'>
					{t.rich('description', {
						telegramBots: chunks => (
							<span className='font-semibold text-blue-600'>{chunks}</span>
						),
						adminPanels: chunks => (
							<span className='font-semibold text-green-600'>{chunks}</span>
						),
						mobileApps: chunks => (
							<span className='font-semibold text-purple-600'>{chunks}</span>
						),
					})}
				</p>

				<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
					<Button
						onClick={scrollToContact}
						size='lg'
						className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all'
					>
						<MessageCircle className='mr-2 h-5 w-5' />
						{t('cta')}
					</Button>

					<Button
						variant='outline'
						size='lg'
						onClick={() =>
							document
								.getElementById('services')
								?.scrollIntoView({ behavior: 'smooth' })
						}
						className='px-8 py-4 text-lg rounded-full border-2 '
					>
						<ArrowDown className='mr-2 h-5 w-5' />
						{t('viewServices')}
					</Button>
				</div>
			</div>
		</section>
	)
}

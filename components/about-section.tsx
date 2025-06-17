'use client'

import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export function AboutSection() {
	const t = useTranslations('about')

	return (
		<section className='py-20 px-4 bg-white'>
			<div className='container max-w-4xl mx-auto'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
						{t('title')}
					</h2>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16'>
					<div>
						<div className='relative w-64 h-64 mx-auto lg:mx-0 mb-8'>
							<Image
								src='/umidjon.jpeg'
								alt='Shamshod'
								width={256}
								height={256}
								className='rounded-2xl shadow-xl'
							/>
						</div>
					</div>

					<div className='space-y-6'>
						<h3 className='text-2xl font-bold text-gray-900'>
							{t('experience')}
						</h3>
						<p className='text-lg text-gray-600 leading-relaxed'>{t('bio1')}</p>
						<p className='text-lg text-gray-600 leading-relaxed'>{t('bio2')}</p>

						<div className='bg-blue-50 p-6 rounded-xl'>
							<h4 className='font-semibold text-blue-900 mb-2'>
								{t('workProcess')}
							</h4>
							<ul className='text-blue-800 space-y-2'>
								<li>• {t('processSteps.analysis')}</li>
								<li>• {t('processSteps.design')}</li>
								<li>• {t('processSteps.development')}</li>
								<li>• {t('processSteps.testing')}</li>
								<li>• {t('processSteps.delivery')}</li>
							</ul>
						</div>
					</div>
				</div>

				<Card className='bg-gray-50 border-0'>
					<CardContent className='p-8'>
						<h3 className='text-2xl font-bold text-gray-900 mb-8 text-center'>
							{t('technologies')}
						</h3>
						<p>
							<a className='cursor-pointer' href='/'>
								<img src='https://skillicons.dev/icons?i=js,html,css,next,nest,netlify,nodejs,express,notion,npm,nuxt,python,django,react,redux,supabase,tailwind,mongodb,mysql,git,github,firebase,electron,docker,bootstrap,vercel,figma' />
							</a>
						</p>
					</CardContent>
				</Card>
			</div>
		</section>
	)
}

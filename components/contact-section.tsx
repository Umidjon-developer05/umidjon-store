'use client'

import type React from 'react'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { MessageCircle, Send, CheckCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function ContactSection() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		telegram: '',
		message: '',
	})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSubmitted, setIsSubmitted] = useState(false)
	const t = useTranslations('contact')

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)

		try {
			await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})

			setIsSubmitted(true)
			setFormData({ name: '', email: '', telegram: '', message: '' })
		} catch (error) {
			console.error('Error sending message:', error)
		} finally {
			setIsSubmitting(false)
		}
	}

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}

	if (isSubmitted) {
		return (
			<section
				id='contact'
				className='py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50'
			>
				<div className='container max-w-2xl mx-auto text-center'>
					<Card className='border-0 shadow-xl'>
						<CardContent className='p-12'>
							<div className='w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6'>
								<CheckCircle className='h-8 w-8 text-white' />
							</div>
							<h3 className='text-2xl font-bold text-gray-900 mb-4'>
								{t('success.title')}
							</h3>
							<p className='text-gray-600 mb-6'>{t('success.message')}</p>
							<Button onClick={() => setIsSubmitted(false)} variant='outline'>
								{t('success.sendAnother')}
							</Button>
						</CardContent>
					</Card>
				</div>
			</section>
		)
	}

	return (
		<section
			id='contact'
			className='py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50'
		>
			<div className='container max-w-4xl mx-auto'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
						{t('title')}
					</h2>
					<p className='text-xl text-gray-600 max-w-2xl mx-auto'>
						{t('subtitle')}
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
					<Card className='border-0 shadow-xl'>
						<CardHeader>
							<CardTitle className='text-2xl text-gray-900 flex items-center gap-2'>
								<MessageCircle className='h-6 w-6 text-blue-600' />
								{t('form.title')}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<form onSubmit={handleSubmit} className='space-y-6'>
								<div className='space-y-2'>
									<Label htmlFor='name'>{t('form.name')}</Label>
									<Input
										id='name'
										name='name'
										value={formData.name}
										onChange={handleChange}
										placeholder={t('form.name')}
										required
										className='h-12'
									/>
								</div>

								<div className='space-y-2'>
									<Label htmlFor='email'>{t('form.email')}</Label>
									<Input
										id='email'
										name='email'
										type='email'
										value={formData.email}
										onChange={handleChange}
										placeholder='email@example.com'
										required
										className='h-12'
									/>
								</div>

								<div className='space-y-2'>
									<Label htmlFor='telegram'>{t('form.telegram')}</Label>
									<Input
										id='telegram'
										name='telegram'
										value={formData.telegram}
										onChange={handleChange}
										placeholder='@username'
										className='h-12'
									/>
								</div>

								<div className='space-y-2'>
									<Label htmlFor='message'>{t('form.message')}</Label>
									<Textarea
										id='message'
										name='message'
										value={formData.message}
										onChange={handleChange}
										placeholder={t('form.messagePlaceholder')}
										required
										rows={6}
										className='resize-none'
									/>
								</div>

								<Button
									type='submit'
									disabled={isSubmitting}
									className='w-full h-12 bg-blue-600 hover:bg-blue-700 text-lg'
								>
									{isSubmitting ? (
										t('form.submitting')
									) : (
										<>
											<Send className='mr-2 h-5 w-5' />
											{t('form.submit')}
										</>
									)}
								</Button>
							</form>
						</CardContent>
					</Card>

					<div className='space-y-8'>
						<Card className='border-0 shadow-lg bg-blue-600 text-white'>
							<CardContent className='p-8'>
								<h3 className='text-xl font-bold mb-4'>
									{t('quickResponse.title')}
								</h3>
								<p className='mb-4'>{t('quickResponse.message')}</p>
								<div className='flex items-center gap-2'>
									<MessageCircle className='h-5 w-5' />
									<span>@umidjon_developer</span>
								</div>
							</CardContent>
						</Card>

						<Card className='border-0 shadow-lg'>
							<CardContent className='p-8'>
								<h3 className='text-xl font-bold text-gray-900 mb-4'>
									{t('freeConsultation.title')}
								</h3>
								<p className='text-gray-600 mb-4'>
									{t('freeConsultation.message')}
								</p>
								<ul className='text-gray-600 space-y-2'>
									<li>• {t('freeConsultation.services.analysis')}</li>
									<li>• {t('freeConsultation.services.pricing')}</li>
									<li>• {t('freeConsultation.services.technologies')}</li>
									<li>• {t('freeConsultation.services.planning')}</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	)
}

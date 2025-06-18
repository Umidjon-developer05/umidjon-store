'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Languages } from 'lucide-react'

const languages = [
	{ code: 'uz', name: "O'zbekcha", flag: '🇺🇿' },
	{ code: 'en', name: 'English', flag: '🇺🇸' },
	{ code: 'ru', name: 'Русский', flag: '🇷🇺' },
]

export function LanguageSwitcher() {
	const router = useRouter()
	const pathname = usePathname()

	const handleLanguageChange = (newLocale: string) => {
		if (newLocale !== pathname.split('/')[1]) {
			const segments = pathname.split('/')
			// Replace the first segment if it matches a language code
			if (languages.some(lang => lang.code === segments[1])) {
				segments[1] = newLocale
			} else {
				segments.splice(1, 0, newLocale)
			}
			const newPath = segments.join('/') || '/'
			router.push(newPath)
		}
	}
	const currentLanguage = languages.find(
		lang => lang.code === pathname.split('/')[1]
	)
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='outline' size='sm' className='gap-2'>
					<Languages className='h-4 w-4' />
					<span className='hidden sm:inline'>{currentLanguage?.name}</span>
					<span className='sm:hidden'>{currentLanguage?.flag}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				{languages.map(language => (
					<DropdownMenuItem
						key={language.code}
						onClick={() => handleLanguageChange(language.code)}
						className={`cursor-pointer ${
							pathname.split('/')[1] === language.code ? 'bg-blue-50' : ''
						}`}
					>
						<span className='mr-2'>{language.flag}</span>
						{language.name}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

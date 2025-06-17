import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { ProjectsSection } from '@/components/projects-section'
import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { ServiceSelector } from '@/components/service-selector'
import { LanguageSwitcher } from '@/components/language-switcher'
import LogoComponents from '@/components/logo-components'

export default function Home() {
	return (
		<main className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 '>
			<div className='flex flex-col items-center '>
				<div className='fixed z-50 w-full container backdrop-blur-md bg-white/20 rounded-xl shadow-md'>
					<div className='flex justify-between items-center w-full p-5'>
						<LogoComponents />
						<LanguageSwitcher />
					</div>
				</div>
			</div>
			<HeroSection />
			<ServiceSelector />
			<ServicesSection />
			<ProjectsSection />
			<AboutSection />
			<ContactSection />
		</main>
	)
}

import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { ProjectsSection } from '@/components/projects-section'
import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { ServiceSelector } from '@/components/service-selector'
import { LanguageSwitcher } from '@/components/language-switcher'
import LogoComponents from '@/components/logo-components'
import { ModeToggle } from '@/components/add-mode-toggle'

export default function Home() {
	return (
		<main className='min-h-screen '>
			<div className='flex flex-col items-center '>
				<div className='fixed z-50 w-full container backdrop-blur-md border rounded-xl shadow-md'>
					<div className='flex justify-between items-center w-full p-5 '>
						<LogoComponents />
						<div className='flex items-center gap-4 '>
							<ModeToggle />
							<LanguageSwitcher />
						</div>
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

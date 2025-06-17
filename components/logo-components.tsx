import Link from 'next/link'
import React from 'react'

function LogoComponents() {
	return (
		<div>
			<div className='flex gap-2 items-center  cursor-pointer'>
				<Link href='/' className='flex gap-2 items-center'>
					<img src='/logo.svg' alt='' className='sm:w-10 sm:h-10 w-7 h-7' />
				</Link>
				<h2 className='sm:text-2xl text-xl font-bold'>Umidjon</h2>
			</div>
		</div>
	)
}

export default LogoComponents

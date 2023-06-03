'use client'
import { useEffect } from 'react'
import { Nunito_Sans } from 'next/font/google'
import { Header } from '@/components/Header/Header'
import { GlobalStyles } from './globals'
const nunito = Nunito_Sans({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		// Aktualizacja meta danych
		const title = 'Countries'
		const description = 'all countries in the world'

		document.title = title
		const metaDescription = document.querySelector('meta')
		if (metaDescription) {
			metaDescription.setAttribute('name', 'description')
			metaDescription.setAttribute('content', description)
      console.log(metaDescription)
		}
	}, [])
	return (
		<>
			<html lang='en'>
				<body className={nunito.className}>
					<GlobalStyles />
					<header>
						<Header />
					</header>
					{children}
				</body>
			</html>
		</>
	)
}

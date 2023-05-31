'use client'
import { Nunito_Sans } from 'next/font/google'
import { createGlobalStyle } from 'styled-components'
import { Header } from '@/components/Header/Header'
const nunito = Nunito_Sans({ subsets: ['latin'] })

const GlobalStyles = createGlobalStyle`
  *,::after,::before{
    box-sizing: border-box;
    padding: 0;
    margin: 0;

  }
  :root{
    --secondary: #ffff;
    --font-color: #000;
    --primary: #fafafa;
    --gray: #6d6d6d;
    --option: #eeeeee;
  }
  .dark-mode{
    --option: #7c7b7b;
    --secondary: #2b3844;
    --font-color: #ffff;
    --primary: #202c36;
    
  }
  body{
    background-color: var(--primary);
    transition: background-color .2s;
  }
`

export const metadata = {
	title: 'Countries',
	description: 'api countries',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
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

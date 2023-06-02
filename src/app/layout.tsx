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
    --detail-color: #7e7e7e;
    --option: #eeeeee;
    --error: #d30303;
    --shadow: 0 0 5px 0px #0000005e;
  }
  .dark-mode{
    --detail-color: #d1d1d1;
    --option: #7c7b7b;
    --secondary: #2b3844;
    --font-color: #ffff;
    --primary: #202c36;
    
  }
  body{
    background-color: var(--primary);
    transition: background-color .2s;
    height: 100svh;
  }
`

export const metadata = {
	title: "Countries",
	description: "countries, description ",
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

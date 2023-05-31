import { Nunito_Sans } from 'next/font/google'
const nunito = Nunito_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Countries',
  description: 'api countries',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}

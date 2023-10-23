import type { Metadata } from 'next'
import { Inter, Lato, Open_Sans } from 'next/font/google'
import './styles/layout.scss'

//-- fonts
const inter = Inter({ subsets: ['latin'] });
const lato = Lato({ 
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-lato'
 });
const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-open-sans'
 });

export const metadata: Metadata = {
  title: 'i_&_UU+',
  description: 'Whoin Lee\'s portfolio site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body className={`${openSans.className} ${openSans.variable} ${lato.variable}`}>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter, Open_Sans } from 'next/font/google';
import '../styles/layout.scss';

//-- fonts
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
 });
const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-open-sans'
 });

export const metadata: Metadata = {
  title: 'UU+i',
  description: 'Whoin Lee\'s portfolio site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.variable} ${openSans.variable}`}>{children}</body>
    </html>
  )
}

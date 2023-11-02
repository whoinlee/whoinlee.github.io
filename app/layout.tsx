import type { Metadata } from 'next'
import './styles/global.scss';

// import { Inter, Open_Sans, Roboto } from 'next/font/google';
// //-- fonts
// const inter = Inter({ 
//   subsets: ['latin'],
//   variable: '--font-inter'
//  });
//  const roboto = Roboto({ 
//   weight: ['400', '500', '700'],
//   subsets: ['latin'],
//   variable: '--font-roboto'
//  });
// const openSans = Open_Sans({ 
//   subsets: ['latin'],
//   variable: '--font-open-sans'
//  });

export const metadata: Metadata = {
  title: 'UU+i',
  description: 'Studio W+i by Whoin Lee',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={`${inter.className} ${inter.variable} ${openSans.variable}`}>{children}</body> */}
      <body>{children}</body>
    </html>
  )
}

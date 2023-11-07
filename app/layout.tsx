import type { Metadata } from 'next'
import './styles/global.scss';

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
      <body>{children}</body>
    </html>
  )
}

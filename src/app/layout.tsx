import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Steven Dao',
  description: 'Technical Lead/Full Stack Dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={`${openSans.className} dark:bg-vscode-bg dark:text-slate-300`}>{children}</body>
    </html>
  )
}

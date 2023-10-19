import type { Metadata } from 'next'
import './globals.css'
import { roboto } from '@/lib/fonts'
import clsx from 'clsx'

export const metadata: Metadata = {
  title: 'Jackson Kubin',
  description: `A computer science student making cool things that enhance real people's lives`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(roboto.className, "bg-amber-200 text-amber-900")}>
        <main className="max-w-2xl m-auto p-4 flex flex-col gap-8">
          {children}
        </main>
      </body>
    </html>
  )
}

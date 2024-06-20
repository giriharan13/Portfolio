import Header from '@/components/Header'
import './globals.css'
import { Dosis } from 'next/font/google'

const dosis = Dosis({ subsets: ['latin'] })

export const metadata = {
  title: 'Giriharan',
  description: 'Giriharan\'s Personal Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dosis.className} text-violet-600`}>
        <div className="absolute h-[5000px] w-full bg-gradient-to-b from-[#ffffff] to-[#f3e8ff]">

        </div>
        <Header/>
        {children}
        </body>
    </html>
  )
}

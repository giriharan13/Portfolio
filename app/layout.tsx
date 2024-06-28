import Header from '@/components/Header'
import './globals.css'
import { Open_Sans } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/ActiveSectionContextProvider'
import { Toaster } from 'react-hot-toast'
import ThemeSwitch from '@/components/ThemeSwitch'

const open_sans = Open_Sans({ subsets: ['latin'] })

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
    <html lang="en" className="!scroll-smooth">
      <head>
      <script src="https://code.iconify.design/2/2.0.4/iconify.min.js"></script>
      </head>
      <body className={`${open_sans.className} flex flex-col relative text-black`}>
        <div className="absolute flex -z-10 h-full w-full bg-gradient-to-b from-[#ffffff] to-[#DBE2EF] dark:from-[#112D4E] dark:to-[#112D4E] dark:text-white dark:text-opacity-90">

        </div>
        <ActiveSectionContextProvider>
          <Header/>
          {children}

          <Toaster position='top-right'/>
        </ActiveSectionContextProvider>
        <ThemeSwitch/>
        
        </body>

    </html>
  )
}

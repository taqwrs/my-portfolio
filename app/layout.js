// app/layout.js
import { Inter, Sarabun } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/navbar/Footer'

// ตั้งค่าฟอนต์
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sarabun = Sarabun({
  subsets: ['thai', 'latin'],
  weight: ['400', '500', '700'],
  variable: '--font-sarabun',
  display: 'swap',
})

export const metadata = {
  title: 'Takwa Sasoleng - Developer & UX/UI Designer',
  description: 'นักพัฒนาซอฟต์แวร์และนักออกแบบ UX/UI กำลังมองหาตำแหน่งงานแรก',
  keywords: 'developer, UX/UI designer, portfolio, software engineer, Thailand',
  authors: [{ name: 'Takwa Sasoleng' }],
  openGraph: {
    title: 'Takwa Sasoleng - Developer & UX/UI Designer',
    description: 'นักพัฒนาซอฟต์แวร์และนักออกแบบ UX/UI กำลังมองหาตำแหน่งงานแรก',
    type: 'website',
    locale: 'th_TH',
  },
}

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning สำคัญมากสำหรับ next-themes
    <html lang="th" className={`${inter.variable} ${sarabun.variable} scroll-smooth`} suppressHydrationWarning>
      <body className={`bg-slate-50 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-200 font-sans ${inter.variable} ${sarabun.variable}`}>
        <ThemeProvider>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
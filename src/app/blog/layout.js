import { Bai_Jamjuree } from 'next/font/google'
import '../globals.css'
import BlogHeader from '@/components/BlogHeader'
import BlogFooter from '@/components/BlogFooter'

const bai = Bai_Jamjuree({ subsets: ['thai'], weight: ['200', '300', '400', '500', '600', '700'] })

export const metadata = {
  title: 'Majid Oladepo - BLOG',
  description: 'BLOG',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth bg-secondary'>
      <body className={bai.className}>
        <div className='fixed top-0 w-full z-20'>
          <BlogHeader />
        </div>
        <main className='max-w-6xl mx-auto'>
          {children}
        </main>
        <div className='max-w-6xl mx-auto'>
          <BlogFooter />
        </div>
      </body>
    </html>
  )
}

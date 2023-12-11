import { Bai_Jamjuree } from 'next/font/google'
import '../globals.css'
import Header from '@/components/Header'

const bai = Bai_Jamjuree({ subsets: ['thai'], weight: ['200', '300', '400', '500', '600', '700'] })

export const metadata = {
  title: 'Majid Oladepo - Software Developer',
  description: 'Software Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth bg-primary'>
      <body className={bai.className}>
        <div className='fixed top-0 w-full z-20'>
          <Header />
        </div>
        <main>
          {children}  
        </main>
      </body>
    </html>
  )
}

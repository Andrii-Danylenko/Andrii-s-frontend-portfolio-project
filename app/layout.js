import './globals.css'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import background from './Images/back.jpg'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My portfolio project',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
           <navbar className={styles.navbar}>
            <Link className={styles.buttonlink} href='/'>Home</Link>
            <Link className={styles.buttonlink} href='/AboutMe'>About me</Link>
            <Link className={styles.buttonlink} href='/MyProjects'>My project</Link>
            <Link className={styles.buttonlink} href='/ContactMe'>Contact me</Link>
           </navbar>
           <Image src={background} className={styles.background} alt='background'/>
           <div className={styles.square}>{children}</div>
        </main>
        </body>
    </html>
  )
}

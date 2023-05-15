import Head from 'next/head'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Retreat Application</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          <Link href="/login">
            <h2 className={inter.className}>
              User Login
            </h2>
            <p className={inter.className}>
              Existing user login
            </p>
          </Link>  
          <Link href="/createUser">
            <h2 className={inter.className}>
              New user?
            </h2>
            <p className={inter.className}>
              Create an account here
            </p>
          </Link>

          <Link href="/admin">
            <h2 className={inter.className}>
              Administrators
            </h2>
            <p className={inter.className}>
              Login here
            </p>
          </Link>
        </div>
      </main>
    </>
  )
}

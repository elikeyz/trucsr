import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>TruCSR</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Ubuntu@1&display=swap" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/10d4f1332d.js" crossOrigin="anonymous"></script>
      </Head>

      <Header />
      <main>
        <Banner />
      </main>
    </>
  )
}

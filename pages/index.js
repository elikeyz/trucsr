import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Partners from '../components/Partners'
import Blog from '../components/Blog'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>TruCSR</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Ubuntu&display=swap" rel="stylesheet" />
      </Head>

      <Header />
      <main>
        <Banner />
        <About />
        <Services />
        <Projects />
        <Partners />
        <Blog />
      </main>
      <Footer />
    </>
  )
}

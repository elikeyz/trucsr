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

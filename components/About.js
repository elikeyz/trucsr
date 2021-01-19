import aboutStyles from '../styles/About.module.css'
import Link from 'next/link'

const About = () => (
  <section className={aboutStyles.aboutSection}>
    <article>
      <div className={aboutStyles.title}>
        <div className={aboutStyles.titlePrepend}></div>
        <h2>About Us</h2>
      </div>
      <p>TCSRN <strong>founded in 2006</strong>, is a consulting company that helps organisations to contribute to their societal goals of a philanthropic, activist, or charitable nature by engaging in or supporting volunteering or ethically-oriented practices.</p>
    </article>
    <div className={aboutStyles.storySection}>
      <div className={aboutStyles.storyImages}>
        <div className={aboutStyles.firstStoryImageWrapper}>
          <img src="/story1.png" alt="A woman and a girl planting a shoot" />
        </div>
        <div className={aboutStyles.secondStoryImageWrapper}>
          <img src="/story2.png" alt="Skyscrapers" />
        </div>
      </div>
      <article>
        <h2>Our Story</h2>
        <p>The TruContact CSR Nigeria seed was sown long before the founder; <strong>Kenneth Egbas</strong> would even conceive the dream of starting a company. Life didn’t always hand him a fair deal. From his early days and upon graduation from university he always dreamed of running a business based on the idea that outcomes from his business activities would promote innovation, equitable distribution of resources, justice, reduce wastage and help eradicate poverty in Africa. This gave wings to the dream that became TruContact CSR Nigeria.</p>
        <p>TCSRN was founded in 2006, and carried out what many have come to acknowledge as trail blazing spadework that led to a rapid growth of what has become a vibrant and viable corporate social responsibility and sustainability industry in Nigeria, and Africa.</p>
        <div className={aboutStyles.link}>
          <div>
            <Link href="/">
              <a>Read Full Story</a>
            </Link>
          </div>
          <img src="/arrow-right.svg" alt="Arrow Right" />
        </div>
      </article>
    </div>
  </section>
);

export default About;
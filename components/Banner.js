import { useState } from 'react'
import bannerStyles from '../styles/Banner.module.css'
import Link from 'next/link'

// The Banner section
const Banner = () => {

  // Initialize a state to keep track of the index of the current banner slide
  const [slideIndex, setSlideIndex] = useState(1);

  return (
    <section className={bannerStyles.slides}>
      {/* The first slide, set display to none if slide index is not 0 */}
      <div style={slideIndex === 0 ? { backgroundImage: 'url(/awards.png)' } : { backgroundImage: 'url(/awards.png)', display: 'none' }} className={bannerStyles.background}>
        <div className={bannerStyles.overlay}>
          <h1>14th Edition of the SERAS CSR Awards</h1>
          <p>The Story of The SERAS began in 2007 when the very first edition held at Lagos, Nigeria. it’ll be holding this year at Raddison Blu on the 2nd of February, 2021</p>
          <div className={bannerStyles.link}>
            <div>
            <Link href="/">
                Make Reservation
            </Link>
            </div>
            <img src="/arrow-right.svg" alt="Arrow Right" />
          </div>
        </div>
      </div>
      {/* The second slide, set display to none if slide index is not 1 */}
      <div style={slideIndex === 1 ? { backgroundImage: 'url(/asokere.png)' } : { backgroundImage: 'url(/asokere.png)', display: 'none' }} className={bannerStyles.background}>
        <div className={bannerStyles.overlay}>
          <h1>We are in the business of <em>sustainability</em></h1>
          <p>TCSRN <strong>founded in 2006</strong>, is a consulting company that helps organisations to contribute to their societal goals of a philanthropic, activist, or charitable nature by engaging in or supporting volunteering or ethically-oriented practices.</p>
          <div className={bannerStyles.link}>
            <div>
            <Link href="/">
                Explore Site
            </Link>
            </div>
            <img src="/arrow-down.svg" alt="Arrow Down" />
          </div>
        </div>
      </div>
      <div className={bannerStyles.slideBtns}>
        {/* Set a click listener to set the slide index to 0 */}
        <button onClick={() => setSlideIndex(0)} className={slideIndex === 0 ? bannerStyles.active : ''} aria-label="Previous Slide"></button>
        {/* Set a click listener to set the slide index to 1 */}
        <button onClick={() => setSlideIndex(1)} className={slideIndex === 1 ? bannerStyles.active : ''} aria-label="Next Slide"></button>
      </div>
    </section>
  );
}

export default Banner;
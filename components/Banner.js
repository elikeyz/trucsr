import React, { useState } from 'react'
import bannerStyles from '../styles/Banner.module.css'

const Banner = () => {

  const [slideIndex, setSlideIndex] = useState(1);

  return (
    <section className={bannerStyles.slides}>
      {slideIndex === 1 && (
        <div style={{ backgroundImage: 'url(/asokere.png)' }} className={bannerStyles.background}>
          <div className={bannerStyles.overlay}>
            <h1>We are in the business of <em>sustainability</em></h1>
            <p>TCSRN <strong>founded in 2006</strong>, is a consulting company that helps organisations to contribute to their societal goals of a philanthropic, activist, or charitable nature by engaging in or supporting volunteering or ethically-oriented practices.</p>
            <div className={bannerStyles.link}>
              <div>
                <a>Explore Site</a>
              </div>
              <img src="/arrow-down.svg" alt="Arrow Down" />
            </div>
          </div>
        </div>
      )}
      {slideIndex === 0 && (
        <div style={{ backgroundImage: 'url(/awards.png)' }} className={bannerStyles.background}>
          <div className={bannerStyles.overlay}>
            <h1>14th Edition of the SERAS CSR Awards</h1>
            <p>The Story of The SERAS began in 2007 when the very first edition held at Lagos, Nigeria. it’ll be holding this year at Raddison Blu on the 2nd of February, 2021</p>
            <div className={bannerStyles.link}>
              <div>
                <a>Make Reservation</a>
              </div>
              <img src="/arrow-right.svg" alt="Arrow Right" />
            </div>
          </div>
        </div>
      )}
      <div className={bannerStyles.slideBtns}>
        <button onClick={() => setSlideIndex(0)} className={slideIndex === 0 ? bannerStyles.active : ''} aria-label="Previous Slide"></button>
        <button onClick={() => setSlideIndex(1)} className={slideIndex === 1 ? bannerStyles.active : ''} aria-label="Next Slide"></button>
      </div>
    </section>
  );
}

export default Banner;
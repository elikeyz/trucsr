import { useState, useEffect } from 'react'
import projectStyles from '../styles/Projects.module.css'

const Projects = () => {

  const [translate, setTranslate] = useState('');

  useEffect(() => {
    window.onmousemove = (e) => {
      if (e.pageX < 20) {
        setTranslate('translate(0, 0)');
      } else if (e.pageX > (window.innerWidth - 50) && window.innerWidth > 768) {
        setTranslate('translate(calc(-5px - 33%), 0)');
      } else if (e.pageX > (window.innerWidth - 50) && window.innerWidth <= 768) {
        setTranslate('translate(calc(-60%), 0)');
      } else {
        setTranslate('');
      }
    };
  }, []);

  return (
    <section className={projectStyles.projectSection}>
      <div className={projectStyles.title}>
        <div className={projectStyles.titlePrepend}></div>
        <h2>Our Projects</h2>
      </div>
      <div style={{ transform: translate }} className={projectStyles.cards}>
        <div className={projectStyles.card}>
          <img src="/artsy-solomon.png" alt="A mud-stained boy carrying a dirty gallon on his head" />
          <article className={projectStyles.overlay}>
            <h3>Mask up Initiative by Nestle</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget integer ornare nulla aliquam commodo dolor nec. Egestas faucibus ut lorem lectus vel amet. Vulputate sit vitae sit quam mattis.</p>
          </article>
        </div>
        <div className={projectStyles.card}>
          <img src="/murphy.png" alt="Black children huddled together" />
          <article className={projectStyles.overlay}>
            <h3>Save the Children initiative powered by Chevron</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pellentesque quam iaculis imperdiet. Mollis nisi ac ultrices amet urna interdum proin lobortis. Lobortis tristique faucibus tellus ac amet.</p>
          </article>
        </div>
        <div className={projectStyles.card}>
          <img style={{ minWidth: '100%' }} src="/awards-project.png" alt="The SERAS CSR Awards" />
          <article className={projectStyles.overlay}>
            <h3>14th Edition of The SERAS CSR Awards.</h3>
            <p>The SERAS is an acronym for Sustainability, Entrepreneurship and Responsibility Awards. The Story of The SERAS began in 2007 when the very first edition held at Lagos, Nigeria.</p>
          </article>
        </div>
        <div className={projectStyles.card}>
          <img src="/peace-alberto.png" alt="A group of people posing for a photograph" />
          <article className={projectStyles.overlay}>
            <h3>Mask up Initiative by Nestle</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget integer ornare nulla aliquam commodo dolor nec. Egestas faucibus ut lorem lectus vel amet. Vulputate sit vitae sit quam mattis.</p>
          </article>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button className={projectStyles.navBtn}>
          <span>View all Projects</span>
          <img src="/arrow-right-white.svg" alt="Right Arrow" />
        </button>
      </div>
    </section>
  );
};

export default Projects;
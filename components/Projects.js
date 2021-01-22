import { useState, useEffect } from 'react'
import projectStyles from '../styles/Projects.module.css'

// The Projects section
const Projects = () => {

  // Initialize a state value to determine the whether the cards scroll left, right, or center
  const [translate, setTranslate] = useState('');

  // Define a state value to determine whether the touch event is the user's initial touch
  const [initialX, setInitialX] = useState(null);

  const scrollLeft = () => {
    if (window.innerWidth > 768) {
      // Scroll the cards left if mouse is at the left edge of the screen for desktop and tablet devices
      setTranslate((state) => {
        if (state === '') {
          return 'translate(0px, 0px)';
        } else {
          return '';
        }
      });
    } else {
      // Scroll the cards left if mouse is at the left edge of the screen for mobile devices
      setTranslate((state) => {
        switch (state) {
          case 'translate(-72%, 0px)':
            return 'translate(-47%, 0px)';
          case 'translate(-47%, 0px)':
            return 'translate(-22%, 0px)';
          case 'translate(-22%, 0px)':
          case '':
            return 'translate(3%, 0px)';
          default:
            return state;
        }
      });
    }
  };

  const scrollRight = () => {
    if (window.innerWidth > 768) {
      // Scroll the cards right if mouse is at the left edge of the screen for desktop and tablet devices
      setTranslate((state) => {
        if (state === '') {
          return 'translate(-38%, 0px)';
        } else {
          return '';
        }
      });
    } else {
      // Scroll the cards right if mouse is at the left edge of the screen for mobile devices
      setTranslate((state) => {
        switch (state) {
          case 'translate(-47%, 0px)':
            return 'translate(-72%, 0px)';
          case 'translate(3%, 0px)':
            return 'translate(-22%, 0px)';
          case 'translate(-22%, 0px)':
          case '':
            return 'translate(-47%, 0px)';
          default:
            return state;
        }
      });
    }
  };

  // Unify the touch and mouse events for swiping
  const unify = e => e.changedTouches ? e.changedTouches[0] : e;

  // Store the X-position of the user's initial screen touch
  const lock = (e) => {
    setInitialX(unify(e).clientX);
  };

  // Scroll the cards left or right depending on the direction of the swipe
  const move = (e) => {
    if (initialX || initialX === 0) {
      const dx = unify(e).clientX - initialX;
      const sign = Math.sign(dx);
      if (sign < 0) {
        scrollRight();
      } else if (sign > 0) {
        scrollLeft();
      }
      setInitialX(null);
    }
  }

  const scrollHandler = (e) => {
    if (window.innerWidth > 768) {
      if (e.pageX < 20) {
        // Scroll the cards left if mouse is at the left edge of the screen for desktop and tablet devices
        setTranslate('translate(0px, 0px)');
      } else if (e.pageX > (window.innerWidth - 50)) {
        // Scroll the cards right if mouse is at the left edge of the screen for desktop and tablet devices
        setTranslate('translate(-38%, 0px)');
      } else {
        setTranslate('');
      }
    } else {
      if (e.pageX < 20) {
        // Scroll the cards left if mouse is at the left edge of the screen for mobile devices
        setTranslate((state) => {
          switch (state) {
            case 'translate(-72%, 0px)':
              return 'translate(-47%, 0px)';
            case 'translate(-47%, 0px)':
              return 'translate(-22%, 0px)';
            case 'translate(-22%, 0px)':
            case '':
              return 'translate(3%, 0px)';
            default:
              return state;
          }
        });
      } else if (e.pageX > (window.innerWidth - 50)) {
        // Scroll the cards right if mouse is at the left edge of the screen for mobile devices
        setTranslate((state) => {
          switch (state) {
            case 'translate(-47%, 0px)':
              return 'translate(-72%, 0px)';
            case 'translate(3%, 0px)':
              return 'translate(-22%, 0px)';
            case 'translate(-22%, 0px)':
            case '':
              return 'translate(-47%, 0px)';
            default:
              return state;
          }
        });
      }
    }
  };

  useEffect(() => {
    if (window.innerWidth > 768) {
      window.onmousemove = scrollHandler;
    } else {
      window.onclick = scrollHandler;
    }
  }, []);

  return (
    <section className={projectStyles.projectSection}>
      <div className={projectStyles.title}>
        <div className={projectStyles.titlePrepend}></div>
        <h2>Our Projects</h2>
      </div>
      {/* Set the transform translate value from the state */}
      {/* Set the mouse and touch events for the screen swipe scroll to work */}
      <div onMouseDown={lock} onTouchStart={lock} onMouseUp={move} onTouchEnd={move} style={{ transform: translate }} className={projectStyles.cards}>
        <div className={projectStyles.card}>
          <div className={projectStyles.background} style={{ backgroundImage: 'url(/artsy-solomon.png)' }}></div>
          <article className={projectStyles.overlay}>
            <h3>Mask up Initiative by Nestle</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget integer ornare nulla aliquam commodo dolor nec. Egestas faucibus ut lorem lectus vel amet. Vulputate sit vitae sit quam mattis.</p>
          </article>
        </div>
        <div className={projectStyles.card}>
          <div className={projectStyles.background} style={{ backgroundImage: 'url(/murphy.png)' }}></div>
          <article className={projectStyles.overlay}>
            <h3>Save the Children initiative powered by Chevron</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pellentesque quam iaculis imperdiet. Mollis nisi ac ultrices amet urna interdum proin lobortis. Lobortis tristique faucibus tellus ac amet.</p>
          </article>
        </div>
        <div className={projectStyles.card}>
          <div className={projectStyles.background} style={{ backgroundImage: 'url(/awards-project.png)' }}></div>
          <article className={projectStyles.overlay}>
            <h3>14th Edition of The SERAS CSR Awards.</h3>
            <p>The SERAS is an acronym for Sustainability, Entrepreneurship and Responsibility Awards. The Story of The SERAS began in 2007 when the very first edition held at Lagos, Nigeria.</p>
          </article>
        </div>
        <div className={projectStyles.card}>
          <div className={projectStyles.background} style={{ backgroundImage: 'url(/peace-alberto.png)' }}></div>
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
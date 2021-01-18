import React, { useState } from 'react'
import headerStyles from '../styles/Header.module.css'

const Header = () => {

  const [showMobile, setShowMobile] = useState(false);

  return (
    <>
      <header className={headerStyles.header}>
        <img src="/logo.png" alt="TruCSR logo" />
        <button onClick={() => setShowMobile(!showMobile)} className={headerStyles.toggleBtn}>
          <i class="fas fa-bars"></i>
        </button>
        <nav>
          <ul>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>CSR Academy</a>
            </li>
            <li>
              <a>Publications</a>
            </li>
            <li>
              <a>Events</a>
            </li>
            <li>
              <a>Media</a>
            </li>
            <li>
              <button className={headerStyles.navBtn}>
                <span>Contact Us</span>
                <img src="/arrow-right-white.svg" alt="Right Arrow" />
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {showMobile && (
        <nav className={headerStyles.mobileNav}>
          <ul>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>CSR Academy</a>
            </li>
            <li>
              <a>Publications</a>
            </li>
            <li>
              <a>Events</a>
            </li>
            <li>
              <a>Media</a>
            </li>
            <li>
              <button className={headerStyles.navBtn}>
                <span>Contact Us</span>
                <img src="/arrow-right-white.svg" alt="Right Arrow" />
              </button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Header;
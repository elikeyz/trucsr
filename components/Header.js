import { useState } from 'react'
import headerStyles from '../styles/Header.module.css'
import Link from 'next/link';

const Header = () => {

  const [showMobile, setShowMobile] = useState(false);

  return (
    <>
      <header className={headerStyles.header}>
        <img src="/logo.png" alt="TruCSR logo" />
        <button onClick={() => setShowMobile(!showMobile)} className={headerStyles.toggleBtn}>
          <i className="fas fa-bars"></i>
        </button>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Services</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>CSR Academy</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Publications</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Events</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Media</a>
              </Link>
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
              <Link href="/">
                <a>Services</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>CSR Academy</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Publications</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Events</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Media</a>
              </Link>
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
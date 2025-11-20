import { useState } from 'react'
import Link from 'next/link'
import headerStyles from '../styles/Header.module.css'
import { FaBars } from 'react-icons/fa';

// The Header section
const Header = () => {

  // Initialize a state value to determine whether mobile nav should display
  const [showMobile, setShowMobile] = useState(false);

  return (
    <>
      <header className={headerStyles.header}>
        <img src="/logo.png" alt="TruCSR logo" />
        {/* Set a click listener to toggle mobile nav visibility */}
        <button onClick={() => setShowMobile(!showMobile)} className={headerStyles.toggleBtn}>
          <FaBars />
        </button>
        <nav>
          <ul>
            <li>
              <Link href="/">
                Services
              </Link>
            </li>
            <li>
              <Link href="/">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/">
                CSR Academy
              </Link>
            </li>
            <li>
              <Link href="/">
                Publications
              </Link>
            </li>
            <li>
              <Link href="/">
                Events
              </Link>
            </li>
            <li>
              <Link href="/">
                Media
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
      {/* Display mobile nav if the showMobile state is true */}
      {showMobile && (
        <nav className={headerStyles.mobileNav}>
          <ul>
          <li>
              <Link href="/">
                Services
              </Link>
            </li>
            <li>
              <Link href="/">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/">
                CSR Academy
              </Link>
            </li>
            <li>
              <Link href="/">
                Publications
              </Link>
            </li>
            <li>
              <Link href="/">
                Events
              </Link>
            </li>
            <li>
              <Link href="/">
                Media
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

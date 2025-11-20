import Link from 'next/link'
import footerStyles from '../styles/Footer.module.css'
import { FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

// The Footer section
const Footer = () => (
  <footer className={footerStyles.footer}>
    <div>
      <h2>Customer Service</h2>
      <ul>
        <li>
          <Link href="/">FAQs</Link>
        </li>
        <li>
          <Link href="/">Customer Service</Link>
        </li>
      </ul>
    </div>
    <div>
      <h2>Business</h2>
      <ul>
        <li>
          <Link href="/">
            Careers
          </Link>
        </li>
        <li>
          <Link href="/">
            Partner With Us
          </Link>
        </li>
        <li>
          <Link href="/">
            Investor Relations
          </Link>
        </li>
      </ul>
    </div>
    <div>
      <h2>Company</h2>
      <ul>
        <li>
          <Link href="/">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/">
            Services
          </Link>
        </li>
        <li>
          <Link href="/">
            Partners
          </Link>
        </li>
        <li>
          <Link href="/">
            Customer Stories
          </Link>
        </li>
        <li>
          <Link href="/">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
    <div>
      <address>
        LAGOS NIGERIA
        <br />
        30, Shakiru Anjorin Street, Road 39, Off
        <br />
        Admiralty Way, Lekki Phase 1, Lekki, Lagos,
        <br />
        Phone: <a href="tel:+2341234456">+234 123 4456</a>
      </address>
      <div className={footerStyles.social}>
        <Link href="/">
          <div className={footerStyles.socialLogo}>
            <FaTwitter />
          </div>
        </Link>
        <Link href="/">
          <div className={footerStyles.socialLogo}>
            <FaFacebook />
          </div>
        </Link>
        <Link href="/">
          <div className={footerStyles.socialLogo}>
            <FaLinkedinIn />
          </div>
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import footerStyles from '../styles/Footer.module.css'

// The Footer section
const Footer = () => (
  <footer className={footerStyles.footer}>
    <div>
      <h2>Customer Service</h2>
      <ul>
        <li>
          <Link href="/">
            <a>FAQs</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Customer Service</a>
          </Link>
        </li>
      </ul>
    </div>
    <div>
      <h2>Business</h2>
      <ul>
        <li>
          <Link href="/">
            <a>Careers</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Partner With Us</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Investor Relations</a>
          </Link>
        </li>
      </ul>
    </div>
    <div>
      <h2>Company</h2>
      <ul>
        <li>
          <Link href="/">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Services</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Partners</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Customer Stories</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Contact Us</a>
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
          <a>
            <div className={footerStyles.socialLogo}>
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </a>
        </Link>
        <Link href="/">
          <a>
            <div className={footerStyles.socialLogo}>
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
          </a>
        </Link>
        <Link href="/">
          <a>
            <div className={footerStyles.socialLogo}>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
          </a>
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
import servicesStyles from '../styles/Services.module.css'
import Link from 'next/link'

// The Services section
const Services = () => (
  <section className={servicesStyles.serviceSection}>
    <article>
      <div className={servicesStyles.title}>
        <div className={servicesStyles.titlePrepend}></div>
        <h2>Our Services</h2>
      </div>
      <p>
        Our team seek to help your organization navigate this threshold that stands between your brands and distinctive innovations, and finding your brands inner sanctum.
      </p>
    </article>
    <div className={servicesStyles.cards}>
      <div className={servicesStyles.card}>
        <div className={servicesStyles.cardImgContainer}>
          <img src="/consulting.png" alt="Shaking hands" />
        </div>
        <article>
          <h3>Consulting</h3>
          <p>Nothing excites us like an opportunity to help our clients make those key decisions that marries their business ideals and sustainability in a way helps them innovate in the areas of new products, ideas and service that keeps them ahead of competition.</p>
          <div className={servicesStyles.link}>
            <div>
              <Link href="/">
                <a>Work With Us</a>
              </Link>
            </div>
            <img src="/arrow-right.svg" alt="Arrow Right" />
          </div>
        </article>
      </div>
      <div className={servicesStyles.card}>
        <div className={servicesStyles.cardImgContainer}>
          <img src="/impact-measurement.png" alt="A woman taking notes in front of a desktop screen" />
        </div>
        <article>
          <h3>Impact Measurement & Accessment</h3>
          <p>At TCSRN, we help decision-makers and policy-makers decide what actions they should or should not take to make society more sustainable, and also ensure that plans and activities makes an optimal contribution to sustainable development</p>
          <div className={servicesStyles.link}>
            <div>
              <Link href="/">
                <a>Work With Us</a>
              </Link>
            </div>
            <img src="/arrow-right.svg" alt="Arrow Right" />
          </div>
        </article>
      </div>
      <div className={servicesStyles.card}>
        <div className={servicesStyles.cardImgContainer}>
          <img src="/engagement.png" alt="A laptop on a table displaying statistical data" />
        </div>
        <article>
          <h3>Engagement Design</h3>
          <p>Consumers have finite attention spans and limited, as such, gaining their attention as quickly as possible and trying to establish the bonding capital with them is vital. We are adept at devising the surest and the most potent of reaching your target audience and ensuring optimized bonding that build mutual trust.</p>
          <div className={servicesStyles.link}>
            <div>
              <Link href="/">
                <a>Work With Us</a>
              </Link>
            </div>
            <img src="/arrow-right.svg" alt="Arrow Right" />
          </div>
        </article>
      </div>
      <div className={servicesStyles.card}>
        <div className={servicesStyles.cardImgContainer}>
          <img src="/strategy.png" alt="A group of people planning and taking notes" />
        </div>
        <article>
          <h3>Strategy</h3>
          <p>At TCSRN, we provide service that assist our client to set new agendas and reengineer their business models that boost their chances at a sustainable future in which innovation propels their productivity.</p>
          <div className={servicesStyles.link}>
            <div>
              <Link href="/">
                <a>Work With Us</a>
              </Link>
            </div>
            <img src="/arrow-right.svg" alt="Arrow Right" />
          </div>
        </article>
      </div>
    </div>
  </section>
);

export default Services;
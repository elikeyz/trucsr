import { useState } from 'react'
import Link from 'next/link'
import partnerStyles from '../styles/Partners.module.css'

const Partners = () => {

    const [animationName, setAnimationName] = useState('scrollLeft');
    const [prevY, setPrevY] = useState(0);

    const onHover = (e) => {
        if (e.pageY > (prevY + 20)) {
            setAnimationName('scrollRight');
        } else if (e.pageY < (prevY - 20)) {
            setAnimationName('scrollLeft');
        }
        setPrevY(e.pageY);
    };

    return (
        <section className={partnerStyles.partnerSection}>
            <article>
                <div className={partnerStyles.title}>
                    <div className={partnerStyles.titlePrepend}></div>
                    <h2>Our Partners</h2>
                </div>
                <p>
                    Our team seek to help your organization navigate this threshold that stands between your brands and distinctive innovations, and finding your brands inner sanctum.
                </p>
            </article>
            <div onMouseMove={onHover} className={partnerStyles.cardGrid}>
                <div className={partnerStyles[animationName]}>
                    <div className={partnerStyles.card}>
                        <img src="/nestle.png" alt="Nestle Logo" />
                    </div>
                    <div className={partnerStyles.card}>
                        <img src="/firstbank.png" alt="First Bank Logo" />
                    </div>
                    <div className={partnerStyles.card}>
                        <img src="/gtb.png" alt="Guaranty Trust Bank Logo" />
                    </div>
                    <div className={partnerStyles.card}>
                        <img src="/lafarge.png" alt="Lafarge Logo" />
                    </div>
                    <div className={partnerStyles.card}>
                        <img src="/nestle.png" alt="Nestle Logo" />
                    </div>
                    <div className={partnerStyles.card}>
                        <img src="/firstbank.png" alt="First Bank Logo" />
                    </div>
                    <div className={partnerStyles.card}>
                        <img src="/gtb.png" alt="Guaranty Trust Bank Logo" />
                    </div>
                    <div className={partnerStyles.card}>
                        <img src="/lafarge.png" alt="Lafarge Logo" />
                    </div>
                </div>
                <div className={partnerStyles[animationName]}>
                    <div className={partnerStyles.card}>
                        <img src="/act.png" alt="ACT Logo" />
                    </div>
                    <div className={partnerStyles.card}>
                        <img src="/chevron.png" alt="Chevron Logo" />
                    </div>
                    <div className={partnerStyles.card}>
                        <img src="/dangote.png" alt="Dangote Logo" />
                    </div>
                    <div className={partnerStyles.card}>
                        <img src="/fcmb.png" alt="First City Monument Bank Logo" />
                    </div>
                    <div className={partnerStyles.card}>
                        <img src="/act.png" alt="ACT Logo" />
                    </div>
                    <div className={partnerStyles.card}>
                        <img src="/chevron.png" alt="Chevron Logo" />
                    </div>
                    <div className={partnerStyles.card}>
                        <img src="/dangote.png" alt="Dangote Logo" />
                    </div>
                    <div className={partnerStyles.card}>
                        <img src="/fcmb.png" alt="First City Monument Bank Logo" />
                    </div>
                </div>
            </div>
            <div className={partnerStyles.testimonial}>
                <div className={partnerStyles.imageWrapper}>
                    <img src="/christina-morillo.png" alt="Mr. Kelechi Onuacho" />
                </div>
                <article>
                    <p>“ Working with TruCSR was the best decision I made for my business, most people underestimate the importance of Social responsibilty in this country, i’m glad we consulted TruCSR ”</p>
                    <p className={partnerStyles.name}>Mr Kelechi Onuacho</p>
                    <small>CEO, Nestle</small>
                </article>
            </div>
            <div className={partnerStyles.link}>
                <div>
                    <Link href="/">
                        <a>See More Testimonials</a>
                    </Link>
                </div>
                <img src="/arrow-right.svg" alt="Arrow Right" />
            </div>
        </section>
    );
};

export default Partners;
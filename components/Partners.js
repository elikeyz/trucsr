import partnerStyles from '../styles/Partners.module.css'

const Partners = () => (
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
        <div>
            <div className={partnerStyles.cardRow}>
                <div className={partnerStyles.card}>
                    <img src="/nestle.png" alt="Nestle Logo" />
                </div>
            </div>
            <div className={partnerStyles.cardRow}>
                <div className={partnerStyles.card}>
                    <img src="/firstbank.png" alt="First Bank Logo" />
                </div>
            </div>
            <div className={partnerStyles.cardRow}>
                <div className={partnerStyles.card}>
                    <img src="/gtb.png" alt="Guaranty Trust Bank Logo" />
                </div>
            </div>
            <div className={partnerStyles.cardRow}>
                <div className={partnerStyles.card}>
                    <img src="/lafarge.png" alt="Lafarge Logo" />
                </div>
            </div>
        </div>
    </section>
);

export default Partners;
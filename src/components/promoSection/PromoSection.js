import triangle from '../../resources/Triangle.png'
import logo from '../../resources/NAF_Logo.png'
import styles from './promoSection.module.scss'
import '../../style/button.scss';


const PromoSection = () => {
	return (
		<section className={styles.mortgageSection}>
			<div className={styles.container}>
				<div className={styles.imageContent}>
					<div className={styles.wrapper}>
						<div className={styles.subtitle}>Why a mortgage is so much more than just a rate?</div>
						<div className={styles.actionGroup}>
							<div className='pulseBtn'>
								<img className={styles.triangle} src={triangle} alt="icon" />
							</div>
							<div className={styles.timer}>0:34</div>
						</div>
					</div>
				</div>
				<div className={styles.details}>
					<div className={styles.logo}>
						<img src={logo} alt="logo" />
					</div>
					<div className={styles.titleWrapper}>
						<div className={styles.title}>
							Finding a mortgage is so <span>much more</span> than <span>just a rate</span>
						</div>
						<div className={styles.subtitle}>
							Rates change, but every mortgage journey starts with a relationship. <br />
							(Pssst...it’s not just about clicking a button)
						</div>
					</div>
					<div className='divider'></div>
					<div className={styles.wrapper}>
						<div className={styles.descrBlock}>Let us help you create <br />
						your mortgage journey</div>
						<button className='button'>Get started</button>
						<button className={`button ${styles.secondaryBtn}`}>Schedule a time</button>
					</div>
				</div>
				<div class={styles['hamburger-menu']}>
					<div class={styles.line}></div>
					<div class={styles.line}></div>
					<div class={styles.line}></div>
				</div>
			</div>
		</section>
	);
};

export default PromoSection;

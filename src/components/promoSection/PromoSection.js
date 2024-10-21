import styles from './promoSection.module.scss';

import triangle from '../../resources/icon/Triangle.png';
import logo from '../../resources/logo/NAF_Logo.png';

const PromoSection = () => {
	return (
		<section className={styles.mortgageSection}>
			<div className={styles.container}>
				<div className={styles.imageContent}>
					<div className={styles.wrapper}>
						<div className={styles.subtitle}>Why a mortgage is so much more than just a rate?</div>
						<div className={styles.actionGroup}>
							<div className={styles.btn}>
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
						<div className={styles.descr}>
							Rates change, but every mortgage journey starts with a relationship. <br />
							(Pssst...it’s not just about clicking a button)
						</div>
					</div>
					<div className={styles.divider}></div>
					<div className={styles.wrapperBtn}>
						<div className={styles.descrBlock}>Let us help you create <br />
						your mortgage journey</div>
							<button className={styles.button}>
								Get started
								<svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1.00002 6.83332C0.539783 6.83332 0.166687 6.46023 0.166687 5.99999C0.166687 5.53975 0.539783 5.16666 1.00002 5.16666H19C19.4603 5.16666 19.8334 5.53975 19.8334 5.99999C19.8334 6.46023 19.4603 6.83332 19 6.83332H1.00002Z" fill="white" />
									<path d="M17.8215 5.99999L13.4108 1.58925C13.0853 1.26381 13.0853 0.736171 13.4108 0.410734C13.7362 0.0852973 14.2638 0.0852973 14.5893 0.410734L19.5893 5.41073C19.9147 5.73617 19.9147 6.26381 19.5893 6.58925L14.5893 11.5892C14.2638 11.9147 13.7362 11.9147 13.4108 11.5892C13.0853 11.2638 13.0853 10.7362 13.4108 10.4107L17.8215 5.99999Z" fill="white" />
								</svg>
							</button>
							
						<button className={styles.secondaryBtn}>Schedule a time</button>
						{/* Я не понял как побороть перебивку стилей :( Использовал даже extends в scss */}
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

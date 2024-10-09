import styles from './reviewsSection.module.scss';
import shared from '../../style/shared.module.scss';

import google from '../../resources/logo/google.png';
import zillow from '../../resources/logo/zillow.png';
import leftBtn from '../../resources/arrowLeft.png';
import rightBtn from '../../resources/arrowRight.png';
import women from '../../resources/person/personCircle1.png';
import men from '../../resources/person/personCircle2.png'
import quoteImg from '../../resources/right-quote.png';
import googleIcon from '../../resources/icon/googleIcon.png';
import zi from '../../resources/icon/zi.png';



const ReviewsSection = () => {
	return (
		<section className={styles.reviews}>
			<h2 className={styles.title}>What our customers say</h2>
			<p className={styles.subtitle}>Truly reviews from our clients</p>
			<div className={styles.wrapper}>
				<div className={styles.ratingWrapper}>
					<div className={styles.ratingBlock}>
						<div className={styles.leftContent}>
							<div className={shared.smallText}>4.5 stars rating</div>
							<img className={styles.logoCompany} src={google} alt="google" />
							<div className={shared.divider}></div>
							<div className={styles.reviewSum}>
								Based on <span className={styles.underlineText}>85 reviews</span>
							</div>
						</div>
						<div className={styles.rightContent}>
							{Array.from({length: 5}, (_, i) => (
								<div key={i} className={styles.star}>
									<svg viewBox="0 0 24 24" className={styles.starIcon}>
										{i === 4 ? (
											<>
												<defs>
													<linearGradient id="halfGrad">
														<stop offset="50%" stopColor="#278FB4" />
														<stop offset="50%" stopColor="#e0e0e0" />
													</linearGradient>
												</defs>
												<path
													d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
													fill="url(#halfGrad)"
												/>
											</>
										) : (
											<path
												d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
												fill='#278FB4'
											/>
										)}
									</svg>
								</div>
							))}						
						</div>
					</div>
					<div className={styles.ratingBlock}>
						<div className={styles.leftContent}>
							<div className={shared.smallText}>4 stars rating</div>
							<img className={styles.logoCompany} src={zillow} alt="zillow" />
							<div className={shared.divider}></div>
							<div className={styles.reviewSum}>
								Based on <span className={styles.underlineText}>22 reviews</span>
							</div>
						</div>
						<div className={styles.rightContent}>
							{Array.from({length: 5}, (_, i) => (
								<div key={i} className={styles.star}>
									<svg viewBox="0 0 24 24" className={styles.starIcon}>
										<path
										d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
										fill={i === 4 ? '#e0e0e0' : '#278FB4'}
										/>
									</svg>
								</div>
							))}
							
						</div>
					</div>
				</div>
				
				<div className={styles.slider}>
				<div className={styles.info}>
						<span className={styles.current}>01</span>
						<span className={styles.total}>/10</span>
					</div>

					<div className={styles.cardWrapper}>
						<div className={styles.card}>
							<div className={styles.header}>
								<div className={styles.image}>
									<img src={women} alt="women" />
								</div>
								<div className={styles.details}>
									<span className={shared.smallText}>New York</span>
									<div className={styles.nameWrapper}>
										<h3 className={styles.name}>Emily Pearson</h3>
										<div className={styles.icon}>
											<img src={googleIcon} alt="googleIcon" />
										</div>
									</div>
									
									<span className={styles.role}>Engineer</span>
								</div>
							</div>
							<span className={shared.divider}></span>
							<div className={styles.quote}>
								<div className={styles.quoteIcon}>
									<img src={quoteImg} alt="quote" />
								</div>
								<p className={styles.text}>Terms of your offer, how quickly you can turn things around and who your lenders is. advising, calling listing agents, to get your deal done, Offer-Stage advising, calling listing agents, to get your deal done.</p>
							</div>
						</div>
						<div className={styles.card}>
							<div className={styles.header}>
								<div className={styles.image}>
									<img src={men} alt="men" />
								</div>
								<div className={styles.details}>
									<span className={shared.smallText}>Los Angeles</span>
									<div className={styles.nameWrapper}>
										<h3 className={styles.name}>Michael Bronson</h3>
										<div className={styles.icon}>
											<img src={zi} alt="googleIcon" />
										</div>
									</div>
									
									<span className={styles.role}>Product designer</span>
								</div>
							</div>
							<span className={shared.divider}></span>
							<div className={styles.quote}>
								<div className={styles.quoteIcon}>
									<img src={quoteImg} alt="quote" />
								</div>
								<p className={styles.text}>Terms of your offer, how quickly you can turn things around and who your lenders is. advising, calling listing agents, to get your deal done, Offer-Stage advising, calling listing agents, to get your deal done.</p>
							</div>
						</div>
						<div className={styles.card}>
							<div className={styles.header}>
								<div className={styles.image}>
									<img src={men} alt="men" />
								</div>
								<div className={styles.details}>
									<span className={shared.smallText}>Los Angeles</span>
									<div className={styles.nameWrapper}>
										<h3 className={styles.name}>Michael Bronson</h3>
										<div className={styles.icon}>
											<img src={zi} alt="googleIcon" />
										</div>
									</div>
									
									<span className={styles.role}>Product designer</span>
								</div>
							</div>
							<span className={shared.divider}></span>
							<div className={styles.quote}>
								<div className={styles.quoteIcon}>
									<img src={quoteImg} alt="quote" />
								</div>
								<p className={styles.text}>Terms of your offer, how quickly you can turn things around and who your lenders is. advising, calling listing agents, to get your deal done, Offer-Stage advising, calling listing agents, to get your deal done.</p>
							</div>

						</div>
					</div>

					<div className={styles.btns}>
						<div className={styles.btn}>
							<img src={leftBtn} alt="leftBtn" />
						</div>
						<div className={styles.btn}>
							<img src={rightBtn} alt="rigthBtn" />
						</div>
					</div>
					
					
					<div className={styles.dots}>
						<span className={`${styles.dot} ${styles.active}`}></span>
						<span className={styles.dot}></span>
						<span className={styles.dot}></span>
						<span className={styles.dot}></span>
						<span className={styles.dot}></span>
						<span className={styles.dot}></span>
						<span className={styles.dot}></span>
						<span className={styles.dot}></span>
						<span className={styles.dot}></span>
						<span className={styles.dot}></span>
					</div>
				</div>

			</div>
			
		</section>
	);
};

export default ReviewsSection;
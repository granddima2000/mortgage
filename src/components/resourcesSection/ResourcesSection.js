import styles from './resourcesSection.module.scss';

import arrowBottom from '../../resources/icon/arrowBottom.png';
import book from '../../resources/book.png';

const ResourceSection = ({src}) => {
	return (
		<div className={styles.resource}>
						<h2 className={styles.title}>Resources</h2>
						<div className={styles.cards}>
							<div className={styles.item}>
								<div className={styles.cardWrapper}>
									<div className={styles.cardImg}>
										<img src={book} alt="book" />
									</div>
									<div className={styles.textWrap}>
										<div className={styles.blueText}>Resourses</div>
										<div className={styles.textContent}>9 Things You Must Know About Buying Your First Home</div>
									</div>
								</div>
								<span className={styles.divider}></span>
								<div className={styles.buttonRight}>
									<button className={styles.button}>
										Download
										<img src={arrowBottom} alt="arrowBottom" />
									</button>
								</div>
							</div>
							<div className={styles.item}>
								<div className={styles.cardWrapper}>
									
										{/* Src пока что просто пустая заглушка */}
										{src ? (
											<div className={styles.cardImg}>
												<img 
												src={src} 
												alt='book' 
												/>
											</div>
											
										) : <div className={styles.cardNone}></div>}
									<div className={styles.textWrap}>
										<div className={styles.blueText}>Resourses</div>
										<div className={styles.textContent}>Webinar name</div>
									</div>
								</div>
								<span className={styles.divider}></span>
								<div className={styles.buttonRight}>
									<button className={styles.eyeButton}>
										<svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M1 9C1 9 5 1 12 1C19 1 23 9 23 9C23 9 19 17 12 17C5 17 1 9 1 9Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
											<path fill-rule="evenodd" clip-rule="evenodd" d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
										</svg>
									</button>
								</div>
							</div>
						</div>

					</div>
	)
};

export default ResourceSection;
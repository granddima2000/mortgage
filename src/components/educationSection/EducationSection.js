import styles from './educationSection.module.scss';

import author1 from '../../resources/manager1.png';
import author2 from '../../resources/manager2.png';


const EducationSection = () => {
	return (
		<div className={styles.blogCards}>
			<div className={styles.headerWithLink}>
				<h2 className={styles.title}>Education</h2>
				<a href='#' className={styles.underlineLink}>All articles</a>
			</div>
			
			<div className={styles.wrapper}> {/* Обертка wrapper */}
				<div className={styles.item}>
					<div className={styles.category}>Blog</div>
					<h3 className={styles.articleTitle}>Article #1</h3>
					<p className={styles.descr}>Terms of your offer, how quickly you can turn things around and who your lenders is advising.</p>
					<span className={styles.divider}></span>
					<div className={styles.authorInfo}>
						<div className={styles.authorImg}>
							<img src={author2} alt="author" />
						</div>
						<div className={styles.authorText}>
							<span className={styles.byLabel}>by</span>
							<span className={styles.authorName}>Scott Johnson</span>
						</div>
					</div>
				</div>
				<div className={styles.item}>
					<div className={styles.category}>Blog</div>
					<h3 className={styles.articleTitle}>Article #2</h3>
					<p className={styles.descr}>Terms of your offer, how quickly you can turn things around and who your lenders is advising.</p>
					<span className={styles.divider}></span>
					<div className={styles.authorInfo}>
						<div className={styles.authorImg}>
							<img src={author1} alt="author" />
						</div>
						<div className={styles.authorText}>
							<span className={styles.byLabel}>by</span>
							<span className={styles.authorName}>Justin Roberts</span>
						</div>
					</div>
				</div>
				<div className={styles.item}>
					<div className={styles.category}>Blog</div>
					<h3 className={styles.articleTitle}>Article #3</h3>
					<p className={styles.descr}>Terms of your offer, how quickly you can turn things around and who your lenders is advising.</p>
					<span className={styles.divider}></span>
					<div className={styles.authorInfo}>
						<div className={styles.authorImg}>
							<img src={author1} alt="author" />
						</div>
						<div className={styles.authorText}>
							<span className={styles.byLabel}>by</span>
							<span className={styles.authorName}>Justin Roberts</span>
						</div>
					</div>
				</div>
			</div>
		</div>
				
	);
};

export default EducationSection;
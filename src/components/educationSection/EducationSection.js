import styles from './educationSection.module.scss';

import author1 from '../../resources/miniManager1.png';
import author2 from '../../resources/miniManager2.png';


const EducationSection = ({className}) => {
	
	const articlesData = [
		{
			id: 1,
			title: "Article #1",
			category: "Blog",
			descr: "Terms of your offer, how quickly you can turn things around and who your lenders is advising.",
			author: { name: "Scott Johnson", img: author2 }
		},
		{
			id: 2,
			title: "Article #2",
			category: "Blog",
			descr: "Terms of your offer, how quickly you can turn things around and who your lenders is advising.",
			author: { name: "Justin Roberts", img: author1 }
		},
		{
			id: 3,
			title: "Article #3",
			category: "Blog",
			descr: "Terms of your offer, how quickly you can turn things around and who your lenders is advising.",
			author: { name: "Justin Roberts", img: author1 }
		},
		{
			id: 4,
			title: "Article #4",
			category: "Blog",
			descr: "Terms of your offer, how quickly you can turn things around and who your lenders is advising.",
			author: { name: "Scott Johnson", img: author2 }
		},
		{
			id: 5,
			title: "Article #5",
			category: "Blog",
			descr: "Terms of your offer, how quickly you can turn things around and who your lenders is advising.",
			author: { name: "Scott Johnson", img: author2 }
		},
		{
			id: 6,
			title: "Article #6",
			category: "Blog",
			descr: "Terms of your offer, how quickly you can turn things around and who your lenders is advising.",
			author: { name: "Justin Roberts", img: author1 }
		},
		{
			id: 7,
			title: "Article #7",
			category: "Blog",
			descr: "Terms of your offer, how quickly you can turn things around and who your lenders is advising.",
			author: { name: "Scott Johnson", img: author2 }
		},
		{
			id: 8,
			title: "Article #8",
			category: "Blog",
			descr: "Terms of your offer, how quickly you can turn things around and who your lenders is advising.",
			author: { name: "Scott Johnson", img: author2 }
		},
		{
			id: 9,
			title: "Article #9",
			category: "Blog",
			descr: "Terms of your offer, how quickly you can turn things around and who your lenders is advising.",
			author: { name: "Justin Roberts", img: author1 }
		},
		{
			id: 10,
			title: "Article #10",
			category: "Blog",
			descr: "Terms of your offer, how quickly you can turn things around and who your lenders is advising.",
			author: { name: "Scott Johnson", img: author2 }
		}
	];

	const itemsToShow = className ? 10 : 3;

	function renderCardItems (articlesData, itemsToShow) {
		return (
			<>
				{articlesData.slice(0, itemsToShow).map(({id, title, category, descr, author}) => (
					<div key={id} className={styles.item}>
						<div className={styles.category}>{category}</div>
						<h3 className={styles.articleTitle}>{title}</h3>
						<p className={styles.descr}>{descr}</p>
						<span className={styles.divider}></span>
						<div className={styles.authorInfo}>
							<div className={styles.authorImg}>
								<img src={author.img} alt="author" />
							</div>
							<div className={styles.authorText}>
								<span className={styles.byLabel}>by</span>
								<span className={styles.authorName}>{author.name}</span>
							</div>
						</div>
					</div>
				))}
			</>
		);
	};

	const result = renderCardItems(articlesData, itemsToShow)

	return (
		<div className={styles[className ? className : null]}>
			<div className={styles.headerWithLink}>
				<h2 className={styles.title}>Education</h2>
				{className ? null : <a href='#' className={styles.underlineLink}>All articles</a>}
			</div>
			
			<div className={styles.wrapper}> {/* Обертка wrapper */}
				{result}
			</div>
		</div>
				
	);
};



export default EducationSection;
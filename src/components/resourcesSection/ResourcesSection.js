import styles from './resourcesSection.module.scss';

import CardBook from '../page/cardBook/CardBook';
import book from "../../resources/book.png";

const ResourceSection = ({className, src}) => {

	const resources = [
		{
		  id: 1,
		  title: "9 Things You Must Know About Buying Your First Home", // Название ресурса
		  image: book, // Путь к изображению, если оно есть
		},
		{
		  id: 2,
		  title: "Webinar name", // Название вебинара
		  image: null, // Заглушка, если изображения нет
		}
	  ];

	return (
		<div className={styles[className ? className : '']}>
			<h2 className={styles.title}>Resources</h2>
			<div className={styles.cards}>
				{resources.map((item, i) => (
					<CardBook key={i} title={item.title} img={item.image}/>
				))}
			</div>
		</div>
	)
};

export default ResourceSection;
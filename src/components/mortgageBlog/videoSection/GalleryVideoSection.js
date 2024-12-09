import VideoBlock from '../../videoBlock/VideoBlock';
import Container from '../../container/Container';
import styles from './infoVideoSection.module.scss';

const GalleryVideoSection = () => {

	const videoData = [
		{
		  descr: "What are points and credits?",
		  time: "0:27"
		},
		{
		  descr: "Why a mortgage is so much more than just a rate?",
		  time: "0:34"
		},
		{
		  descr: "Why a mortgage is so much more than just a rate?",
		  time: "0:34"
		},
		{
		  descr: "What are points and credits?",
		  time: "0:27"
		},
		{
		  descr: "Why a mortgage is so much more than just a rate?",
		  time: "0:34"
		},
		{
		  descr: "Why a mortgage is so much more than just a rate?",
		  time: "0:34"
		}
	  ];

	return (
		<section className={styles.gallery}>
			<Container>
				<div className={styles.gridGallery}>
					{videoData.map((video, i) => (
						<VideoBlock key={i} descr={video.descr} time={video.time}/>
					))}
				</div>
			</Container>
				
		</section>
	);
};

export default GalleryVideoSection;
import styles from './videoBlock.module.scss';
import triangle from '../../../resources/icon/Triangle.svg';

const VideoBlock = ({descr, time}) => {
	return (
		<div className={styles.videoBlock}>
			<div className={styles.btn}>
				<img className={styles.triangle} src={triangle} alt="triangle" />
			</div>
			<div className={styles.videoDescr}>{descr}
			</div>
			<div className={styles.videoDuration}>{time}</div>
		</div>
	);
};

export default VideoBlock;
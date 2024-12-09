import Container from '../../container/Container';
import styles from './speakerSection.module.scss';

import speaker from '../../../resources/person/speaker.png';
import logo from '../../../resources/logo/NAF_Logo.png';


const SpeakerSection = () => {
	return (
		<section className={styles.speaker}>
			<Container>
				<div className={styles.logo}>
					<img src={logo} alt="logo" />
				</div>
				<div className={styles.imgSpeaker}>
					<img src={speaker} alt="speaker" />
				</div>
			</Container>
			
		</section>
	);
}

export default SpeakerSection;
import 'modern-normalize/modern-normalize.css';

import PromoSection from "../promoSection/PromoSection";
import TeamSection from "../teamSection/TeamSection";
import JourneySection from '../journeySection/JourneySection';
import ReviewsSection from '../reviewsSection/ReviewsSection';
import EducationSection from '../educationSection/EducationSection';
import FooterSection from '../footerSection/FooterSection';

import styles from './app.module.scss';
import ResourceSection from '../resourcesSection/ResourcesSection';
import SpeakerSection from '../page/mortgageBlog/speakerSection/SpeakerSection';
import GalleryVideoSection from '../page/mortgageBlog/videoSection/GalleryVideoSection';
import Container from '../container/Container'; // Хорошее ли это решение создать отдельный компонент container ?

// В моменте с <section className={styles.education}> - так можно делать? У меня возникают сомнения, что я делаю что-то здесь не так.

const App = () => {
  return (
    <div className="App">
      <div className="main">
        <PromoSection/>
        <TeamSection/>
        <JourneySection/>
        <ReviewsSection/>
        <section className={styles.education}> 
          <Container>
            <div className={styles.educationWrapper}>
                <EducationSection/>
                <ResourceSection/>
            </div>
          </Container>
        </section>
        <FooterSection/>

        <SpeakerSection/>
        <GalleryVideoSection/>
        <Container>
         	<ResourceSection className={'resourceSectionMargin'}/>
         	<EducationSection className={'blogCards'}/>
        </Container>
        <FooterSection/>
      </div>
    </div>
  );
}

export default App;

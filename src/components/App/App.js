import 'modern-normalize/modern-normalize.css';

import PromoSection from "../promoSection/PromoSection";
import TeamSection from "../teamSection/TeamSection";
import JourneySection from '../journeySection/JourneySection';
import ReviewsSection from '../reviewsSection/ReviewsSection';
import EducationSection from '../educationSection/EducationSection';
import FooterSection from '../footerSection/FooterSection';

import styles from './app.module.scss';
import ResourceSection from '../resourcesSection/ResourcesSection';

const App = () => {
  return (
    <div className="App">
      <div className="main">
        <PromoSection/>
        <TeamSection/>
        <JourneySection/>
        <ReviewsSection/>
        <div className={styles.education}>
          <div className={styles.container}>
            <div className={styles.educationWrapper}>
                <EducationSection/>
                <ResourceSection/>
            </div>
          </div>
        </div>
			  
				
        
        <FooterSection/>
      </div>
    </div>
  );
}

export default App;

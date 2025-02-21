import EducationSection from "../../components/educationSection/EducationSection";
import FooterSection from "../../components/footerSection/FooterSection";
import JourneySection from "../../components/journeySection/JourneySection";
import PromoSection from "../../components/promoSection/PromoSection";
import ReviewsSection from "../../components/reviewsSection/ReviewsSection";
import TeamSection from "../../components/teamSection/TeamSection";
import Container from "../../components/container/Container";
import ResourceSection from "../../components/resourcesSection/ResourcesSection";

import styles from "./mortgageDesignWork.module.scss";

const MortgageDesignWork = () => {
  return (
    <>
      <PromoSection />
      <TeamSection />
      <JourneySection />
      <ReviewsSection />
      <section className={styles.education}>
        <Container>
          <div className={styles.educationWrapper}>
            <EducationSection />
            <ResourceSection />
          </div>
        </Container>
      </section>
      <FooterSection />
    </>
  );
};

export default MortgageDesignWork;

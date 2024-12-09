import "modern-normalize/modern-normalize.css";

import EducationSection from "../educationSection/EducationSection";
import FooterSection from "../footerSection/FooterSection";
import JourneySection from "../journeySection/JourneySection";
import PromoSection from "../promoSection/PromoSection";
import ReviewsSection from "../reviewsSection/ReviewsSection";
import TeamSection from "../teamSection/TeamSection";

import HomeInfoBanner from "../homeInfoBannerSection/HomeInfoBanner";

import AboutAuthor from "../aboutAuthorSection/AboutAuthor";
import Container from "../container/Container"; // Хорошее ли это решение создать отдельный компонент container ?
import DescriptionSection from "../descriptionSection/DescriptionSection";
import GetStartedSection from "../getStartedSection/GetStartedSection";
import MoreArticlesSection from "../moreArticlesSection/MoreArticlesSection";
import SpeakerSection from "../mortgageBlog/speakerSection/SpeakerSection";
import GalleryVideoSection from "../mortgageBlog/videoSection/GalleryVideoSection";
import ReportSection from "../reportSection/ReportSection";
import ResourceSection from "../resourcesSection/ResourcesSection";
import WebinarNameSection from "../webinarNameSection/WebinarNameSection";
import styles from "./app.module.scss";

// В моменте с <section className={styles.education}> - так можно делать? У меня возникают сомнения, что я делаю что-то здесь не так.

const App = () => {
  return (
    <div className="App">
      <div className="main">
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

        <SpeakerSection />
        <GalleryVideoSection />
        <ResourceSection className={"resourceSectionMargin"} />
        <EducationSection className={"blogCards"} />
        <FooterSection />

        <HomeInfoBanner isBook={true} />
        <ReportSection nameTitle={"report"} />
        <AboutAuthor />
        <GetStartedSection />
        <FooterSection />

        <WebinarNameSection />
        <ReportSection nameTitle={"webinar"} />
        <AboutAuthor />
        <GetStartedSection />
        <FooterSection />

        <HomeInfoBanner />
        <DescriptionSection />
        <MoreArticlesSection />
      </div>
    </div>
  );
};

export default App;

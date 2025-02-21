import SpeakerSection from "../../components/mortgageBlog/speakerSection/SpeakerSection";
import GalleryVideoSection from "../../components/mortgageBlog/videoSection/GalleryVideoSection";
import ResourceSection from "../../components/resourcesSection/ResourcesSection";
import EducationSection from "../../components/educationSection/EducationSection";
import FooterSection from "../../components/footerSection/FooterSection";

const MortgageBlog = () => {
  return (
    <>
      <SpeakerSection />
      <GalleryVideoSection />
      <ResourceSection className={"resourceSectionMargin"} />
      <EducationSection className={"blogCards"} />
      <FooterSection />
    </>
  );
};

export default MortgageBlog;

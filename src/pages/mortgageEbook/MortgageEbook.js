import HomeInfoBanner from "../../components/homeInfoBannerSection/HomeInfoBanner";
import ReportSection from "../../components/reportSection/ReportSection";
import AboutAuthor from "../../components/aboutAuthorSection/AboutAuthor";
import GetStartedSection from "../../components/getStartedSection/GetStartedSection";
import FooterSection from "../../components/footerSection/FooterSection";

const MortgageEbook = () => {
  return (
    <>
      <HomeInfoBanner isBook={true} />
      <ReportSection nameTitle={"report"} />
      <AboutAuthor managerId={"2"} />
      <GetStartedSection />
      <FooterSection />
    </>
  );
};

export default MortgageEbook;

import WebinarNameSection from "../../components/webinarNameSection/WebinarNameSection";
import ReportSection from "../../components/reportSection/ReportSection";
import AboutAuthor from "../../components/aboutAuthorSection/AboutAuthor";
import GetStartedSection from "../../components/getStartedSection/GetStartedSection";
import FooterSection from "../../components/footerSection/FooterSection";

const MortgageWebinar = () => {
  return (
    <>
      <WebinarNameSection />
      <ReportSection nameTitle={"webinar"} />
      <AboutAuthor managerId={"1"} />
      <GetStartedSection />
      <FooterSection />
    </>
  );
};

export default MortgageWebinar;

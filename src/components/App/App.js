import 'modern-normalize/modern-normalize.css';
import PromoSection from "../promoSection/PromoSection";
import TeamSection from "../teamSection/TeamSection";
import JourneySection from '../journeySection/JourneySection';
import ReviewsSection from '../reviewsSection/ReviewsSection';

const App = () => {
  return (
    <div className="App">
      <PromoSection/>
      <TeamSection/>
      <JourneySection/>
      <ReviewsSection/>
    </div>
  );
}

export default App;

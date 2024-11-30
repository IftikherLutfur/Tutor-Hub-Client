import CustomerReviews from "../CustomreReviews/CustomerReviews";
import FrequentlyAskQuestion from "../FrequentlyQyestion/FrequentlyAskQuestion";
import TutorDetails from "../TutorDetails/TutorDetails";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
          <Banner/>
          <CustomerReviews/>
          <TutorDetails/>
          <FrequentlyAskQuestion/>
        </div>
    );
};

export default Home;
import FrequentlyAskQuestion from "../FrequentlyQyestion/FrequentlyAskQuestion";
import TutorDetails from "../TutorDetails/TutorDetails";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
          <Banner/>
          <TutorDetails/>
          <FrequentlyAskQuestion/>
        </div>
    );
};

export default Home;
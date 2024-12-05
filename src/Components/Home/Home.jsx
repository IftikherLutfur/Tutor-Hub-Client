import { NavLink } from "react-router-dom";
import CustomerReviews from "../CustomreReviews/CustomerReviews";
import FrequentlyAskQuestion from "../FrequentlyQyestion/FrequentlyAskQuestion";

import Banner from "./Banner";

const Home = () => {
    return (
        <div>
          <Banner/>
          <CustomerReviews/>
          {/* start Button for hire tutor */}
           <div className=" flex items-center justify-center my-10">
            <NavLink to={'/tutorFinds'}><button className="bg-zinc-900 text-white text-xl px-5 py-2">Hire Tutor</button></NavLink>
           </div>
           {/* end the button */}
          <FrequentlyAskQuestion/>
        </div>
    );
};

export default Home;
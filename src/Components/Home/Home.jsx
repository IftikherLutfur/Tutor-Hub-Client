import { NavLink } from "react-router-dom";
import CustomerReviews from "../CustomreReviews/CustomerReviews";
import FrequentlyAskQuestion from "../FrequentlyQyestion/FrequentlyAskQuestion";

import Banner from "./Banner";
import TutorReview from "../TutorReview/TutorReview";
import Blogs from "../Blogs/Blogs";



const Home = () => {
  
    return (
        <div>
          <Banner/>
          <CustomerReviews/>
          {/* start Button for hire tutor */}
          
          <div className="flex items-center justify-center my-10 relative bg-cover bg-center" style={{ backgroundImage: 'url(https://i.pinimg.com/736x/84/b3/2f/84b32f6bc52da764fa2f72c2b55bdfc4.jpg)' }}>
    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50"></div>
    <NavLink to={'/tutorFinds'}>
        <button className="relative font-bold text-3xl text-white bg-zinc-800 px-5 py-4 my-40">Hire Tutor</button>
    </NavLink>
</div>

           {/* end the button */}
          <FrequentlyAskQuestion/>
          <Blogs/>
         <TutorReview/>
        </div>
    );
};

export default Home;
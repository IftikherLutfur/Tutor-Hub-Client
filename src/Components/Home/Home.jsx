import { NavLink } from "react-router-dom";
import CustomerReviews from "../CustomreReviews/CustomerReviews";
import FrequentlyAskQuestion from "../FrequentlyQyestion/FrequentlyAskQuestion";

import Banner from "./Banner";
import TutorReview from "../TutorReview/TutorReview";



const Home = () => {
  
    return (
        <div>
          <Banner/>
          <CustomerReviews/>
          {/* start Button for hire tutor */}
          
          <div className="flex items-center justify-center my-10 relative bg-cover bg-center" style={{ backgroundImage: 'url(https://media.istockphoto.com/id/530607531/photo/idea-solve-problem-concept.jpg?s=612x612&w=0&k=20&c=8cNkSao4Wio1-D3rhyBnSC1ASnxqP_2eJtPQ1iG_dHk=)' }}>
    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50"></div>
    <NavLink to={'/tutorFinds'}>
        <button className="relative font-bold text-3xl text-white bg-zinc-800 px-5 py-4 my-40">Hire Tutor</button>
    </NavLink>
</div>

           {/* end the button */}
          <FrequentlyAskQuestion/>
         <TutorReview/>
        </div>
    );
};

export default Home;
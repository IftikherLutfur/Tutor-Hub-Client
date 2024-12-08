import { NavLink } from "react-router-dom";
import CustomerReviews from "../CustomreReviews/CustomerReviews";
import FrequentlyAskQuestion from "../FrequentlyQyestion/FrequentlyAskQuestion";

import Banner from "./Banner";
import TutorReview from "../TutorReview/TutorReview";
import { useEffect, useState } from "react";
import axios from "axios";


const Home = () => {
  const [tutor, setTutor] = useState([])
  useEffect(()=>{
     axios.get('http://localhost:5000/getTutor')
     .then(res=>{
      setTutor(res.data)
      console.log(res.data);
      
     })
  },[])
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
          {tutor ? <TutorReview/> : ""} 
        </div>
    );
};

export default Home;
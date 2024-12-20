import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthProvider";

const TutorReview = () => {
  const { user } = useContext(AuthContext)
  const [current, setCurrent] = useState(null)
  useEffect(() => {
    if (user?.email) {
      axios.get("http://localhost:5000/getTutor")
        .then(res => {
          const matchedStudent = res.data.find((tutor) => tutor?.email === user?.email);
          setCurrent(matchedStudent)

        })
    }
  })
  
  const handleForReviews = (e) => {

    e.preventDefault(); // Prevent default form submission behavior
    const form = e.target
    const message = form.message.value
    console.log("Review Message:", message);



    const review = {
      email: user.email,
      role: user.role,
      image: current?.image,
      name: current?.name,
      message: message
    }

    axios.post('http://localhost:5000/tutorReview', review)
      .then(res => {
        console.log(res.data);
        if (res.data.insertdId) {
          toast.success("Review submit")
        }

      })
      .catch((error) => {
        console.error(error, "Error")
      })

  };



  return (
    <div>
      <hr />
      <div className="lg:flex gap-11 mx-5 my-5 items-center ">
        <div>
          <img src="https://i.ibb.co.com/WnVWyKW/Background-9.png" className="w-80 h-52 px-10 mx-16" alt="" />
          <h1 className="text-3xl font-bold uppercase">Hey, tutor how's our service</h1>
        </div>
        <form onSubmit={handleForReviews} className="mt-6">
          <div>
            <label className="block">

              <textarea rows="3" name="message" className="block w-full rounded-md focus:ring mt-3 border-[3px] focus:ring-opacity-75 h-48 p-3 dark:bg-gray-100" placeholder="Review" cols={100}></textarea>
            </label>
          </div>

          <div className="mt-6">
            <button
              className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-lg hover:border-2 bg-[#1D1D1D] "
            >
              Submit
            </button>
            <Toaster />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TutorReview;
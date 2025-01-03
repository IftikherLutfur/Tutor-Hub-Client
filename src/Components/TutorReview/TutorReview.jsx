import axios from "axios";
import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthProvider";

const TutorReview = () => {
  const { user } = useContext(AuthContext);

  const handleForReviews = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const form = e.target;
    const message = form.message.value;

    // Get current date and time
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString(); // Format: MM/DD/YYYY
    const formattedTime = currentDate.toLocaleTimeString(); // Format: HH:MM:SS AM/PM

    // Create review object
    const review = {
      email: user.email,
      message: message,
      date: formattedDate,
      time: formattedTime,
      name: user.displayName
      
    };

    axios.post('https://tutor-hub-server.vercel.app/tutorReview', review)
      .then(res => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success("Review submitted successfully!");
          form.reset(); // Clear the form
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Failed to submit the review.");
      });
  };

  return (
    <div>
      <hr />
      <div className="lg:flex gap-11 mx-5 my-5 items-center">
        <div>
          <img 
            src="https://i.ibb.co.com/WnVWyKW/Background-9.png" 
            className="w-80 h-52 px-10 mx-16" 
            alt="Review Background" 
          />
          <h1 className="text-3xl font-bold uppercase">Hey, how was our service</h1>
        </div>
        <form onSubmit={handleForReviews} className="mt-6">
          <div>
            <label className="block">
              <textarea 
                rows="3" 
                name="message" 
                className="block w-full rounded-md focus:ring mt-3 border-[3px] focus:ring-opacity-75 h-48 p-3 dark:bg-gray-100" 
                placeholder="Review" 
                cols={100}>
              </textarea>
            </label>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-lg hover:border-2 bg-[#1D1D1D]"
            >
              Submit
            </button>
            <Toaster 
              position="top-center"
              reverseOrder={false}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TutorReview;

import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div 
        className="min-h-screen flex flex-col items-center justify-center relative bg-cover bg-center text-white px-5 md:px-20 py-10"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), 
                            url('https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
        }}
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to the <br />
            <span className="text-blue-400">Tutor Hub</span>
          </h1>
        </div>
      
        <div className="mt-8 text-xl md:text-3xl space-y-3 text-center">
          <p>Struggling with homework?</p>
          <p>Need someone to explain?</p>
          <p>Want to improve your grades?</p>
          <p>Need some help with GCSEs?</p>
          <p>Need help with revision?</p>
          <p>All Problems <span className="text-white p-1 rounded-md font-semibold bg-[#1D1D1D]">1 Solution</span></p>
        </div>
      
        <div className="flex flex-wrap justify-center gap-5 mt-10">
          <NavLink to="/tutorRegistration">
            <button className="bg-[#1D1D1D] text-white px-6 py-3 text-lg font-bold rounded-lg  transition">
              Tutor
            </button>
          </NavLink>
          <NavLink to="/studentRegistration">
            <button className="bg-[#1D1D1D] text-white px-6 py-3 text-lg font-bold rounded-lg  transition">
              Student
            </button>
          </NavLink>
        </div>
      </div>
      
    );
};

export default Banner;
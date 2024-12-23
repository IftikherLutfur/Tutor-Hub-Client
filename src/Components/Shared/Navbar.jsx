import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FiMenu, FiX } from "react-icons/fi";
import axios from "axios";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext); // Context for user and logout
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu
  const [isOpen, setIsOpen] = useState(false); // For user dropdown
  const [currentTutor, setCurrentTutor] = useState(null); // Current user's profile info
  const [currentStudent, setCurrentStudent] = useState(null)

  useEffect(()=>{
    if(user?.email){
      axios.get("http://localhost:5000/getStudent")
      .then(res=>{
        console.log(res.data);
        
        const matchedStudent = res.data.find((student)=>student?.email===user?.email);
        setCurrentStudent(matchedStudent)

      })
    }
  })

  useEffect(() => {
    // Fetch tutors and match the current user's email
    if (user?.email) {
      axios
        .get("http://localhost:5000/getTutor")
        .then((res) => {
          const matchedTutor = res.data.find(
            (tutor) => tutor?.email === user?.email
          );
          setCurrentTutor(matchedTutor);
        })
        .catch((error) => {
          console.error("Error fetching tutors:", error);
        });
    }
  }, [user?.email]);

  const handleLogout = () => {
    logOut();
  };

  return (
    <div className="fixed z-10 w-full h-16 bg-opacity-70 bg-black text-white">
      <div className="flex justify-between items-center px-5 py-3">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold">
            Tutor <span className="text-pink-600">Hub</span>
          </h1>
        </div>

        {/* Menu Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Links for Desktop */}
        <div className="hidden md:block">
          <ul className="flex gap-5 text-white">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/tutorFinds"}>Finds Tutor</NavLink>
            </li>
            <li>
              <NavLink to={"/aboutUs"}>About Us</NavLink>
            </li>
            <li>
              <NavLink to={"/contactUs"}>Contact Us</NavLink>
            </li>

            {user ? 
            (
              <li>
                <div
                  className="relative cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <img
                    className="w-12 h-12 rounded-full"
                    src={currentTutor?.image ||currentStudent?.image}
                    alt="Profile"
                  />
                  {isOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-20">
                      <div className="p-2">
                        <p className="text-black">{user.displayName}</p>
                        <button
                          onClick={handleLogout}
                          className="mt-2 block w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            ) : (
              <li>
                <NavLink to={"/login"}>Login</NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-opacity-70 bg-black text-center text-white">
          <ul className="flex flex-col gap-5 py-5">
            <li>
              <NavLink to={"/"} onClick={() => setIsMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/tutorFinds"} onClick={() => setIsMenuOpen(false)}>
                Finds Tutor
              </NavLink>
            </li>
            <li>
              <NavLink to={"/aboutUs"} onClick={() => setIsMenuOpen(false)}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contactUs"} onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </NavLink>
            </li>
            {user ? (
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <NavLink to={"/login"} onClick={() => setIsMenuOpen(false)}>
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

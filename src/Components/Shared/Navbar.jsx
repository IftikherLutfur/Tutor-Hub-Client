import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleForLogout = () => {
    logOut();
  };

  return (
    <div className="bg-opacity-10 bg-black text-white">
      <div className="flex justify-between items-center px-5 py-5">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold">
            Tutor <span className="text-pink-600">Hub</span>
          </h1>
        </div>

        {/* Menu Icon for Mobile */}
        <div className="md:hidden text-black">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Links for Desktop */}
        <div className="hidden md:block">
          <ul className="flex gap-5 text-black">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>About</li>
            <li>Contact Us</li>
            {user ? (
              <li>
                <button onClick={handleForLogout}>Logout</button>
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
        <div className="md:hidden bg-opacity-90 text-black">
          <ul className="flex flex-col items-center gap-5 py-5">
            <li>
              <NavLink to={"/"} onClick={() => setIsMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>About</li>
            <li onClick={() => setIsMenuOpen(false)}>Contact Us</li>
            {user ? (
              <li>
                <button onClick={() => { 
                  handleForLogout(); 
                  setIsMenuOpen(false); 
                }}>
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

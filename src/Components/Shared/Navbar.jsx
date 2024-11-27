import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleForLogout = () =>{
        logOut()
    }
    return (
        <div>
            <div className="flex justify-between px-5 bg-opacity-10 bg-black py-5">
                <div>
                    <h1 className="text-2xl font-bold">Tutor <span className="text-pink-600">Hub</span></h1>
                </div>
                <div>
                    <ul className="flex gap-5">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li>About</li>
                        <li>Contact Us</li>
                        {user?<li><button onClick={handleForLogout}>Logout</button></li>:""}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
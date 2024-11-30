import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const MainPage = () => {
    return (
        <div className="">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainPage;
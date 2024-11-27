import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const MainPage = () => {
    return (
        <div className="">
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainPage;
import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="bg-zinc-900 text-white px-20 py-20">
            <div className="flex items-center gap-20">
                <div>
                    <h1 className="text-6xl">
                        Welcome to the <br />
                        <span className="text-6xl">Tutor Hub</span>
                    </h1>
                </div>
                <div>
                    <ul className="text-3xl">
                        <li className="flex">struggling with  homework?</li>
                        <li className="flex">need someone to explain?</li>
                        <li className="flex">want to improve your grades?</li>
                        <li className="flex">need some help with GCSEs?</li>
                        <li className="flex">need help with revision ?</li>
                        <li>All Problem <span className="text-blue-500">1 Solution</span></li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center gap-96 my-10">
                <NavLink to={'/tutorRegistration'}><button className="bg-orange-600 text-white px-3 py-1 text-xl font-bold rounded-sm">Tutor</button></NavLink>
                <NavLink to={'/studentRegistration'}><button className="bg-orange-600 text-white px-3 py-1 text-xl font-bold rounded-sm">Student</button></NavLink>

            </div>
        </div>
    );
};

export default Banner;

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Course = () => {

    const [course, setCourse] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/getCourse')
            .then(res => {
                setCourse(res.data)
            })
    }, [])

    return (
        <div className="pt-20">

            <div className="text-center my-7">
                <NavLink to={"/coursePost"}>
                    <button className="text-2xl font-semibold bg-zinc-800 text-white p-2 rounded-lg uppercase">create a course post</button>
                </NavLink>
            
            </div>
            <div className="grid lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-1">

                {course.map(cours=>

                <div key={cours._id} className="flex gap-6 items-center mx-5 my-3 border-2">
                    <div>
                        <img className="w-[600px] h-[300px]" src={cours.image} alt="" />
                    </div>
                    <div>
                        <p>Course Name: {cours.courseName}</p>
                        <p>Duration: {cours.duration}</p>
                        <p>Amount: {cours.amout}</p>
                        <p>Prerequisites: {cours.prerequisites}</p>
                        <p>For Who: {cours.targetAudience}</p>
                        <button className="underline">
                            <NavLink to={`/getCourse/${cours._id}`}>
                            Details
                            </NavLink>
                            </button>
                    </div>
                </div>
                ) }

            </div>

        </div>
    );
};

export default Course;

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
                {course.length}
            </div>
            <div className="grid lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-1">

                {course.map(cours=>

                <div key={cours._id} className="flex gap-6 items-center mx-5 my-3 border-2">
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH7JTnADAGIlYk0x1VT8ZuUAN6oWTs_Rv7sQ&s" alt="" />
                    </div>
                    <div>
                        <p>Course Name: {cours.courseName}</p>
                        <p>Duration: {cours.duration}</p>
                        <p>Amount: {cours.amout}</p>
                        <p>Prerequisites: {cours.prerequisites}</p>
                        <p>For Who: {cours.targetAudience}</p>
                        <button className="underline">Details</button>
                    </div>
                </div>
                ) }

            </div>

        </div>
    );
};

export default Course;
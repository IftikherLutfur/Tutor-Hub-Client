import axios from "axios";
import { useEffect, useState } from "react";
import { FaUniversity } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FcDepartment } from "react-icons/fc";






const TutorDetails = () => {

    const [tutor, getTutor] = useState([])

    useEffect(()=>{
            axios.get("http://localhost:5000/getTutor")
            .then(res=>{
                console.log(res.data)
                 getTutor(res.data)
            })
    },[])

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {tutor.map(tutors=>
               <div key={tutors._id} className="border-2 m-2 p-2">
                <img className="w-[300px] h-[290px] px-4" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <h1 className="text-xl">{tutors.name}</h1>
                <p className="flex items-center gap-2 text-sm"><FaUniversity/>{tutors.study} 
                </p>
                <p className="text-sm flex items-center gap-2"><FcDepartment/> Department: {tutors.subject}</p>
                <p>Interested to teach: <span className=" font-semibold">{tutors.teachingSubject} </span>        
                </p>
                <p>Expected salary : BDT {tutors.salary}</p>
                <p className="flex items-center gap-2"><IoLocationSharp/>{tutors.location}</p>
                <p className="flex items-center gap-2"><MdEmail/>{tutors.email}</p>
                <p className="flex items-center gap-2"><IoIosCall/>{tutors.number}</p>

              </div>
            )}
        </div>
    );
};

export default TutorDetails;
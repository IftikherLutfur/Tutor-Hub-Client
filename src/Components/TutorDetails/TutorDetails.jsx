import axios from "axios";
import { useEffect, useState } from "react";
import { FaUniversity } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FcDepartment } from "react-icons/fc";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TutorDetails = () => {

    const [tutor, getTutor] = useState([])

    useEffect(() => {
        axios.get("https://tutor-hub-server.vercel.app/getTutor")
            .then(res => {
                console.log(res.data)
                getTutor(res.data)
            })
    }, [])

    return (
        <div className="px-5 pt-20">

            <div>
                <h1 className="text-3xl font-bold">Hire Tutors</h1>
                <p className="">Find and hire your preferred tutor.</p>
            </div>


            <div className="my-5">
            <Tabs>
    <TabList>
        <Tab>All</Tab>
        <Tab>Physics</Tab>
        <Tab>Chemistry</Tab>
        <Tab>Mathematics</Tab>
        <Tab>Biology</Tab>
        <Tab>English</Tab>
        <Tab>History</Tab>
        <Tab>Geography</Tab>
        <Tab>Economics</Tab>
        <Tab>Computer Science</Tab>
        <Tab>Environmental Science</Tab>
        <Tab>Political Science</Tab>
        <Tab>Philosophy</Tab>
        <Tab>Psychology</Tab>
        <Tab>Sociology</Tab>
        <Tab>Accounting</Tab>
        <Tab>Business Studies</Tab>
        <Tab>Marketing</Tab>
        <Tab>Statistics</Tab>
        <Tab>Fine Arts</Tab>
        <Tab>Music</Tab>
    </TabList>

    <TabPanel>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {tutor.filter(tutors => tutors.role === "tutor").map(tutors =>
                <div key={tutors._id} className="border-2 m-2 w-[400px]">
                    <div>
                        <img className="h-[290px] w-[400px] px-4" src={tutors.image} alt="" />
                        <h1 className="text-xl px-4">{tutors.name}</h1>
                        <p className="flex items-center gap-2 px-4 text-sm"><FaUniversity />{tutors.study}</p>
                        <p className="text-sm flex px-4 items-center gap-2"><FcDepartment /> Department: {tutors.subject}</p>
                        <p className="px-4">Interested to teach: <span className="font-semibold">{tutors.teachingSubject}</span></p>
                        <p className="px-4">Expected salary : BDT {tutors.salary}</p>
                        <p className="flex items-center px-4 gap-2"><IoLocationSharp />{tutors.location}</p>
                        <p className="flex items-center px-4 gap-2"><MdEmail />{tutors.email}</p>
                        <p className="flex items-center px-4 gap-2"><IoIosCall />{tutors.number}</p>
                    </div>
                </div>
            )}
        </div>
    </TabPanel>

    {[
        "Physics",
        "Chemistry",
        "Mathematics",
        "Biology",
        "English",
        "History",
        "Geography",
        "Economics",
        "Computer Science",
        "Environmental Science",
        "Political Science",
        "Philosophy",
        "Psychology",
        "Sociology",
        "Accounting",
        "Business Studies",
        "Marketing",
        "Statistics",
        "Fine Arts",
        "Music"
    ].map(subject => (
        <TabPanel key={subject}>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {tutor
                    .filter(tutors => tutors.role === "tutor" && tutors.teachingSubject === subject)
                    .map(tutors =>
                        <div key={tutors._id} className="border-2 m-2 w-[400px]">
                            <div>
                                <img className="h-[290px] w-[400px] px-4" src={tutors.image} alt="" />
                                <h1 className="text-xl px-4">{tutors.name}</h1>
                                <p className="flex items-center gap-2 px-4 text-sm"><FaUniversity />{tutors.study}</p>
                                <p className="text-sm flex px-4 items-center gap-2"><FcDepartment /> Department: {tutors.subject}</p>
                                <p className="px-4">Interested to teach: <span className="font-semibold">{tutors.teachingSubject}</span></p>
                                <p className="px-4">Expected salary : BDT {tutors.salary}</p>
                                <p className="flex items-center px-4 gap-2"><IoLocationSharp />{tutors.location}</p>
                                <p className="flex items-center px-4 gap-2"><MdEmail />{tutors.email}</p>
                                <p className="flex items-center px-4 gap-2"><IoIosCall />{tutors.number}</p>
                            </div>
                        </div>
                    )}
            </div>
        </TabPanel>
    ))}
</Tabs>


            </div>



            
        </div>
    );
};

export default TutorDetails;
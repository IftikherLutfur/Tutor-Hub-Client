import { useEffect, useState } from "react";
import axios from "axios";

const Stats = () => {
    const [students, setStudent] = useState([])
    const [tutors, setTutor] = useState([])
    const [course, setCourse] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/getStudent')
            .then(res => {
                setStudent(res.data)
            })
            .catch(error => {
                console.error(error, "Error")
            })
    }, [])
    useEffect(() => {
        axios.get('http://localhost:5000/getTutor')
            .then(res => {
                setTutor(res.data)
            })
            .catch(error => {
                console.error(error, "Error")
            })
    }, [])

    useEffect(() => {
        axios.get('http://localhost:5000/getCourse')
            .then(res=>{
                setCourse(res.data);
            })
            .catch(error => {
                console.error(error, "Error")
            })
    }, [])
    return (
        <div>
            <h1 className="text-4xl font-semibold text-center mt-4 mb-10 uppercase">Statics Board</h1>
            <div className="flex px-10 justify-between">
                <div className="bg-zinc-700 text-white py-3 px-20 text-center font-bold text-xl">
                    <h1>Ttutors</h1>
                    <p>{tutors.length}</p>
                </div>
                <div className="bg-zinc-700 text-white py-3 px-20 text-center font-bold text-xl">
                    <h1>Students</h1>
                    <p>{students.length}</p>
                </div>
                <div className="bg-zinc-700 text-white py-3 px-20 text-center font-bold text-xl">
                    <h1>Course</h1>
                    <p>{course.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;
import axios from "axios";
import { useEffect, useState } from "react";

const TutorCollection = () => {

    const [ tutor, setTutor] = useState([])
    useEffect(()=>{
 axios.get('http://localhost:5000/getTutor')
 .then(res=>{
    setTutor(res.data)
 })
    },[])
    return (
        <div className="text-black">
            <h1>Tutor Collection {tutor.length} </h1>
        </div>
    );
};

export default TutorCollection;
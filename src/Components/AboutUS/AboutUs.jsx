import axios from "axios";
import { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa6";




const AboutUs = () => {

    const [ourInfo, setOurInfo] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/aboutUs')
            .then(res => {
                setOurInfo(res.data)
                console.log(res.data);

            })
    }, [])

    return (
        <div className="pt-20">
            <h1 className="text-4xl text-center uppercase font-semibold">Our Team</h1>
            <p className="text-gray-700 text-center">
            This is our team, tirelessly working to ensure your service. We are dedicated and passionate about our work, which is why you receive such excellent services. </p>

            <div className="flex justify-center gap-20 my-5">
                {ourInfo.slice(0, 1).map(our => <div key={our._id} className="border-2 text-center px-5 py-4 bg-[#EEECFB] rounded-lg">
                    <img src={our.Image} className="h-40 w-40 rounded-full" alt="" />
                    <h1 className="font-bold">{our.Name}</h1>
                    <p className="font-semibold">{our.Role}</p>
                    <p className="flex justify-center gap-5 mt-2">
                        <FaFacebook className="text-blue-700 text-xl" />
                                           
                    </p>
                </div>)}
            </div>

            <div className="lg:flex justify-center gap-20 my-5">
                {ourInfo.slice(1, 4).map(our => <div key={our._id} className="border-2 text-center px-4 py-4 bg-[#EEECFB] rounded-lg">
                    <img src={our.Image} className="h-40 w-40 rounded-full" alt="" />
                    <h1 className="font-bold">{our.Name}</h1>
                    <p className="font-semibold">{our.Role}</p>
                    <p className="flex justify-center gap-5 mt-2">
                        <FaFacebook className="text-blue-700 text-xl" />
                        
                        
                    </p>
                </div>)}
            </div>
        </div>
    );
};

export default AboutUs;
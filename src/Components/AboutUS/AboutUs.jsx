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
            <div className="px-10">
                <h1 className="text-3xl font-bold uppercase">Our Mission</h1>
                <p className="font-semibold">The mission of the Tutor Hub team is to empower learners and educators by providing a seamless, accessible, and innovative platform for personalized education. Through advanced technology and dedicated support, we aim to:.</p>

                <ol className="contain-style">
                    <li><span className="font-bold text-black">#</span> Bridge the gap between students and skilled tutors worldwide.</li>
                    <li><span className="font-bold text-black">#</span> Foster a collaborative learning environment where knowledge is shared freely and effectively.</li>
                    <li><span className="font-bold text-black">#</span> Encourage growth and success by tailoring educational experiences to meet individual needs.</li>
                    <li><span className="font-bold text-black">#</span> Promote lifelong learning by making education flexible, engaging, and affordable for everyone.</li>
                    <li><span className="font-bold text-black">#</span> Leverage technology to provide tools and resources that enhance teaching and learning efficiency </li>
                </ol>
            </div>

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

            <div className="px-10">
                <h1 className="text-3xl font-bold uppercase1">Tutor Hub Vision 2025
                </h1>
                <p className="font-semibold">By 2025, Tutor Hub envisions becoming a leading global platform for personalized and accessible education, fostering an inclusive learning ecosystem where students and educators thrive together. Our vision includes:</p>
                <ul>
                    <li><h1 className="font-bold">1. Expanding Global Reach</h1>
                        <p># Connecting learners and tutors from diverse backgrounds across multiple countries.</p>
                        <p># Offering multilingual support to bridge language barriers in education.
                        </p>
                    </li>


                    <li>
                        <h1 className="font-bold">2. Enhancing Learning Experience</h1>
                        <p># Utilizing advanced AI-driven tools to personalize learning paths and recommendations.
                        </p>
                        <p># Providing engaging resources like live sessions, interactive courses, and gamified learning.
                        </p>
                    </li>

                    <li>
                        <h1 className="font-bold">3. Empowering Educators</h1>
                        <p># Equipping tutors with cutting-edge teaching tools and data-driven insights for effective mentorship.
                        </p>
                        <p># Creating a collaborative community for educators to share knowledge and best practices.
                        </p>
                    </li>
                    <li>
                        <h1 className="font-bold">4. Technological Innovation</h1>
                        <p># Leveraging AI, AR/VR, and machine learning to redefine online education.
                        </p>
                        <p># Building a seamless, secure, and scalable platform that sets industry standards.
                        </p>
                    </li>
                    <li>
                        <h1 className="font-bold">5. Affordable and Accessible Education</h1>
                        <p># Ensuring education remains affordable for all socioeconomic groups.

                        </p>
                        <p># Introducing scholarship programs and free resources for underprivileged learners.

                        </p>
                    </li>
                    <li>
                        <h1 className="font-bold">6. Sustainable Growth</h1>
                        <p># Establishing long-term partnerships with educational institutions and organizations.
                        </p>
                        <p># Investing in sustainable practices to create an eco-friendly and socially responsible platform.

                        </p>
                    </li>

                   

                </ul>
            </div>
        </div>
    );
};

export default AboutUs;
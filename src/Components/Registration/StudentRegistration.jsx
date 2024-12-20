import { useContext, useState } from "react";
import {toast, Toaster } from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const StudentRegistration = () => {

    const { signUp } = useContext(AuthContext)
    const [show, setShow] = useState(false)
    const [profilePhoto, setProfilePhoto] = useState(null);
    const navigate = useNavigate()

    const uploadImageToImgbb = async (imageFile) => {
        const formData = new FormData();
        formData.append("image", imageFile);
    
        try {
            const response = await axios.post(image_hosting, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            return response.data.data.display_url; // URL of the uploaded image
        } catch (error) {
            console.error("Image upload failed:", error);
            throw new Error("Failed to upload image. Please try again.");
        }
    };

    const handleForRegistration =async (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
        const study = form.study.value;
        const subject = form.subject.value;
        const location = form.location.value;
        const password = form.password.value;

        const profilePhotoUrl = await uploadImageToImgbb(profilePhoto);

        signUp(email, password)
            .then((res) => {
                console.log(res.user)
                const studentInfo = {
                    role: "student",
                    name: name,
                    image: profilePhotoUrl,
                    email: email,
                    number: number,
                    study: study,
                    subject: subject,
                    location: location,
                }

                axios.post('http://localhost:5000/studentInfo', studentInfo)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.insertedId) {
                            toast.success("Student account successfully registered")
                            navigate('/')

                        }

                    })

            })



    }

    return (
        <div
            className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
            style={{
                backgroundImage: `linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), 
                      url('https://i.pinimg.com/736x/cf/b5/eb/cfb5eb4b55b11a9d7c3f9206871e16c9.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",

            }}
        >
            <section className="mt-5 ">

                <div className="w-full max-w-4xl relative z-10 p-6 m-auto text-black rounded-lg shadow-md  pt-6">
                    <form className="w-full" onSubmit={handleForRegistration}>


                        <div className="flex items-center justify-center mt-6">


                            <a href="#" className="w-1/3 pb-4  text-center text-white text-2xl font-bold capitalize border-b-2 border-[#1D1D1D]  ">
                                sign up
                            </a>
                        </div>
                        <div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center gap-1">

                            {/* Full Name field */}
                            <div className="relative flex items-center mt-8">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </span>

                                <input type="text" name="name" className="block w-full py-3 text-black bg-white  rounded-lg px-11 " placeholder="Full Name" required />
                            </div>

                            {/* Image field */}
                            <div>
                                <label className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white rounded-lg text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                    </svg>

                                    <h2 className="mx-3 text-gray-400">Profile Photo</h2>

                                    
                                    <input id="dropzone-file" type="file" name="image"
                                        onChange={(e) => setProfilePhoto(e.target.files[0])}
                                        className="hidden" />
                                </label>
                            </div>

                            {/* Email field */}
                            <div className="relative flex items-center mt-6">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>

                                <input type="email" name="email" className="block w-full py-3  bg-white border rounded-lg px-11 text-black" required placeholder="Email address" />
                            </div>
                            {/* Phone Number Field */}
                            <div className="relative flex items-center mt-6">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>

                                <input type="number" name="number" className="block w-full py-3  bg-white border rounded-lg px-11 text-black" required placeholder="Number (WhatsApp)" />
                            </div>

                            {/* University */}
                            <div className="relative flex items-center mt-6">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>

                                <input type="text" name="study" className="block w-full py-3  bg-white border rounded-lg px-11 text-black" required placeholder="Your University/Collage" />
                            </div>
                            {/* Subject */}
                            <div className="relative flex items-center mt-6">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>

                                <input type="text" name="subject" className="block w-full py-3  bg-white border rounded-lg px-11 text-black" required placeholder="Subject/Department" />
                            </div>





                            {/* Location */}
                            <div className="relative flex items-center mt-6">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>

                                <input type="text" name="location" className="block w-full py-3  bg-white border rounded-lg px-11 text-black" required placeholder="Your Location ?" />
                            </div>




                            {/* Password */}
                            <div className="relative flex items-center mt-4">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </span>

                                <input type={!show ? "password" : "text"} name="password" className="block w-full px-10 py-3 text-black bg-white border rounded-lg " required placeholder="Password" />
                                <button onClick={() => setShow(!show)} className="absolute ml-[235px] text-black">eye</ button>
                            </div>


                            {/* Confirm Password */}
                            <div className="relative flex items-center mt-4">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </span>

                                <input type="password" name="conpass" className="block w-full px-10 py-3 text-black bg-white border rounded-lg " required placeholder="Confirm Password" />
                            </div>

                            <div className="relative flex items-center mt-4 text-white">
                                <h1 className="text-xl  font-semibold uppercase ">Complete the registration  <br /> & find your tutor</h1>
                            </div>

                        </div>

                        {/* Button for registration */}

                        <div className="mt-6">
                            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#1D1D1D]">
                                Sign Up
                            </button>
                            <Toaster />
                            {/* If you have an account then go to the login page */}
                            <div className="mt-6 text-center ">
                                <a href='/login' className="text-sm text-white hover:underline bg-[#1D1D1D] p-2 rounded-lg">
                                    Already have an account?
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default StudentRegistration;
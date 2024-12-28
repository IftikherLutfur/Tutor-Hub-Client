import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const TutorRegistration = () => {


    const [profilePhoto, setProfilePhoto] = useState(null);

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

    
        const { signUp, update } = useContext(AuthContext)
        const navigate = useNavigate()
        const [show, setShow] = useState(false)

    const { register, handleSubmit } = useForm({
        shouldUseNativeValidation: true
    })

    const onSubmit = async (data) =>{
        console.log(data);
        
        const profilePhotoUrl = await uploadImageToImgbb(profilePhoto);

        signUp(data.email, data.password)
            .then((result) => {
                update(data.name, data.image)
                console.log(result.user);
                const tutorInfo = {
                    role: "tutor",
                    name: data.name,
                    image: profilePhotoUrl,
                    email: data.email,
                    number: data.number,
                    study: data.study,
                    subject: data.subject,
                    teachingSubject: data.teachingSubject,
                    salary: data.salary,
                    location: data.location,
                    onlineOffline: data.onlineOffline
                }


                axios.post('http://localhost:5000/tutorInfo', tutorInfo)
                    .then(response => {
                        console.log(response.data);
                        if (response.data.insertedId) {
                            toast.success("Tutor account registration successful");
                            navigate('/')

                        }

                    })

            })
            .catch((error) => {
                console.error("Error signing in:", error.message);
            });

        }

    return (
        <div
            className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
            style={{
                backgroundImage: `linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), 
                      url('https://plus.unsplash.com/premium_photo-1664910790735-cde4270a0b42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                backgroundSize: "cover",
                backgroundPosition: "center",

            }}
        >
            <section className=" m-5 ">

                <div className="w-full max-w-4xl relative z-10 p-6 m-auto text-black rounded-lg shadow-md pt-6">
                    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>


                        <div className="flex items-center justify-center mt-6">


                            <a href="#" className="w-1/3 pb-4 font-medium text-center text-white capitalize border-b-2 border-[#1D1D1D]  ">
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

                                <input type="text" name="name" {...register ("name", {
                                    required:"Type your name"
                                })} className="block w-full py-3 text-black bg-white  rounded-lg px-11 " placeholder="Full Name" required />
                            </div>

                            {/* Image field */}
                            <div>
                                <label className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                    </svg>

                                    <h2 className="mx-3 text-gray-400">Profile Photo</h2>

                                    <input id="dropzone-file" type="file" name="image" {...register ("image", {
                                    required:"Upload your image"
                                })}
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

                                <input type="email" name="email" {...register ("email", {
                                    required:"Type your email"
                                })} className="block w-full py-3  bg-white border rounded-lg px-11 text-black" required placeholder="Email address" />
                            </div>
                            {/* Phone Number Field */}
                            <div className="relative flex items-center mt-6">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>

                                <input type="number" name="number" {...register ("number", {
                                    required:"Type your number"
                                })} className="block w-full py-3  bg-white border rounded-lg px-11 text-black" required placeholder="Number (WhatsApp)" />
                            </div>

                            {/* University */}
                            <div className="relative flex items-center mt-6">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>

                                <input type="text" name="study"  {...register("study",{
                                    required:"Type your university name"
                                })} className="block w-full py-3  bg-white border rounded-lg px-11 text-black" required placeholder="Your University/Collage" />
                            </div>
                            {/* Subject */}
                            <div className="relative flex items-center mt-6">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>

                                <input type="text" name="subject" {...register("subject",{
                                    required:"Type your department"
                                })} className="block w-full py-3  bg-white border rounded-lg px-11 text-black" required placeholder="Subject/Department" />
                            </div>

                            {/* Preferred Teaching Subject */}
                            <div className="relative flex items-center mt-6">
  <span className="absolute">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  </span>

  <select
    name="teachingSubject"
    {...register("teachingSubject", {
      required: "Select your teaching subject"
    })}
    className="block w-full py-3 bg-white border rounded-lg px-11 text-black"
  >
    <option value="" disabled selected>
      Select a subject
    </option>
    <option value="Physics">Physics</option>
<option value="Chemistry">Chemistry</option>
<option value="Mathematics">Mathematics</option>
<option value="Biology">Biology</option>
<option value="English">English</option>
<option value="History">History</option>
<option value="Geography">Geography</option>
<option value="Economics">Economics</option>
<option value="Computer Science">Computer Science</option>
<option value="Environmental Science">Environmental Science</option>
<option value="Political Science">Political Science</option>
<option value="Philosophy">Philosophy</option>
<option value="Psychology">Psychology</option>
<option value="Sociology">Sociology</option>
<option value="Accounting">Accounting</option>
<option value="Business Studies">Business Studies</option>
<option value="Marketing">Marketing</option>
<option value="Statistics">Statistics</option>
<option value="Fine Arts">Fine Arts</option>
<option value="Music">Music</option>
  </select>
</div>


                            {/* Salary */}
                            <div className="relative flex items-center mt-6">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>

                                <input type="text" name="salary"  {...register("salary",{
                                    required:"Type your expectation salary"
                                })} className="block w-full py-3  bg-white border rounded-lg px-11 text-black" required placeholder="Expected Salary(Monthly)" />
                            </div>

                            {/* Location */}
                            <div className="relative flex items-center mt-6">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>

                                <input type="text" name="location"  {...register("location",{
                                    required:"Type your location"
                                })} className="block w-full py-3  bg-white border rounded-lg px-11 text-black" required placeholder="Your Location ?" />
                            </div>

                            {/* Online/Offline*/}
                            <div className="relative flex items-center mt-6">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>

                                <input type="text" name="onlineOffline"  {...register("onlineOffline",{
                                    required:"Type online or offline?"
                                })} className="block w-full py-3  bg-white border rounded-lg px-11 text-black" required placeholder="Online/Offline" />
                            </div>


                            {/* Password */}
                            <div className="relative flex items-center mt-4">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </span>

                                <input type={!show ? "password" : "text"} name="password"  {...register("password",{
                                    required:"Type your password"
                                })} className="block w-full px-10 py-3 text-black bg-white border rounded-lg " required placeholder="Password" />
                                <button onClick={() => setShow(!show)} className="absolute ml-[235px] text-black">eye</ button>
                            </div>

                            {/* Confirm Password */}
                            <div className="relative flex items-center mt-4">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </span>

                                <input type="password" name="conpassword"  {...register("compassword",{
                                    required:"Type your compassword"
                                })} className="block w-full px-10 py-3 text-black bg-white border rounded-lg " required placeholder="Confirm Password" />
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
                                <a href='/login' className="text-sm text-white bg-[#1D1D1D] p-2 rounded-lg">
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

export default TutorRegistration;
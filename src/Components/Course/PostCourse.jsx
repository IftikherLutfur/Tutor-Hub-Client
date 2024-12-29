import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const PostCourse = () => {

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

	const { user } = useContext(AuthContext)
	console.log(user.email);

	const { register, handleSubmit, reset } = useForm({
		shouldUseNativeValidation: true
	})

	const onSubmit = async (data) => {
		console.log(data);
		const profilePhotoUrl = await uploadImageToImgbb(profilePhoto);

		const courseInfo = {
			courseName: data.courseName,
			image: profilePhotoUrl,
			email: data.email,
			number:data.number,
			description: data.description,
			duration: data.courseDuration,
			prerequisites: data.prefer,
			targetAudience: data.targetAudience,
			


		}


		try {
			const res = await axios.post('http://localhost:5000/coursePost', courseInfo)
			console.log(res.data);
			if (res.data.insertedId) {
				toast.success("Course upload has successful")
				reset();
			}
			else{
				console.error("Error")
			}
		} catch (error) {
			console.error("Course upload error", error)
		}


	}

	return (
		<div>
			  <ToastContainer/>
			<section className="max-w-4xl pt-20 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
				<h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Create a course post</h2>

				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

						{/* Course Name field */}
						<div>
							<label className="block text-sm font-medium" htmlFor="Course name">Course Name</label>

							<input type="text" name="courseName" {...register("courseName", {
								required: "Type your name"
							})} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
						</div>
						{/* Course Banner Field*/}
						<div>
							<fieldset className="w-full space-y-1 dark:text-gray-800">
								<label htmlFor="files" className="block text-sm font-medium">Attachments</label>
								<div className="flex">
									<input type="file" name="image" {...register("image", {
										required: "Please upload your course banner"
									})} onChange={(e) => setProfilePhoto(e.target.files[0])} className=" block w-full px-4 py-2 mt-2 text-gray-700 bg-white  border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring border-2 border-dashed " />
								</div>
							</fieldset>
						</div>
						{/* Course Duration Field */}
						<div>
							<label className="block text-sm font-medium" htmlFor="emailAddress">Course Duration</label>
							<input type="text" name="courseDuration" {...register("courseDuration", {
								required: "Please type your course duration"
							})} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
						</div>

						<div>
							<label className="block text-sm font-medium" htmlFor="password">Amount</label>
							<input type="text" name="amount" {...register("amount", {
								required: "Type your course amount"
							})} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
						</div>

						<div>
							<label className="block text-sm font-medium" htmlFor="passwordConfirmation">
								Prerequisites</label>
							<input type="text" name="prefer" {...register("prefer", {
								required: "Please mention who will perefer for this course"
							})} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
						</div>
						<div>
							<label className="block text-sm font-medium" htmlFor="passwordConfirmation">
								Target Audience</label>
							<input type="text" name="targetAudience" {...register("targetAudience", {
								required: "Type the target audience"
							})} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
						</div>
						<div>
							<label className="block text-sm font-medium" htmlFor="passwordConfirmation">
								Email</label>
							<input type="email" name="email" {...register("email", {
								required: "Type your course email"
							})} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
						</div>
						<div>
							<label className="block text-sm font-medium" htmlFor="passwordConfirmation">
								Number</label>
							<input type="number" name="number" {...register("number", {
								required: "Type your number where student get all the details about this course"
							})} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
						</div>

					</div>

					<div>
						<label className="block text-sm font-medium" htmlFor="passwordConfirmation">Course Description</label>
						<input type="text" name="description" {...register("description", {
							required: "Type your course description"
						})} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
					</div>
					<div className="flex justify-end mt-6">
						<button type="submit" className="px-8 py-2.5 leading-5 w-full text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Post</button>
					</div>


				</form>
			</section>

		</div>
	);
};

export default PostCourse;
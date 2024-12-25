import axios from "axios";
import { useEffect, useState } from "react";
import { TiDelete } from "react-icons/ti";

const TutorCollection = () => {

    const [tutors, setTutor] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/getTutor')
            .then(res => {
                setTutor(res.data)
            })
    }, [])

    const handleUpdate = async (tutor) => {
        const updatedData = { role: "admin" };
        console.log(tutor._id);
        try {
            const res = await axios.patch(`http://localhost:5000/tutorUpdate/${tutor._id}`, updatedData)
            if (res.data.modifiedCount) {
                console.log("Tutor Upadate successfully");
                setTutor((prevTutors) =>
                    prevTutors.map((t) => t._id === tutor._id ? { ...t, role: "admin" } : t)
                )

            }
            else {
                console.error("Update failed")
            }
        } catch (error) {
            console.error("Tutor update failed", error)
        }
    }

    const handleDelete = async (tutor) => {
        try {
            const res = await axios.delete(`http://localhost:5000/tutorDelete/${tutor._id}`);
            if (res.data.deletedCount > 0) {
                console.log("Successfully deleted");
                setTutor((prevTutor) =>
                    prevTutor.filter((t) => t._id !== tutor._id)
                );
            } else {
                console.log("Failed to delete: No matching document found.");
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                console.error("Tutor not found:", error.response.data.message);
            } else {
                console.error("Failed to delete tutor", error);
            }
        }
    };
        

    return (
        <div className="text-black">
            <h1>Tutor Collection {tutors.length} </h1>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Student Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone Number
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Role
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tutors.map(tutor =>

                            <tr key={tutor._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {tutor.name}
                                </th>
                                <td className="px-6 py-4">
                                    {tutor.email}
                                </td>
                                <td className="px-6 py-4">
                                    {tutor.number}
                                </td>


                                <td className="px-6 py-4">
                                    <button onClick={() => handleUpdate(tutor)} className="text-white bg-zinc-800 p-1 rounded">{tutor.role}</button>
                                </td>
                                <td className="px-6 py-4 text-2xl text-red-700">
                                    <button onClick={() => handleDelete(tutor)}><TiDelete /></button>
                                </td>
                            </tr>

                        )


                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TutorCollection;
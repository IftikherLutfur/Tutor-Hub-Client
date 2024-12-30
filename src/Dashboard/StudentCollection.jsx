import axios from "axios";
import { useEffect, useState } from "react";
import { TiDelete } from "react-icons/ti";


const StudentCollection = () => {
    const [students, setStudent] = useState([])
    useEffect(() => {
        axios.get('https://tutor-hub-server.vercel.app/getStudent')
            .then(res => {
                setStudent(res.data)
            })
    }, [])

    const handleUpdate = async (student) => {
        const updatedData = { role: "admin" }; // Get the updated role

        try {
            const res = await axios.patch(
                `https://tutor-hub-server.vercel.app/studentUpdate/${student._id}`,
                updatedData
            );

            if (res.data.modifiedCount) {
                console.log("Successfully updated the role.");
                // Update the state with the new    role
                setStudent((prevStudents) =>
                    prevStudents.map((s) =>
                        s._id === student._id ? { ...s, role: "admin" } : s
                    )
                );
            } else {
                console.log("No modifications were made.");
            }
        } catch (error) {
            console.error("Error updating student:", error);
        }
    };

    const handleDelete = async (student) => {
        console.log("Attempting to delete student with ID:", student._id);
        try {
            const res = await axios.delete(`https://tutor-hub-server.vercel.app/studentDelete/${student._id}`);
            if (res.data.deletedCount > 0) {
                console.log("Deleted successfully");
                // Update the UI to reflect the deletion
                setStudent((prevStudents) =>
                    prevStudents.filter((s) => s._id !== student._id)
                );
            } else {
                console.log("Error: No student deleted");
            }
        } catch (error) {
            console.error("Error deleting student:", error);
        }
    };


    return (
        <div>
            Student Collection
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
                        {students.filter(student => student.role === "student").map(student =>

                            <tr key={student._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {student.name}
                                </th>
                                <td className="px-6 py-4">
                                    {student.email}
                                </td>
                                <td className="px-6 py-4">
                                    {student.number}
                                </td>


                                <td className="px-6 py-4">
                                    <button onClick={() => handleUpdate(student)} className="text-white bg-zinc-800 p-1 rounded">{student.role}</button>
                                </td>
                                <td className="px-6 py-4 text-2xl text-red-700">
                                    <button onClick={() => handleDelete(student)}><TiDelete /></button>
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

export default StudentCollection;
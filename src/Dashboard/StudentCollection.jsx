import axios from "axios";
import { useEffect, useState } from "react";

const StudentCollection = () => {
    const [students, setStudent] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/getStudent')
            .then(res => {
                setStudent(res.data)
            })
    }, [])

    const handleUpdate = async (student) => {
        const updatedData = { role: "admin" }; // Get the updated role
    
        try {
            const res = await axios.patch(
                `http://localhost:5000/studentUpdate/${student._id}`,
                updatedData
            );
    
            if (res.data.modifiedCount) {
                console.log("Successfully updated the role.");
                // Update the state with the new role
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
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student =>

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
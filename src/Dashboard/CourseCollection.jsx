
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CourseCollection = () => {
  const [course, setCourse] = useState([]);

  // Fetch the courses from the database
  useEffect(() => {
    axios
      .get("http://localhost:5000/getCourse")
      .then((res) => {
        setCourse(res.data);
      })
      .catch((err) => {
        console.error("Data loading error:", err);
      });
  }, []);

  // Handle the accept operation
  const handleAccept = (student) => {
    axios
      .patch(`http://localhost:5000/updateCourse/${student._id}`, { status: "Accepted" })
      .then((res) => {
        console.log("Course status updated:", res.data);

        // Update the status locally
        setCourse((prevCourses) =>
          prevCourses.map((item) =>
            item._id === student._id ? { ...item, status: "Accepted" } : item
          )
        );
      })
      .catch((err) => {
        console.error("Error updating course status:", err);
      });
  };

  // Handle the delete operation
  const handleDelete = (student) => {
    axios
      .delete(`http://localhost:5000/deleteCourse/${student._id}`)
      .then((res) => {
        console.log("Course deleted:", res.data);

        // Remove the deleted course from the state
        setCourse((prevCourses) =>
          prevCourses.filter((item) => item._id !== student._id)
        );
      })
      .catch((err) => {
        console.error("Error deleting course:", err);
      });
  };

  return (
    <div>
      <h1 className="text-lg font-bold mb-4">Course Collection</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Course Name</th>
              <th scope="col" className="px-6 py-3">Course Email</th>
              <th scope="col" className="px-6 py-3">Phone Number</th>
              <th scope="col" className="px-6 py-3">Details</th>
              <th scope="col" className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {course.map((student) => (
              <tr
                key={student._id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {student.courseName}
                </th>
                <td className="px-6 py-4">{student.email}</td>
                <td className="px-6 py-4">{student.number}</td>
                <td className="px-6 py-4 text-red-700">
                    <NavLink to={`/getCourse/${student._id}`}>
                                                Details
                                                </NavLink>
                </td>
                <td className="px-6 py-4">
                  <select
                    value={student.status}
                    onChange={(e) => {
                      if (e.target.value === "Accepted") handleAccept(student);
                      if (e.target.value === "Deleted") handleDelete(student);
                    }}
                    className="bg-gray-800 text-white p-1 rounded"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Accepted">Accepted</option>
                    <option value="Deleted">Deleted</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseCollection;


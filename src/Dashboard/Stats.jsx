import { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the necessary chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

const Stats = () => {
  const [students, setStudent] = useState([]);
  const [tutors, setTutor] = useState([]);
  const [course, setCourse] = useState([]);
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    axios
      .get('https://tutor-hub-server.vercel.app/getStudent')
      .then((res) => {
        setStudent(res.data);
      })
      .catch((error) => {
        console.error(error, "Error");
      });
  }, []);

  useEffect(() => {
    axios
      .get('https://tutor-hub-server.vercel.app/getTutor')
      .then((res) => {
        setTutor(res.data);
      })
      .catch((error) => {
        console.error(error, "Error");
      });
  }, []);

  useEffect(() => {
    axios
      .get('https://tutor-hub-server.vercel.app/getCourse')
      .then((res) => {
        setCourse(res.data);
      })
      .catch((error) => {
        console.error(error, "Error");
      });
  }, []);

  useEffect(()=>{
     axios.get('http://localhost:5000/getBlogs')
         .then(res=>{
            setBlogs(res.data)
         })
  },[])

  // Prepare the data for the pie chart
  const pieData = {
    labels: ['Tutors', 'Students', 'Courses', 'Blogs'],
    datasets: [
      {
        data: [tutors.length, students.length, course.length, blogs.length],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 206, 86, 1)',
          'rgba(74, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h1 className="text-4xl font-semibold text-center mt-4 mb-10 uppercase">Stats Board</h1>
      <div className="flex  gap-10 justify-between">
        <div className="bg-zinc-700 text-white py-3 px-16 text-center font-bold text-xl">
          <h1>Tutors</h1>
          <p>{tutors.length}</p>
        </div>
        <div className="bg-zinc-700 text-white py-3 px-16 text-center font-bold text-xl">
          <h1>Students</h1>
          <p>{students.length}</p>
        </div>
        <div className="bg-zinc-700 text-white py-3 px-16 text-center font-bold text-xl">
          <h1>Courses</h1>
          <p>{course.length}</p>
        </div>
        <div className="bg-zinc-700 text-white py-3 px-16 text-center font-bold text-xl">
          <h1>Courses</h1>
          <p>{blogs.length}</p>
        </div>
      </div>

      {/* Pie chart displaying the stats */}
      <div className="flex justify-center h-80 mt-10">
  <Pie data={pieData} width={150} height={150} />
</div>

    </div>
  );
};

export default Stats;

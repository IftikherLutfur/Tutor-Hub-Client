import { createBrowserRouter } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import Home from "./Components/Home/Home";
import TutorRegistration from "./Components/Registration/TutorRegistration";
import StudentRegistration from "./Components/Registration/StudentRegistration";
import SignIn from "./Components/SignIn/SignIn";
import TutorDetails from "./Components/TutorDetails/TutorDetails";
import PrivateRoute from "./Components/AuthProvider/PrivateRoute/PrivateRoute";
import AboutUs from "./Components/AboutUS/AboutUs";
import TutorReview from "./Components/TutorReview/TutorReview";
import ContactUs from "./Components/ContactUs/ContactUs";
import Dashboard from "./Dashboard/Dashboard";
import TutorCollection from "./Dashboard/TutorCollection";
import StudentCollection from "./Dashboard/StudentCollection";
import Stats from "./Dashboard/Stats";
import Course from "./Components/Course/Course";
import PostCourse from "./Components/Course/PostCourse";
import CourseDetails from "./Components/Course/CourseDetails";
import CourseCollection from "./Dashboard/CourseCollection";
import BlogCollection from "./Dashboard/BlogCollection/BlogCollection";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/tutorRegistration',
          element:<TutorRegistration/>
        },
        {
          path:'/studentRegistration',
          element:<StudentRegistration/>
        },
        {
          path:'/login',
          element:<SignIn/>
          },
          {
            path:'/aboutUs',
            element:<AboutUs/>
          },
          {
            path:'/tutorFinds',
            element:<PrivateRoute><TutorDetails/></PrivateRoute>
          },
          {
            path:'/tutorReview',
            element:<PrivateRoute><TutorReview/></PrivateRoute>
          },
          {
            path:'/contactUs',
            element:<ContactUs/>
          },
          {
            path:'/course',
            element:<PrivateRoute><Course/></PrivateRoute>
          },
         { path:"/coursePost",
          element:<PostCourse/>          
         },
         {
          path:'/getCourse/:id',
          element:<CourseDetails/>,
          loader:({params})=>fetch(`https://tutor-hub-server.vercel.app/getCourse/${params.id}`)          
         }
      ],
      
    },
    {
      path:'Dashboard',
      element:<Dashboard/>,
      children:[
        {
          path:"tutorCollection",
          element:<TutorCollection/>
        },
        {
          path:'studentCollection',
          element:<StudentCollection/>
        },
        {
         path:'courseCollection',
         element:<CourseCollection/>
        },
        {
          path:'stats',
          element:<Stats/>
        },
        {
          path:'blogCollection',
          element:<BlogCollection/>
        }
      ]
    },

  ]);
  export default router;
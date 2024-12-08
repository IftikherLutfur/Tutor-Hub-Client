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
          }
      ]
    },
  ]);
  export default router;
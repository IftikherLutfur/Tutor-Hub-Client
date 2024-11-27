import { createBrowserRouter } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import Home from "./Components/Home/Home";
import TutorRegistration from "./Components/Registration/TutorRegistration";
import StudentRegistration from "./Components/Registration/StudentRegistration";
import SignIn from "./Components/SignIn/SignIn";


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
          }
      ]
    },
  ]);
  export default router;
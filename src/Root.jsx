import { createBrowserRouter } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import Home from "./Components/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage/>,
      children:[
        {
          path:'/',
          element:<Home/>
        }
      ]
    },
  ]);
  export default router;
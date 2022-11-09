import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllServices from "../../Pages/AllServices/AllServices";
import DetailsService from "../../Pages/DetailsService/DetailsService";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Reviews from "../../Pages/Reviews/Reviews";
import SignUp from "../../Pages/SignUp/SignUp";

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/allservices',
          element: <AllServices></AllServices>
        },
        {
          path: '/detailsservice/:id',
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
          element: <DetailsService></DetailsService>
        },
        {
          path: '/reviews',
          element: <Reviews></Reviews>
        }
      ]
    }
  ]);

  export default router;
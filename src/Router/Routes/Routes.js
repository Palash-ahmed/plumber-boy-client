import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllServices from "../../Pages/AllServices/AllServices";
import Blog from "../../Pages/Blog/Blog";
import DetailsService from "../../Pages/DetailsService/DetailsService";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Reviews from "../../Pages/Reviews/Reviews";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
          loader: ({params}) => fetch(`https://plumber-boy-server.vercel.app/services/${params.id}`),
          element: <PrivateRoute><DetailsService></DetailsService></PrivateRoute>
        },
        {
          path: '/reviews',
          element: <PrivateRoute><Reviews></Reviews></PrivateRoute>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    }
  ]);

  export default router;
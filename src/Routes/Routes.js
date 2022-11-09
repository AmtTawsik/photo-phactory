import { createBrowserRouter } from "react-router-dom";
import AddService from "../components/AddService";
import Blogs from "../components/Blogs";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Login from "../components/Login";
import MyReviews from "../components/MyReviews";
import Register from "../components/Register";
import ServiceDetails from "../components/ServiceDetails";
import Services from "../components/Services";
import Updates from "../components/Updates";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/home',
                element:<Home></Home>,
            },
            {
                path:'/register',
                element:<Register></Register>,
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/addservice',
                element:<PrivateRoute><AddService></AddService></PrivateRoute>,
            },
            {
                path:'/myreviews',
                element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
            },
            {
                path:'/services',
                element:<Services></Services>,
                loader:()=>fetch('https://photo-phactory-server.vercel.app/services'),
            },
            {
                path:'/services/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader:({params})=>fetch(`https://photo-phactory-server.vercel.app/services/${params.id}`)
            },
            {
                path:'/blog',
                element:<Blogs></Blogs>,
            },
            {
                path:'/updates/:id',
                element:<Updates></Updates>,
                loader:({params}) => fetch(`https://photo-phactory-server.vercel.app/reviews/${params.id}`)
            },
        ]
    }
])
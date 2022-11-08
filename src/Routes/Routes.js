import { createBrowserRouter } from "react-router-dom";
import AddService from "../components/AddService";
import Blogs from "../components/Blogs";
import Home from "../components/Home";
import Login from "../components/Login";
import MyReviews from "../components/MyReviews";
import Register from "../components/Register";
import Services from "../components/Services";
import Main from "../layout/Main";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
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
                element:<AddService></AddService>,
            },
            {
                path:'/myreviews',
                element:<MyReviews></MyReviews>,
            },
            {
                path:'/services',
                element:<Services></Services>,
            },
            {
                path:'/blog',
                element:<Blogs></Blogs>,
            },
        ]
    }
])
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
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
            }
        ]
    }
])
import React from 'react';
import { createBrowserRouter } from 'react-router';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AuthLayout from '../Layouts/AuthLayout';
import HomeLayout from '../Layouts/HomeLayout';
import MyProfile from '../Pages/MyProfile';
import UpdateProfile from '../Pages/updateProfile';
import AddMovies from '../Pages/AddMovies';
import UpdateMovie from '../Pages/UpdateMovie';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        loader: () => fetch("http://localhost:5000/movies")
    },
    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/register",
                element: <Register></Register>
            },
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/profile",
                element: <MyProfile></MyProfile>
            },
            {
                path: "/auth/update",
                element: <UpdateProfile></UpdateProfile>
            },
        ]
    },
    {
        path: "addmovie",
        element: <AddMovies></AddMovies>
    },
    {
        path: "updatemovie/:id",
        element: <UpdateMovie></UpdateMovie>,
        loader: ({params}) => fetch(`http://localhost:5000/movies/${params.id}`)
    },
])

export default router;
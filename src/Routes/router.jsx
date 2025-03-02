import React from 'react';
import { createBrowserRouter } from 'react-router';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AuthLayout from '../Layouts/AuthLayout';
import HomeLayout from '../Layouts/HomeLayout';
import MyProfile from '../Pages/MyProfile';
import UpdateProfile from '../Pages/updateProfile';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>
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
    }
])

export default router;
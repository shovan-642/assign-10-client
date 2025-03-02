import React from 'react';
import { createBrowserRouter } from 'react-router';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AuthLayout from '../Layouts/AuthLayout';
import HomeLayout from '../Layouts/HomeLayout';

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
            }
        ]
    }
])

export default router;
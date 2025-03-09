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
import Home from '../Pages/Home';
import AllMovies from '../Pages/AllMovies';
import MovieDetails from '../Pages/MovieDetails';
import MyFavourtieMovie from '../Pages/MyFavourtieMovie';
import PrivateRouter from './PrivateRouter';
import Errorpage from '../Pages/Errorpage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("https://assign-10-server-phi.vercel.app/top-rated-movie"),

            },
            {
                path: "/allmovies",
                element: <AllMovies></AllMovies>,
                loader: () => fetch("https://assign-10-server-phi.vercel.app/movies")
            },
            {
                path: "/addmovie",
                element: <PrivateRouter><AddMovies></AddMovies></PrivateRouter>
            },
            {
                path: "/updatemovie/:id",
                element: <UpdateMovie></UpdateMovie>,
                loader: ({params}) => fetch(`https://assign-10-server-phi.vercel.app/movies/${params.id}`)
            },
            {
                path: "/movieDetails/:id",
                element: <PrivateRouter><MovieDetails></MovieDetails></PrivateRouter>, 
                loader: ({params}) => fetch(`https://assign-10-server-phi.vercel.app/movies/${params.id}`),
            },
            {
                path: "/myFavoriteMovies",
                element: <PrivateRouter><MyFavourtieMovie></MyFavourtieMovie></PrivateRouter>,
                loader: ()=>fetch("https://assign-10-server-phi.vercel.app/favoriteMovies")
            }

        ]
        
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
                element: <PrivateRouter><MyProfile></MyProfile></PrivateRouter>
            },
            {
                path: "/auth/update",
                element: <PrivateRouter><UpdateProfile></UpdateProfile></PrivateRouter>
            },
        ]
    },
    {
        path: "*",
        element: <Errorpage></Errorpage>
    }

])

export default router;
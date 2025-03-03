import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import FeaturedMovies from '../component/FeaturedMovies';
import { useLoaderData } from 'react-router';


const HomeLayout = () => {

    const movieData = useLoaderData()

    const [movie, setMovie]=useState(movieData)

    return (
        <div>
            <Navbar></Navbar>
            <FeaturedMovies movieData={movieData}></FeaturedMovies>
            
        </div>
    );
};

export default HomeLayout;
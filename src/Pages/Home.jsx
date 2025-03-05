import React from 'react';
import { useLoaderData } from 'react-router';
import FeaturedMovies from '../component/FeaturedMovies';

const Home = () => {

    const movieData = useLoaderData()

    return (
        <div>
            <FeaturedMovies movieData={movieData}></FeaturedMovies>
        </div>
    );
};

export default Home;
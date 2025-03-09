import React from 'react';
import { useLoaderData } from 'react-router';
import FeaturedMovies from '../component/FeaturedMovies';
import News from '../component/News';
import JoinNow from '../component/JoinNow';

const Home = () => {

    const movieData = useLoaderData()

    return (
        <div>
            <FeaturedMovies movieData={movieData}></FeaturedMovies>
            <JoinNow></JoinNow>
            <News></News>
        </div>
    );
};

export default Home;
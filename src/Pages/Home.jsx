import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import FeaturedMovies from '../component/FeaturedMovies';
import News from '../component/News';
import JoinNow from '../component/JoinNow';
import { AuthContext } from '../Provider/AuthProvider';
import Loader from './Loader';
import Banner from '../component/Banner';

const Home = () => {

    const{loading} = useContext(AuthContext)
    
    const [movieData, setMovieData]=useState(null)
    const data = useLoaderData()

    useEffect(()=>{
        if(data){
            setMovieData(data)
        }
    },[data])

    if(loading || !movieData){
        return <Loader></Loader>
    }


    return (
        <div>
            <Banner></Banner>
            <FeaturedMovies movieData={movieData}></FeaturedMovies>
            <JoinNow></JoinNow>
            <News></News>
        </div>
    );
};

export default Home;
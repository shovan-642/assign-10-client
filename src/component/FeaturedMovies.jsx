import React, { useState } from 'react';
import FeaturedCard from './FeaturedCard';
import { Link } from 'react-router';


const FeaturedMovies = ({movieData}) => {


    return (
        <div className='w-9/12 mx-auto my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {movieData.map((singleMovie,idx) => <FeaturedCard key={idx} singleMovie={singleMovie} ></FeaturedCard>)}
                
            </div>
            <div className='text-center py-5'><Link to={"/allmovies"} className='btn btn-ghost bg-red-600 text-white' >See All Movies</Link></div>
        </div>
    );
};

export default FeaturedMovies;
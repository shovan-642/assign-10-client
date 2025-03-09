import React, { useState } from 'react';
import FeaturedCard from './FeaturedCard';


const FeaturedMovies = ({movieData}) => {


    return (
        <div className='w-9/12 mx-auto my-10'>
            <div className='grid grid-cols-3 gap-3'>
                {movieData.map((singleMovie,idx) => <FeaturedCard key={idx} singleMovie={singleMovie} ></FeaturedCard>)}
            </div>
        </div>
    );
};

export default FeaturedMovies;
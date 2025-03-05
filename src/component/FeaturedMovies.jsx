import React, { useState } from 'react';
import FeaturedCard from './FeaturedCard';


const FeaturedMovies = ({movieData}) => {


    return (
        <div>
            <div>
                {movieData.map((singleMovie,idx) => <FeaturedCard key={idx} singleMovie={singleMovie} ></FeaturedCard>)}
            </div>
        </div>
    );
};

export default FeaturedMovies;
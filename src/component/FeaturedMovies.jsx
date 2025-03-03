import React, { useState } from 'react';
import FeaturedCard from './FeaturedCard';


const FeaturedMovies = ({movieData}) => {

    
    const [movie, setMovie]=useState(movieData)


    return (
        <div>
            <div>
                {movie.map((singleMovie,idx) => <FeaturedCard key={idx} singleMovie={singleMovie} movie={movie} setMovie={setMovie}></FeaturedCard>)}
            </div>
        </div>
    );
};

export default FeaturedMovies;
import React from 'react';
import { Link } from 'react-router';

const FeaturedCard = ({singleMovie}) => {

    const {_id, movie_poster, movie_title, genre, duration, release_year, rating} = singleMovie


    return (
        <div>
            <img className='w-50 h-50' src={movie_poster} alt="" />
            <p>{movie_title}</p>
            <p>rating: {rating}</p>
            <div>
                


               <Link to={`/movieDetails/${_id}`}><button className="btn btn-primary">View details</button></Link>

            </div>
        </div>
    );
};

export default FeaturedCard;
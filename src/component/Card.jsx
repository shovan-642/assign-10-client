import React from 'react';
import { Link } from 'react-router';

const Card = ({singleMovie}) => {

    const {_id ,movie_poster, movie_title, genre, duration, release_year, rating, summary, user_email}  = singleMovie
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
    className='h-80 w-50'
      src={movie_poster}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{movie_title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <Link to={`/movieDetails/${_id}`}><button className="btn btn-primary">View details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;
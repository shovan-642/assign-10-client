import React from "react";
import { Link } from "react-router";

const FeaturedCard = ({ singleMovie }) => {
  const {
    _id,
    movie_poster,
    movie_title,
    genre,
    duration,
    release_year,
    rating,
  } = singleMovie;

  return (
    <div>
      <div className="card bg-base-100 shadow-sm rounded-2xl">
        <figure>
          <img
            className="h-70 w-70 rounded-2xl py-3"
            src={movie_poster}
            alt="movie poster"
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title text-2xl uppercase">{movie_title}</h2>
          <h3 className="text-gray-500 text-base">Genre: {genre[0]}</h3>
          <h3 className="text-gray-500 text-base">Duration: {duration} min</h3>
          <h3 className="text-gray-500 text-base">Release: {release_year}</h3>
          <h3 className="text-gray-500 text-base">Rating: {rating} </h3>
          <div className="card-actions justify-end">
            <Link to={`/movieDetails/${_id}`}>
              <button className="btn btn-primary bg-red-600 border-0">
                View details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;

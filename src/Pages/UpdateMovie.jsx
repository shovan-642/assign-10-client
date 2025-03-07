import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateMovie = () => {

    const movie = useLoaderData()
      console.log(movie)

     const {_id, movie_poster, movie_title, genre, duration, release_year, rating, summary} = movie

    const handleUpdateMovie = e =>{
        e.preventDefault()
        const form = e.target
        const movie_poster = form.movie_poster.value
        const movie_title = form.movie_title.value
        const genre = [form.genre.value]
        const duration = form.duration.value
        const release_year = form.release_year.value
        const rating = form.rating.value
        const summary = form.summary.value
    
        const updatedMovieData = {movie_poster, movie_title, genre, duration, release_year, rating, summary}

           fetch(`http://localhost:5000/movies/${_id}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedMovieData)
        
            })
            .then (res=>res.json())
            .then (data=>{
                console.log(data)
                if(data.modifiedCount>0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Movie Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })


    }

    
    return (
        <div>
            <form onSubmit={handleUpdateMovie}>
        <div>
          <label className="">Movie Poster</label>
          <input
            name="movie_poster"
            defaultValue={movie_poster}
            type="text"
            placeholder="neutral"
            className="input input-neutral"
          />
        </div>
        <div>
          <label className="">Movie Title</label>
          <input
            name="movie_title"
            defaultValue={movie_title}
            type="text"
            placeholder="neutral"
            className="input input-neutral"
          />
        </div>
        <div>
          <label className="">Genre</label>
          <select defaultValue="genre[0]" name="genre" className="select">
            <option disabled={true}>Pick a Genre</option>
            <option>Animation</option>
            <option>Action</option>
            <option>Science Fiction</option>
            <option>Fantasy</option>
            <option>Superhero</option>
            <option>Horror</option>
            <option>Comedy</option>
          </select>
        </div>
        <div>
          <label className="">Duration</label>
          <input
            name="duration"
            defaultValue={duration}
            type="text"
            placeholder="neutral"
            className="input input-neutral"
          />
        </div>
        <div>
          <label className="">Release Year</label>
          <input
            name="release_year"
            defaultValue={release_year}
            type="text"
            placeholder="neutral"
            className="input input-neutral"
          />
        </div>
        <div>
          <label className="">Rating</label>
          <input
            name="rating"
            defaultValue={rating}
            type="text"
            placeholder="neutral"
            className="input input-neutral"
          />
        </div>
        <div>
          <label className="">Summary</label>
          <input
            name="summary"
            defaultValue={summary}
            type="text"
            placeholder="neutral"
            className="input input-neutral"
          />
        </div>
        <button className="btn btn-ghost">Update Movie</button>
      </form>
            
        </div>
    );
};

export default UpdateMovie;
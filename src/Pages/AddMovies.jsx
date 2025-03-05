import React, { useContext } from "react";
import Swal from 'sweetalert2'
import { AuthContext } from "../Provider/AuthProvider";

const AddMovies = () => {

  
  const {user} = useContext(AuthContext)
  const user_email = user?.email

 const handleAddMovie =e=>{
    e.preventDefault()
    const form = e.target
    const movie_poster = form.movie_poster.value
    const movie_title = form.movie_title.value
    const genre = form.genre.value
    const duration = form.duration.value
    const release_year = form.release_year.value
    const rating = form.rating.value
    const summary = form.summary.value

    const movieData = {movie_poster, movie_title, genre, duration, release_year, rating, summary, user_email}
    console.log(movieData)

    fetch('http://localhost:5000/movies', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(movieData)

    })
    .then (res=>res.json())
    .then (data=>{
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Movie added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
              form.reset()
        }
        
    })

 }

  return (
    <div>
      <form onSubmit={handleAddMovie}>
        <div>
          <label className="">Movie Poster</label>
          <input
            name="movie_poster"
            type="text"
            placeholder="neutral"
            className="input input-neutral"
          />
        </div>
        <div>
          <label className="">Movie Title</label>
          <input
            name="movie_title"
            type="text"
            placeholder="neutral"
            className="input input-neutral"
          />
        </div>
        <div>
          <label className="">Genre</label>
          <input
            name="genre"
            type="text"
            placeholder="neutral"
            className="input input-neutral"
          />
        </div>
        <div>
          <label className="">Duration</label>
          <input
            name="duration"
            type="text"
            placeholder="neutral"
            className="input input-neutral"
          />
        </div>
        <div>
          <label className="">Release Year</label>
          <input
            name="release_year"
            type="text"
            placeholder="neutral"
            className="input input-neutral"
          />
        </div>
        <div>
          <label className="">Rating</label>
          <input
            name="rating"
            type="text"
            placeholder="neutral"
            className="input input-neutral"
          />
        </div>
        <div>
          <label className="">Summary</label>
          <input
            name="summary"
            type="text"
            placeholder="neutral"
            className="input input-neutral"
          />
        </div>
        <button className="btn btn-ghost">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovies;
